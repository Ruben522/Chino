// src/assets/dicts/dict_hsk.js
// Diccionario ampliado: HSK1 + HSK2 + compuestas comunes + HSK3 básico
// Formato: "palabra": { pinyin: "...", spanish: "...", level: 1|2|3 }

const dict = {
  // ---------------------------
  // ⭐ HSK 1 — Pronombres
  // ---------------------------
  "我": { pinyin: "wǒ", spanish: "yo", level: 1 },
  "你": { pinyin: "nǐ", spanish: "tú", level: 1 },
  "他": { pinyin: "tā", spanish: "él", level: 1 },
  "她": { pinyin: "tā", spanish: "ella", level: 1 },
  "它": { pinyin: "tā", spanish: "ello", level: 1 },
  "我们": { pinyin: "wǒmen", spanish: "nosotros", level: 1 },
  "你们": { pinyin: "nǐmen", spanish: "vosotros", level: 1 },
  "他们": { pinyin: "tāmen", spanish: "ellos", level: 1 },
  "她们": { pinyin: "tāmen", spanish: "ellas", level: 1 },
  "我的": { pinyin: "wǒ de", spanish: "mi", level: 1 },
  "你的": { pinyin: "nǐ de", spanish: "tu", level: 1 },
  "他的": { pinyin: "tā de", spanish: "su (de él)", level: 1 },

  // ---------------------------
  // ⭐ HSK 1 — Preguntas
  // ---------------------------
  "谁": { pinyin: "shéi", spanish: "quién", level: 1 },
  "什么": { pinyin: "shénme", spanish: "qué", level: 1 },
  "哪": { pinyin: "nǎ", spanish: "cuál", level: 1 },
  "哪里": { pinyin: "nǎlǐ", spanish: "dónde", level: 1 },
  "怎么": { pinyin: "zěnme", spanish: "cómo", level: 1 },
  "怎么样": { pinyin: "zěnmeyàng", spanish: "cómo está", level: 1 },
  "多少": { pinyin: "duōshao", spanish: "cuánto", level: 1 },
  "几": { pinyin: "jǐ", spanish: "cuántos", level: 1 },
  "为什么": { pinyin: "wèishénme", spanish: "por qué", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Verbos
  // ---------------------------
  "是": { pinyin: "shì", spanish: "ser / sí", level: 1 },
  "有": { pinyin: "yǒu", spanish: "tener / haber", level: 1 },
  "在": { pinyin: "zài", spanish: "estar / en", level: 1 },
  "去": { pinyin: "qù", spanish: "ir", level: 1 },
  "来": { pinyin: "lái", spanish: "venir", level: 1 },
  "想": { pinyin: "xiǎng", spanish: "querer / pensar", level: 1 },
  "喜欢": { pinyin: "xǐhuan", spanish: "gustar", level: 1 },
  "爱": { pinyin: "ài", spanish: "amar", level: 2 },
  "吃": { pinyin: "chī", spanish: "comer", level: 1 },
  "喝": { pinyin: "hē", spanish: "beber", level: 1 },
  "看": { pinyin: "kàn", spanish: "ver / mirar", level: 1 },
  "听": { pinyin: "tīng", spanish: "escuchar", level: 1 },
  "说": { pinyin: "shuō", spanish: "hablar / decir", level: 1 },
  "读": { pinyin: "dú", spanish: "leer", level: 1 },
  "写": { pinyin: "xiě", spanish: "escribir", level: 1 },
  "做": { pinyin: "zuò", spanish: "hacer", level: 1 },
  "买": { pinyin: "mǎi", spanish: "comprar", level: 1 },
  "卖": { pinyin: "mài", spanish: "vender", level: 2 },
  "坐": { pinyin: "zuò", spanish: "sentarse", level: 1 },
  "站": { pinyin: "zhàn", spanish: "estar de pie", level: 2 },
  "走": { pinyin: "zǒu", spanish: "caminar", level: 1 },
  "跑": { pinyin: "pǎo", spanish: "correr", level: 2 },
  "学习": { pinyin: "xuéxí", spanish: "estudiar", level: 1 },
  "工作": { pinyin: "gōngzuò", spanish: "trabajar", level: 1 },
  "玩": { pinyin: "wán", spanish: "jugar", level: 1 },
  "睡觉": { pinyin: "shuìjiào", spanish: "dormir", level: 1 },
  "起床": { pinyin: "qǐchuáng", spanish: "levantarse", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Nombres básicos
  // ---------------------------
  "人": { pinyin: "rén", spanish: "persona", level: 1 },
  "中国人": { pinyin: "Zhōngguórén", spanish: "chino (persona)", level: 1 },
  "中国": { pinyin: "Zhōngguó", spanish: "China", level: 1 },
  "名字": { pinyin: "míngzi", spanish: "nombre", level: 1 },
  "家": { pinyin: "jiā", spanish: "casa / familia", level: 1 },
  "水": { pinyin: "shuǐ", spanish: "agua", level: 1 },
  "饭": { pinyin: "fàn", spanish: "comida / arroz cocido", level: 1 },
  "菜": { pinyin: "cài", spanish: "plato / verdura", level: 1 },
  "茶": { pinyin: "chá", spanish: "té", level: 1 },
  "水果": { pinyin: "shuǐguǒ", spanish: "fruta", level: 1 },
  "苹果": { pinyin: "píngguǒ", spanish: "manzana", level: 1 },
  "面包": { pinyin: "miànbāo", spanish: "pan", level: 2 },
  "钱": { pinyin: "qián", spanish: "dinero", level: 1 },
  "时间": { pinyin: "shíjiān", spanish: "tiempo", level: 2 },
  "朋友": { pinyin: "péngyou", spanish: "amigo", level: 1 },
  "老师": { pinyin: "lǎoshī", spanish: "profesor", level: 1 },
  "学生": { pinyin: "xuésheng", spanish: "estudiante", level: 1 },
  "医生": { pinyin: "yīshēng", spanish: "médico", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Palabras compuestas MUY frecuentes
  // ---------------------------
  "吃饭": { pinyin: "chī fàn", spanish: "comer", level: 1 },
  "喝水": { pinyin: "hē shuǐ", spanish: "beber agua", level: 1 },
  "看见": { pinyin: "kàn jiàn", spanish: "ver", level: 1 },
  "听见": { pinyin: "tīng jiàn", spanish: "oír", level: 1 },
  "听懂": { pinyin: "tīng dǒng", spanish: "entender (al oír)", level: 2 },
  "听不懂": { pinyin: "tīng bù dǒng", spanish: "no entender (al oír)", level: 1 },
  "懂": { pinyin: "dǒng", spanish: "entender", level: 1 },
  "明白": { pinyin: "míngbai", spanish: "comprender", level: 2 },
  "很好": { pinyin: "hěn hǎo", spanish: "muy bien", level: 1 },
  "一起": { pinyin: "yì qǐ", spanish: "juntos", level: 1 },
  "一下": { pinyin: "yí xià", spanish: "un momento", level: 1 },
  "一点": { pinyin: "yì diǎn", spanish: "un poco", level: 1 },
  "一点儿": { pinyin: "yì diǎnr", spanish: "un poco", level: 1 },
  "很多": { pinyin: "hěn duō", spanish: "muchos", level: 1 },
  "有点": { pinyin: "yǒudiǎn", spanish: "un poco (algo)", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Adverbios y partículas
  // ---------------------------
  "很": { pinyin: "hěn", spanish: "muy", level: 1 },
  "太": { pinyin: "tài", spanish: "demasiado", level: 2 },
  "最": { pinyin: "zuì", spanish: "más", level: 2 },
  "都": { pinyin: "dōu", spanish: "todos", level: 1 },
  "也": { pinyin: "yě", spanish: "también", level: 1 },
  "还": { pinyin: "hái", spanish: "aún", level: 2 },
  "就": { pinyin: "jiù", spanish: "entonces", level: 2 },
  "不": { pinyin: "bù", spanish: "no (negación)", level: 1 },
  "没": { pinyin: "méi", spanish: "no (pretérito) / no tener", level: 1 },
  "别": { pinyin: "bié", spanish: "no (imperativo)", level: 2 },
  "了": { pinyin: "le", spanish: "partícula aspectual", level: 1 },
  "过": { pinyin: "guo", spanish: "partícula de experiencia", level: 2 },
  "着": { pinyin: "zhe", spanish: "partícula continua", level: 2 },
  "吗": { pinyin: "ma", spanish: "partícula interrogativa", level: 1 },
  "呢": { pinyin: "ne", spanish: "partícula de énfasis", level: 1 },
  "吧": { pinyin: "ba", spanish: "partícula de sugerencia", level: 1 },
  "啊": { pinyin: "a", spanish: "partícula modal", level: 1 },

  // ---------------------------
  // ⭐ HSK 1 — Tiempo y fecha
  // ---------------------------
  "今天": { pinyin: "jīntiān", spanish: "hoy", level: 1 },
  "明天": { pinyin: "míngtiān", spanish: "mañana", level: 1 },
  "昨天": { pinyin: "zuótiān", spanish: "ayer", level: 1 },
  "现在": { pinyin: "xiànzài", spanish: "ahora", level: 1 },
  "早上": { pinyin: "zǎoshang", spanish: "mañana (temprano)", level: 1 },
  "中午": { pinyin: "zhōngwǔ", spanish: "mediodía", level: 2 },
  "晚上": { pinyin: "wǎnshang", spanish: "noche", level: 1 },
  "年": { pinyin: "nián", spanish: "año", level: 1 },
  "月": { pinyin: "yuè", spanish: "mes", level: 1 },
  "日": { pinyin: "rì", spanish: "día", level: 1 },
  "小时": { pinyin: "xiǎoshí", spanish: "hora", level: 2 },
  "分钟": { pinyin: "fēnzhōng", spanish: "minuto", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Números
  // ---------------------------
  "一": { pinyin: "yī", spanish: "uno", level: 1 },
  "二": { pinyin: "èr", spanish: "dos", level: 1 },
  "三": { pinyin: "sān", spanish: "tres", level: 1 },
  "四": { pinyin: "sì", spanish: "cuatro", level: 1 },
  "五": { pinyin: "wǔ", spanish: "cinco", level: 1 },
  "六": { pinyin: "liù", spanish: "seis", level: 1 },
  "七": { pinyin: "qī", spanish: "siete", level: 1 },
  "八": { pinyin: "bā", spanish: "ocho", level: 1 },
  "九": { pinyin: "jiǔ", spanish: "nueve", level: 1 },
  "十": { pinyin: "shí", spanish: "diez", level: 1 },
  "零": { pinyin: "líng", spanish: "cero", level: 2 },
  "百": { pinyin: "bǎi", spanish: "cien", level: 2 },
  "千": { pinyin: "qiān", spanish: "mil", level: 2 },
  "万": { pinyin: "wàn", spanish: "diez mil", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Expresiones comunes
  // ---------------------------
  "你好": { pinyin: "nǐ hǎo", spanish: "hola", level: 1 },
  "您好": { pinyin: "nín hǎo", spanish: "hola (formal)", level: 2 },
  "谢谢": { pinyin: "xièxie", spanish: "gracias", level: 1 },
  "不客气": { pinyin: "bù kèqi", spanish: "de nada", level: 1 },
  "对不起": { pinyin: "duìbuqǐ", spanish: "lo siento", level: 1 },
  "没关系": { pinyin: "méi guānxi", spanish: "no pasa nada", level: 1 },
  "再见": { pinyin: "zàijiàn", spanish: "adiós", level: 1 },
  "请问": { pinyin: "qǐng wèn", spanish: "disculpe, ¿puedo preguntar?", level: 1 },
  "不好意思": { pinyin: "bù hǎoyìsi", spanish: "disculpe / perdón", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Lugares
  // ---------------------------
  "学校": { pinyin: "xuéxiào", spanish: "escuela", level: 1 },
  "医院": { pinyin: "yīyuàn", spanish: "hospital", level: 1 },
  "商店": { pinyin: "shāngdiàn", spanish: "tienda", level: 1 },
  "饭店": { pinyin: "fàndiàn", spanish: "restaurante", level: 1 },
  "家": { pinyin: "jiā", spanish: "casa", level: 1 },
  "公司": { pinyin: "gōngsī", spanish: "empresa", level: 2 },
  "公园": { pinyin: "gōngyuán", spanish: "parque", level: 2 },
  "超市": { pinyin: "chāoshì", spanish: "supermercado", level: 2 },

  // ---------------------------
  // ⭐ HSK 1 — Familia
  // ---------------------------
  "爸爸": { pinyin: "bàba", spanish: "papá", level: 1 },
  "妈妈": { pinyin: "māma", spanish: "mamá", level: 1 },
  "哥哥": { pinyin: "gēge", spanish: "hermano mayor", level: 1 },
  "弟弟": { pinyin: "dìdi", spanish: "hermano menor", level: 1 },
  "姐姐": { pinyin: "jiějie", spanish: "hermana mayor", level: 1 },
  "妹妹": { pinyin: "mèimei", spanish: "hermana menor", level: 1 },

  // ---------------------------
  // ⭐ HSK 1 — Objetos
  // ---------------------------
  "桌子": { pinyin: "zhuōzi", spanish: "mesa", level: 1 },
  "椅子": { pinyin: "yǐzi", spanish: "silla", level: 1 },
  "电脑": { pinyin: "diànnǎo", spanish: "ordenador", level: 1 },
  "手机": { pinyin: "shǒujī", spanish: "móvil", level: 1 },
  "书": { pinyin: "shū", spanish: "libro", level: 1 },
  "笔": { pinyin: "bǐ", spanish: "bolígrafo", level: 2 },
  "纸": { pinyin: "zhǐ", spanish: "papel", level: 2 },
  "衣服": { pinyin: "yīfu", spanish: "ropa", level: 1 },
  "鞋": { pinyin: "xié", spanish: "zapato", level: 2 },
  "车": { pinyin: "chē", spanish: "coche", level: 1 },
  "门": { pinyin: "mén", spanish: "puerta", level: 2 },
  "窗": { pinyin: "chuāng", spanish: "ventana", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Verbos útiles
  // ---------------------------
  "帮助": { pinyin: "bāngzhù", spanish: "ayudar", level: 2 },
  "准备": { pinyin: "zhǔnbèi", spanish: "preparar", level: 2 },
  "跑步": { pinyin: "pǎobù", spanish: "correr", level: 2 },
  "上班": { pinyin: "shàngbān", spanish: "ir al trabajo", level: 2 },
  "下班": { pinyin: "xiàbān", spanish: "salir del trabajo", level: 2 },
  "开始": { pinyin: "kāishǐ", spanish: "empezar", level: 2 },
  "结束": { pinyin: "jiéshù", spanish: "terminar", level: 2 },
  "休息": { pinyin: "xiūxi", spanish: "descansar", level: 2 },
  "洗澡": { pinyin: "xǐzǎo", spanish: "ducharse", level: 2 },
  "打电话": { pinyin: "dǎ diànhuà", spanish: "llamar por teléfono", level: 2 },
  "等": { pinyin: "děng", spanish: "esperar", level: 2 },
  "找": { pinyin: "zhǎo", spanish: "buscar", level: 2 },
  "用": { pinyin: "yòng", spanish: "usar", level: 2 },
  "给": { pinyin: "gěi", spanish: "dar", level: 2 },
  "拿": { pinyin: "ná", spanish: "tomar", level: 2 },
  "开": { pinyin: "kāi", spanish: "abrir", level: 2 },
  "关": { pinyin: "guān", spanish: "cerrar", level: 2 },
  "进": { pinyin: "jìn", spanish: "entrar", level: 2 },
  "出": { pinyin: "chū", spanish: "salir", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Adjetivos comunes
  // ---------------------------
  "大": { pinyin: "dà", spanish: "grande", level: 1 },
  "小": { pinyin: "xiǎo", spanish: "pequeño", level: 1 },
  "多": { pinyin: "duō", spanish: "mucho", level: 1 },
  "少": { pinyin: "shǎo", spanish: "poco", level: 1 },
  "好": { pinyin: "hǎo", spanish: "bueno", level: 1 },
  "坏": { pinyin: "huài", spanish: "malo", level: 2 },
  "新": { pinyin: "xīn", spanish: "nuevo", level: 2 },
  "旧": { pinyin: "jiù", spanish: "viejo", level: 2 },
  "热": { pinyin: "rè", spanish: "caliente", level: 2 },
  "冷": { pinyin: "lěng", spanish: "frío", level: 2 },
  "高": { pinyin: "gāo", spanish: "alto", level: 2 },
  "矮": { pinyin: "ǎi", spanish: "bajo", level: 2 },
  "长": { pinyin: "cháng", spanish: "largo", level: 2 },
  "短": { pinyin: "duǎn", spanish: "corto", level: 2 },
  "快": { pinyin: "kuài", spanish: "rápido", level: 2 },
  "慢": { pinyin: "màn", spanish: "lento", level: 2 },
  "高兴": { pinyin: "gāoxìng", spanish: "contento", level: 2 },
  "难过": { pinyin: "nánguò", spanish: "triste", level: 2 },
  "忙": { pinyin: "máng", spanish: "ocupado", level: 2 },
  "累": { pinyin: "lèi", spanish: "cansado", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Conceptos
  // ---------------------------
  "因为": { pinyin: "yīnwèi", spanish: "porque", level: 2 },
  "所以": { pinyin: "suǒyǐ", spanish: "por eso", level: 2 },
  "但是": { pinyin: "dànshì", spanish: "pero", level: 2 },
  "如果": { pinyin: "rúguǒ", spanish: "si", level: 2 },
  "事情": { pinyin: "shìqing", spanish: "asunto / cosa", level: 2 },
  "问题": { pinyin: "wèntí", spanish: "pregunta / problema", level: 2 },
  "意思": { pinyin: "yìsi", spanish: "significado", level: 2 },
  "颜色": { pinyin: "yánsè", spanish: "color", level: 2 },
  "大小": { pinyin: "dàxiǎo", spanish: "tamaño", level: 2 },

  // ---------------------------
  // ⭐ HSK 3 — Palabras básicas
  // ---------------------------
  "已经": { pinyin: "yǐjīng", spanish: "ya", level: 3 },
  "一直": { pinyin: "yìzhí", spanish: "siempre", level: 3 },
  "经常": { pinyin: "jīngcháng", spanish: "frecuentemente", level: 3 },
  "有时候": { pinyin: "yǒu shíhou", spanish: "a veces", level: 3 },
  "可能": { pinyin: "kěnéng", spanish: "posible", level: 3 },
  "应该": { pinyin: "yīnggāi", spanish: "deber", level: 3 },
  "可以": { pinyin: "kěyǐ", spanish: "poder", level: 3 },
  "必须": { pinyin: "bìxū", spanish: "deber", level: 3 },
  "比较": { pinyin: "bǐjiào", spanish: "comparar", level: 3 },
  "特别": { pinyin: "tèbié", spanish: "especial", level: 3 },
  "重要": { pinyin: "zhòngyào", spanish: "importante", level: 3 },
  "容易": { pinyin: "róngyì", spanish: "fácil", level: 3 },
  "困难": { pinyin: "kùnnan", spanish: "difícil", level: 3 },
  "清楚": { pinyin: "qīngchu", spanish: "claro", level: 3 },
  "干净": { pinyin: "gānjìng", spanish: "limpio", level: 3 },
  "漂亮": { pinyin: "piàoliang", spanish: "bonito", level: 3 },

  // ---------------------------
  // ⭐ Palabras super-frecuentes que un buen tokenizador debe incluir
  // ---------------------------
  "出来": { pinyin: "chū lai", spanish: "salir (hacia el hablante)", level: 2 },
  "出去": { pinyin: "chū qù", spanish: "salir (hacia fuera)", level: 2 },
  "回来": { pinyin: "huí lai", spanish: "volver (hacia aquí)", level: 2 },
  "回去": { pinyin: "huí qù", spanish: "volver (hacia allá)", level: 2 },
  "走路": { pinyin: "zǒu lù", spanish: "caminar", level: 1 },
  "说话": { pinyin: "shuō huà", spanish: "hablar", level: 1 },
  "写字": { pinyin: "xiě zì", spanish: "escribir caracteres", level: 1 },
  "看书": { pinyin: "kàn shū", spanish: "leer libro", level: 1 },
  "学习中文": { pinyin: "xuéxí Zhōngwén", spanish: "estudiar chino", level: 1 },
  "汉语": { pinyin: "Hànyǔ", spanish: "idioma chino", level: 1 },
  "中文": { pinyin: "Zhōngwén", spanish: "chino (idioma)", level: 1 },

  // ---------------------------
  // ⭐ Símbolos y puntuación
  // ---------------------------
  "？": { pinyin: "", spanish: "signo de interrogación", level: 1 },
  "。": { pinyin: "", spanish: "punto", level: 1 },
  "！": { pinyin: "", spanish: "exclamación", level: 1 },
  "，": { pinyin: "", spanish: "coma", level: 1 },
  "：": { pinyin: "", spanish: "dos puntos", level: 1 },
  "；": { pinyin: "", spanish: "punto y coma", level: 1 },
  // ---------------------------
  // ⭐ HSK 2 — Verbos adicionales
  // ---------------------------
  "认识": { pinyin: "rènshi", spanish: "conocer (personas)", level: 2 },
  "知道": { pinyin: "zhīdào", spanish: "saber", level: 2 },
  "觉得": { pinyin: "juéde", spanish: "opinar, sentir", level: 2 },
  "需要": { pinyin: "xūyào", spanish: "necesitar", level: 2 },
  "可以": { pinyin: "kěyǐ", spanish: "poder", level: 2 },
  "能": { pinyin: "néng", spanish: "poder (capacidad)", level: 2 },
  "会": { pinyin: "huì", spanish: "saber (habilidad)", level: 2 },
  "要": { pinyin: "yào", spanish: "querer, necesitar", level: 2 },
  "希望": { pinyin: "xīwàng", spanish: "esperar, desear", level: 2 },
  "忘记": { pinyin: "wàngjì", spanish: "olvidar", level: 2 },
  "记得": { pinyin: "jìde", spanish: "recordar", level: 2 },
  "改变": { pinyin: "gǎibiàn", spanish: "cambiar", level: 2 },
  "完成": { pinyin: "wánchéng", spanish: "completar", level: 2 },
  "继续": { pinyin: "jìxù", spanish: "continuar", level: 2 },
  "停止": { pinyin: "tíngzhǐ", spanish: "parar", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Sustantivos adicionales
  // ---------------------------
  "城市": { pinyin: "chéngshì", spanish: "ciudad", level: 2 },
  "乡村": { pinyin: "xiāngcūn", spanish: "pueblo", level: 2 },
  "街道": { pinyin: "jiēdào", spanish: "calle", level: 2 },
  "房间": { pinyin: "fángjiān", spanish: "habitación", level: 2 },
  "厨房": { pinyin: "chúfáng", spanish: "cocina", level: 2 },
  "卫生间": { pinyin: "wèishēngjiān", spanish: "baño", level: 2 },
  "天气": { pinyin: "tiānqì", spanish: "clima", level: 2 },
  "太阳": { pinyin: "tàiyáng", spanish: "sol", level: 2 },
  "月亮": { pinyin: "yuèliang", spanish: "luna", level: 2 },
  "星星": { pinyin: "xīngxing", spanish: "estrella", level: 2 },
  "雨": { pinyin: "yǔ", spanish: "lluvia", level: 2 },
  "雪": { pinyin: "xuě", spanish: "nieve", level: 2 },
  "风": { pinyin: "fēng", spanish: "viento", level: 2 },
  "动物": { pinyin: "dòngwù", spanish: "animal", level: 2 },
  "猫": { pinyin: "māo", spanish: "gato", level: 2 },
  "狗": { pinyin: "gǒu", spanish: "perro", level: 2 },
  "鸟": { pinyin: "niǎo", spanish: "pájaro", level: 2 },
  "鱼": { pinyin: "yú", spanish: "pez", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Alimentos y bebidas
  // ---------------------------
  "牛肉": { pinyin: "niúròu", spanish: "carne de res", level: 2 },
  "鸡肉": { pinyin: "jīròu", spanish: "pollo", level: 2 },
  "猪肉": { pinyin: "zhūròu", spanish: "cerdo", level: 2 },
  "鸡蛋": { pinyin: "jīdàn", spanish: "huevo", level: 2 },
  "牛奶": { pinyin: "niúnǎi", spanish: "leche", level: 2 },
  "咖啡": { pinyin: "kāfēi", spanish: "café", level: 2 },
  "啤酒": { pinyin: "píjiǔ", spanish: "cerveza", level: 2 },
  "葡萄酒": { pinyin: "pútáojiǔ", spanish: "vino", level: 2 },
  "米饭": { pinyin: "mǐfàn", spanish: "arroz cocido", level: 2 },
  "面条": { pinyin: "miàntiáo", spanish: "fideos", level: 2 },
  "蔬菜": { pinyin: "shūcài", spanish: "verduras", level: 2 },
  "水果": { pinyin: "shuǐguǒ", spanish: "fruta", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Tiempo y frecuencia
  // ---------------------------
  "刚才": { pinyin: "gāngcái", spanish: "hace un momento", level: 2 },
  "最近": { pinyin: "zuìjìn", spanish: "recientemente", level: 2 },
  "以后": { pinyin: "yǐhòu", spanish: "después", level: 2 },
  "以前": { pinyin: "yǐqián", spanish: "antes", level: 2 },
  "将来": { pinyin: "jiānglái", spanish: "futuro", level: 2 },
  "过去": { pinyin: "guòqù", spanish: "pasado", level: 2 },
  "经常": { pinyin: "jīngcháng", spanish: "frecuentemente", level: 2 },
  "有时候": { pinyin: "yǒu shíhou", spanish: "a veces", level: 2 },
  "很少": { pinyin: "hěn shǎo", spanish: "rara vez", level: 2 },
  "从不": { pinyin: "cóng bù", spanish: "nunca", level: 2 },

  // ---------------------------
  // ⭐ HSK 2 — Direcciones y ubicación
  // ---------------------------
  "左边": { pinyin: "zuǒbiān", spanish: "izquierda", level: 2 },
  "右边": { pinyin: "yòubiān", spanish: "derecha", level: 2 },
  "前面": { pinyin: "qiánmiàn", spanish: "frente", level: 2 },
  "后面": { pinyin: "hòumiàn", spanish: "detrás", level: 2 },
  "上面": { pinyin: "shàngmiàn", spanish: "arriba", level: 2 },
  "下面": { pinyin: "xiàmiàn", spanish: "abajo", level: 2 },
  "里面": { pinyin: "lǐmiàn", spanish: "dentro", level: 2 },
  "外面": { pinyin: "wàimiàn", spanish: "fuera", level: 2 },
  "旁边": { pinyin: "pángbiān", spanish: "al lado", level: 2 },
  "对面": { pinyin: "duìmiàn", spanish: "enfrente", level: 2 },

  // ---------------------------
  // ⭐ HSK 3 — Verbos importantes
  // ---------------------------
  "同意": { pinyin: "tóngyì", spanish: "estar de acuerdo", level: 3 },
  "反对": { pinyin: "fǎnduì", spanish: "oponerse", level: 3 },
  "解释": { pinyin: "jiěshì", spanish: "explicar", level: 3 },
  "理解": { pinyin: "lǐjiě", spanish: "comprender", level: 3 },
  "接受": { pinyin: "jiēshòu", spanish: "aceptar", level: 3 },
  "拒绝": { pinyin: "jùjué", spanish: "rechazar", level: 3 },
  "邀请": { pinyin: "yāoqǐng", spanish: "invitar", level: 3 },
  "参加": { pinyin: "cānjiā", spanish: "participar", level: 3 },
  "决定": { pinyin: "juédìng", spanish: "decidir", level: 3 },
  "选择": { pinyin: "xuǎnzé", spanish: "elegir", level: 3 },
  "检查": { pinyin: "jiǎnchá", spanish: "revisar", level: 3 },
  "解决": { pinyin: "jiějué", spanish: "resolver", level: 3 },
  "发展": { pinyin: "fāzhǎn", spanish: "desarrollar", level: 3 },
  "提高": { pinyin: "tígāo", spanish: "mejorar", level: 3 },
  "成功": { pinyin: "chénggōng", spanish: "tener éxito", level: 3 },

  // ---------------------------
  // ⭐ HSK 3 — Sustantivos abstractos
  // ---------------------------
  "机会": { pinyin: "jīhuì", spanish: "oportunidad", level: 3 },
  "经验": { pinyin: "jīngyàn", spanish: "experiencia", level: 3 },
  "知识": { pinyin: "zhīshi", spanish: "conocimiento", level: 3 },
  "能力": { pinyin: "nénglì", spanish: "habilidad", level: 3 },
  "方法": { pinyin: "fāngfǎ", spanish: "método", level: 3 },
  "计划": { pinyin: "jìhuà", spanish: "plan", level: 3 },
  "目标": { pinyin: "mùbiāo", spanish: "objetivo", level: 3 },
  "结果": { pinyin: "jiéguǒ", spanish: "resultado", level: 3 },
  "原因": { pinyin: "yuányīn", spanish: "razón", level: 3 },
  "影响": { pinyin: "yǐngxiǎng", spanish: "influencia", level: 3 },
  "关系": { pinyin: "guānxi", spanish: "relación", level: 3 },
  "态度": { pinyin: "tàidu", spanish: "actitud", level: 3 },
  "心情": { pinyin: "xīnqíng", spanish: "estado de ánimo", level: 3 },
  "感觉": { pinyin: "gǎnjué", spanish: "sensación", level: 3 },
  "梦想": { pinyin: "mèngxiǎng", spanish: "sueño", level: 3 },

  // ---------------------------
  // ⭐ HSK 3 — Adjetivos avanzados
  // ---------------------------
  "美丽": { pinyin: "měilì", spanish: "hermoso", level: 3 },
  "英俊": { pinyin: "yīngjùn", spanish: "guapo", level: 3 },
  "聪明": { pinyin: "cōngming", spanish: "inteligente", level: 3 },
  "愚蠢": { pinyin: "yúchǔn", spanish: "estúpido", level: 3 },
  "勇敢": { pinyin: "yǒnggǎn", spanish: "valiente", level: 3 },
  "胆小": { pinyin: "dǎnxiǎo", spanish: "cobarde", level: 3 },
  "耐心": { pinyin: "nàixīn", spanish: "paciente", level: 3 },
  "着急": { pinyin: "zháojí", spanish: "ansioso", level: 3 },
  "自信": { pinyin: "zìxìn", spanish: "seguro de sí mismo", level: 3 },
  "谦虚": { pinyin: "qiānxū", spanish: "humilde", level: 3 },

  // ---------------------------
  // ⭐ Expresiones idiomáticas comunes
  // ---------------------------
  "不好意思": { pinyin: "bù hǎoyìsi", spanish: "disculpe", level: 2 },
  "没问题": { pinyin: "méi wèntí", spanish: "no hay problema", level: 2 },
  "太好了": { pinyin: "tài hǎo le", spanish: "¡estupendo!", level: 2 },
  "真可惜": { pinyin: "zhēn kěxī", spanish: "qué lástima", level: 2 },
  "恭喜发财": { pinyin: "gōngxǐ fācái", spanish: "felicidades y prosperidad", level: 3 },
  "一路顺风": { pinyin: "yīlù shùnfēng", spanish: "buen viaje", level: 3 },
  "生日快乐": { pinyin: "shēngrì kuàilè", spanish: "feliz cumpleaños", level: 2 },
  "新年快乐": { pinyin: "xīnnián kuàilè", spanish: "feliz año nuevo", level: 2 },

  // ---------------------------
  // ⭐ Verbos compuestos útiles
  // ---------------------------
  "打电话": { pinyin: "dǎ diànhuà", spanish: "llamar por teléfono", level: 2 },
  "发短信": { pinyin: "fā duǎnxìn", spanish: "enviar mensaje", level: 2 },
  "上网": { pinyin: "shàng wǎng", spanish: "navegar por internet", level: 2 },
  "看电影": { pinyin: "kàn diànyǐng", spanish: "ver película", level: 2 },
  "听音乐": { pinyin: "tīng yīnyuè", spanish: "escuchar música", level: 2 },
  "做运动": { pinyin: "zuò yùndòng", spanish: "hacer ejercicio", level: 2 },
  "买东西": { pinyin: "mǎi dōngxi", spanish: "comprar cosas", level: 2 },
  "卖东西": { pinyin: "mài dōngxi", spanish: "vender cosas", level: 2 }
};

export default dict;