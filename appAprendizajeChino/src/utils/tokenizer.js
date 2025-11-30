// src/utils/tokenizer.js
// Utilitarios de pinyin/tonos + función applyToneSandhi avanzada.
// El tokenizador (trie) debe importar applyToneSandhi desde aquí.
//
// Exporta:
//  - detectTone(syllable) -> número 0..4
//  - removeToneMarks(syllable) -> string sin marcas diacríticas
//  - pinyinSyllableToNumbered(syllable) -> "ni3"
//  - applyToneSandhi(tokens) -> tokens con adjustedTones + adjustedPinyin

// Mapa para detectar tono por carácter diacrítico
const toneMap = {
  "ā":1,"ē":1,"ī":1,"ō":1,"ū":1,"ǖ":1,
  "á":2,"é":2,"í":2,"ó":2,"ú":2,"ǘ":2,
  "ǎ":3,"ě":3,"ǐ":3,"ǒ":3,"ǔ":3,"ǚ":3,
  "à":4,"è":4,"ì":4,"ò":4,"ù":4,"ǜ":4
};

// Detecta tono (0 si no marcado)
export function detectTone(syllable) {
  if (!syllable) return 0;
  for (const ch of syllable) {
    if (toneMap[ch]) return toneMap[ch];
  }
  return 0;
}

// Elimina marcas diacríticas (NFD + retirar signos)
export function removeToneMarks(syllable) {
  if (!syllable) return "";
  return syllable.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Convierte una sílaba con marcas a forma "base + número" ej. "nǐ" -> "ni3"
export function pinyinSyllableToNumbered(syllable) {
  if (!syllable) return "";
  const tone = detectTone(syllable) || 0;
  const base = removeToneMarks(syllable).toLowerCase();
  return tone ? `${base}${tone}` : `${base}0`;
}

// Útil: a partir de un array de sílabas (con marcas), devuelve array numbered
export function pinyinArrayToNumbered(arr) {
  return (arr || []).map(pinyinSyllableToNumbered);
}

// ---------------------------------------------------------
// applyToneSandhi: reglas más completas
// Recibe tokens: [{ word, pinyin, syllables: [...], tones: [...] }, ...]
// Devuelve tokens con propiedades nuevas:
// - adjustedTones: array de tonos por sílaba (después de sandhi)
// - adjustedPinyin: string pinyin donde cada sílaba se representa base+num (espaciado)
// ---------------------------------------------------------
export function applyToneSandhi(tokens) {
  if (!Array.isArray(tokens) || tokens.length === 0) return tokens;

  // 1) Aplanamos la secuencia de sílabas para poder operar en el flujo
  //    Cada item: { tokenIndex, syllIndex, word, origSyll, origTone }
  const flat = [];
  tokens.forEach((tk, ti) => {
    const syls = tk.syllables && tk.syllables.length ? tk.syllables : [];
    const tones = tk.tones && tk.tones.length ? tk.tones : syls.map(s => detectTone(s));
    for (let si = 0; si < Math.max(syls.length, tones.length); si++) {
      const syl = syls[si] || "";
      const tone = tones[si] || detectTone(syl) || 0;
      flat.push({
        tokenIndex: ti,
        syllIndex: si,
        word: tk.word,
        origSyll: syl,
        origTone: tone,
        adjTone: tone // inicialmente igual
      });
    }
    // handle tokens with zero syllables: (unlikely) -> skip
  });

  // 2) Reglas en el flujo de sílabas

  // 2.a) 3rd-tone sandhi: runs of consecutive 3rd tones -> all but last become 2
  // Encontrar runs
  let i = 0;
  while (i < flat.length) {
    if (flat[i].adjTone === 3) {
      let j = i + 1;
      while (j < flat.length && flat[j].adjTone === 3) j++;
      const runLen = j - i;
      if (runLen >= 2) {
        // all except last become 2
        for (let k = i; k < j - 1; k++) {
          flat[k].adjTone = 2;
        }
      }
      i = j;
    } else {
      i++;
    }
  }

  // 2.b) 不 (bù, original tone 4) -> becomes 2 when followed by a 4th tone
  // But check lexical syllable: if origSyll normalized equals "bu" or token word is "不"
  for (let idx = 0; idx < flat.length - 1; idx++) {
    const cur = flat[idx];
    const next = flat[idx + 1];
    const curBase = removeToneMarks(cur.origSyll).toLowerCase();
    if ((cur.word === "不" || curBase === "bu") && cur.origTone === 4) {
      if (next.adjTone === 4) {
        cur.adjTone = 2; // bú
      }
    }
  }

  // 2.c) 一 (yī) behaviour:
  // - if followed by 4th tone -> becomes 2 (yí)
  // - else -> becomes 4 (yì) in many contexts (we'll apply heuristic)
  for (let idx = 0; idx < flat.length - 1; idx++) {
    const cur = flat[idx];
    const next = flat[idx + 1];
    const curBase = removeToneMarks(cur.origSyll).toLowerCase();
    // check common character or pinyin base "yi"
    if ((cur.word === "一" || curBase === "yi") && cur.origTone === 1) {
      // if next adjusted tone is 4 -> 2
      if (next.adjTone === 4) {
        cur.adjTone = 2;
      } else {
        // if next is not 4, in many contexts it becomes 4 (yì), like "一般 yìbān"
        // but there are exceptions; we apply heuristic: if next tone is 1/2/3/0 -> make 4
        cur.adjTone = 4;
      }
    }
  }

  // 2.d) 轻声 (neutral tone) heuristics: if a token.word is a common particle with neutral tone,
  //     we could mark its tone 0. We keep this minimal: if original tone is 0 keep 0.
  //     (We don't auto-set neutral tones because that requires lexicon.)

  // 3) Ahora volcamos los adjTone de vuelta a tokens: para cada token, crear adjustedTones array
  const tokenAdjusted = tokens.map((tk) => {
    // count how many syllables this token had
    const sylCount = tk.syllables ? tk.syllables.length : 0;
    const adjustedTones = [];
    for (let s = 0; s < sylCount; s++) {
      // find flat entry with tokenIndex === tk index and syllIndex === s
      const flatEntry = flat.find(fe => fe.tokenIndex === tokens.indexOf(tk) && fe.syllIndex === s);
      if (flatEntry) adjustedTones.push(flatEntry.adjTone || 0);
      else adjustedTones.push(0);
    }

    // generate adjustedPinyin: numbered syllables using adjusted tones
    const originalSyls = tk.syllables && tk.syllables.length ? tk.syllables : (tk.pinyin ? tk.pinyin.split(/\s+/) : []);
    const adjustedNumbered = originalSyls.map((origS, idx) => {
      const base = removeToneMarks(origS).toLowerCase();
      const tone = adjustedTones[idx] || 0;
      return tone ? `${base}${tone}` : `${base}0`;
    });

    return {
      ...tk,
      adjustedTones,
      adjustedPinyin: adjustedNumbered.join(" ")
    };
  });

  return tokenAdjusted;
}
