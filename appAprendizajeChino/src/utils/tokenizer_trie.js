// src/utils/tokenizer_trie.js
// Tokenizador profesional basado en TRIE para segmentar chino

import dict from "../assets/dicts/dict_hsk";
import { detectTone, applyToneSandhi } from "./tokenizer";
// Reutilizamos detectTone y sandhi del tokenizer original

//---------------------------------------------------------------
// 1) Construcción del TRIE
//---------------------------------------------------------------
export function buildTrie(dictionary) {
  const root = {};

  for (const word of Object.keys(dictionary)) {
    let node = root;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node._end = dictionary[word]; // marca palabra completa
  }

  return root;
}

export const trie = buildTrie(dict);

//---------------------------------------------------------------
// 2) Tokenización usando el TRIE (MAX-MATCH DESDE TRIE)
//---------------------------------------------------------------
export function tokenizeTrie(text) {
  const clean = text.replace(/\s+/g, "");
  const tokens = [];

  let i = 0;
  while (i < clean.length) {
    let node = trie;
    let lastMatch = null;
    let lastIndex = i;

    for (let j = i; j < clean.length; j++) {
      const ch = clean[j];
      if (!node[ch]) break;

      node = node[ch];

      // si encontramos fin de palabra, lo guardamos como mejor match hasta ahora
      if (node._end) {
        lastMatch = node._end;
        lastIndex = j;
      }
    }

    // Si hubo match, lo usamos
    if (lastMatch) {
      const word = clean.slice(i, lastIndex + 1);

      const pinyin = lastMatch.pinyin || "";
      const spanish = lastMatch.spanish || "";
      const level = lastMatch.level || null;

      const syllables = pinyin.split(/\s+/g).filter(Boolean);
      const tones = syllables.map(s => detectTone(s));

      tokens.push({
        word,
        pinyin,
        spanish,
        level,
        syllables,
        tones,
      });

      i = lastIndex + 1;
    } else {
      // fallback: carácter individual
      const ch = clean[i];
      const entry = dict[ch] || {};

      const pinyin = entry.pinyin || "";
      const syllables = pinyin ? pinyin.split(/\s+/g) : [];
      const tones = syllables.map(s => detectTone(s));

      tokens.push({
        word: ch,
        pinyin: entry.pinyin || "",
        spanish: entry.spanish || "",
        level: entry.level || null,
        syllables,
        tones,
      });

      i += 1;
    }
  }

  // aplicar reglas de sandhi
return applyToneSandhi(tokens);
}
