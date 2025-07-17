const alphabetGuide = [
    {
    id: 1,
    kzletter: 'А а',
    engletter: " A a",
    pronun: `The A in <b>A</b>ll`
    },
    {
    id: 2,
    kzletter: "Ә ә",
    engletter: "Ä ä",
    pronun: `The A in <b>A</b>pple`
    },
    {
    id: 3,
    kzletter: "Б б",
    engletter: "B b",
    pronun: `The B in <b>B</b>all`
    },
    {
    id: 4,
    kzletter: "В в",
    engletter: "V v",
    pronun: `The V in <b>V</b>ehicle`
    },
    {
    id: 5,
    kzletter: "Г г",
    engletter: "G g",
    pronun: `The G in <b>G</b>oal`
    },
    {
    id: 6,
    kzletter: "Ғ ғ",
    engletter: "Ğ ğ",
    pronun: `No exact English equivalent, it is pronounced like a G with the back of the throat`
    },
    {
    id: 7,
    kzletter: "Д д",
    engletter: "D d",
    pronun: `The D in <b>D</b>inosaur`
    },
    {
    id: 8,
    kzletter: "Е е",
    engletter: "E e",
    pronun: `The Ye in <b>Ye</b>s`
    },
    {
    id: 9,
    kzletter: "Ж ж",
    engletter: "J j",
    pronun: `The J in <b>J</b>anuary`
    },
    {
    id: 10,
    kzletter: "З з",
    engletter: "Z z",
    pronun: `The Z in <b>Z</b>ealous`
    },
    {
    id: 11,
    kzletter: "И и",
    engletter: "Ï ï",
    pronun: `The I in Mach<b>i</b>ne`
    },
    {
    id: 12,    
    kzletter: "Й й",
    engletter: "Y y",
    pronun: `The Y in <b>Y</b>ogurt`
    },
    {
    id: 13,
    kzletter: "К к",
    engletter: "K k",
    pronun: `The K in <b>K</b>orea`
    },
    {
    id: 14,
    kzletter: "Қ қ",
    engletter: "Q q",
    pronun: `No exact English equivalent, pronounced like a K but with the back of the throat`
    },
    {
    id: 15,
    kzletter: "Л л",
    engletter: "L l",
    pronun: `The L in <b>L</b>ump`
    },
    {
    id: 16,
    kzletter: "М м",
    engletter: "M m",
    pronun: `The M in <b>M</b>onkey`
    },
    {
    id: 17,
    kzletter: "Н н",
    engletter: "N n",
    pronun: `The N in <b>N</b>ew`
    },
    {
    id: 18,
    kzletter: "Ң ң",
    engletter: "Ñ, ñ",
    pronun: `The Ng in Si<b>ng</b>`
    },
    {
    id: 19,
    kzletter: "О о",
    engletter: "O o",
    pronun: `The O in <b>O</b>ld. When at the beginning of the word, it is often pronounced with a "W" in front`
    },
    {
    id: 20,
    kzletter: "Ө ө",
    engletter: "Ö ö",
    pronun: `Similar to the Ea in <b>Ea</b>rly. When at the beginning of the word, it is often pronounced with a "W" in front`
    },
    {
    id: 21,
    kzletter: "П п",
    engletter: "P p",
    pronun: `The P in <b>P</b>ine`
    },
    {
    id: 22,
    kzletter: "Р р",
    engletter: "R r",
    pronun: `The R in <b>R</b>ose, but rolled with the back of the throat`
    },
    {
    id: 23,
    kzletter: "С с",
    engletter: "S s",
    pronun: `The S in <b>S</b>ell`
    },
    {
    id: 24,
    kzletter: "Т т",
    engletter: "T t",
    pronun: `The T in <b>T</b>ell`
    },
    {
    id: 25,
    kzletter: "У у",
    engletter: "W w",
    pronun: `The U in T<b>u</b>be. It can sometimes sound like a W too, depending on the word`
    },
    {
    id: 26,
    kzletter: "Ұ ұ",
    engletter: "U u",
    pronun: `The U in Q<b>u</b>ote. The tongue moves back and the lips move forward`
    },
    {
    id: 27,
    kzletter: "Ү ү",
    engletter: "Ü ü",
    pronun: `The U in P<b>u</b>sh. The tongue and lips move forward`
    },
    {
    id: 28,
    kzletter: "Ф ф",
    engletter: "F f",
    pronun: `The F in <b>F</b>oot`
    },
    {
    id: 29,
    kzletter: "Х х",
    engletter: "H h",
    pronun: `The H in <b>H</b>all, but with the back of the throat as well`
    },
    {
    id: 30,
    kzletter: "Һ һ",
    engletter: "H h",
    pronun: `The H in <b>H</b>all`
    },
    {
    id: 31,
    kzletter: "Ч ч",
    engletter: "Ç ç",
    pronun: `The Ch in <b>Ch</b>oose`
    },
    {
    id: 32,
    kzletter: "Ш ш",
    engletter: "Ş ş",
    pronun: `The Sh in <b>Sh</b>oe.`
    },
    {
    id: 33,
    kzletter: "Щ щ",
    engletter: "Ŝ ŝ",
    pronun: `The Sch in <b>Sch</b>neider. The tip of the tongue is pointed forward and the back of the tongue is raised, sort of like an Shch sound`
    },
    {
    id: 34,
    kzletter: "Ы ы",
    engletter: "I ı",
    pronun: `Similar to the expression <b>Uh</b>`
    },
    {
    id: 35,
    kzletter: "I ı",
    engletter: "I i",
    pronun: `The I in <b>I</b>nside`
    },
    {
    id: 36,
    kzletter: "Ю ю",
    engletter: "Yu yu ",
    pronun: `Similar to the word <b>You</b>`
    },
    {
    id: 37,
    kzletter: "Я я",
    engletter: "Ya ya ",
    pronun: `The Ya in <b>Ya</b>wn`
    }
];

module.exports = alphabetGuide;