const fs = require('fs');

const newQuestionsData = [
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 100,
    "questions": [
      {
        "id": "varhaboruk-100-01",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik évben zajlott a mohácsi csata?",
        "options": [
          "1456",
          "1526",
          "1541",
          "1568"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A mohácsi csata 1526-ban zajlott, és döntő fordulatot hozott a magyar történelemben.",
        "skillFocus": "évszám",
        "oralExamLink": "A mohácsi csata jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "varhaboruk-100-02",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik uralkodó halt meg a mohácsi csata idején?",
        "options": [
          "I. Ferdinánd",
          "Szapolyai János",
          "II. Lajos",
          "Hunyadi Mátyás"
        ],
        "correctAnswerIndex": 2,
        "explanation": "II. Lajos király a mohácsi vereség után menekülés közben meghalt.",
        "skillFocus": "személy",
        "oralExamLink": "Mohács és az uralkodói válság",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 200,
    "questions": [
      {
        "id": "varhaboruk-200-01",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik eseményhez kötjük az ország tényleges három részre szakadását?",
        "options": [
          "A várnai csatához",
          "Buda 1541-es török elfoglalásához",
          "A drinápolyi békéhez",
          "A speyeri szerződéshez"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Buda 1541-es elfoglalása után vált tartóssá az ország három részre szakadása.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Az ország három részre szakadása",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "varhaboruk-200-02",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik vár 1552-es védelme vált a törökellenes harcok egyik legismertebb eseményévé?",
        "options": [
          "Visegrád",
          "Eger",
          "Pozsony",
          "Temesvár"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Eger 1552-es sikeres védelme a várháborúk egyik legismertebb eseménye.",
        "skillFocus": "topográfia",
        "oralExamLink": "A várháborúk fő eseményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 300,
    "questions": [
      {
        "id": "varhaboruk-300-01",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért vezetett a mohácsi vereség tartós belpolitikai válsághoz Magyarországon?",
        "options": [
          "Mert azonnal megszűnt minden külső támadás veszélye",
          "Mert trónviszály és külső beavatkozás is követte a vereséget",
          "Mert a magyar rendek rögtön egységesen támogatták ugyanazt az uralkodót",
          "Mert a török hadsereg teljesen kivonult a térségből"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Mohács után kettős királyválasztás és külső hatalmi beavatkozás alakult ki, ami elmélyítette a válságot.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Mohács politikai következményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "varhaboruk-300-02",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legpontosabban a várháborúk korszakát?",
        "options": [
          "Rövid, elszigetelt összecsapások voltak tartós hatás nélkül",
          "A török előretörés és a végvári védelem hosszú küzdelmének időszaka volt",
          "A korszakban Magyarország teljesen egységes állam maradt",
          "A harcok kizárólag tengeri hadműveletekből álltak"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A korszak lényege a török terjeszkedés és az ellene szerveződő végvári védelem volt.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A várháborúk történeti jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 400,
    "questions": [
      {
        "id": "varhaboruk-400-01",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi különböztette meg leginkább a három országrész helyzetét a 16. század közepén?",
        "options": [
          "Mindhárom országrész azonos uralkodó alatt, azonos közigazgatással működött",
          "A királyi Magyarország Habsburg fennhatóság alatt állt, a középső területek török uralom alá kerültek, Erdély pedig sajátos önállóságot élvezett",
          "Erdély közvetlenül az oszmán birodalom egyik tartománya lett minden önállóság nélkül",
          "A királyi Magyarország és a hódoltság között nem volt politikai különbség"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez foglalja össze legpontosabban a három országrész eltérő politikai helyzetét.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "A három országrész berendezkedése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "varhaboruk-400-02",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás a várháborúk korával kapcsolatban?",
        "options": [
          "A mohácsi csata után trónviszály bontakozott ki",
          "Buda 1541-es elfoglalása fontos fordulópont volt",
          "A végvári rendszer fontos szerepet játszott a védelemben",
          "Az 1568-ig tartó időszakban a török veszély teljesen megszűnt Magyarországon"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ez hibás állítás, mert a török veszély a korszakban továbbra is meghatározó maradt.",
        "skillFocus": "következtetés",
        "oralExamLink": "A törökellenes harcok értékelése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 500,
    "questions": [
      {
        "id": "varhaboruk-500-01",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető a mohácsi csata utáni időszak nemcsak katonai, hanem államszerkezeti fordulópontnak is Magyarország történetében?",
        "options": [
          "Mert a vereség után változatlanul fennmaradt az egységes középkori királyság",
          "Mert a vereséget követően a politikai hatalom, a területi berendezkedés és a külpolitikai orientáció is alapvetően átalakult",
          "Mert a csata után Magyarország azonnal független köztársasággá vált",
          "Mert a korszakban megszűntek a külső hatalmi befolyások"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Mohács után nemcsak katonai vereség történt, hanem a magyar állam szerkezete és mozgástere is gyökeresen megváltozott.",
        "skillFocus": "következtetés",
        "oralExamLink": "Mohács hosszú távú történelmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "varhaboruk-500-02",
        "topic": "Várháborúk kora – Mohácsi csatától 1568-ig",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban a várháborúk korszakának történelmi jelentőségét?",
        "options": [
          "A korszaknak alig volt hosszabb távú hatása a magyar fejlődésre",
          "A korszak meghatározta a három országrész kialakulását, a végvári rendszer szerepét és a magyar állam mozgásterének beszűkülését",
          "A korszak egyedüli következménye a tengeri kereskedelem fellendülése volt",
          "A várháborúk lezárultával Magyarország teljes területi egysége helyreállt"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez foglalja össze legjobban a korszak tartós politikai és katonai következményeit.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A várháborúk kora mint történelmi fordulópont",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },

  {
    "category": "Kora újkor és három részre szakadás",
    "value": 100,
    "questions": [
      {
        "id": "reformacio-erdely-100-01",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik vallási megújulási mozgalom terjedt el Magyarországon a 16. században?",
        "options": [
          "Humanizmus",
          "Reformáció",
          "Skolasztika",
          "Ortodoxia"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A 16. században Magyarországon is elterjedtek a reformáció különböző irányzatai.",
        "skillFocus": "fogalom",
        "oralExamLink": "A reformáció megjelenése Magyarországon",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "reformacio-erdely-100-02",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik terület kapcsolódik különösen szorosan a vallási türelem és a sokfelekezetűség kérdéséhez a 16. századi magyar történelemben?",
        "options": [
          "A Hódoltság",
          "Erdély",
          "Morvaország",
          "Dalmácia"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Erdély sajátos vallási és etnikai helyzete miatt különösen fontos a reformáció történetében.",
        "skillFocus": "topográfia",
        "oralExamLink": "Erdély vallási sajátosságai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 200,
    "questions": [
      {
        "id": "reformacio-erdely-200-01",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik fejedelemhez kötődik Erdély virágkora és a protestáns irányzatok erősödése?",
        "options": [
          "Bethlen Gábor",
          "II. András",
          "I. Károly",
          "Károly Róbert"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Bethlen Gábor fejedelemsége fontos szerepet játszott Erdély politikai és vallási fejlődésében.",
        "skillFocus": "személy",
        "oralExamLink": "Bethlen Gábor és Erdély",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "reformacio-erdely-200-02",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Mi segítette elő a reformáció gyors terjedését Magyarországon a 16. században?",
        "options": [
          "Az, hogy minden terület központilag egységes egyházi irányítás alatt maradt",
          "A politikai megosztottság és az egyházi viszonyok megrendülése",
          "A török hódítás teljes megszűnése",
          "Az, hogy a katolikus egyház minden társadalmi rétegben megerősödött"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A korszak válságai és a politikai megosztottság is kedveztek a reformáció terjedésének.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "A reformáció magyarországi terjedésének okai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 300,
    "questions": [
      {
        "id": "reformacio-erdely-300-01",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legjobban Erdély vallási helyzetét a kora újkorban?",
        "options": [
          "Teljes vallási egység jellemezte, kizárólag katolikus lakossággal",
          "Több felekezet együttélésének sajátos terepe volt",
          "Csak ortodox vallási közösségek éltek ott",
          "A reformáció Erdélyt teljesen elkerülte"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Erdély egyik sajátossága a több felekezet együttélése és a vallási sokszínűség volt.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Erdély sajátos vallási helyzete",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "reformacio-erdely-300-02",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért vált Erdély a vallási sokszínűség egyik fontos központjává?",
        "options": [
          "Mert minden felekezetet teljesen kizártak a közéletből",
          "Mert a politikai és társadalmi viszonyok lehetővé tették több irányzat jelenlétét",
          "Mert Erdélyben megszűnt minden állami hatalom",
          "Mert ott kizárólag az iszlám vallás terjedt el"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Erdély sajátos politikai helyzete kedvezett a vallási pluralizmusnak.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Vallási pluralizmus Erdélyben",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 400,
    "questions": [
      {
        "id": "reformacio-erdely-400-01",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi különböztette meg leginkább Erdély vallási helyzetét a királyi Magyarországétól a kora újkorban?",
        "options": [
          "Erdélyben semmilyen protestáns irányzat nem jelent meg",
          "Erdélyben sajátosabb vallási pluralizmus alakult ki",
          "A királyi Magyarországon teljes vallási szabadság működött minden korban",
          "A két terület között nem volt vallási különbség"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Erdély egyik jellegzetessége a vallási sokszínűség és a több felekezet együttélése volt.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Erdély és a királyi Magyarország vallási viszonyai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "reformacio-erdely-400-02",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás a reformáció magyarországi és erdélyi történetével kapcsolatban?",
        "options": [
          "A reformáció több irányzata is elterjedt Magyarországon",
          "Erdély vallási szempontból sajátos helyzetű terület volt",
          "A reformáció teljesen elszigetelt jelenség maradt Erdélyben és nem befolyásolta a társadalmat",
          "A katolikus megújulás is része volt a korszak vallási folyamatainak"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Ez hibás állítás, mert a reformáció Erdély társadalmi és politikai életére is jelentős hatást gyakorolt.",
        "skillFocus": "következtetés",
        "oralExamLink": "A reformáció társadalmi hatása Erdélyben",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és három részre szakadás",
    "value": 500,
    "questions": [
      {
        "id": "reformacio-erdely-500-01",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető a reformáció magyarországi története egyben politikai és társadalmi kérdésnek is, nem pusztán vallási folyamatnak?",
        "options": [
          "Mert kizárólag hittételekről szólt, társadalmi hatás nélkül",
          "Mert a felekezeti változások összefonódtak a politikai megosztottsággal és a társadalmi átalakulással",
          "Mert a reformáció idején megszűnt minden állami hatalom",
          "Mert Magyarországon nem is terjedtek el protestáns irányzatok"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A reformáció nemcsak vallási, hanem politikai és társadalmi következményekkel járó folyamat volt.",
        "skillFocus": "következtetés",
        "oralExamLink": "A reformáció összetett történelmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "reformacio-erdely-500-02",
        "topic": "Reformáció Magyarországon / Erdély",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban Erdély történelmi jelentőségét a reformáció korában?",
        "options": [
          "Erdély a vallási egység és az egyetlen felekezet uralmának mintaterülete volt",
          "Erdély a vallási sokszínűség és a sajátos politikai mozgástér miatt a korszak különleges központjává vált",
          "Erdély teljesen kívül maradt a kora újkori vallási folyamatokon",
          "Erdély szerepe kizárólag katonai jelentőségű volt"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez foglalja össze legjobban Erdély különleges helyét a magyar és közép-európai reformáció történetében.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Erdély történelmi szerepe a reformáció korában",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  }
];

const categoryMap = {
  "Kora újkor és három részre szakadás": "cat2"
};

let content = fs.readFileSync('src/data/questions.ts', 'utf-8');

const startStr = 'export const gameBoard: BoardCell[] = [';
const startIdx = content.indexOf(startStr);

if (startIdx !== -1) {
  let bracketCount = 0;
  let endIdx = -1;
  let inString = false;
  let escape = false;
  
  for (let i = startIdx + startStr.length - 1; i < content.length; i++) {
    const char = content[i];
    
    if (escape) {
      escape = false;
      continue;
    }
    
    if (char === '\\') {
      escape = true;
      continue;
    }
    
    if (char === '"' || char === "'") {
      if (!inString) {
        inString = char;
      } else if (inString === char) {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '[') bracketCount++;
      if (char === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }
  }
  
  if (endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    const arrayStr = content.substring(startIdx + startStr.length - 1, endIdx);
    
    const vm = require('vm');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(`var gameBoard = ${arrayStr};`, sandbox);
    
    const gameBoard = sandbox.gameBoard;
    
    newQuestionsData.forEach(newGroup => {
      const catId = categoryMap[newGroup.category];
      const points = newGroup.value;
      
      const cell = gameBoard.find(c => c.categoryId === catId && c.points === points);
      if (cell) {
        newGroup.questions.forEach(q => {
          if (!cell.questions.find(existingQ => existingQ.id === q.id)) {
            cell.questions.push(q);
          }
        });
      }
    });
    
    const newArrayStr = JSON.stringify(gameBoard, null, 4);
    const newContent = before + 'export const gameBoard: BoardCell[] = ' + newArrayStr + after;
    
    fs.writeFileSync('src/data/questions.ts', newContent, 'utf-8');
    console.log('Successfully updated questions.ts');
  } else {
    console.log('Could not find end of gameBoard array');
  }
} else {
  console.log('Could not find gameBoard array');
}
