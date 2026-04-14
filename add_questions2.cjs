const fs = require('fs');

const newQuestionsData = [
  {
    "category": "Világháborúk és diktatúrák",
    "value": 100,
    "questions": [
      {
        "id": "elso-vh-100-01",
        "topic": "Első világháború",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik évben tört ki az első világháború?",
        "options": [
          "1912",
          "1914",
          "1916",
          "1918"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az első világháború 1914-ben tört ki, a szarajevói merényletet követő válság nyomán.",
        "skillFocus": "évszám",
        "oralExamLink": "Az első világháború kitörése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "elso-vh-100-02",
        "topic": "Első világháború",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik esemény szolgált közvetlen ürügyként az első világháború kitörésére?",
        "options": [
          "A versailles-i béke",
          "A szarajevói merénylet",
          "A bolsevik forradalom",
          "A müncheni egyezmény"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A szarajevói merénylet közvetlen ürügyet adott a háború kitöréséhez.",
        "skillFocus": "fogalom",
        "oralExamLink": "A háború kirobbanásának közvetlen oka",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 200,
    "questions": [
      {
        "id": "elso-vh-200-01",
        "topic": "Első világháború",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik hadviselési forma vált jellemzővé a nyugati fronton?",
        "options": [
          "Gerillaháború",
          "Állóháború",
          "Tengeri blokád kizárólagos háborúja",
          "Légi háború önmagában"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A nyugati fronton az állóháború, vagyis a lövészárokrendszerekre épülő hadviselés vált jellemzővé.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az első világháború jellege",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "elso-vh-200-02",
        "topic": "Első világháború",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Miért vált különösen pusztítóvá az első világháború?",
        "options": [
          "Mert kizárólag lovassági rohamok döntötték el",
          "Mert a modern ipari fegyverek tömegesen jelentek meg",
          "Mert nem vontak be tömeghadseregeket",
          "Mert a harcok csak gyarmatokon zajlottak"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A géppuskák, tüzérség, gázfegyverek és más modern eszközök soha nem látott pusztítást okoztak.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Az első világháború új hadviselése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 300,
    "questions": [
      {
        "id": "elso-vh-300-01",
        "topic": "Első világháború",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért játszottak fontos szerepet a szövetségi rendszerek az első világháború kirobbanásában?",
        "options": [
          "Mert megakadályozták, hogy a konfliktus túlnőjön a Balkánon",
          "Mert egy helyi válságot nagyhatalmi háborúvá szélesítettek",
          "Mert felszámolták a nagyhatalmi ellentéteket",
          "Mert minden állam semleges maradt"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A szövetségi rendszerek miatt a balkáni konfliktus gyorsan európai, majd világháborúvá szélesedett.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Szövetségi rendszerek és háború",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "elso-vh-300-02",
        "topic": "Első világháború",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legpontosabban az első világháború jellegét?",
        "options": [
          "Rövid, gyorsan lezajló helyi háború volt",
          "Korlátozott dinasztikus konfliktus volt tömeghadseregek nélkül",
          "Totális jellegű, ipari méretű háborúvá vált",
          "Főként gyarmati rendfenntartó akció volt"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A háború egyre inkább a társadalom és gazdaság egészét mozgósító, totális konfliktussá vált.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az első világháború jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 400,
    "questions": [
      {
        "id": "elso-vh-400-01",
        "topic": "Első világháború",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi különböztette meg leginkább az első világháborút a korábbi 19. századi európai háborúktól?",
        "options": [
          "Az, hogy kizárólag hivatásos kis hadseregek harcoltak benne",
          "Az, hogy a társadalom és gazdaság teljesebb mozgósításával zajlott",
          "Az, hogy nem használtak modern technikai eszközöket",
          "Az, hogy csak egyetlen fronton folyt"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az első világháború egyik újdonsága a tömeges mozgósítás és az ipari hátország meghatározó szerepe volt.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "A modern tömegháború sajátosságai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "elso-vh-400-02",
        "topic": "Első világháború",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás az első világháborúval kapcsolatban?",
        "options": [
          "A nyugati fronton állóháború alakult ki",
          "A háborúban új fegyverek és technológiák jelentek meg",
          "Az első világháború után a békerendszer számos új feszültséget hagyott maga után",
          "A konfliktus teljesen érintetlenül hagyta Európa politikai térképét"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ez hibás, mert a háború után birodalmak omlottak össze, és jelentősen átalakult Európa térképe.",
        "skillFocus": "következtetés",
        "oralExamLink": "A háború következményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 500,
    "questions": [
      {
        "id": "elso-vh-500-01",
        "topic": "Első világháború",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető az első világháború fordulópontnak a 20. századi európai történelemben?",
        "options": [
          "Mert felszámolta a tömegháborúk lehetőségét",
          "Mert birodalmak bukásához, forradalmakhoz és új államok létrejöttéhez vezetett",
          "Mert teljesen megakadályozta a későbbi diktatúrák kialakulását",
          "Mert megszüntette a nemzetiségi kérdéseket Európában"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az első világháború mély politikai és társadalmi átrendeződést indított el Európában.",
        "skillFocus": "következtetés",
        "oralExamLink": "Az első világháború történelmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "elso-vh-500-02",
        "topic": "Első világháború",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban az első világháborút lezáró békerendszer egyik fő problémáját?",
        "options": [
          "Teljesen megszüntette a nagyhatalmi ellentéteket",
          "Tartósan és minden fél számára igazságosan rendezte Európa viszonyait",
          "Számos sérelmet és instabilitási tényezőt hagyott maga után",
          "Minden korábbi határt változatlanul meghagyott"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A békerendszer nem hozott minden fél számára elfogadható rendezést, ezért újabb feszültségek forrása lett.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az első világháborút lezáró békerendszer értékelése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },

  {
    "category": "Világháborúk és diktatúrák",
    "value": 100,
    "questions": [
      {
        "id": "masodik-vh-100-01",
        "topic": "Második világháború",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik évben tört ki a második világháború Európában?",
        "options": [
          "1936",
          "1938",
          "1939",
          "1941"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A második világháború Európában 1939-ben tört ki Lengyelország német megtámadásával.",
        "skillFocus": "évszám",
        "oralExamLink": "A második világháború kitörése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "masodik-vh-100-02",
        "topic": "Második világháború",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik ország megtámadása indította el közvetlenül a második világháborút Európában?",
        "options": [
          "Franciaország",
          "Lengyelország",
          "Norvégia",
          "Belgium"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Németország 1939-ben megtámadta Lengyelországot, ezzel robbant ki a háború Európában.",
        "skillFocus": "topográfia",
        "oralExamLink": "A háború közvetlen kezdete",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 200,
    "questions": [
      {
        "id": "masodik-vh-200-01",
        "topic": "Második világháború",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik hadviselési módszer kapcsolódik leginkább a háború korai német sikereihez?",
        "options": [
          "Állóháború",
          "Villámháború",
          "Partizánháború",
          "Tengeri blokád"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A német hadsereg korai sikereiben fontos szerepet játszott a gyors, összehangolt villámháborús hadviselés.",
        "skillFocus": "fogalom",
        "oralExamLink": "A háború korai hadműveletei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "masodik-vh-200-02",
        "topic": "Második világháború",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Miért számított fordulópontnak a sztálingrádi csata?",
        "options": [
          "Mert Németország ekkor elfoglalta egész Európát",
          "Mert a tengelyhatalmak ettől kezdve egyre inkább védekezésre szorultak a keleti fronton",
          "Mert ekkor lépett be Németország oldalán az Egyesült Államok",
          "Mert a csata után megszűnt a keleti front"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sztálingrád után a német hadsereg elvesztette stratégiai kezdeményezését a keleti fronton.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Fordulópontok a második világháborúban",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 300,
    "questions": [
      {
        "id": "masodik-vh-300-01",
        "topic": "Második világháború",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legjobban a második világháború jellegét?",
        "options": [
          "Korlátozott európai háború maradt",
          "Totális háborúvá vált, amely a civil lakosságot is tömegesen érintette",
          "Főként gyarmati csatározásokból állt",
          "Jelentőségét kizárólag a tengeri hadviselés adta"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A második világháború egyik fő jellemzője a totális jelleg és a civil lakosság tömeges érintettsége volt.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A második világháború sajátosságai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "masodik-vh-300-02",
        "topic": "Második világháború",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért tekinthető a normandiai partraszállás fontos fordulópontnak?",
        "options": [
          "Mert ezzel megszűnt a csendes-óceáni hadszíntér",
          "Mert a nyugati szövetségesek új frontot nyitottak Európában",
          "Mert ekkor adta meg magát Japán",
          "Mert a tengelyhatalmak elfoglalták Londont"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A normandiai partraszállás felgyorsította Nyugat-Európa felszabadítását és növelte a Németországra nehezedő nyomást.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "A nyugati front megnyitása",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 400,
    "questions": [
      {
        "id": "masodik-vh-400-01",
        "topic": "Második világháború",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi különböztette meg leginkább a második világháborút az első világháborútól?",
        "options": [
          "A második világháborúban nem alkalmaztak modern haditechnikát",
          "A második világháborúban a népirtás és a civil lakosság elleni tömeges erőszak még hangsúlyosabb szerepet kapott",
          "Az első világháború globálisabb volt, a második csak Európára korlátozódott",
          "A két világháború között nem volt lényeges különbség"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A második világháborúban a népirtás, a holokauszt és a civil lakosság elleni támadások különösen meghatározóvá váltak.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Az első és második világháború összevetése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "masodik-vh-400-02",
        "topic": "Második világháború",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás a második világháborúval kapcsolatban?",
        "options": [
          "A háború egyik fő jellemzője a totális hadviselés volt",
          "A holokauszt a korszak egyik legsúlyosabb bűncselekménye volt",
          "A háború végén Németország győztes nagyhatalomként került ki a konfliktusból",
          "A konfliktus több kontinensre is kiterjedt"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Ez hibás, mert Németország vereséget szenvedett, és a háború végén összeomlott.",
        "skillFocus": "következtetés",
        "oralExamLink": "A második világháború kimenetele",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Világháborúk és diktatúrák",
    "value": 500,
    "questions": [
      {
        "id": "masodik-vh-500-01",
        "topic": "Második világháború",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető a második világháború következménye a kétpólusú világrend kialakulása szempontjából is döntőnek?",
        "options": [
          "Mert a háború után minden nagyhatalom ereje azonos maradt",
          "Mert a háború után az Egyesült Államok és a Szovjetunió vált a két meghatározó szuperhatalommá",
          "Mert a konfliktus megszüntette az ideológiai ellentéteket",
          "Mert a háború után Európa maradt az egyetlen globális hatalmi központ"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A második világháború után a nemzetközi rendszer kétpólusúvá vált az USA és a Szovjetunió vezető szerepével.",
        "skillFocus": "következtetés",
        "oralExamLink": "A második világháború következményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "masodik-vh-500-02",
        "topic": "Második világháború",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés foglalja össze legpontosabban a második világháború történelmi jelentőségét?",
        "options": [
          "Kizárólag katonai konfliktus volt, mélyebb társadalmi következmények nélkül",
          "Világméretű, totális konfliktus volt, amely alapvetően átrendezte a politikai, társadalmi és erkölcsi viszonyokat",
          "Főként gazdasági verseny volt hadműveletek nélkül",
          "Nem gyakorolt tartós hatást a 20. század második felére"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez a válasz foglalja össze legjobban a háború összetett és hosszú távú jelentőségét.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A második világháború történelmi értékelése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  }
];

const categoryMap = {
  "Világháborúk és diktatúrák": "cat4"
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
