const fs = require('fs');

const newQuestionsData = [
  {
    "category": "Diktatúrák és hidegháború",
    "value": 100,
    "questions": [
      {
        "id": "rakosi-gazd-100-01",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik gazdasági irány jellemezte leginkább a Rákosi-korszakot?",
        "options": [
          "Szabadpiaci kapitalizmus",
          "Tervgazdaság",
          "Feudális önellátás",
          "Kereskedelmi liberalizmus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A Rákosi-korszak gazdaságpolitikáját a központilag irányított tervgazdaság határozta meg.",
        "skillFocus": "fogalom",
        "oralExamLink": "A Rákosi-korszak gazdasági jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "rakosi-gazd-100-02",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik ágazatot fejlesztették erőltetetten a Rákosi-korszakban?",
        "options": [
          "Könnyűipar",
          "Nehézipar",
          "Idegenforgalom",
          "Magánkereskedelem"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A korszak gazdaságpolitikája elsősorban a nehézipar fejlesztését erőltette.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Iparosítás a Rákosi-korszakban",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Diktatúrák és hidegháború",
    "value": 200,
    "questions": [
      {
        "id": "rakosi-gazd-200-01",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Miért okozott feszültséget a mezőgazdaságban a beszolgáltatási rendszer?",
        "options": [
          "Mert növelte a parasztság szabad piaci mozgásterét",
          "Mert kötelező terménybeszolgáltatást írt elő, ami súlyosan terhelte a parasztokat",
          "Mert megszüntette az állami ellenőrzést",
          "Mert csak az ipari munkásokat érintette"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A beszolgáltatás a parasztságot erősen terhelte, és az állami kényszer fontos eszköze volt.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Beszolgáltatás és falusi társadalom",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "rakosi-gazd-200-02",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik fogalom kapcsolódik leginkább a Rákosi-korszak mezőgazdaságához?",
        "options": [
          "Kollektivizálás",
          "Részvénytársaság",
          "Szabad bérlet",
          "Ipartelepítés"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A korszakban a mezőgazdaságot kollektivizálni akarták, vagyis termelőszövetkezetekbe terelni.",
        "skillFocus": "fogalom",
        "oralExamLink": "A mezőgazdaság átalakítása",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Diktatúrák és hidegháború",
    "value": 300,
    "questions": [
      {
        "id": "rakosi-gazd-300-01",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Mi volt az erőltetett nehézipari fejlesztés egyik fontos következménye a lakosság életében?",
        "options": [
          "Gyors életszínvonal-emelkedés és bőség",
          "A fogyasztási cikkek hiánya és az életszínvonal romlása",
          "A magánvállalkozások megerősödése",
          "A mezőgazdaság önállóságának növekedése"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A nehézipar túlzott erőltetése a lakossági fogyasztás rovására történt.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Gazdaságpolitika és mindennapi élet",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "rakosi-gazd-300-02",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legpontosabban a Rákosi-korszak gazdaságpolitikáját?",
        "options": [
          "A piac igényeihez igazodó, rugalmas gazdasági irányítás jellemezte",
          "A központi tervutasítás és a politikailag vezérelt gazdasági döntések domináltak",
          "Elsősorban a szolgáltatószektort fejlesztették",
          "A mezőgazdaság és a könnyűipar kapott elsőbbséget a nehéziparral szemben"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A korszakban a gazdasági döntések politikai alapon, központi tervek szerint születtek.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A diktatórikus gazdaságirányítás jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Diktatúrák és hidegháború",
    "value": 400,
    "questions": [
      {
        "id": "rakosi-gazd-400-01",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Melyik különbség ragadja meg legjobban a Rákosi-korszak gazdaságpolitikája és egy piacgazdaság működése közti eltérést?",
        "options": [
          "A Rákosi-korszakban a vállalatok szabadon döntöttek a termelésről",
          "A piacgazdaságban központi pártutasítások határozzák meg a teljes termelést",
          "A Rákosi-korszakban a központi terv és a politikai akarat fontosabb volt a piaci igényeknél",
          "A két rendszer között gazdaságirányítási szempontból nem volt lényeges különbség"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Ez különíti el legvilágosabban a tervutasításos gazdaságot a piaci alapon működő rendszertől.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Tervgazdaság és piacgazdaság összevetése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "rakosi-gazd-400-02",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás a Rákosi-korszak gazdaságpolitikájával kapcsolatban?",
        "options": [
          "Az iparosításban a nehézipar elsőbbséget élvezett",
          "A mezőgazdaságban a kollektivizálás fontos cél volt",
          "A gazdaságirányítás alapja a tervutasításos rendszer volt",
          "A korszak fő jellemzője a magánvállalkozások széles körű támogatása volt"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ez hibás állítás, mert a Rákosi-korszak nem a magánvállalkozások támogatására, hanem az állami irányításra épült.",
        "skillFocus": "következtetés",
        "oralExamLink": "A Rákosi-korszak gazdaságpolitikai alapelvei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Diktatúrák és hidegháború",
    "value": 500,
    "questions": [
      {
        "id": "rakosi-gazd-500-01",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető a Rákosi-korszak gazdaságpolitikája egyben társadalomátalakító eszköznek is?",
        "options": [
          "Mert kizárólag gazdasági hatékonysági szempontok irányították",
          "Mert a gazdasági intézkedések politikai ellenőrzést és társadalmi kényszert is szolgáltak",
          "Mert teljesen független volt az állampárttól",
          "Mert a rendszer minden rétegnek azonos életszínvonal-emelkedést biztosított"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A gazdaságpolitika nem pusztán termelési kérdés volt, hanem a társadalom feletti kontroll egyik fő eszköze is.",
        "skillFocus": "következtetés",
        "oralExamLink": "Gazdaságpolitika és diktatórikus hatalomgyakorlás",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "rakosi-gazd-500-02",
        "topic": "Rákosi-korszak gazdaságpolitikája",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban a Rákosi-korszak gazdaságpolitikájának fő ellentmondását?",
        "options": [
          "A rendszer egyszerre akart gyors iparosítást és magas fogyasztói jólétet, de az előbbit a lakosság rovására erőltette",
          "A rendszer teljesen piacbarát volt, de nem tudta megszüntetni a magántulajdont",
          "A gazdaságpolitikában a mezőgazdaságot minden más ágazat fölé helyezték",
          "A korszak fő célja a demokratikus vállalatirányítás megteremtése volt"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A gazdaságpolitika egyik fő ellentmondása az volt, hogy a gyors iparosítás ára a lakosság életszínvonalának romlása lett.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A Rákosi-korszak gazdaságpolitikájának értékelése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },

  {
    "category": "Középkor és magyar állam",
    "value": 100,
    "questions": [
      {
        "id": "ivbela-100-01",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik uralkodóhoz kötődik a tatárjárás és az azt követő újjáépítés Magyarországon?",
        "options": [
          "II. András",
          "IV. Béla",
          "I. Károly",
          "Könyves Kálmán"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A tatárjárás idején és az újjáépítés során IV. Béla uralkodott.",
        "skillFocus": "személy",
        "oralExamLink": "IV. Béla történelmi szerepe",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ivbela-100-02",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik évben zajlott a tatárjárás Magyarországon?",
        "options": [
          "1222–1223",
          "1241–1242",
          "1301–1302",
          "1456–1457"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A tatárjárás Magyarországon 1241–1242-ben zajlott.",
        "skillFocus": "évszám",
        "oralExamLink": "A tatárjárás kronológiája",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és magyar állam",
    "value": 200,
    "questions": [
      {
        "id": "ivbela-200-01",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik csata kapcsolódik közvetlenül a tatárjárás magyarországi eseményeihez?",
        "options": [
          "Mohács",
          "Muhi",
          "Pákozd",
          "Nándorfehérvár"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A muhi csata a tatárjárás legfontosabb magyarországi ütközete volt.",
        "skillFocus": "topográfia",
        "oralExamLink": "A tatárjárás fő eseményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ivbela-200-02",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Miért törekedett IV. Béla a tatárjárás után kővárak építésére?",
        "options": [
          "Mert csak így lehetett növelni az egyházi birtokokat",
          "Mert egy újabb támadás ellen erősebb védelmet akart kialakítani",
          "Mert a tatárok ezt követelték a kivonulásuk után",
          "Mert meg akarta szüntetni a városokat"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A tatárjárás megmutatta, hogy az országnak erősebb védelmi rendszerre van szüksége.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Az újjáépítés katonai céljai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és magyar állam",
    "value": 300,
    "questions": [
      {
        "id": "ivbela-300-01",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik intézkedés tartozott IV. Béla újjáépítő politikájához?",
        "options": [
          "A városfejlődés visszaszorítása",
          "A kővárépítés támogatása és a telepesek betelepítése",
          "A kunok végleges kiűzése az országból",
          "A királyi vármegyrendszer teljes felszámolása"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IV. Béla az újjáépítés részeként támogatta a várépítést és telepeseket hívott be az országba.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az újjáépítés fő lépései",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ivbela-300-02",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért változtatott IV. Béla a politikáján a tatárjárás után?",
        "options": [
          "Mert teljesen megszűnt a külső támadás veszélye",
          "Mert a pusztítás rámutatott az ország védelmi és településszerkezeti gyengeségeire",
          "Mert a bárók megtiltották neki az újjáépítést",
          "Mert a pápa a királyság megszüntetését javasolta"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A tatárjárás után nyilvánvalóvá vált, hogy az ország szerkezetét és védelmét meg kell erősíteni.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "A tatárjárás következményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és magyar állam",
    "value": 400,
    "questions": [
      {
        "id": "ivbela-400-01",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Miben jelentett fordulatot IV. Béla politikája a tatárjárás után a korábbi elképzeléseihez képest?",
        "options": [
          "Feladta a királyi hatalom megerősítésének minden formáját",
          "A korábbi birtok-visszavételi törekvések után nagyobb szerepet adott a birtokadományozásnak és a várépítésnek",
          "Megszüntette a városok fejlődésének támogatását",
          "Teljesen lemondott a kunok visszahívásáról"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez mutatja legjobban a tatárjárás utáni politikai fordulatot IV. Béla uralkodásában.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "IV. Béla politikájának változása",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ivbela-400-02",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás IV. Béla újjáépítő politikájával kapcsolatban?",
        "options": [
          "Támogatta a kővárak építését",
          "Elősegítette új telepesek betelepülését",
          "A városfejlődést is ösztönözte",
          "A tatárjárás után mindenáron megakadályozta a kunok visszatérését"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ez hibás, mert IV. Béla visszahívta a kunokat is.",
        "skillFocus": "következtetés",
        "oralExamLink": "Újjáépítés és betelepítések",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és magyar állam",
    "value": 500,
    "questions": [
      {
        "id": "ivbela-500-01",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért nevezik gyakran IV. Bélát „második honalapítónak”?",
        "options": [
          "Mert ő vezette a honfoglalást a 9. században",
          "Mert a tatárjárás utáni újjáépítéssel és átszervezéssel új alapokra helyezte az ország működését",
          "Mert ő alapította meg az Árpád-házat",
          "Mert megszüntette a középkori magyar államot és új országot hozott létre"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A tatárjárás utáni újjáépítő tevékenysége miatt kapta ezt az értékelő megnevezést.",
        "skillFocus": "következtetés",
        "oralExamLink": "IV. Béla történelmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ivbela-500-02",
        "topic": "IV. Béla uralkodása: tatárjárás és újjáépítés",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés foglalja össze legpontosabban a tatárjárás hatását IV. Béla uralkodására?",
        "options": [
          "A tatárjárás alig befolyásolta IV. Béla politikáját",
          "A tatárjárás arra kényszerítette, hogy a királyság védelmét, településhálózatát és népességpolitikáját is újragondolja",
          "A tatárjárás után IV. Béla teljesen lemondott az ország megerősítéséről",
          "A tatárjárás egyedüli következménye az volt, hogy megszűnt a városfejlődés"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez a válasz foglalja össze legjobban a katasztrófa komplex politikai következményeit.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A tatárjárás hosszú távú következményei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },

  {
    "category": "Kora újkor és alkotmányosság",
    "value": 100,
    "questions": [
      {
        "id": "angol-alkm-100-01",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik országban alakult ki az alkotmányos monarchia klasszikus formája a 17. század végén?",
        "options": [
          "Franciaországban",
          "Angliában",
          "Spanyolországban",
          "Oroszországban"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az alkotmányos monarchia kialakulásának klasszikus példája Anglia.",
        "skillFocus": "topográfia",
        "oralExamLink": "Az angol alkotmányos monarchia alapjai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "angol-alkm-100-02",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik dokumentum kapcsolódik közvetlenül az angol alkotmányos monarchia kialakulásához?",
        "options": [
          "Emberi és polgári jogok nyilatkozata",
          "Jognyilatkozat",
          "Aranybulla",
          "Pragmatica Sanctio"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az angol alkotmányos monarchia kialakulásában meghatározó volt a Jognyilatkozat elfogadása.",
        "skillFocus": "fogalom",
        "oralExamLink": "Jognyilatkozat és alkotmányosság",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és alkotmányosság",
    "value": 200,
    "questions": [
      {
        "id": "angol-alkm-200-01",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik uralkodót hívták meg a trónra 1688 után Angliában?",
        "options": [
          "I. Károlyt",
          "Orániai Vilmost",
          "Napóleont",
          "XIV. Lajost"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A dicsőséges forradalom után Orániai Vilmos került az angol trónra.",
        "skillFocus": "személy",
        "oralExamLink": "A dicsőséges forradalom",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "angol-alkm-200-02",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Mi volt az angol alkotmányos monarchia egyik legfontosabb következménye?",
        "options": [
          "A király korlátlan hatalma megerősödött",
          "A parlament szerepe megnőtt a kormányzásban",
          "Megszűnt minden választás",
          "Angliában eltörölték a kormány intézményét"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az alkotmányos monarchiában a király hatalma korlátozottabb lett, a parlament szerepe pedig erősödött.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Parlament és király viszonya",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és alkotmányosság",
    "value": 300,
    "questions": [
      {
        "id": "angol-alkm-300-01",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legjobban az angol alkotmányos monarchia lényegét?",
        "options": [
          "A király uralkodik, de a hatalom gyakorlása korlátozott és a parlament szerepe meghatározó",
          "A király kizárólag rendeletekkel, parlament nélkül kormányoz",
          "A nemesség teljesen megszüntette a királyi intézményt",
          "A hadsereg dönt minden politikai kérdésben"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ez foglalja össze legpontosabban az angol alkotmányos monarchia alapelvét.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az alkotmányos monarchia lényege",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "angol-alkm-300-02",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért jelentett fordulatot a Jognyilatkozat elfogadása az angol állam fejlődésében?",
        "options": [
          "Mert megszüntette a parlamentet",
          "Mert korlátozta a királyi hatalmat és megerősítette az alkotmányos kormányzást",
          "Mert bevezette az abszolút monarchiát",
          "Mert Angliát köztársasággá alakította"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A Jognyilatkozat alapvető lépés volt a királyi hatalom korlátozása és a parlamenti elvek megerősítése felé.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "A Jognyilatkozat jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és alkotmányosság",
    "value": 400,
    "questions": [
      {
        "id": "angol-alkm-400-01",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi különböztette meg leginkább az angol alkotmányos monarchiát a francia abszolutizmustól?",
        "options": [
          "Angliában a parlamentnek meghatározóbb szerepe volt, míg Franciaországban az uralkodói központosítás erősebb volt",
          "Angliában nem létezett királyi hatalom",
          "Franciaországban a parlament irányította az országot",
          "A két rendszer között nem volt lényeges különbség"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ez a legfontosabb különbség az alkotmányos monarchia és az abszolutizmus között.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Anglia és Franciaország államformájának összevetése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "angol-alkm-400-02",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás az angol alkotmányos monarchiával kapcsolatban?",
        "options": [
          "A király hatalma korlátozottabb lett",
          "A parlament szerepe megerősödött",
          "A kormány a végrehajtó hatalom gyakorlásában fontos szerepet kapott",
          "Az alkotmányos monarchia lényege a király korlátlan, abszolút uralma volt"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ez hibás állítás, mert éppen a királyi hatalom korlátozása volt a rendszer lényege.",
        "skillFocus": "következtetés",
        "oralExamLink": "Az alkotmányos monarchia jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Kora újkor és alkotmányosság",
    "value": 500,
    "questions": [
      {
        "id": "angol-alkm-500-01",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban az angol alkotmányos monarchia történelmi jelentőségét?",
        "options": [
          "Az uralkodói abszolutizmus legtisztább formáját valósította meg",
          "Mintát adott arra, hogyan lehet a királyi intézményt a parlamenti korlátokkal összeegyeztetni",
          "Megszüntette a képviseleti kormányzás minden formáját",
          "Teljesen felszámolta a törvényhozás szerepét"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ez ragadja meg legjobban az angol alkotmányos monarchia hosszú távú történelmi jelentőségét.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az angol alkotmányosság történelmi hatása",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "angol-alkm-500-02",
        "topic": "Angol alkotmányos monarchia",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető az angol alkotmányos monarchia kialakulása a modern parlamenti rendszerek egyik előzményének?",
        "options": [
          "Mert megszüntette a kormány felelősségét",
          "Mert a végrehajtó hatalom egyre inkább a parlamenti többséghez kapcsolódott",
          "Mert a király kizárólagos törvényhozóvá vált",
          "Mert Angliában minden állami intézményt feloszlattak"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Az angol fejlődés egyik kulcsa, hogy a kormányzás fokozatosan a parlamenti többséghez kötődött.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Parlamentáris fejlődés Angliában",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  }
];

const categoryMap = {
  "Középkor és magyar állam": "cat1",
  "Kora újkor és alkotmányosság": "cat2",
  "Diktatúrák és hidegháború": "cat5"
};

let content = fs.readFileSync('src/data/questions.ts', 'utf-8');

// Use a simple regex to find the gameBoard array
// We can just extract everything from `export const gameBoard: BoardCell[] = [` to the end of the array
const startStr = 'export const gameBoard: BoardCell[] = [';
const startIdx = content.indexOf(startStr);

if (startIdx !== -1) {
  // Find the matching closing bracket for the array
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
    
    // Parse the array
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
