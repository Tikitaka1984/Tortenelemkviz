const fs = require('fs');

const input = [
  {
    "category": "Középkor és kultúra",
    "value": 100,
    "questions": [
      {
        "id": "kozepkor-muvelodese-100-01",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik intézmény vált a középkori művelődés egyik legfontosabb központjává?",
        "options": [
          "Gyár",
          "Egyetem",
          "Tőzsde",
          "Parlament"
        ],
        "correctAnswer": "Egyetem",
        "explanation": "A középkorban az egyetemek a művelődés és az oktatás kiemelt központjai lettek.",
        "skillFocus": "fogalom",
        "oralExamLink": "A középkori művelődés központjai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "kozepkor-muvelodese-100-02",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik stílusra jellemzők a vastag falak és a félköríves záródások?",
        "options": [
          "Román",
          "Gótikus",
          "Barokk",
          "Klasszicista"
        ],
        "correctAnswer": "Román",
        "explanation": "A román stílus egyik alapvető jellemzője a tömörség, a vastag fal és a félkörív.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A román stílus jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és kultúra",
    "value": 200,
    "questions": [
      {
        "id": "kozepkor-muvelodese-200-01",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik stílusra jellemzők a csúcsívek és a nagy üvegablakok?",
        "options": [
          "Román",
          "Gótikus",
          "Reneszánsz",
          "Biedermeier"
        ],
        "correctAnswer": "Gótikus",
        "explanation": "A gótika jellegzetessége a csúcsív, a magasba törő szerkezet és a nagy ablakfelület.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A gótikus stílus fő vonásai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "kozepkor-muvelodese-200-02",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik korszakban jelent meg a reneszánsz kultúra?",
        "options": [
          "Az ókorban",
          "A középkor végén és a kora újkor elején",
          "Az ipari forradalom idején",
          "A hidegháború korszakában"
        ],
        "correctAnswer": "A középkor végén és a kora újkor elején",
        "explanation": "A reneszánsz a középkor végén bontakozott ki, főként Itáliában.",
        "skillFocus": "évszám",
        "oralExamLink": "A reneszánsz megjelenése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és kultúra",
    "value": 300,
    "questions": [
      {
        "id": "kozepkor-muvelodese-300-01",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért volt fontos szerepe a kolostoroknak a középkori művelődés fennmaradásában?",
        "options": [
          "Mert kizárólag katonai feladatokat láttak el",
          "Mert kódexmásolással és oktatással őrizték és továbbadták a tudást",
          "Mert megszüntették az írásbeliséget",
          "Mert csak kereskedelmi központként működtek"
        ],
        "correctAnswer": "Mert kódexmásolással és oktatással őrizték és továbbadták a tudást",
        "explanation": "A kolostorok a művelődés fontos központjai voltak, itt másolták és őrizték a szövegeket is.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Kolostorok és művelődés",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "kozepkor-muvelodese-300-02",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legjobban a reneszánsz szemléletét?",
        "options": [
          "Az antik kultúra teljes elutasítása",
          "Az ember és az antik örökség iránti fokozott érdeklődés",
          "A kizárólag vallási témák engedélyezése",
          "A feudális harcmodor dicsőítése"
        ],
        "correctAnswer": "Az ember és az antik örökség iránti fokozott érdeklődés",
        "explanation": "A reneszánsz egyik lényege az antik minták újrafelfedezése és az emberközpontúbb szemlélet.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A reneszánsz világszemlélete",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és kultúra",
    "value": 400,
    "questions": [
      {
        "id": "kozepkor-muvelodese-400-01",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi a legfontosabb különbség a román és a gótikus stílus között?",
        "options": [
          "A román stílus könnyedebb és magasba törőbb, a gótikus tömörebb",
          "A román stílus tömörebb és zártabb, a gótikus magasba törőbb és fényesebb",
          "A két stílus között nincs lényeges különbség",
          "A gótikus stílus kizárólag világi palotákban jelent meg"
        ],
        "correctAnswer": "A román stílus tömörebb és zártabb, a gótikus magasba törőbb és fényesebb",
        "explanation": "A román stílust a tömörség, a gótikát a csúcsívek, magas szerkezetek és nagy üvegfelületek jellemzik.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Román és gótikus stílus összehasonlítása",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "kozepkor-muvelodese-400-02",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás a középkori művelődéssel kapcsolatban?",
        "options": [
          "Az egyetemek a 12. századtól kezdtek kialakulni",
          "A skolasztika a hit és tudás viszonyát is vizsgálta",
          "A gótikus stílus egyik jellemzője a csúcsív",
          "A reneszánsz lényege az antik kultúra teljes elutasítása"
        ],
        "correctAnswer": "A reneszánsz lényege az antik kultúra teljes elutasítása",
        "explanation": "Ez hibás állítás, mert a reneszánsz éppen az antik örökséghez nyúlt vissza.",
        "skillFocus": "következtetés",
        "oralExamLink": "Középkori művelődés és reneszánsz",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Középkor és kultúra",
    "value": 500,
    "questions": [
      {
        "id": "kozepkor-muvelodese-500-01",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető a középkori egyetemek megjelenése történelmi fordulópontnak a művelődés szempontjából?",
        "options": [
          "Mert megszüntette az írásbeliséget Európában",
          "Mert intézményesebb, szervezettebb keretet adott a tudás átadásának",
          "Mert kizárólag katonai kiképzőhelyekként működtek",
          "Mert teljesen függetlenek voltak minden vallási és társadalmi hatástól"
        ],
        "correctAnswer": "Mert intézményesebb, szervezettebb keretet adott a tudás átadásának",
        "explanation": "Az egyetemek megjelenése a tudás átadását és termelődését új, intézményes keretbe helyezte.",
        "skillFocus": "következtetés",
        "oralExamLink": "Az egyetemek történelmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "kozepkor-muvelodese-500-02",
        "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban a reneszánsz szerepét az európai művelődés történetében?",
        "options": [
          "A reneszánsz kizárólag egyházi reformmozgalom volt",
          "A reneszánsz új szempontokkal gazdagította a művelődést, miközben az antik örökséghez fordult vissza",
          "A reneszánsz megszüntette az építészeti stílusok sokféleségét",
          "A reneszánsz kizárólag a középkori gondolkodás változatlan továbbélése volt"
        ],
        "correctAnswer": "A reneszánsz új szempontokkal gazdagította a művelődést, miközben az antik örökséghez fordult vissza",
        "explanation": "A reneszánsz nem puszta ismétlés, hanem új kulturális szemléletet is hozott az antik minták felhasználásával.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A reneszánsz jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },

  {
    "category": "Eszmék és ideológiák",
    "value": 100,
    "questions": [
      {
        "id": "eszmek-19sz-100-01",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik eszme állította középpontba a szabadságjogokat és az alkotmányosságot?",
        "options": [
          "Liberalizmus",
          "Feudalizmus",
          "Merkantilizmus",
          "Skolasztika"
        ],
        "correctAnswer": "Liberalizmus",
        "explanation": "A liberalizmus központi elemei az egyéni szabadságjogok és az alkotmányos állam.",
        "skillFocus": "fogalom",
        "oralExamLink": "A liberalizmus fő jellemzői",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "eszmek-19sz-100-02",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik eszme hangsúlyozta a hagyományok és a lassú változás fontosságát?",
        "options": [
          "Konzervativizmus",
          "Liberalizmus",
          "Nacionalizmus",
          "Jakobinizmus"
        ],
        "correctAnswer": "Konzervativizmus",
        "explanation": "A konzervativizmus a hagyományok, intézmények és a fokozatos változás fontosságát emeli ki.",
        "skillFocus": "fogalom",
        "oralExamLink": "A konzervativizmus lényege",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Eszmék és ideológiák",
    "value": 200,
    "questions": [
      {
        "id": "eszmek-19sz-200-01",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik eszme kapcsolódik a nemzet mint közösség kiemelt szerepéhez?",
        "options": [
          "Nacionalizmus",
          "Abszolutizmus",
          "Skolasztika",
          "Humanizmus"
        ],
        "correctAnswer": "Nacionalizmus",
        "explanation": "A nacionalizmus a nemzeti közösség jelentőségét és önállóságát hangsúlyozta.",
        "skillFocus": "fogalom",
        "oralExamLink": "A nacionalizmus fő elemei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "eszmek-19sz-200-02",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Miért lépett fel a Szent Szövetség a korszak új eszméi ellen?",
        "options": [
          "Mert támogatta a forradalmi átalakulásokat",
          "Mert a dinasztikus rend és a régi politikai rendszer fenntartására törekedett",
          "Mert a nemzeti mozgalmak élére állt",
          "Mert be akarta vezetni az általános választójogot"
        ],
        "correctAnswer": "Mert a dinasztikus rend és a régi politikai rendszer fenntartására törekedett",
        "explanation": "A Szent Szövetség célja a restauráció és a radikális változások megakadályozása volt.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Szent Szövetség és új eszmék",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Eszmék és ideológiák",
    "value": 300,
    "questions": [
      {
        "id": "eszmek-19sz-300-01",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legjobban a liberalizmus egyik politikai célját?",
        "options": [
          "Az abszolút uralkodói hatalom megerősítése",
          "Az alkotmányosság és a szabadságjogok biztosítása",
          "A rendi kiváltságok változatlan fenntartása",
          "A sajtó és a gyülekezés szabadságának korlátozása"
        ],
        "correctAnswer": "Az alkotmányosság és a szabadságjogok biztosítása",
        "explanation": "A liberalizmus fontos célja az alkotmányosság és az egyéni szabadságjogok érvényesítése volt.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "A liberalizmus politikai programja",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "eszmek-19sz-300-02",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért vált a nacionalizmus különösen erőssé a 19. század első felében?",
        "options": [
          "Mert ekkor megszűnt minden birodalmi keret Európában",
          "Mert a napóleoni háborúk és a politikai átalakulások felerősítették a nemzeti törekvéseket",
          "Mert a nemzet fogalma teljesen jelentéktelenné vált",
          "Mert kizárólag vallási mozgalomként létezett"
        ],
        "correctAnswer": "Mert a napóleoni háborúk és a politikai átalakulások felerősítették a nemzeti törekvéseket",
        "explanation": "A korszak háborúi és átalakulásai hozzájárultak a nemzeti identitás megerősödéséhez.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "A nacionalizmus megerősödése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Eszmék és ideológiák",
    "value": 400,
    "questions": [
      {
        "id": "eszmek-19sz-400-01",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi a legfontosabb különbség a liberalizmus és a konzervativizmus között a 19. század első felében?",
        "options": [
          "A liberalizmus a szabadságjogok és reformok felé nyitottabb volt, míg a konzervativizmus inkább a hagyományos rend megőrzésére törekedett",
          "A konzervativizmus az általános választójog azonnali bevezetését követelte, a liberalizmus nem",
          "A két eszme teljesen azonos célokat követett",
          "A liberalizmus a rendi kiváltságok változatlan fenntartását tartotta elsődlegesnek"
        ],
        "correctAnswer": "A liberalizmus a szabadságjogok és reformok felé nyitottabb volt, míg a konzervativizmus inkább a hagyományos rend megőrzésére törekedett",
        "explanation": "Ez ragadja meg legjobban a két eszmerendszer közti alapvető különbséget.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Liberalizmus és konzervativizmus összevetése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "eszmek-19sz-400-02",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás a 19. század első felének uralkodó eszméivel kapcsolatban?",
        "options": [
          "A liberalizmus hangsúlyozta a szabadságjogokat",
          "A konzervativizmus a hagyományok jelentőségét emelte ki",
          "A nacionalizmus a nemzeti közösség fontosságát hangsúlyozta",
          "A korszak meghatározó eszméi mindenütt teljesen ellenállás nélkül érvényesültek"
        ],
        "correctAnswer": "A korszak meghatározó eszméi mindenütt teljesen ellenállás nélkül érvényesültek",
        "explanation": "Ez hibás, mert a Szent Szövetség és más erők több helyen felléptek az új eszmék ellen.",
        "skillFocus": "következtetés",
        "oralExamLink": "Eszmék és ellenállás a korszakban",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Eszmék és ideológiák",
    "value": 500,
    "questions": [
      {
        "id": "eszmek-19sz-500-01",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető a 19. század első felének eszmetörténete a modern Európa politikai alapjainak egyik kiindulópontjának?",
        "options": [
          "Mert ezek az eszmék semmilyen hatást nem gyakoroltak a politikára",
          "Mert a szabadság, nemzet és állam kérdéseit új módon fogalmazták meg",
          "Mert kizárólag középkori teológiai viták folytatódtak",
          "Mert megszüntették a politikai részvétel minden formáját"
        ],
        "correctAnswer": "Mert a szabadság, nemzet és állam kérdéseit új módon fogalmazták meg",
        "explanation": "A korszak eszméi hosszú távon meghatározták a modern politikai gondolkodást.",
        "skillFocus": "következtetés",
        "oralExamLink": "A korszak eszméinek történelmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "eszmek-19sz-500-02",
        "topic": "A 19. század első felének uralkodó eszméi",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés írja le legpontosabban a korszak eszméinek közös jelentőségét?",
        "options": [
          "Mindegyik az abszolút uralkodói hatalom visszaállítását követelte",
          "Mindegyik az állam, a társadalom és az egyén viszonyának újragondolásához járult hozzá",
          "Mindegyik kizárólag vallási megújulási mozgalom volt",
          "Ezek az eszmék csak rövid ideig hatottak, tartós következmények nélkül"
        ],
        "correctAnswer": "Mindegyik az állam, a társadalom és az egyén viszonyának újragondolásához járult hozzá",
        "explanation": "Ez foglalja össze legjobban a korszak meghatározó eszméinek közös történelmi jelentőségét.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Uralkodó eszmék összegző értékelése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },

  {
    "category": "Gazdaság és modernizáció",
    "value": 100,
    "questions": [
      {
        "id": "ipari-forradalom-100-01",
        "topic": "Ipari forradalom",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik országban bontakozott ki először az ipari forradalom?",
        "options": [
          "Franciaország",
          "Anglia",
          "Oroszország",
          "Spanyolország"
        ],
        "correctAnswer": "Anglia",
        "explanation": "Az ipari forradalom először Angliában bontakozott ki a 18. század végétől.",
        "skillFocus": "topográfia",
        "oralExamLink": "Az ipari forradalom kezdete",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ipari-forradalom-100-02",
        "topic": "Ipari forradalom",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik ágazat fejlődése kapcsolódik különösen szorosan az ipari forradalom kezdetéhez?",
        "options": [
          "Textilipar",
          "Légi közlekedés",
          "Elektronikai ipar",
          "Vegyipar"
        ],
        "correctAnswer": "Textilipar",
        "explanation": "Az ipari forradalom kezdetén a textilipar fejlődése különösen meghatározó volt.",
        "skillFocus": "fogalom",
        "oralExamLink": "Az ipari forradalom korai ágazatai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Gazdaság és modernizáció",
    "value": 200,
    "questions": [
      {
        "id": "ipari-forradalom-200-01",
        "topic": "Ipari forradalom",
        "questionType": "cause_effect",
        "difficulty": "easy",
        "question": "Miért segítette elő a mezőgazdasági fejlődés az ipari forradalom kibontakozását?",
        "options": [
          "Mert csökkentette az élelmiszertermelést",
          "Mert több élelmet biztosított és munkaerőt szabadított fel",
          "Mert megszüntette a városokat",
          "Mert mindenkit visszaterelt a földművelésbe"
        ],
        "correctAnswer": "Mert több élelmet biztosított és munkaerőt szabadított fel",
        "explanation": "A mezőgazdasági fejlődés hozzájárult a népességnövekedéshez és a bérmunkásréteg kialakulásához.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Az ipari forradalom előfeltételei",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ipari-forradalom-200-02",
        "topic": "Ipari forradalom",
        "questionType": "multiple_choice",
        "difficulty": "easy",
        "question": "Melyik társadalmi folyamat kapcsolódik szorosan az ipari forradalomhoz?",
        "options": [
          "Urbanizáció",
          "Nomadizálás",
          "Feudális széttagolódás",
          "Kizárólag falusi önellátás"
        ],
        "correctAnswer": "Urbanizáció",
        "explanation": "Az ipari forradalom egyik fontos következménye a városiasodás, vagyis az urbanizáció volt.",
        "skillFocus": "fogalom",
        "oralExamLink": "Az ipari forradalom társadalmi hatásai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Gazdaság és modernizáció",
    "value": 300,
    "questions": [
      {
        "id": "ipari-forradalom-300-01",
        "topic": "Ipari forradalom",
        "questionType": "multiple_choice",
        "difficulty": "medium",
        "question": "Melyik állítás írja le legjobban az ipari forradalom lényegét?",
        "options": [
          "A gazdaság teljes leállását hozó folyamat volt",
          "Technikai és szervezeti újítások sorozata, amely átalakította a termelést és a társadalmat",
          "Csak a mezőgazdaságot érintette",
          "Kizárólag rövid életű divatjelenség volt"
        ],
        "correctAnswer": "Technikai és szervezeti újítások sorozata, amely átalakította a termelést és a társadalmat",
        "explanation": "Az ipari forradalom nem egyetlen találmány, hanem átfogó gazdasági-társadalmi átalakulás volt.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az ipari forradalom fogalma",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ipari-forradalom-300-02",
        "topic": "Ipari forradalom",
        "questionType": "cause_effect",
        "difficulty": "medium",
        "question": "Miért vált meghatározóvá a közlekedés fejlődése az ipari forradalom idején?",
        "options": [
          "Mert megszüntette az áruszállítás szükségességét",
          "Mert a gyorsabb szállítás segítette a piacok bővülését és az ipari termelést",
          "Mert kizárólag a mezőgazdasági önellátást támogatta",
          "Mert a városok fejlődését visszafogta"
        ],
        "correctAnswer": "Mert a gyorsabb szállítás segítette a piacok bővülését és az ipari termelést",
        "explanation": "A közlekedés fejlődése szorosan összefüggött az ipari növekedéssel és a piacok tágulásával.",
        "skillFocus": "ok-okozat",
        "oralExamLink": "Közlekedés és ipari fejlődés",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Gazdaság és modernizáció",
    "value": 400,
    "questions": [
      {
        "id": "ipari-forradalom-400-01",
        "topic": "Ipari forradalom",
        "questionType": "comparison",
        "difficulty": "hard",
        "question": "Mi különböztette meg leginkább az ipari forradalom előtti termelést az ipari forradalom utáni gyári termeléstől?",
        "options": [
          "Az ipari forradalom után megszűnt a munkamegosztás",
          "A gyári termelés nagyobb gépesítettséggel és szervezettebb munkafolyamatokkal működött",
          "A kézműves termelés minden tekintetben gyorsabb volt a gyáriparnál",
          "A két rendszer között nem volt lényeges különbség"
        ],
        "correctAnswer": "A gyári termelés nagyobb gépesítettséggel és szervezettebb munkafolyamatokkal működött",
        "explanation": "Az ipari forradalom egyik kulcsa a gépesített, nagyobb volumenű, szervezettebb termelés volt.",
        "skillFocus": "összehasonlítás",
        "oralExamLink": "Gyáripar és korábbi termelési formák",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ipari-forradalom-400-02",
        "topic": "Ipari forradalom",
        "questionType": "faulty_statement",
        "difficulty": "hard",
        "question": "Melyik állítás hibás az ipari forradalommal kapcsolatban?",
        "options": [
          "Angliában bontakozott ki elsőként",
          "Hatott a társadalomra és a mindennapi életre is",
          "A városiasodás egyik fontos ösztönzője volt",
          "Teljesen változatlanul hagyta a közlekedést és a termelés szerkezetét"
        ],
        "correctAnswer": "Teljesen változatlanul hagyta a közlekedést és a termelés szerkezetét",
        "explanation": "Ez hibás, mert az ipari forradalom éppen jelentős változásokat hozott a termelésben és közlekedésben is.",
        "skillFocus": "következtetés",
        "oralExamLink": "Az ipari forradalom hatásai",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  },
  {
    "category": "Gazdaság és modernizáció",
    "value": 500,
    "questions": [
      {
        "id": "ipari-forradalom-500-01",
        "topic": "Ipari forradalom",
        "questionType": "cause_effect",
        "difficulty": "expert",
        "question": "Miért tekinthető az ipari forradalom nemcsak gazdasági, hanem társadalmi fordulópontnak is?",
        "options": [
          "Mert a termelés változásai nem érintették az emberek életmódját",
          "Mert a gazdasági átalakulás együtt járt a városiasodással, új társadalmi rétegek megjelenésével és az életmód változásával",
          "Mert az ipari forradalom csak a mezőgazdaságban fejtett ki hatást",
          "Mert kizárólag a politikai intézményeket alakította át"
        ],
        "correctAnswer": "Mert a gazdasági átalakulás együtt járt a városiasodással, új társadalmi rétegek megjelenésével és az életmód változásával",
        "explanation": "Az ipari forradalom átalakította a társadalmat, a településszerkezetet és a mindennapi életet is.",
        "skillFocus": "következtetés",
        "oralExamLink": "Az ipari forradalom társadalmi jelentősége",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      },
      {
        "id": "ipari-forradalom-500-02",
        "topic": "Ipari forradalom",
        "questionType": "comparison",
        "difficulty": "expert",
        "question": "Melyik értékelés foglalja össze legpontosabban az ipari forradalom történelmi szerepét?",
        "options": [
          "Rövid, jelentéktelen epizód volt az európai gazdaságtörténetben",
          "Olyan átalakulás volt, amely a technikát, a termelést, a társadalmat és a mindennapi életet is tartósan megváltoztatta",
          "Csak a kézműipar hagyományos formáinak megerősödését hozta",
          "Kizárólag Angliára korlátozódó, elszigetelt folyamat maradt"
        ],
        "correctAnswer": "Olyan átalakulás volt, amely a technikát, a termelést, a társadalmat és a mindennapi életet is tartósan megváltoztatta",
        "explanation": "Ez foglalja össze legjobban az ipari forradalom hosszú távú történelmi jelentőségét.",
        "skillFocus": "korszakjellemzés",
        "oralExamLink": "Az ipari forradalom történelmi értékelése",
        "isActive": true,
        "createdBy": "teacher",
        "lastEdited": "2026-04-14",
        "notes": ""
      }
    ]
  }
];

const categories = [];
const board = [];

let catIdCounter = 1;

const categoryMap = new Map();

input.forEach(item => {
  const catName = item.category;
  let catId;
  if (categoryMap.has(catName)) {
    catId = categoryMap.get(catName);
  } else {
    catId = 'cat' + catIdCounter++;
    categoryMap.set(catName, catId);
    categories.push({ id: catId, name: catName });
  }

  const points = item.value;
  
  const questions = item.questions.map(q => {
    const correctAnswerIndex = q.options.indexOf(q.correctAnswer);
    const newQ = { ...q };
    delete newQ.correctAnswer;
    newQ.correctAnswerIndex = correctAnswerIndex;
    return newQ;
  });

  board.push({
    categoryId: catId,
    categoryName: catName,
    points: points,
    questions: questions
  });
});

fs.writeFileSync('output.json', JSON.stringify({ categories, board }, null, 2));
