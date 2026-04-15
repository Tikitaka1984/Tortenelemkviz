export type QuestionType = 'multiple_choice' | 'true_false' | 'faulty_statement' | 'timeline' | 'matching' | 'cause_effect' | 'comparison';
export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export type QuestionItem = {
  id: string;
  difficulty: Difficulty;
  questionType: QuestionType;
  topic?: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  skillFocus?: string;
  oralExamLink?: string;
  isActive?: boolean;
  createdBy?: string;
  lastEdited?: string;
  notes?: string;
};

export type BoardCell = {
  categoryId: string;
  categoryName: string;
  points: number;
  questions: QuestionItem[];
};

export type Category = {
  id: string;
  name: string;
};

export const gameCategories: Category[] = [
  {
    "id": "cat1",
    "name": "Ókor és Középkor"
  },
  {
    "id": "cat2",
    "name": "Kora Újkor és Felvilágosodás"
  },
  {
    "id": "cat3",
    "name": "A hosszú 19. század"
  },
  {
    "id": "cat4",
    "name": "Világháborúk kora"
  },
  {
    "id": "cat5",
    "name": "Jelenkor és Hidegháború"
  },
  {
    "id": "cat6",
    "name": "Középkor és kultúra"
  },
  {
    "id": "cat7",
    "name": "Eszmék és ideológiák"
  },
  {
    "id": "cat8",
    "name": "Gazdaság és modernizáció"
  },
  {
    "id": "cat9",
    "name": "Magyar történelem a 19. században"
  }
];

export const gameBoard: BoardCell[] = [
    {
        "categoryId": "cat1",
        "categoryName": "Ókor és Középkor",
        "points": 100,
        "questions": [
            {
                "id": "q1",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik nemesfémet bányászták a legnagyobb mennyiségben a középkori Magyarországon I. Károly idején?",
                "options": [
                    "Arany",
                    "Ezüst",
                    "Réz",
                    "Vas"
                ],
                "correctAnswerIndex": 0,
                "explanation": "I. Károly idején Magyarország adta Európa aranytermelésének jelentős részét (kb. 1/3-át), ami a gazdasági reformok alapját jelentette."
            },
            {
                "id": "q6",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Mi a neve annak a mezőgazdasági módszernek, ahol a földet három részre osztják: őszi vetés, tavaszi vetés és ugar?",
                "options": [
                    "Háromnyomásos gazdálkodás",
                    "Kétnyomásos gazdálkodás",
                    "Váltógazdálkodás",
                    "Talajváltó gazdálkodás"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A háromnyomásos gazdálkodás a középkorban terjedt el, hatékonyabbá téve a földhasználatot az ugar arányának csökkentésével."
            },
            {
                "id": "q26",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Mi volt a középkori városok legfőbb gazdasági vonzereje és alapja?",
                "options": [
                    "A távolsági kereskedelem és a kézműipar",
                    "A nagybirtokosok mezőgazdasági termelése",
                    "A királyi udvar jelenléte",
                    "A kolostorok kódexmásoló tevékenysége"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A városok a kereskedelmi útvonalak találkozásánál jöttek létre, lakóik főként iparral és kereskedelemmel foglalkoztak, nem mezőgazdasággal."
            },
            {
                "id": "q31",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik intézkedésével teremtette meg Szent István a magyarországi egyházszervezet alapjait?",
                "options": [
                    "Tíz egyházmegyét (püspökséget) és két érsekséget alapított",
                    "Minden faluban kötelezővé tette a kolostorépítést",
                    "Betiltotta a latin nyelvű misézést",
                    "A pápát tette meg a magyar állam hivatalos vezetőjévé"
                ],
                "correctAnswerIndex": 0,
                "explanation": "István az esztergomi és kalocsai érsekség, valamint további nyolc püspökség felállításával független, a pápának alárendelt magyar egyházszervezetet hozott létre."
            },
            {
                "id": "q36",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik adónemet vezette be Hunyadi Mátyás a kapuadó helyett, hogy növelje a kincstár bevételeit?",
                "options": [
                    "Füstpénz",
                    "Harmincadvám",
                    "Kilenced",
                    "Rendkívüli hadiadó"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A füstpénzt nem portánként (kapunként), hanem háztartásonként (kéményenként/füstönként) szedték, így a megosztott portákon élő jobbágyok is fizettek."
            },
            {
                "id": "q61",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik intézmény volt az athéni demokrácia legfőbb döntéshozó szerve, amelyben minden felnőtt athéni polgár részt vehetett?",
                "options": [
                    "A népgyűlés (ekklészia)",
                    "Az ötszázak tanácsa (bulé)",
                    "A sztratégoszok testülete",
                    "Az areioszpagosz"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A népgyűlés hozta a törvényeket, döntött háború és béke kérdésében, és minden 20 év feletti, athéni polgárjoggal rendelkező férfi részt vehetett rajta."
            },
            {
                "id": "q71",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Ki az iszlám vallás alapítója és legfőbb prófétája?",
                "options": [
                    "Mohamed",
                    "Jézus",
                    "Mózes",
                    "Ábrahám"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mohamed próféta a 7. század elején, az Arab-félszigeten alapította meg az iszlám vallást, miután látomásai voltak."
            },
            {
                "id": "q76",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik testvérpár próbálta földreformmal megoldani a római köztársaság válságát a Kr. e. 2. században?",
                "options": [
                    "Tiberius és Caius Gracchus",
                    "Romulus és Remus",
                    "Julius Caesar és Augustus",
                    "Marius és Sulla"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Gracchus-testvérek néptribunusként a nincstelen parasztoknak akartak állami földet osztani, hogy megerősítsék a római hadsereg bázisát."
            },
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
        "categoryId": "cat1",
        "categoryName": "Ókor és Középkor",
        "points": 200,
        "questions": [
            {
                "id": "q2",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen célt szolgált az urbura (bányabér) egyharmadának átengedése a földesuraknak?",
                "options": [
                    "A földesurak érdekeltté tétele a bányák feltárásában",
                    "A királyi kincstár bevételeinek közvetlen növelése",
                    "A jobbágyok adóterheinek csökkentése",
                    "A külföldi bányászok betelepítésének megakadályozása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "I. Károly ezzel a lépéssel ösztönözte a birtokosokat, hogy ne titkolják el a földjükön talált érceket, hanem nyissanak bányákat."
            },
            {
                "id": "q7",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen kapcsolat volt a hűbérúr (senior) és a hűbéres (vazallus) között?",
                "options": [
                    "A hűbérúr földbirtokot (feudumot) és védelmet adott katonai szolgálatért cserébe",
                    "A vazallus adót fizetett a hűbérúrnak a föld használatáért",
                    "A hűbérúr rabszolgaként birtokolta a vazallust",
                    "A vazallus kizárólag egyházi tisztséget tölthetett be"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hűbéri lánc alapja a kölcsönös hűségeskü volt: a senior földet és védelmet, a vazallus fegyveres szolgálatot és hűséget fogadott."
            },
            {
                "id": "q27",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'városi levegő szabaddá tesz' középkori jogi elv?",
                "options": [
                    "Ha egy jobbágy egy évig és egy napig a városban élt anélkül, hogy ura visszakövetelte volna, szabaddá vált",
                    "A városokban nem kellett adót fizetni a királynak",
                    "A városi polgárok mentesültek az egyházi törvények alól",
                    "A városokban tilos volt a céhek alapítása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A városok menedéket nyújtottak a szökött jobbágyoknak, akik bizonyos idő elteltével elnyerték a személyes szabadságot és a polgárjogot."
            },
            {
                "id": "q32",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen célt szolgált a tized (dézsma) bevezetése Szent István törvényeiben?",
                "options": [
                    "Az egyházszervezet és a papság anyagi fenntartását",
                    "A királyi udvar kiadásainak fedezését",
                    "A végvárak építésének finanszírozását",
                    "A szegények és árvák segélyezését"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A tized a termés egytizede volt, amelyet a lakosságnak az egyház számára kellett beszolgáltatnia az egyházmegyék működésének biztosítására."
            },
            {
                "id": "q37",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen célt szolgált Mátyás állandó zsoldoshadserege, a Fekete Sereg?",
                "options": [
                    "Függetlenítette a királyt a bárók katonai erejétől (bandériumoktól)",
                    "Kizárólag a török elleni védekezést látta el a végvárakban",
                    "A jobbágyfelkelések leverésére hozták létre",
                    "A pápai állam védelmét biztosította Rómában"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A zsoldoshadsereg közvetlenül a királynak engedelmeskedett, így Mátyás nem szorult rá a megbízhatatlan főurak magánhadseregeire a kül- és belpolitikában."
            },
            {
                "id": "q62",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen módszerrel választották ki Athénban a legtöbb tisztségviselőt (pl. az ötszázak tanácsának tagjait)?",
                "options": [
                    "Sorsolással",
                    "Szavazással",
                    "Vagyon alapján nevezték ki őket",
                    "Öröklődés útján"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A demokrácia alapelve volt, hogy minden polgár egyenlő eséllyel vehet részt az irányításban, ezért a tisztségek többségét sorsolták, nem választották."
            },
            {
                "id": "q72",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mi az iszlám szent könyve, amely a muszlimok hite szerint Isten (Allah) szavát tartalmazza?",
                "options": [
                    "A Korán",
                    "A Tóra",
                    "A Biblia",
                    "A Védák"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Korán az iszlám legszentebb irata, amely Mohamed próféta kinyilatkoztatásait tartalmazza arab nyelven."
            },
            {
                "id": "q77",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mi volt a latifundiumok (nagybirtokok) elterjedésének legfőbb társadalmi következménye Rómában?",
                "options": [
                    "A kisbirtokos parasztság tönkrement és a városokba áramlott (antik proletariátus)",
                    "A rabszolgák felszabadultak és polgárjogot kaptak",
                    "A szenátorok elvesztették politikai hatalmukat",
                    "Megszűnt a kereskedelem a Földközi-tengeren"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hódításokból származó olcsó rabszolgamunkával dolgozó nagybirtokok tönkretették a parasztokat, akik Rómába menekültek, ahol ingyen gabonát követeltek."
            },
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
        "categoryId": "cat1",
        "categoryName": "Ókor és Középkor",
        "points": 300,
        "questions": [
            {
                "id": "q3",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a kapuadó bevezetésének legfőbb oka I. Károly idején?",
                "options": [
                    "A kamara haszna (pénzrontás) megszüntetése miatti bevételkiesés pótlása",
                    "A banderiális hadsereg fenntartási költségeinek fedezése",
                    "A cseh és lengyel királyokkal kötött szövetség finanszírozása",
                    "A pápai tized (tized) kiváltása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mivel I. Károly értékálló pénzt vezetett be, elesett a pénzbeváltásból származó haszontól, ezt pótolta az első állami egyenes adóval, a kapuadóval."
            },
            {
                "id": "q8",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Milyen demográfiai következménnyel járt a 11-13. századi mezőgazdasági forradalom (pl. nehézeke, szügyhám elterjedése)?",
                "options": [
                    "Jelentős népességnövekedés indult meg Európában",
                    "A városi lakosság tömegesen vidékre vándorolt",
                    "Csökkent a születéskor várható élettartam",
                    "Megszűnt a jobbágyság intézménye"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hatékonyabb termelés több élelmiszert eredményezett, ami lehetővé tette a népesség gyors növekedését és a városiasodás megindulását."
            },
            {
                "id": "q28",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb oka a középkori városok önkormányzatisága (kommuna) kialakulásának?",
                "options": [
                    "A polgárság gazdasági megerősödése révén kivásárolta magát a földesúri joghatóság alól",
                    "A királyok kötelezővé tették minden település számára az önkormányzatot",
                    "A pápa rendeletben tiltotta meg a földesuraknak a városok feletti uralmat",
                    "A lovagrendek fegyverrel vívták ki a városok függetlenségét"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A meggazdagodott kereskedők és iparosok pénzért (vagy fegyverrel) megváltották a földesúri terheket, így saját bírót és tanácsot választhattak."
            },
            {
                "id": "q33",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb politikai oka annak, hogy István a pápától (II. Szilveszter) kért koronát, és nem a német-római császártól?",
                "options": [
                    "Meg akarta őrizni az ország függetlenségét a Német-római Birodalommal szemben",
                    "A pápa több katonai segítséget ígért a pogánylázadások ellen",
                    "A császár megtagadta a korona küldését",
                    "A bizánci császár ezt szabta feltételül a békekötéshez"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Ha a császártól fogad el koronát, az hűbéri alárendeltséget jelentett volna. A pápától kapott korona a független, keresztény királyság elismerését jelentette."
            },
            {
                "id": "q38",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb oka annak, hogy Mátyás a török kiűzése helyett nyugati (cseh, osztrák) hódításokba kezdett?",
                "options": [
                    "Meg akarta szerezni a német-római császári címet, hogy egyesült erővel léphessen fel a török ellen",
                    "A török szultán békét ajánlott neki, amit elfogadott",
                    "A nyugati területek gazdagabb aranybányákkal rendelkeztek",
                    "A magyar nemesség megtagadta a török elleni harcot"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mátyás felismerte, hogy Magyarország ereje önmagában kevés a török Birodalom ellen. A cseh királyi és a császári cím megszerzésével akart egy erős közép-európai birodalmat építeni."
            },
            {
                "id": "q63",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért vezette be Periklész a napidíjat (esküdtbírósági, majd színházi pénzt)?",
                "options": [
                    "Hogy a szegényebb polgárok is részt tudjanak venni a politikai életben a munkaidő kiesése ellenére",
                    "Hogy a gazdagokat rákényszerítse a vagyonuk megosztására",
                    "Hogy zsoldoshadsereget tudjon felállítani Spárta ellen",
                    "Hogy a rabszolgák is meg tudják váltani a szabadságukat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A napidíj biztosította, hogy a szegényebb kézművesek és parasztok is elmehessenek a bíróságra vagy a népgyűlésre anélkül, hogy a családjuk éhezne a kieső napi bér miatt."
            },
            {
                "id": "q73",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért számít a hidzsra (622) az iszlám időszámítás kezdetének?",
                "options": [
                    "Mert Mohamed ekkor menekült át Mekkából Medinába, ahol megalapította az első muszlim közösséget",
                    "Mert ekkor foglalták el a muszlimok Jeruzsálemet",
                    "Mert Mohamed ekkor kapta az első kinyilatkoztatást Gábriel arkangyaltól",
                    "Mert ekkor épült fel a Kába szentély"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hidzsra (kivonulás) fordulópont volt: Mohamed Medinában politikai és vallási vezetővé vált, és itt szerveződött meg az iszlám állam alapja."
            },
            {
                "id": "q78",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt szükség Marius hadseregreformjára (zsoldoshadsereg felállítására)?",
                "options": [
                    "Mert a parasztság elszegényedése miatt drasztikusan lecsökkent a hadköteles, saját fegyverzettel rendelkező polgárok száma",
                    "Mert a szenátus megtiltotta a római polgárok besorozását",
                    "Mert a rabszolgák fellázadtak Spartacus vezetésével",
                    "Mert a karthágóiak elpusztították a teljes római flottát"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A régi római hadsereg a birtokos parasztokra épült. Mivel ők tönkrementek, Marius a nincstelenekből (proletárokból) szervezett zsoldoshadsereget, amely 16 év szolgálat után földet kapott."
            },
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
        "categoryId": "cat1",
        "categoryName": "Ókor és Középkor",
        "points": 400,
        "questions": [
            {
                "id": "q4",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött I. Károly firenzei mintára vert aranyforintja a korábbi magyar pénzektől?",
                "options": [
                    "Értékálló volt és nem rontották a nemesfémtartalmát évente",
                    "Kizárólag külkereskedelmi forgalomban lehetett használni",
                    "Csak a királyi birtokokon fogadták el fizetőeszközként",
                    "Rézből verték, de arannyal vonták be a felületét"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A korábbi gyakorlattal ellentétben (évenkénti pénzbeváltás és rontás) az aranyforint állandó értékű fizetőeszköz volt, ami fellendítette a kereskedelmet."
            },
            {
                "id": "q9",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Mi volt a legfőbb különbség a rabszolga és a középkori jobbágy jogi helyzete között?",
                "options": [
                    "A jobbágy rendelkezett saját termelőeszközzel és nem volt a földesúr tulajdona",
                    "A jobbágy szabadon költözhetett bármikor, míg a rabszolga nem",
                    "A rabszolga fizetett adót, a jobbágy csak robottal tartozott",
                    "A jobbágy részt vehetett a királyi hadseregben, a rabszolga nem"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A jobbágy jogilag szabadabb volt: bár a földhöz volt kötve (később szabadon költözhetett), saját háza, eszközei voltak, és a termény egy részét megtarthatta."
            },
            {
                "id": "q29",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a patríciusok és a plebejusok helyzete a középkori városokban?",
                "options": [
                    "A patríciusok (gazdag kereskedők) irányították a várost, míg a plebejusok (szegények) nem rendelkeztek polgárjoggal",
                    "A patríciusok a királyi katonák voltak, a plebejusok pedig a papok",
                    "A plebejusok alkották a városi tanácsot, a patríciusok pedig a céhmesterek voltak",
                    "A patríciusok vidéken éltek, a plebejusok a városfalakon belül"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A városi társadalom erősen rétegzett volt: a hatalmat a szűk, gazdag patrícius réteg gyakorolta, míg a legalsó réteg, a plebejusok politikai jogok nélkül éltek."
            },
            {
                "id": "q34",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a vármegyerendszer a korábbi törzsi-nemzetségi szervezettől?",
                "options": [
                    "Területi alapon szerveződött a királyi hatalom képviseletében, nem vérségi alapon",
                    "A vármegyéket a törzsfők irányították, nem a király által kinevezett ispánok",
                    "A vármegyék csak adószedéssel foglalkoztak, bíráskodással nem",
                    "A vármegyerendszer kizárólag az egyházi birtokokra terjedt ki"
                ],
                "correctAnswerIndex": 0,
                "explanation": "István a vérségi (törzsi) kötelékek helyett területi alapú közigazgatást épített ki. A vármegye élén a király által kinevezett ispán (comes) állt, aki katonai, bírói és gazdasági vezető volt."
            },
            {
                "id": "q39",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el Mátyás központosító politikája a korábbi magyar királyokétól?",
                "options": [
                    "A bárók helyett gyakran köznemeseket és polgárokat (akár jobbágysorból származókat) emelt magas hivatalokba",
                    "Teljesen megszüntette az Országgyűlést és rendeletekkel kormányzott",
                    "Minden földbirtokot elkobzott és állami tulajdonba vett",
                    "Kizárólag külföldi zsoldosokra bízta az ország közigazgatását"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mátyás a származás helyett a tehetséget és a hűséget díjazta. Olyan szakembereket (pl. Ernuszt János, Bakócz Tamás) emelt fel, akik csak tőle függtek, így letörte a régi arisztokrácia hatalmát."
            },
            {
                "id": "q64",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a sztratégoszok (hadvezérek) tisztsége a többi athéni hivataltól?",
                "options": [
                    "Őket nem sorsolták, hanem választották, és a tisztségük újraválasztható volt",
                    "Ők életfogytiglan töltötték be a hivatalukat",
                    "Kizárólag rabszolgák tölthették be ezt a posztot",
                    "Nem tartoztak elszámolással a népgyűlésnek"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mivel a hadvezetés szakértelmet igényelt, a 10 sztratégoszt választották (nem sorsolták), és ők voltak az egyetlenek, akiket egymás után többször is újraválaszthattak (pl. Periklészt 15 évig)."
            },
            {
                "id": "q74",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Melyik állítás írja le helyesen az iszlám 'öt oszlopának' (alapvető kötelességeinek) egyikét?",
                "options": [
                    "A muszlimoknak életükben legalább egyszer el kell zarándokolniuk Mekkába, ha anyagilag és fizikailag képesek rá",
                    "A muszlimoknak minden vasárnap kötelező a mecsetben imádkozniuk",
                    "A böjt (ramadán) alatt tilos húst enni, de vizet inni szabad",
                    "A szegényadó (zakat) fizetése csak az uralkodók számára kötelező"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az öt oszlop: hitvallás (Allah az egyetlen Isten), napi ötszöri ima, alamizsna (szegényadó), ramadán havi böjt (napkeltétől napnyugtáig semmi étel/ital), és a mekkai zarándoklat (haddzs)."
            },
            {
                "id": "q79",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött Julius Caesar hatalomgyakorlása Sulla diktatúrájától?",
                "options": [
                    "Caesar a néppárti hagyományokra támaszkodva, a köztársasági formákat látszólag fenntartva épített ki egyeduralmat, míg Sulla a szenátus hatalmát állította vissza erőszakkal",
                    "Caesar lemondott a diktátori címről, Sulla élete végéig uralkodott",
                    "Caesar csak Itáliát uralta, Sulla az egész birodalmat",
                    "Sulla a rabszolgákra támaszkodott, Caesar a patríciusokra"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Sulla a konzervatív (optimata) szenátus hatalmát akarta fegyverrel restaurálni. Caesar viszont a népre és a hadseregre támaszkodva (néppártiként) építette ki saját, nyílt egyeduralmát."
            },
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
        "categoryId": "cat1",
        "categoryName": "Ókor és Középkor",
        "points": 500,
        "questions": [
            {
                "id": "q5",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az 1335-ös visegrádi királytalálkozó gazdasági következményeivel kapcsolatban?",
                "options": [
                    "Bécset érintő új kereskedelmi útvonalakat jelöltek ki a cseh és lengyel királlyal",
                    "A találkozó célja a bécsi árumegállító jog kikerülése volt",
                    "Új útvonal nyílt Buda és Brünn (Brno) között",
                    "A megállapodás fellendítette a magyar-cseh-lengyel kereskedelmet"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a találkozó célja pont az volt, hogy Bécset ELKERÜLŐ (nem Bécset érintő) új kereskedelmi útvonalakat hozzanak létre az árumegállító jog miatt."
            },
            {
                "id": "q10",
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miért tekinthető a középkori céhrendszer egyszerre a városi gazdaság stabilizáló és korlátozó tényezőjének?",
                "options": [
                    "Mert biztosította a minőséget és a tagok védelmét, ugyanakkor visszafogta a szabad versenyt és az újításokat is",
                    "Mert teljesen megszüntette a városi önkormányzatokat, és minden gazdasági döntést a királyra bízott",
                    "Mert kizárólag a nemzetközi kereskedelem fellendítésére törekedett, a helyi termelést nem szabályozta",
                    "Mert a céhek fő feladata a földművelés megszervezése volt a városfalakon belül"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A céhek egyszerre védték a mesterek érdekeit, biztosították az áru minőségét és a szociális biztonságot, ugyanakkor korlátozták a versenyt, a termelés bővítését és sok esetben az innovációt is."
            },
            {
                "id": "q30",
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Mi különböztette meg leginkább a Hanza-szövetség szerepét a levantei kereskedelmet irányító itáliai városállamokétól?",
                "options": [
                    "A Hanza a Balti- és Északi-tenger térségének tömegcikk-kereskedelmét szervezte, míg az itáliai városok inkább a Földközi-tenger luxuscikk-forgalmát uralták",
                    "A Hanza kizárólag szárazföldi kereskedelmet folytatott, az itáliai városok pedig nem kereskedtek tengeren",
                    "A Hanza csak politikai szövetség volt, míg Velence és Genova nem rendelkezett kereskedelmi hálózattal",
                    "A Hanza főként nyugat-európai fűszerkereskedelemből élt, míg az itáliai városok a balti gabonaforgalmat ellenőrizték"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Hanza-szövetség főként az északi térség nyersanyag- és tömegcikk-kereskedelmét fogta össze, míg Velence és Genova a mediterrán és keleti luxuscikk-kereskedelemben volt meghatározó."
            },
            {
                "id": "q35",
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért volt döntő jelentőségű Szent István törvénykezése a magyar államszervezet megszilárdítása szempontjából?",
                "options": [
                    "Mert a keresztény normák, a magántulajdon védelme és a királyi rend fenntartása révén új társadalmi és politikai keretet adott az országnak",
                    "Mert a törvények elsődleges célja a törzsi autonómiák megerősítése és a királyi hatalom korlátozása volt",
                    "Mert megszüntette az egyház szerepét, és teljesen világi alapokra helyezte az államot",
                    "Mert kizárólag külpolitikai kérdéseket szabályozott, a belső rendet nem érintette"
                ],
                "correctAnswerIndex": 0,
                "explanation": "István törvényei a keresztény államrend, a tulajdonbiztonság, az egyházszervezet és a királyi tekintély megerősítésével járultak hozzá az államalapítás tartósságához."
            },
            {
                "id": "q40",
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miért tekinthető Mátyás udvarának kulturális politikája a közép-európai uralkodói reprezentáció tudatos átalakításának?",
                "options": [
                    "Mert a humanizmus és a reneszánsz eszközeivel nemcsak műveltséget, hanem uralkodói presztízst és nemzetközi rangot is épített",
                    "Mert teljesen elutasította az itáliai hatásokat, és kizárólag a középkori magyar hagyományokra támaszkodott",
                    "Mert kulturális politikája kizárólag egyházi reformokra korlátozódott, udvari reprezentáció nélkül",
                    "Mert a Corvina könyvtár főként közigazgatási adónyilvántartások tárolására szolgált"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mátyás udvara a reneszánsz reprezentáció, a könyvkultúra és a humanista kapcsolatrendszer révén a király hatalmát és európai rangját is demonstrálta."
            },
            {
                "id": "q65",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a cserépszavazás (osztrakiszmosz) intézményével kapcsolatban?",
                "options": [
                    "Akit száműztek, annak a vagyonát is elkobozták és családját is elűzték",
                    "Célja a zsarnokság (türannisz) visszatérésének megakadályozása volt",
                    "Érvényességéhez legalább 6000 szavazatra volt szükség",
                    "A száműzött 10 évig nem térhetett vissza Athénba"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a cserépszavazással száműzött politikus megtarthatta a vagyonát, a családja is Athénban maradhatott, és 10 év után visszakapta politikai jogait."
            },
            {
                "id": "q75",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az iszlám vallás és a korai arab hódítások kapcsolatáról?",
                "options": [
                    "Az iszlám erőszakkal kényszerítette a keresztényeket és zsidókat a vallásváltásra, különben kivégezték őket",
                    "A dzsihád (szent háború/erőfeszítés) eszméje segítette az arab törzsek egyesítését és a hódításokat",
                    "A meghódított területeken a 'könyv népei' (keresztények, zsidók) különadó (dzsizja) fejében megtarthatták vallásukat",
                    "A hódítások során az arabok átvették és megőrizték a perzsa és görög-római kultúra számos elemét"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a korai iszlám toleráns volt az egyistenhívő 'könyv népeivel' (zsidók, keresztények) szemben. Nem kényszerítették őket áttérésre, de magasabb adót kellett fizetniük."
            },
            {
                "id": "q80",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az Első Triumvirátus (Kr. e. 60) politikai jelentőségével kapcsolatban?",
                "options": [
                    "A szövetséget a Szenátus hozta létre, hogy korlátozza a hadvezérek hatalmát",
                    "Caesar, Pompeius és Crassus titkos magánszövetsége volt a hatalom felosztására",
                    "A szövetség lehetővé tette Caesar számára, hogy consullá váljon és Galliában hadakozzon",
                    "A triumvirátus felbomlása polgárháborúhoz vezetett Caesar és Pompeius között"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a triumvirátus (három férfi szövetsége) éppen a Szenátus AKARATA ELLENÉRE jött létre. A három legbefolyásosabb politikus összefogott, hogy kijátsszák a köztársasági intézményeket."
            },
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
        "categoryId": "cat2",
        "categoryName": "Kora Újkor és Felvilágosodás",
        "points": 100,
        "questions": [
            {
                "id": "q11",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik európai ország indította el a nagy földrajzi felfedezéseket Afrikát megkerülő expedícióival?",
                "options": [
                    "Portugália",
                    "Spanyolország",
                    "Anglia",
                    "Franciaország"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Tengerész Henrik irányításával a portugálok kezdték meg Afrika partjainak feltérképezését a 15. században."
            },
            {
                "id": "q66",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik uralkodó adta ki az Urbáriumot (úrbéri pátens) 1767-ben?",
                "options": [
                    "Mária Terézia",
                    "II. József",
                    "III. Károly",
                    "I. Lipót"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mária Terézia rendeletben szabályozta a földesúr és a jobbágy viszonyát, hogy megvédje az állami adóalapot jelentő jobbágyságot."
            },
            {
                "id": "q81",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik társadalmi réteg robbantotta ki a Rákóczi-szabadságharcot 1703-ban (tiszaháti felkelés)?",
                "options": [
                    "A jobbágyság",
                    "A főnemesség (bárók)",
                    "A városi polgárság",
                    "A katolikus papság"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A szabadságharcot a magas adók (pl. porció, forspont) miatt elégedetlen, Esze Tamás vezette jobbágyok indították el, akik hazahívták Rákóczit Lengyelországból."
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik kontinens felfedezése fűződik Kolumbusz Kristóf nevéhez (1492)?",
                "options": [
                    "Amerika",
                    "Ausztrália",
                    "Ázsia",
                    "Afrika"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Kolumbusz 1492-ben érte el a Bahama-szigeteket, ezzel felfedezte Amerikát az európaiak számára.",
                "id": "q200"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Ki volt a reformáció elindítója, aki 1517-ben kifüggesztette 95 pontját Wittenbergben?",
                "options": [
                    "Martin Luther (Luther Márton)",
                    "Kálvin János",
                    "Loyolai Ignác",
                    "VIII. Henrik"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Luther Márton ágoston-rendi szerzetes fellépése a búcsúcédulák ellen indította el a reformációt.",
                "id": "q201"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik város volt az Erdélyi Fejedelemség központja (fővárosa) a 16-17. században?",
                "options": [
                    "Gyulafehérvár",
                    "Kolozsvár",
                    "Nagyszeben",
                    "Brassó"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Gyulafehérvár volt a fejedelmi székhely és a politikai központ.",
                "id": "q202"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik magyar vár védelmét irányította Dobó István 1552-ben?",
                "options": [
                    "Eger",
                    "Szigetvár",
                    "Kőszeg",
                    "Temesvár"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Dobó István vezetésével az egri várvédők sikeresen verték vissza a hatalmas török sereget.",
                "id": "q203"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik uralkodóház adta a magyar királyokat a kora újkorban (1526 után)?",
                "options": [
                    "Habsburg-ház",
                    "Anjou-ház",
                    "Hunyadi-ház",
                    "Árpád-ház"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A mohácsi csata után a Habsburgok szerezték meg a magyar trónt.",
                "id": "q204"
            },
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
            },
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
            },
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
        "categoryId": "cat2",
        "categoryName": "Kora Újkor és Felvilágosodás",
        "points": 200,
        "questions": [
            {
                "id": "q12",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen új hajótípus tette lehetővé a nyílt óceáni hajózást a felfedezések korában?",
                "options": [
                    "Karavella",
                    "Gálya",
                    "Klipperek",
                    "Dromón"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A karavella magas oldalfalú, jól manőverezhető, hátszelet és oldalszelet is hasznosítani tudó vitorlás volt, ideális az óceáni utakra."
            },
            {
                "id": "q67",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit szabályozott a Ratio Educationis (1777)?",
                "options": [
                    "Az oktatásügyet, egységes iskolarendszert és állami tantervet vezetett be",
                    "A jobbágyok költözési jogát",
                    "A nemesség adózását",
                    "A vallásszabadságot"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Mária Terézia rendelete az állam feladatává tette az oktatás irányítását, és egységes, a népiskolától az egyetemig terjedő rendszert hozott létre."
            },
            {
                "id": "q82",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mi volt a célja a vetési pátensnek (1703), amelyet II. Rákóczi Ferenc adott ki?",
                "options": [
                    "Mentesítette a kuruc seregben harcoló jobbágyokat és családjukat a földesúri szolgáltatások (robot, adó) alól",
                    "Kimondta a Habsburg-ház trónfosztását",
                    "Kötelezővé tette a katolikus vallást mindenki számára",
                    "Békét ajánlott a bécsi udvarnak"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Rákóczi ezzel a rendelettel akarta megnyerni és a seregben tartani a jobbágyokat, miközben megnyugtatta a nemességet is, hogy a mentesség csak a harcolóknak jár, nem jelent általános jobbágyfelszabadítást."
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen gazdasági következménnyel járt az amerikai nemesfémek beáramlása Európába a 16. században?",
                "options": [
                    "Árforradalom (az árak jelentős emelkedése)",
                    "A kereskedelem teljes leállása",
                    "A jobbágyság azonnali megszűnése",
                    "A céhek megerősödése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A rengeteg beáramló arany és ezüst elértéktelenedett, ami a mezőgazdasági és ipari cikkek árának drasztikus emelkedéséhez vezetett.",
                "id": "q205"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Melyik elv jellemezte a kálvini (református) egyházat a lutheránussal szemben?",
                "options": [
                    "A predesztináció (eleve elrendelés) tana",
                    "A pápa főségének elismerése",
                    "A szentek tisztelete",
                    "A latin nyelvű misézés megtartása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Kálvin János tanítása szerint Isten már a születés előtt eldöntötte, hogy ki jut üdvösségre és ki kárhozatra.",
                "id": "q206"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a célja a katolikus megújulásnak (ellenreformációnak) a tridenti zsinaton?",
                "options": [
                    "A katolikus egyház belső megtisztulása és a hívők visszaszerzése",
                    "A protestáns vallások hivatalos elismerése",
                    "A pápai állam megszüntetése",
                    "Új keresztes hadjárat indítása Jeruzsálem ellen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A zsinat betiltotta a búcsúcédulákat, javította a papképzést, hogy megállítsa a reformáció terjedését.",
                "id": "q207"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen célt szolgált a Pragmatica Sanctio (1723) elfogadása Magyarországon?",
                "options": [
                    "A Habsburg-ház nőági örökösödésének biztosítását",
                    "A jobbágyok felszabadítását",
                    "Erdély függetlenségének elismerését",
                    "A törökök elleni újabb háború megindítását"
                ],
                "correctAnswerIndex": 0,
                "explanation": "III. Károly fiúutód hiányában ezzel a törvénnyel biztosította lánya, Mária Terézia trónra lépését.",
                "id": "q208"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'világkereskedelem' kialakulása a 16-17. században?",
                "options": [
                    "A kontinenseket (Európa, Afrika, Amerika, Ázsia) összekötő tengeri kereskedelmi hálózatok létrejöttét",
                    "A selyemút szárazföldi forgalmának megnövekedését",
                    "A Hanza-szövetség kiterjesztését Amerikára",
                    "Kizárólag Európán belüli szabadkereskedelmet"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A felfedezések nyomán az Atlanti-óceán vált a kereskedelem központjává, összekapcsolva a kontinensek gazdaságát.",
                "id": "q209"
            },
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
            },
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
            },
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
        "categoryId": "cat2",
        "categoryName": "Kora Újkor és Felvilágosodás",
        "points": 300,
        "questions": [
            {
                "id": "q13",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt Kolumbusz Kristóf nyugati irányú expedíciójának eredeti gazdasági célja?",
                "options": [
                    "Új, rövidebb tengeri útvonalat találni Indiába a fűszerkereskedelem miatt",
                    "Új kontinenseket felfedezni Európa túlnépesedése miatt",
                    "Keresztény missziókat alapítani az ismeretlen területeken",
                    "Kikerülni a portugálok által uralt Földközi-tengeri kereskedelmet"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A török terjeszkedés miatt a levantei kereskedelem drágult, ezért Kolumbusz a Föld gömbölyűségére alapozva nyugat felé akart eljutni a fűszerekben gazdag Indiába."
            },
            {
                "id": "q68",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb oka annak, hogy II. József (a 'kalapos király') nem koronáztatta meg magát a magyar Szent Koronával?",
                "options": [
                    "Nem akart esküt tenni a magyar rendi alkotmányra és a nemesi kiváltságok tiszteletben tartására",
                    "A pápa megtiltotta a koronázást a vallási reformjai miatt",
                    "A korona elveszett a török háborúk során",
                    "A magyar nemesség fegyverrel akadályozta meg a koronázást"
                ],
                "correctAnswerIndex": 0,
                "explanation": "II. József abszolút hatalmat akart, hogy rendeletekkel, a rendi gyűlés megkerülésével gyorsan modernizálhassa a birodalmat. A koronázási eskü ezt megakadályozta volna."
            },
            {
                "id": "q83",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt sorsdöntő az 1704-es höchstädti csata a Rákóczi-szabadságharc szempontjából, bár nem Magyarországon zajlott?",
                "options": [
                    "Mert a francia-bajor sereg vereséget szenvedett, így Rákóczi elvesztette a reményt a közvetlen francia katonai segítségre",
                    "Mert a kurucok itt győzték le végleg a császári sereget",
                    "Mert itt esett el Rákóczi Ferenc",
                    "Mert a csata után Oroszország belépett a háborúba Rákóczi oldalán"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A spanyol örökösödési háborúban a franciák vereséget szenvedtek az osztrák-angol erőktől Höchstädtnél. Ezzel meghiúsult XIV. Lajos terve, hogy Bécs alatt egyesüljön a kuruc sereggel."
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt szükség a manufaktúrák létrehozására a kora újkorban?",
                "options": [
                    "Mert a céhek nem tudták kielégíteni a megnövekedett tömegigényeket a világpiacon",
                    "Mert a királyok betiltották a céheket",
                    "Mert a rabszolgákat csak manufaktúrákban lehetett dolgoztatni",
                    "Mert a gépesítés miatt a kis műhelyek tönkrementek"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A manufaktúrákban a munkamegosztás révén gyorsabban és olcsóbban tudtak tömegcikkeket (pl. posztót) előállítani a bővülő piacok számára.",
                "id": "q210"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb oka a tizenöt éves háború (1591-1606) kitörésének Magyarországon?",
                "options": [
                    "A törökök újabb terjeszkedési kísérlete és a Habsburgok ellentámadása",
                    "A magyar nemesség fellázadása a Habsburgok ellen",
                    "A reformáció erőszakos terjesztése",
                    "Erdély függetlenedési törekvése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A háború a törökök és a Habsburgok közötti erőpróba volt a Kárpát-medence feletti uralomért, amely hatalmas pusztítással járt.",
                "id": "q211"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért kötötték meg az 1568-as tordai országgyűlésen a vallásbéke törvényét Erdélyben?",
                "options": [
                    "Hogy megakadályozzák a vallásháborúkat a négy bevett felekezet (katolikus, református, evangélikus, unitárius) szabad vallásgyakorlásának biztosításával",
                    "Hogy kizárólag a katolikus vallást tegyék államvallássá",
                    "Hogy betiltsák a protestantizmust",
                    "Hogy a török szultán parancsát teljesítsék"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A tordai vallásbéke Európában egyedülálló módon biztosította a felekezetek békés egymás mellett élését.",
                "id": "q212"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért telepítettek be svábokat (németeket) Magyarországra a 18. században?",
                "options": [
                    "A török háborúk során elnéptelenedett területek (pl. Dél-Alföld, Dunántúl) benépesítése és a gazdaság újraindítása érdekében",
                    "Hogy kiszorítsák a magyarokat a városokból",
                    "Hogy a Habsburgok ellen harcoló kurucokat helyettesítsék",
                    "Hogy a bányászatot fellendítsék a Felvidéken"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A szervezett állami betelepítés (impopulatio) célja az adófizető népesség növelése és a mezőgazdaság helyreállítása volt.",
                "id": "q213"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a célja a merkantilista gazdaságpolitikának (pl. Colbert idején Franciaországban)?",
                "options": [
                    "Az export növelése és az import csökkentése magas vámokkal, hogy a nemesfém (pénz) az országban maradjon",
                    "A szabadkereskedelem és a vámok teljes eltörlése",
                    "A mezőgazdaság kizárólagos támogatása az iparral szemben",
                    "Az állami beavatkozás teljes megszüntetése a gazdaságban"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A merkantilizmus az állam gazdagságát a felhalmozott nemesfémben látta, ezért támogatta a hazai ipart és védővámokat vezetett be.",
                "id": "q214"
            },
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
            },
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
            },
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
        "categoryId": "cat2",
        "categoryName": "Kora Újkor és Felvilágosodás",
        "points": 400,
        "questions": [
            {
                "id": "q14",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Mi volt a legfőbb különbség a portugál és a spanyol gyarmatosítási módszer között a 16. században?",
                "options": [
                    "A portugálok főleg kereskedelmi telepeket hoztak létre, a spanyolok hatalmas területeket hódítottak meg",
                    "A spanyolok csak Ázsiára fókuszáltak, a portugálok csak Amerikára",
                    "A portugálok békésen kereskedtek, a spanyolok kizárólag rabszolgákat ejtettek",
                    "A spanyolok nem hoztak létre gyarmatbirodalmat, csak a portugálok"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A portugálok Ázsiában és Afrikában partmenti erődöket (faktóriákat) építettek a kereskedelem ellenőrzésére, míg a spanyolok Amerikában a teljes kontinensbelső meghódítására és betelepítésére törekedtek."
            },
            {
                "id": "q69",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött II. József Türelmi rendelete a korábbi vallási szabályozásoktól?",
                "options": [
                    "Szabadabb vallásgyakorlást és hivatalviselési jogot biztosított a protestánsoknak és az ortodoxoknak",
                    "Kizárólag a katolikus vallást engedélyezte a birodalomban",
                    "Teljesen betiltotta a katolikus egyház működését",
                    "Kötelezővé tette mindenki számára a zsidó vallást"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Türelmi rendelet (1781) megszüntette a protestánsok (kálvinisták, lutheránusok) és görögkeletiek hátrányos megkülönböztetését, lehetővé téve számukra a hivatalviselést és a templomépítést."
            },
            {
                "id": "q84",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött az 1707-es ónodi országgyűlés az 1705-ös szécsényitől?",
                "options": [
                    "Ónodon mondták ki a Habsburg-ház trónfosztását és a közteherviselést, míg Szécsényben Rákóczit vezérlő fejedelemmé választották",
                    "Ónodon békét kötöttek a császárral, Szécsényben hadat üzentek",
                    "Szécsényben törölték el a jobbágyságot, Ónodon visszaállították",
                    "Ónodon csak a nemesek vettek részt, Szécsényben csak a jobbágyok"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A szécsényi országgyűlés (1705) az államszervezetről (rendi konföderáció) döntött. Az ónodi (1707) radikálisabb volt: a függetlenség kimondása (trónfosztás) és a nemesség megadóztatása (közteherviselés) jellemezte."
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött az angol alkotmányos monarchia (1689 után) a francia abszolutizmustól?",
                "options": [
                    "Angliában a király hatalmát a parlament és a törvények korlátozták, míg Franciaországban a király korlátlan hatalommal rendelkezett",
                    "Angliában a királyt választották, Franciaországban örökölte a trónt",
                    "Angliában nem volt hadsereg, Franciaországban igen",
                    "Angliában a nemesség adózott, Franciaországban a jobbágyok nem"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Jognyilatkozat (1689) Angliában rögzítette a parlament jogait (pl. adómegajánlás), míg XIV. Lajos Franciaországában a király a rendi gyűlés nélkül uralkodott.",
                "id": "q215"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el az Erdélyi Fejedelemség társadalma a Királyi Magyarországétól?",
                "options": [
                    "Erdélyben a három 'nemzet' (magyar nemesség, székelyek, szászok) rendi uniója gyakorolta a hatalmat",
                    "Erdélyben nem voltak jobbágyok",
                    "Erdélyben a románok alkották a vezető politikai réteget",
                    "Erdélyben teljesen megszűnt a nemesség"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az erdélyi rendiséget a Kápolnai unió (1437) óta a magyar vármegyék, a székely székek és a szász székek képviselői alkották.",
                "id": "q216"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Hogyan viszonyult a felvilágosodás a valláshoz és az egyházhoz?",
                "options": [
                    "Kritizálta a vallási dogmákat és az egyház politikai hatalmát, a vallási türelmet és az ész (ráció) elsőbbségét hirdette",
                    "Támogatta az inkvizíciót és a vallási háborúkat",
                    "Kizárólag az ateizmust (isten-tagadást) fogadta el",
                    "Célja egy új, egységes európai államvallás létrehozása volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A felvilágosult gondolkodók (pl. Voltaire) a deizmus (Isten megteremtette a világot, de nem avatkozik bele) vagy a tolerancia hívei voltak, és elutasították a vakbuzgóságot.",
                "id": "q217"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a zsellérek helyzete a telkes jobbágyokétól a 18. századi Magyarországon?",
                "options": [
                    "A zsellérek nem rendelkeztek saját jobbágytelekkel (vagy csak nagyon kicsivel), így főként bérmunkából éltek",
                    "A zsellérek nemesek voltak, a jobbágyok nem",
                    "A zsellérek csak a városokban élhettek",
                    "A zsellérek mentesültek minden állami adó alól"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A népességnövekedés miatt a jobbágytelkek elaprózódtak. Aki elvesztette a telkét, zsellérré vált, és a gazdagabb parasztoknál vagy a majorságban vállalt munkát.",
                "id": "q218"
            },
            {
                "difficulty": "hard",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a kora újkori 'árforradalom' következményeivel kapcsolatban?",
                "options": [
                    "Kelet-Európa iparosodott, míg Nyugat-Európa a mezőgazdasági nyersanyagok termelőjévé vált",
                    "Nyugat-Európában megnőtt a kereslet a kelet-európai gabona iránt",
                    "Kelet-Európában megszilárdult a jobbágyság (második jobbágyság)",
                    "A kontinentális munkamegosztás kettészakította Európa gazdaságát"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a folyamat éppen fordítva történt. Nyugat-Európa iparosodott, Kelet-Európa pedig az agrártermékek (gabona) exportőrévé vált, ami konzerválta a feudalizmust.",
                "id": "q219"
            },
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
            },
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
            },
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
        "categoryId": "cat2",
        "categoryName": "Kora Újkor és Felvilágosodás",
        "points": 500,
        "questions": [
            {
                "id": "q15",
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Milyen közvetlen hatással volt az amerikai nemesfémek Európába áramlása a 16. századi európai gazdaságra?",
                "options": [
                    "Árforradalmat (inflációt) okozott, mivel a pénz értéke csökkent a mezőgazdasági cikkekéhez képest",
                    "Azonnal megszüntette a szegénységet Nyugat-Európában",
                    "A levantei kereskedelem újbóli felvirágzását eredményezte",
                    "Visszavetette az ipari termelést, mert mindenki csak kereskedni akart"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A beáramló hatalmas mennyiségű arany és ezüst miatt a pénz elértéktelenedett, az élelmiszerek és iparcikkek ára pedig drasztikusan megnőtt (árforradalom)."
            },
            {
                "id": "q70",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a felvilágosult abszolutizmus gazdaságpolitikájával (kettős vámrendszer) kapcsolatban?",
                "options": [
                    "A vámrendszer célja a magyar ipar gyors és erőteljes fejlesztése volt az osztrák iparral szemben",
                    "A külső vámhatár védte a birodalom iparát a külföldi versenytől",
                    "A belső vámhatár Magyarországot mezőgazdasági nyersanyagtermelő és felvevőpiaci szerepre kényszerítette",
                    "Mária Terézia vezette be 1754-ben"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a kettős vámrendszer éppen hogy az OSZTRÁK és cseh ipart védte, Magyarországot pedig tudatosan a birodalom 'éléskamrájává' tette, hátráltatva a magyar iparfejlődést."
            },
            {
                "id": "q85",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az 1711-es szatmári békével kapcsolatban?",
                "options": [
                    "A béke megszüntette Magyarország rendi alkotmányát és a nemesi kiváltságokat",
                    "A bécsi udvar amnesztiát (kegyelmet) adott a hűségesküt tevő kurucoknak",
                    "A béke garantálta a vallásszabadságot",
                    "Rákóczi Ferenc nem fogadta el a békét és emigrációba vonult"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a szatmári béke egy kompromisszum volt. A császár (III. Károly) megígérte a magyar rendi alkotmány és a nemesi kiváltságok (adómentesség) tiszteletben tartását a fegyverletételért cserébe."
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Mi volt a felvilágosult abszolutizmus magyarországi reformjainak alapvető ellentmondása?",
                "options": [
                    "Modernizáló intézkedéseket vezettek be felülről, de mindezt a rendi önállóság és a politikai részvétel korlátozásával párosították",
                    "A reformok elsődleges célja a teljes magyar politikai függetlenség megteremtése volt Bécstől",
                    "A korszak uralkodói minden lényeges kérdésben az országgyűlés döntéseit követték",
                    "A reformok kizárólag vallási ügyekre korlátozódtak, a közigazgatást és gazdaságot nem érintették"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A felvilágosult abszolutizmus egyszerre jelentett modernizációt és központosító, a rendi autonómiát háttérbe szorító uralkodói politikát.",
                "id": "q220"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért vezetett a hatalmi ágak megosztásának elve (Montesquieu) a polgári demokráciák kialakulásához?",
                "options": [
                    "Mert megakadályozta a zsarnokságot azáltal, hogy a törvényhozó, végrehajtó és bírói hatalom egymást ellenőrizte",
                    "Mert a király kezébe adta mindhárom hatalmi ágat",
                    "Mert megszüntette a törvényhozást és csak a bíráskodást hagyta meg",
                    "Mert lehetővé tette a hadsereg számára a politikai hatalom átvételét"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Montesquieu elmélete szerint a hatalommal való visszaélés csak úgy kerülhető el, ha a hatalmi ágak függetlenek egymástól. Ez lett a modern alkotmányok alapja.",
                "id": "q221"
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a 16-17. századi magyarországi végvárrendszerrel kapcsolatban?",
                "options": [
                    "A végvárakat kizárólag a magyar nemesség saját költségén tartotta fenn, a Habsburg udvar nem nyújtott anyagi segítséget",
                    "A végvárrendszer fő vonala a hódoltság határán, a Dunántúlon és a Felvidék peremén húzódott",
                    "A végvári katonaság (vitézlő rend) új társadalmi rétegként jelent meg",
                    "A várak modernizálása (pl. fülesbástyák) hatalmas költségekkel járt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a végvárrendszer fenntartása óriási teher volt, amit a magyar gazdaság nem bírt el. A Habsburg udvar jelentős összegekkel (és külföldi zsoldosokkal) támogatta a védelmet.",
                "id": "q222"
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miben különbözött a 'második jobbágyság' (Kelet-Európa) a nyugat-európai parasztság helyzetétől a 16-17. században?",
                "options": [
                    "Keleten a földesurak növelték a robotot és a majorságot a gabonaexport miatt, míg Nyugaton a parasztok bérlőkké vagy szabad bérmunkásokká váltak",
                    "Keleten a jobbágyok felszabadultak, Nyugaton pedig rabszolgák lettek",
                    "Keleten a parasztok csak iparral foglalkoztak, Nyugaton csak mezőgazdasággal",
                    "Nem volt különbség, egész Európában egységesen eltörölték a jobbágyságot"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A nyugati kereslet miatt a kelet-európai nemesek saját kezelésű birtokaikat (majorság) növelték, amit a jobbágyok ingyenmunkájával (robot) műveltettek meg, így a jobbágyi függés megerősödött.",
                "id": "q223"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb oka annak, hogy a Rákóczi-szabadságharc elbukott?",
                "options": [
                    "A kedvezőtlen nemzetközi helyzet (francia vereségek) és az ország belső gazdasági-katonai kimerülése",
                    "A kuruc sereg teljes megsemmisülése egyetlen döntő csatában",
                    "Rákóczi Ferenc árulása és átállása a császáriakhoz",
                    "A jobbágyok tömeges átállása a Habsburgok oldalára"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A szabadságharc sorsát a spanyol örökösödési háború döntötte el: a franciák nem tudtak segíteni, a Habsburgok pedig átcsoportosíthatták erőiket. Emellett a pestis és a gazdasági csőd is felőrölte a kurucokat.",
                "id": "q224"
            },
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
            },
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
            },
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
    },
    {
        "categoryId": "cat3",
        "categoryName": "A hosszú 19. század",
        "points": 100,
        "questions": [
            {
                "id": "q16",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik új energiahordozó vált meghatározóvá a második ipari forradalom idején (19. sz. vége)?",
                "options": [
                    "Kőolaj és elektromosság",
                    "Szén és gőz",
                    "Földgáz és atomenergia",
                    "Fa és szélenergia"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A második ipari forradalomban a gőzgépeket fokozatosan felváltották a belső égésű motorok (kőolaj) és a villanymotorok (elektromosság)."
            },
            {
                "id": "q41",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik eseményt tekintjük a magyar reformkor kezdetének?",
                "options": [
                    "Az 1825-27-es országgyűlés összehívását és Széchenyi felajánlását az MTA-ra",
                    "Az 1848. március 15-i forradalmat",
                    "A Hitel című mű megjelenését 1830-ban",
                    "A Lánchíd építésének megkezdését"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Bár a Hitel (1830) a reformkor programadó műve, a korszak kezdetét hagyományosan az 1825-ben, hosszú szünet után összehívott pozsonyi országgyűléshez kötjük."
            },
            {
                "id": "q46",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik dokumentum foglalta össze a márciusi ifjak követeléseit 1848. március 15-én?",
                "options": [
                    "A 12 pont",
                    "A Nemzeti dal",
                    "Az Áprilisi törvények",
                    "A Függetlenségi Nyilatkozat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A 'Mit kiván a magyar nemzet' (12 pont) volt a pesti forradalom programadó dokumentuma, amely a sajtószabadságtól a jobbágyfelszabadításig tartalmazta a legfontosabb követeléseket."
            },
            {
                "id": "q51",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik magyar politikus nevéhez fűződik az 1867-es kiegyezés tető alá hozása?",
                "options": [
                    "Deák Ferenc",
                    "Kossuth Lajos",
                    "Széchenyi István",
                    "Batthyány Lajos"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Deák Ferenc, a 'haza bölcse' ismerte fel a kompromisszum szükségességét, és ő vezette a magyar tárgyalódelegációt a bécsi udvarral."
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik országban bontakozott ki az első ipari forradalom a 18. század végén?",
                "options": [
                    "Nagy-Britannia",
                    "Franciaország",
                    "Németország",
                    "Amerikai Egyesült Államok"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Anglia volt az ipari forradalom bölcsője, a kedvező gazdasági és politikai feltételek miatt.",
                "id": "q225"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Ki alkotta meg a 'Hitel' című művet 1830-ban, amely a magyar reformkor kezdetét jelentette?",
                "options": [
                    "Széchenyi István",
                    "Kossuth Lajos",
                    "Deák Ferenc",
                    "Wesselényi Miklós"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Gróf Széchenyi István műve a magyar gazdaság és társadalom modernizációjának programját adta.",
                "id": "q226"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik város volt a magyar forradalom központja 1848. március 15-én?",
                "options": [
                    "Pest-Buda",
                    "Pozsony",
                    "Bécs",
                    "Debrecen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A márciusi ifjak Pesten (Pilvax kávéház, Nemzeti Múzeum) robbantották ki a forradalmat.",
                "id": "q227"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Ki volt a magyar kormány miniszterelnöke az 1867-es kiegyezéskor?",
                "options": [
                    "Andrássy Gyula",
                    "Batthyány Lajos",
                    "Tisza Kálmán",
                    "Kossuth Lajos"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Gróf Andrássy Gyula lett a dualista Magyarország első miniszterelnöke.",
                "id": "q228"
            }
        ]
    },
    {
        "categoryId": "cat3",
        "categoryName": "A hosszú 19. század",
        "points": 200,
        "questions": [
            {
                "id": "q17",
                "difficulty": "medium",
                "questionType": "matching",
                "question": "Melyik találmány köthető Thomas Alva Edison nevéhez?",
                "options": [
                    "Szénszálas izzólámpa",
                    "Váltóáramú transzformátor",
                    "Belső égésű motor",
                    "Telefon"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Edison fejlesztette ki a gyakorlatban is jól használható szénszálas izzólámpát, amely forradalmasította a világítást."
            },
            {
                "id": "q42",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'közteherviselés' követelése a reformkorban?",
                "options": [
                    "A nemesség adómentességének eltörlését, mindenki adózzon",
                    "A jobbágyok adóinak eltörlését",
                    "Az államadósság szétosztását a lakosság között",
                    "A katonai szolgálat kiterjesztését a nőkre is"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A közteherviselés a nemesi kiváltságok (adómentesség) megszüntetését jelentette, hogy a közterhekből (adók, útépítés) a nemesség is kivegye a részét."
            },
            {
                "id": "q47",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen államformát hozott létre Magyarországon az 1848-as áprilisi törvények elfogadása?",
                "options": [
                    "Alkotmányos monarchiát",
                    "Független köztársaságot",
                    "Abszolút monarchiát",
                    "Rendi államot"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az áprilisi törvények felszámolták a feudalizmust és a rendi rendszert, a király hatalmát törvények (alkotmány) és a felelős magyar minisztérium korlátozta."
            },
            {
                "id": "q52",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen államformát hozott létre az 1867-es kiegyezés?",
                "options": [
                    "Kétközpontú (dualista) alkotmányos monarchiát",
                    "Független köztársaságot",
                    "Abszolút monarchiát",
                    "Föderatív államszövetséget"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A kiegyezéssel létrejött az Osztrák-Magyar Monarchia, amely két egyenrangú állam (Ausztria és Magyarország) szövetsége volt, közös uralkodóval."
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen új társadalmi osztály jött létre az ipari forradalom következtében?",
                "options": [
                    "Az ipari munkásság (proletariátus)",
                    "A jobbágyság",
                    "A lovagság",
                    "A patríciusok"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A gyárak megjelenésével kialakult a bérmunkából élő, gyakran rossz körülmények között dolgozó munkásosztály.",
                "id": "q229"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'védegylet' mozgalom a reformkori Magyarországon?",
                "options": [
                    "A hazai ipar védelmét a külföldi áruk bojkottjával",
                    "A határok katonai védelmét",
                    "A nemesi kiváltságok védelmét",
                    "A magyar nyelv védelmét a némettel szemben"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Kossuth Lajos kezdeményezésére a tagok vállalták, hogy csak magyar iparcikkeket vásárolnak, ezzel támogatva a hazai ipart.",
                "id": "q230"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a célja az 1848-as áprilisi törvényeknek?",
                "options": [
                    "A polgári átalakulás jogi kereteinek megteremtése (pl. jobbágyfelszabadítás, közteherviselés)",
                    "A Habsburg Birodalomtól való teljes elszakadás",
                    "A királyság eltörlése és a köztársaság kikiáltása",
                    "A nemzetiségek számára területi autonómia biztosítása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az áprilisi törvények felszámolták a feudalizmust és megteremtették a modern, polgári Magyarország alapjait.",
                "id": "q231"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen gazdasági hatása volt a kiegyezésnek (1867) Magyarországra?",
                "options": [
                    "Példátlan gazdasági fellendülés (pl. vasútépítés, gyáripar) kezdődött",
                    "A gazdaság teljesen összeomlott",
                    "Magyarország elvesztette minden iparát",
                    "Visszaállították a feudalizmust"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A politikai stabilitás és a közös osztrák-magyar piac hatalmas tőkebeáramlást és gazdasági fejlődést eredményezett a dualizmus korában.",
                "id": "q232"
            }
        ]
    },
    {
        "categoryId": "cat3",
        "categoryName": "A hosszú 19. század",
        "points": 300,
        "questions": [
            {
                "id": "q18",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi tette szükségessé a monopóliumok (pl. trösztök, kartellek) kialakulását a 19. század végén?",
                "options": [
                    "A hatalmas tőkét igénylő új iparágak (pl. vegyipar, gépgyártás) kiépítése",
                    "A munkásmozgalmak megerősödése elleni védekezés",
                    "Az állami szabályozások szigorodása",
                    "A szabad verseny teljes betiltása a kormányok által"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az új technológiák és a tömegtermelés hatalmas beruházásokat igényeltek, amit csak a tőkék összevonásával, óriásvállalatok (monopóliumok) létrehozásával lehetett finanszírozni."
            },
            {
                "id": "q43",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért tartotta Széchenyi István az ősiség törvényét (aviticitas) a gazdasági fejlődés legnagyobb gátjának?",
                "options": [
                    "Mert a birtok elidegeníthetetlensége miatt a nemesek nem vehettek fel hitelt a fejlesztésekre",
                    "Mert kötelezővé tette a jobbágyok számára a robotot",
                    "Mert megakadályozta a külföldi tőke beáramlását az iparba",
                    "Mert a törvény miatt a földek az egyház kezébe kerültek"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az 1351-es ősiség törvénye kimondta, hogy a nemesi birtokot nem lehet eladni. Így a bankok nem fogadták el fedezetként, a nemes nem kapott hitelt, hitel nélkül pedig nem tudott modernizálni."
            },
            {
                "id": "q48",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt sorsdöntő jelentőségű a kötelező örökváltság állami kárpótlással történő bevezetése az áprilisi törvényekben?",
                "options": [
                    "Mert a jobbágyok azonnal, fizetés nélkül szabad parasztokká váltak, a földesurakat pedig az állam kártalanította",
                    "Mert a jobbágyoknak évtizedekig kellett törleszteniük a földjük árát a földesúrnak",
                    "Mert a földesurak megtarthatták a jobbágyok minden földjét",
                    "Mert a jobbágyoknak el kellett hagyniuk a falvaikat és a városokba költözni"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A reformkorban vitatott önkéntes örökváltság helyett a kötelező örökváltság egy csapásra megszüntette a jobbágyságot, a kárpótlást pedig az állam vállalta magára, így elkerülték a parasztlázadást."
            },
            {
                "id": "q53",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért kényszerült rá Ferenc József a magyarokkal való megegyezésre az 1860-as évek közepén?",
                "options": [
                    "A birodalom súlyos katonai vereségeket szenvedett (pl. Königgrätz, 1866) és kiszorult a német és olasz egységből",
                    "A magyarok újabb fegyveres szabadságharcot indítottak",
                    "Oroszország katonai beavatkozással fenyegette meg Ausztriát",
                    "A birodalom gazdasága teljesen összeomlott és csődöt jelentett"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Ausztria elvesztette nagyhatalmi pozícióját Itáliában és Németországban. A meggyengült birodalom egyben tartásához Ferenc Józsefnek békét kellett kötnie a legjelentősebb belső ellenzékkel, a magyarokkal."
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt jelentős a gőzgép feltalálása (James Watt) az ipari forradalomban?",
                "options": [
                    "Mert függetlenítette a termelést a természeti erőforrásoktól (víz, szél) és folyamatos, nagy teljesítményű energiaforrást biztosított",
                    "Mert azonnal megszüntette a szénbányászatot",
                    "Mert lehetővé tette a repülőgépek építését",
                    "Mert kizárólag a mezőgazdaságban használták"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A gőzgép forradalmasította a fonó- és szövőgépek meghajtását, majd a közlekedést (gőzhajó, gőzmozdony) is.",
                "id": "q233"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért ellenezte a bécsi udvar a magyar reformtörekvéseket a 19. század első felében?",
                "options": [
                    "Mert féltették a birodalom egységét és a saját abszolút hatalmukat a polgári és nemzeti mozgalmaktól",
                    "Mert a magyarok túl sok adót akartak fizetni",
                    "Mert a magyarok a törökökkel akartak szövetkezni",
                    "Mert az udvar a jobbágyok pártján állt a nemességgel szemben"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Metternich kancellár rendszere a status quo fenntartására törekedett, és minden változást (liberalizmus, nacionalizmus) veszélyesnek tartott.",
                "id": "q234"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért fordultak a magyarországi nemzetiségek (pl. horvátok, románok) a magyar forradalom ellen 1848 nyarán?",
                "options": [
                    "Mert a magyar kormány nem ismerte el őket önálló nemzetként és nem adott nekik területi autonómiát",
                    "Mert a magyarok vissza akarták állítani a jobbágyságot",
                    "Mert a nemzetiségek nem akartak elszakadni a török birodalomtól",
                    "Mert a magyarok betiltották a vallásgyakorlásukat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar vezetés az 'egy politikai nemzet' elvét vallotta. A nemzetiségek ezt elutasították, és a bécsi udvar ezt kihasználva ellenünk fordította őket.",
                "id": "q235"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt szükség a horvát-magyar kiegyezésre (1868)?",
                "options": [
                    "Hogy rendezzék Horvátország közjogi helyzetét, széleskörű belső autonómiát biztosítva számukra a Magyar Királyságon belül",
                    "Hogy Horvátországot teljesen elszakítsák Magyarországtól",
                    "Hogy a horvátokat beolvasszák a magyar nemzetbe",
                    "Hogy közös hadsereget hozzanak létre Ausztria ellen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar-osztrák kiegyezés után a magyar kormánynak is meg kellett egyeznie a legjelentősebb nemzetiséggel, a horvátokkal, elismerve politikai nemzet voltukat.",
                "id": "q236"
            }
        ]
    },
    {
        "categoryId": "cat3",
        "categoryName": "A hosszú 19. század",
        "points": 400,
        "questions": [
            {
                "id": "q19",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el a második ipari forradalom a tudomány és az ipar kapcsolatában az elsőtől?",
                "options": [
                    "A találmányok már tudományos kutatások eredményei voltak, nem csak gyakorlati mesteremberek újításai",
                    "Az állam teljesen átvette a kutatások finanszírozását a magáncégektől",
                    "A tudomány háttérbe szorult a tapasztalati úton szerzett tudással szemben",
                    "Csak a vegyiparban alkalmaztak tudományos eredményeket"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Míg az első ipari forradalom találmányait (pl. gőzgép) gyakran zseniális mesteremberek hozták létre, a másodikban (pl. elektromosság, vegyipar) már egyetemi, laboratóriumi alapkutatásokra volt szükség."
            },
            {
                "id": "q44",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Mi volt a legfőbb különbség Széchenyi István és Kossuth Lajos reformelképzelései között?",
                "options": [
                    "Széchenyi az arisztokráciára támaszkodva, lassú reformokat akart, Kossuth a köznemességre építve, gyorsabb, radikálisabb változásokat",
                    "Széchenyi azonnali függetlenséget akart Ausztriától, Kossuth a birodalmon belül akart maradni",
                    "Széchenyi csak az ipart akarta fejleszteni, Kossuth csak a mezőgazdaságot",
                    "Széchenyi ellenezte a jobbágyfelszabadítást, Kossuth támogatta"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Széchenyi a bécsi udvarral megegyezve, a nagybirtokosok vezetésével képzelte el a gazdasági modernizációt. Kossuth a köznemességre támaszkodva a politikai és társadalmi reformokat (pl. érdekegyesítés) sürgette."
            },
            {
                "id": "q49",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Milyen ellentmondás feszült a magyar forradalom és a magyarországi nemzetiségek (pl. horvátok, románok, szerbek) törekvései között 1848 nyarán?",
                "options": [
                    "A magyar vezetés az egy politikai nemzet elvét vallotta és nem adott területi autonómiát, míg a nemzetiségek kollektív jogokat és önkormányzatot követeltek",
                    "A nemzetiségek vissza akarták állítani a jobbágyságot, amit a magyarok eltöröltek",
                    "A magyarok köztársaságot akartak, a nemzetiségek pedig ragaszkodtak a Habsburg uralkodóhoz",
                    "A nemzetiségek kizárólag vallási szabadságot kértek, amit a magyar kormány megtagadott"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar liberálisok úgy gondolták, hogy a polgári jogok (pl. jobbágyfelszabadítás) mindenkit megilletnek, ezért nincs szükség külön nemzetiségi jogokra. A nemzetiségek viszont saját nemzeti elismerést és autonómiát akartak."
            },
            {
                "id": "q54",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Hogyan osztották meg a hatalmat a közös ügyek és a belügyek tekintetében a dualista rendszerben?",
                "options": [
                    "A külügy, a hadügy és az ezeket fedező pénzügy közös volt, minden másban a két állam önállóan döntött",
                    "Minden minisztérium közös volt, de a parlamentek külön üléseztek",
                    "Magyarország csak a mezőgazdaságot irányította, minden mást Bécsből vezettek",
                    "A hadügy önálló volt, de a külügyet és a belügyet közösen intézték"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A pragmatica sanctio alapján a birodalom védelme (hadügy, külügy és az ehhez szükséges pénzügy) közös minisztériumokhoz tartozott, de a belügyekben (oktatás, igazságszolgáltatás stb.) Magyarország független volt."
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött az első és a második ipari forradalom?",
                "options": [
                    "Az első a textiliparra és a gőzre épült (Anglia), a második a nehéziparra, az elektromosságra és a belső égésű motorokra (USA, Németország)",
                    "Az elsőben a mezőgazdaság, a másodikban a kereskedelem fejlődött",
                    "Az első békés volt, a második világháborúhoz vezetett",
                    "Az első Ázsiában, a második Európában zajlott"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A 19. század végén a tudomány és az ipar összefonódott, új iparágak (vegyipar, elektrotechnika) jelentek meg, és új nagyhatalmak emelkedtek fel.",
                "id": "q237"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el Széchenyi és Kossuth gazdaságpolitikai elképzelése a reformkorban?",
                "options": [
                    "Széchenyi a mezőgazdaság modernizálását és a szabadkereskedelmet támogatta, Kossuth a hazai ipar fejlesztését védővámokkal",
                    "Széchenyi az ipart, Kossuth a mezőgazdaságot tartotta fontosnak",
                    "Mindketten a teljes gazdasági elszigetelődést támogatták",
                    "Széchenyi a jobbágyok, Kossuth a nemesek adóztatását ellenezte"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Széchenyi a nagybirtokosok vezetésével, az osztrák piacra termelve képzelte a fejlődést. Kossuth felismerte, hogy önálló ipar nélkül az ország gyarmati sorban marad.",
                "id": "q238"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Hogyan értékelte a Függetlenségi Nyilatkozat (1849. április 14.) a Habsburg-házat?",
                "options": [
                    "Trónfosztottnak nyilvánította a dinasztiát a magyar nemzet elleni fegyveres támadás és az alkotmány megsértése miatt",
                    "Elismerte a Habsburgokat törvényes uralkodóknak, de korlátozta a hatalmukat",
                    "Felajánlotta a trónt egy másik Habsburg hercegnek",
                    "Kijelentette, hogy a Habsburgok sohasem uralkodtak Magyarországon"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A tavaszi hadjárat sikerei után és az olmützi alkotmányra válaszul a debreceni országgyűlés kimondta a Habsburg-ház trónfosztását és Magyarország függetlenségét.",
                "id": "q239"
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miért beszélhetünk a dualizmus kori Magyarország esetében 'torlódó társadalomról'?",
                "options": [
                    "Mert a modern polgári-gazdasági elemek mellett tovább éltek a rendi eredetű társadalmi hierarchiák és nagybirtokosi pozíciók is",
                    "Mert a társadalom teljesen egyneművé vált, és megszűnt minden rétegbeli különbség",
                    "Mert a dualizmus korában kizárólag ipari munkások és gyárosok alkották a társadalmat",
                    "Mert a polgárosodás teljesen felszámolta a történeti elit politikai szerepét"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A dualizmus korában a kapitalista fejlődés mellett továbbra is erős maradt a történeti elit, a nagybirtok és a rendi eredetű presztízs.",
                "id": "q240"
            }
        ]
    },
    {
        "categoryId": "cat3",
        "categoryName": "A hosszú 19. század",
        "points": 500,
        "questions": [
            {
                "id": "q20",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a második ipari forradalom társadalmi hatásaival kapcsolatban?",
                "options": [
                    "A városiasodás lelassult, mert a gyárakat vidékre telepítették",
                    "Kialakult a középosztály (alkalmazottak, hivatalnokok) széles rétege",
                    "A tömegközlekedés (villamos, földalatti) átalakította a nagyvárosok szerkezetét",
                    "Megjelent a tömegkultúra és a szabadidő fogalma"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a városiasodás (urbanizáció) éppen hogy felgyorsult, hatalmas metropoliszok alakultak ki, ahová a vidéki lakosság tömegesen áramlott be."
            },
            {
                "id": "q45",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a reformkori 'érdekegyesítés' programjával kapcsolatban?",
                "options": [
                    "Célja a nemesség és a bécsi udvar érdekeinek összehangolása volt a birodalom megerősítése érdekében",
                    "Kossuth Lajos politikájának egyik alappillére volt",
                    "A nemesség és a jobbágyság összefogását sürgette a nemzeti célok érdekében",
                    "Eszköze az önkéntes, majd a kötelező örökváltság volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: az érdekegyesítés nem a bécsi udvarral, hanem a magyar TÁRSADALMI OSZTÁLYOK (nemesség és jobbágyság) közötti összefogást jelentette a polgárosodás és a nemzeti függetlenség érdekében."
            },
            {
                "id": "q50",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az 1848-as áprilisi törvények közjogi (államjogi) rendelkezéseivel kapcsolatban?",
                "options": [
                    "Magyarország teljesen elszakadt a Habsburg Birodalomtól és önálló külüggyel, hadüggyel rendelkezett",
                    "A végrehajtó hatalom a független, felelős magyar minisztérium (kormány) kezébe került",
                    "A törvényhozó hatalom a népképviseleti országgyűlés lett",
                    "A király rendeletei csak miniszteri ellenjegyzéssel voltak érvényesek"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: az áprilisi törvények NEM mondták ki a függetlenséget (azt csak 1849-ben). Magyarország a birodalom része maradt (perszonálunió), a külügy és a hadügy kérdése pedig tisztázatlan, konfliktusos pont maradt."
            },
            {
                "id": "q55",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS Kossuth Lajos 'Kasszandra-levelével' kapcsolatban?",
                "options": [
                    "Kossuth támogatta a kiegyezést, csak a gazdasági feltételeket tartotta előnytelennek",
                    "A levélben Deák Ferencet figyelmeztette a kiegyezés veszélyeire",
                    "Kossuth szerint a Monarchia bukása magával fogja rántani Magyarországot is",
                    "A levél szerint Magyarország feladta az önálló állami lét legfontosabb biztosítékait"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: Kossuth Lajos emigrációjából élesen ELLENEZTE a kiegyezést, mert úgy látta, hogy Magyarország sorsát egy halálra ítélt birodalomhoz köti (ez volt a Kasszandra-jóslat)."
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a 19. századi liberalizmus és nacionalizmus kapcsolatáról?",
                "options": [
                    "A két eszme egymást kizáró, ellenséges ideológia volt a 19. század első felében",
                    "A reformkori Magyarországon a liberális nemesség vezette a nemzeti függetlenségi mozgalmat",
                    "A liberalizmus az egyéni szabadságjogokat, a nacionalizmus a nemzeti önrendelkezést hirdette",
                    "1848-ban a polgári szabadságjogok követelése összefonódott a nemzeti függetlenség vágyával"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a 19. század első felében (a 'népek tavaszáig') a liberalizmus és a nacionalizmus szorosan összefonódott, egymást erősítő eszmék voltak a régi rendszerekkel szemben.",
                "id": "q241"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért volt a 'kötelező örökváltság állami kárpótlással' a reformkor legfontosabb, de legnehezebben megoldható kérdése?",
                "options": [
                    "Mert a jobbágyoknak nem volt pénzük megváltani magukat, az államnak (és a nemességnek) pedig nem volt tőkéje a kártalanításra",
                    "Mert a jobbágyok nem akartak felszabadulni",
                    "Mert a bécsi udvar azonnal kifizette volna a kárpótlást, de a magyarok nem fogadták el",
                    "Mert a nemesség ingyen akarta odaadni a földet, de a törvények ezt tiltották"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A polgári átalakuláshoz szabad munkaerő és föld kellett. Az önkéntes örökváltság nem működött (a parasztnak nem volt pénze). A kötelező megváltásnál a földesurat kárpótolni kellett, de az államkassza üres volt.",
                "id": "q242"
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miben különbözött a Görgei Artúr vezette tavaszi hadjárat (1849) katonai célja a politikai valóságtól?",
                "options": [
                    "Görgei a katonai győzelmekkel egy kedvező békekötést akart kikényszeríteni a Habsburgoktól, míg Kossuth a függetlenség kikiáltására használta fel a sikereket",
                    "Görgei azonnal meg akarta támadni Bécset, Kossuth viszont csak védekezni akart",
                    "Görgei a cári orosz seregekkel akart szövetkezni, Kossuth a törökökkel",
                    "Nem volt különbség, mindketten a köztársaság kikiáltását tartották a legfontosabbnak"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A katonai és politikai vezetés között feszültség volt. Görgei (és a tiszti kar egy része) az áprilisi törvények védelmére esküdött fel, és ellenezte a trónfosztást, amit Kossuth politikai okokból keresztülvitt.",
                "id": "q243"
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az Osztrák-Magyar Monarchia nemzetiségi politikájával kapcsolatban?",
                "options": [
                    "Az 1868-as nemzetiségi törvény területi autonómiát és önálló parlamentet biztosított minden magyarországi nemzetiségnek",
                    "A törvény széleskörű nyelvhasználati jogokat biztosított az oktatásban és a közigazgatásban",
                    "A korszak végére felerősödött az állami magyarosítás (asszimilációs törekvések)",
                    "A nemzetiségi vezetők elégedetlenek voltak a törvénnyel, mert kollektív jogokat követeltek"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a magyar elit ragaszkodott az 'egy politikai nemzet' elvéhez és az ország területi egységéhez, így területi autonómiát (a horvátok kivételével) senkinek nem adtak.",
                "id": "q244"
            }
        ]
    },
    {
        "categoryId": "cat4",
        "categoryName": "Világháborúk kora",
        "points": 100,
        "questions": [
            {
                "id": "q86",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik esemény volt az első világháború közvetlen kiváltó oka (ürügye)?",
                "options": [
                    "A szarajevói merénylet Ferenc Ferdinánd ellen",
                    "Németország Lengyelország elleni támadása",
                    "A Lusitania utasszállító elsüllyesztése",
                    "A versailles-i békeszerződés aláírása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "1914. június 28-án egy szerb nacionalista diák, Gavrilo Princip meggyilkolta az osztrák-magyar trónörököst, ami elindította a hadüzenetek láncolatát."
            },
            {
                "id": "q91",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik évben írták alá a trianoni békeszerződést?",
                "options": [
                    "1920",
                    "1918",
                    "1919",
                    "1921"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar békedelegáció 1920. június 4-én írta alá a békediktátumot a versailles-i Nagy Trianon palotában."
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik két katonai szövetségi rendszer állt szemben egymással az első világháborúban?",
                "options": [
                    "Az antant és a központi hatalmak",
                    "A NATO és a Varsói Szerződés",
                    "A tengelyhatalmak és a szövetségesek",
                    "A Szent Szövetség és a Hanza-szövetség"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az I. világháborúban a brit-francia-orosz antant harcolt a német-osztrák-magyar központi hatalmak ellen.",
                "id": "q245"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik ország lépett be az első világháborúba 1917-ben, eldöntve ezzel a háború kimenetelét?",
                "options": [
                    "Amerikai Egyesült Államok",
                    "Oroszország",
                    "Japán",
                    "Olaszország"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az USA a korlátlan tengeralattjáró-háború miatt lépett be az antant oldalán, hatalmas gazdasági és katonai fölényt biztosítva.",
                "id": "q246"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik városban írták alá a Magyarországgal kötött békediktátumot 1920-ban?",
                "options": [
                    "Versailles (Trianon palota)",
                    "Párizs (Élysée-palota)",
                    "Bécs (Schönbrunn)",
                    "Genf"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A trianoni békeszerződést a versailles-i Nagy Trianon kastélyban írták alá.",
                "id": "q247"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Ki volt Magyarország kormányzója a két világháború között (1920-1944)?",
                "options": [
                    "Horthy Miklós",
                    "Bethlen István",
                    "Teleki Pál",
                    "Károlyi Mihály"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Horthy Miklós egykori tengerésztisztet 1920-ban választotta kormányzóvá a Nemzetgyűlés.",
                "id": "q248"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik évben tört ki a második világháború Németország Lengyelország elleni támadásával?",
                "options": [
                    "1939",
                    "1938",
                    "1941",
                    "1945"
                ],
                "correctAnswerIndex": 0,
                "explanation": "1939. szeptember 1-jén a német csapatok átlépték a lengyel határt, ami a II. világháború kezdetét jelentette.",
                "id": "q249"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Mi volt a neve a náci Németország zsidóság megsemmisítésére irányuló tervének?",
                "options": [
                    "Endlösung (Végső megoldás)",
                    "Lebensraum (Életter)",
                    "Blitzkrieg (Villámháború)",
                    "Anschluss"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az 'Endlösung' a zsidó nép szisztematikus, ipari méretű kiirtását jelentette a haláltáborokban (holokauszt).",
                "id": "q250"
            },
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
            },
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
        "categoryId": "cat4",
        "categoryName": "Világháborúk kora",
        "points": 200,
        "questions": [
            {
                "id": "q87",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'Schlieffen-terv' a német hadvezetés számára?",
                "options": [
                    "Egy gyors, kétfrontos háborút elkerülő tervet: előbb Franciaország gyors legyőzése, majd Oroszország megtámadása",
                    "A tengeralattjáró-háború korlátlan kiterjesztését",
                    "A Balkán teljes katonai megszállását",
                    "Béketárgyalások kezdeményezését az USA bevonásával"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A németek tudták, hogy két fronton nem nyerhetnek. A terv az volt, hogy a lassan mozgósító oroszok előtt, Belgiumon át gyorsan lerohanják Párizst, de a terv a marne-i csatánál elbukott."
            },
            {
                "id": "q92",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen elvre hivatkozva csatolták el Magyarország területeinek kétharmadát a győztes hatalmak?",
                "options": [
                    "A nemzeti önrendelkezés elvére (Wilsoni elvek)",
                    "A történelmi jog elvére",
                    "A vallási homogenitás elvére",
                    "A kommunizmus terjedésének megakadályozására"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az antant hatalmak Woodrow Wilson amerikai elnök nemzeti önrendelkezési elvére hivatkoztak, bár a határok meghúzásakor gyakran a stratégiai és gazdasági érdekek (pl. vasútvonalak) felülírták az etnikai határokat."
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mi volt a célja a wilsoni 14 pontnak az első világháború végén?",
                "options": [
                    "Egy igazságos, a nemzeti önrendelkezésen alapuló tartós béke és a Népszövetség létrehozása",
                    "Németország teljes megsemmisítése és felosztása",
                    "Az európai gyarmatbirodalmak megerősítése",
                    "A kommunizmus világméretű elterjesztése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Woodrow Wilson amerikai elnök egy demokratikus világrendet akart építeni, de elvei a párizsi békekonferencián háttérbe szorultak a győztesek bosszúvágya miatt.",
                "id": "q251"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért omlott össze az Osztrák-Magyar Monarchia 1918 őszén?",
                "options": [
                    "A katonai vereség, a gazdasági kimerültség és a nemzetiségek elszakadási törekvései miatt",
                    "Mert a király önként lemondott a trónról és feloszlatta a birodalmat",
                    "Mert az USA atombombát dobott Bécsre",
                    "Mert a magyarok fellázadtak és legyőzték az osztrákokat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A négyéves háború felőrölte a birodalmat. A vereség közeledtével a nemzetiségek sorra kikiáltották függetlenségüket, a hátország pedig fellázadt.",
                "id": "q252"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen területi veszteségeket szenvedett Magyarország Trianonban?",
                "options": [
                    "Elvesztette területének mintegy kétharmadát és lakosságának több mint felét",
                    "Csak Erdélyt csatolták el Romániához",
                    "Elvesztette tengerpartját, de a Kárpát-medencét megtarthatta",
                    "Nem szenvedett területi veszteséget, csak jóvátételt kellett fizetnie"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A békeszerződés értelmében a történelmi Magyarország (Horvátország nélkül) 282 ezer km²-ről 93 ezer km²-re csökkent.",
                "id": "q253"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a Bethlen-kormány (1921-1931) legfőbb célja a konszolidáció során?",
                "options": [
                    "A politikai rendszer stabilizálása, a gazdaság talpra állítása (Népszövetségi kölcsönnel) és a nemzetközi elszigeteltség kitörése",
                    "Újabb forradalom kirobbantása a szomszédos országokban",
                    "A trianoni határok azonnali, fegyveres megváltoztatása",
                    "A kommunista párt hatalomra segítése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Bethlen István sikeresen stabilizálta a Trianon utáni csonka országot: új valutát (pengő) vezetett be, és Olaszországgal kötött szerződéssel kitört a kisantant gyűrűjéből.",
                "id": "q254"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'furcsa háború' a második világháború elején (1939-1940)?",
                "options": [
                    "Bár Nagy-Britannia és Franciaország hadat üzent Németországnak, hónapokig nem indítottak tényleges fegyveres támadást nyugaton",
                    "Azt, hogy a háborút csak repülőgépekkel vívták",
                    "Azt, hogy a Szovjetunió és Németország szövetségesként harcolt",
                    "Azt, hogy a katonák megtagadták a harcot"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Lengyelország lerohanása után a nyugati fronton 1940 tavaszáig nem történtek jelentős hadműveletek, a felek csak farkasszemet néztek.",
                "id": "q255"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért hozták meg a zsidótörvényeket Magyarországon az 1930-as évek végétől?",
                "options": [
                    "A náci Németországhoz való politikai közeledés és a hazai szélsőjobboldal nyomása miatt, céljuk a zsidóság gazdasági és társadalmi kiszorítása volt",
                    "Mert a zsidó lakosság fegyveres felkelést tervezett",
                    "Mert a Népszövetség ezt írta elő Magyarország számára",
                    "Mert a zsidóság önként kérte az elkülönítését"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A revíziós sikerek reményében a magyar kormányok egyre inkább a tengelyhatalmakhoz (Németország, Olaszország) kötötték az országot, és átvették azok antiszemita politikáját.",
                "id": "q256"
            },
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
            },
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
        "categoryId": "cat4",
        "categoryName": "Világháborúk kora",
        "points": 300,
        "questions": [
            {
                "id": "q88",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért vált az első világháború 'állóháborúvá' (löszészárok-háborúvá) a nyugati fronton?",
                "options": [
                    "Mert a modern védekező fegyverek (géppuska, szögesdrót, tüzérség) fölénybe kerültek a gyalogsági támadással szemben",
                    "Mert a katonák megtagadták a támadási parancsokat",
                    "Mert a tél miatt befagytak a folyók és nem lehetett mozogni",
                    "Mert a lovasság elvesztette a jelentőségét a repülőkkel szemben"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A technológiai fejlődés (géppuskák) lehetetlenné tette a hagyományos, nyílt terepen történő rohamokat. A seregek beásták magukat, és több száz kilométeres lövészárok-rendszerek alakultak ki."
            },
            {
                "id": "q93",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb gazdasági következménye a trianoni határok meghúzásának Magyarország számára?",
                "options": [
                    "Az ország elvesztette nyersanyagforrásainak (fa, só, ércek) és ipari kapacitásának jelentős részét, a gazdaság szerkezete felborult",
                    "Magyarország Európa vezető ipari hatalmává vált a koncentrált munkaerő miatt",
                    "A mezőgazdasági termelés teljesen megszűnt az Alföldön",
                    "Az ország mentesült minden háborús jóvátétel fizetése alól"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A korábbi egységes Kárpát-medencei gazdaság szétesett. A feldolgozóipar (pl. malomipar) Budapesten maradt, de a nyersanyagforrások (erdők, bányák) az új határokon túlra kerültek."
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt sikeres a német 'villámháború' (Blitzkrieg) a második világháború első éveiben?",
                "options": [
                    "A páncélosok (tankok) és a légierő szoros együttműködésére, a gyors áttörésre és az ellenség bekerítésére épült",
                    "Mert a németek rendelkeztek atombombával",
                    "Mert az ellenséges országok önként megadták magukat",
                    "Mert a német hadsereg tízszer nagyobb volt, mint a franciáké"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Blitzkrieg taktikája a sebességen és a meglepetésen alapult, elkerülve az első világháborús, felőrlő lövészárok-harcokat.",
                "id": "q257"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért lépett be a Szovjetunió a második világháborúba az antant (szövetségesek) oldalán?",
                "options": [
                    "Mert a náci Németország 1941. június 22-én felrúgta a megnemtámadási szerződést és hadüzenet nélkül megtámadta a Szovjetuniót",
                    "Mert a Szovjetunió kezdettől fogva a demokráciák szövetségese volt",
                    "Mert az USA megfenyegette Sztálint",
                    "Mert Japán megtámadta Vlagyivosztokot"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Molotov-Ribbentrop paktum ellenére Hitler mindig is a Szovjetunió ('Lebensraum' és a kommunizmus) megsemmisítését tervezte (Barbarossa-terv).",
                "id": "q258"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a célja a numerus clausus törvénynek (1920) Magyarországon?",
                "options": [
                    "Az egyetemi hallgatók arányát a nemzetiségek (elsősorban a zsidóság) országos arányához kötötte, így korlátozva a továbbtanulásukat",
                    "Mindenki számára ingyenessé tette az egyetemi oktatást",
                    "Kötelezővé tette a nők számára a felsőoktatást",
                    "Megtiltotta a külföldi diákok tanulását Magyarországon"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A 'zártszám' törvény Európa első 20. századi antiszemita jellegű törvénye volt, amely a zsidó értelmiség visszaszorítását célozta a munkaerőpiacon.",
                "id": "q259"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért követtek el a magyar csapatok atrocitásokat Újvidéken (hideg napok) 1942-ben?",
                "options": [
                    "A partizántámadásokra válaszul indított 'razzia' során a katonaság és csendőrség ártatlan szerb és zsidó civileket mészárolt le",
                    "Mert a szerbek megtámadták Budapestet",
                    "Mert a németek erre adtak közvetlen parancsot",
                    "Mert a helyi lakosság fellázadt a magyar nyelv kötelező használata ellen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A délvidéki bevonulás után a magyar hatóságok túlkapásai (több ezer civil áldozat) súlyos árnyékot vetettek a magyar katonai jelenlétre.",
                "id": "q260"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt sorsdöntő a sztálingrádi csata (1942-1943) a második világháborúban?",
                "options": [
                    "A szovjetek bekerítették és megsemmisítették a német 6. hadsereget, ami a keleti fronton a háború fordulópontját jelentette",
                    "Mert itt vetették be először az atombombát",
                    "Mert a németek elfoglalták Moszkvát",
                    "Mert a csata után a Szovjetunió békét kötött Németországgal"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Sztálingrádnál megtört a német hadsereg legyőzhetetlenségének mítosza, és a szovjetek átvették a hadászati kezdeményezést.",
                "id": "q261"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért hozták létre a gettókat Magyarországon 1944 tavaszán?",
                "options": [
                    "Hogy a zsidó lakosságot elkülönítsék, kifosszák és összegyűjtsék a megsemmisítő táborokba történő deportálás előtt",
                    "Hogy megvédjék a zsidókat a szövetségesek bombázásaitól",
                    "Hogy új lakónegyedeket építsenek a szegényeknek",
                    "Hogy a zsidó lakosságot önálló önkormányzathoz juttassák"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A német megszállás után a magyar közigazgatás aktív közreműködésével hetek alatt gettósították, majd Auschwitzba deportálták a vidéki zsidóságot.",
                "id": "q262"
            },
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
            },
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
        "categoryId": "cat4",
        "categoryName": "Világháborúk kora",
        "points": 400,
        "questions": [
            {
                "id": "q89",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött az USA 1917-es hadba lépésének hatása Oroszország 1917-es kilépésétől?",
                "options": [
                    "Az USA belépése friss emberanyagot és hatalmas ipari hátteret adott az antantnak, míg Oroszország kilépése csak átmenetileg tehermentesítette a központi hatalmakat",
                    "Oroszország kilépése azonnali német győzelmet hozott, az USA belépése ezt nem tudta megakadályozni",
                    "Az USA a központi hatalmak oldalán lépett be, Oroszország az antant oldalán lépett ki",
                    "Mindkét esemény a háború azonnali befejezését eredményezte"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Oroszország összeomlása (bolsevik forradalom) miatt a németek átcsoportosíthatták erőiket nyugatra, de az USA belépése (korlátlan tengeralattjáró-háború és a Zimmermann-távirat miatt) eldöntötte a háborút az antant javára."
            },
            {
                "id": "q94",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el Apponyi Albert 'vörös térképe' (Carte Rouge) a hagyományos etnikai térképektől a béketárgyalásokon?",
                "options": [
                    "A népsűrűséget is ábrázolta, így a ritkán lakott hegyvidékek (pl. románok) halványabbak, a sűrűn lakott magyar alföldi területek élénk pirosak lettek",
                    "Csak a magyar nemzetiségűeket ábrázolta, a többi nemzetiséget letagadta",
                    "A vallási megoszlásra helyezte a hangsúlyt a nyelvi helyett",
                    "Kizárólag a történelmi határokat mutatta be, etnikai adatokat nem"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Teleki Pál és Apponyi Albert térképe zseniális módszerrel, a lakatlan területeket fehéren hagyva mutatta be a Kárpát-medence etnikai viszonyait, vizuálisan kiemelve a magyarság súlyát, de a döntéshozókat ez már nem befolyásolta."
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött az első és a második világháború hadviselése?",
                "options": [
                    "Az első főként statikus lövészárok-háború volt, a második gépesített, mozgó háború, amelyben a légierő és a polgári lakosság bombázása is döntő szerepet kapott",
                    "Az elsőben használtak tankokat, a másodikban csak lovasságot",
                    "Az első globális volt, a második csak Európára korlátozódott",
                    "Az elsőben nem voltak civil áldozatok, a másodikban igen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A II. világháborúban a technika (tankok, repülők, radar) felgyorsította a hadműveleteket, és a hátország (városok bombázása) is közvetlen célponttá vált.",
                "id": "q263"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el a Horthy-korszak politikai rendszere a fasiszta vagy náci diktatúráktól?",
                "options": [
                    "Korlátozott parlamentarizmus volt: működött az ellenzék és a sajtó, nem volt egypártrendszer vagy totális terror (a német megszállásig)",
                    "A Horthy-rendszer is egypártrendszer volt, ahol a kormányzót istenként tisztelték",
                    "A Horthy-rendszerben teljesen szabad, titkos választások voltak mindenki számára",
                    "A Horthy-rendszer kommunista diktatúra volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Bár a rendszer tekintélyelvű és konzervatív volt (nyílt szavazás vidéken, cenzúra), nem épített ki totális fasiszta diktatúrát, a parlament és az ellenzéki pártok (pl. szociáldemokraták) működhettek.",
                "id": "q264"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Hogyan viszonyult a magyar társadalom a trianoni békéhez a két világháború között?",
                "options": [
                    "A társadalom minden rétege elutasította a békét, a területi revízió (visszacsatolás) nemzeti minimummá és a hivatalos politika fő céljává vált",
                    "A lakosság többsége elfogadta a határokat a béke érdekében",
                    "Csak az arisztokrácia akarta a revíziót, a parasztság nem",
                    "A magyarok örültek, hogy megszabadultak a nemzetiségektől"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A 'Nem, nem, soha!' jelszava áthatotta az oktatást, a kultúrát és a mindennapokat. A revízió vágya határozta meg Magyarország külpolitikai mozgásterét.",
                "id": "q265"
            },
            {
                "difficulty": "hard",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a Szálasi-kormánnyal (nyilas uralom) kapcsolatban?",
                "options": [
                    "Szálasi Ferenc a sikeres kiugrási kísérlet után, demokratikus választásokon került hatalomra",
                    "A nyilasok a németek támogatásával, puccsszerűen vették át a hatalmat Horthy lemondatása után",
                    "Totális terrort vezettek be, és folytatták a budapesti zsidóság pusztítását (pl. Duna-parti lövetések)",
                    "Az ország erőforrásait és a hadsereget teljesen alárendelték a német háborús gépezetnek"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: Szálasi a Horthy-féle SIKERTELEN kiugrási kísérlet (1944. okt. 15.) után, német katonai nyomásra, zsarolással vette át a hatalmat, nem választásokon.",
                "id": "q266"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a jaltai és a potsdami konferencia (1945)?",
                "options": [
                    "Jaltában még a háború alatti együttműködés és a befolyási övezetek kijelölése dominált, Potsdamban már kiéleződtek az ellentétek a szövetségesek között",
                    "Jaltában Németország felosztásáról, Potsdamban Japán felosztásáról döntöttek",
                    "Jaltában az USA, Potsdamban a Szovjetunió diktálta a feltételeket",
                    "Jaltában részt vett Hitler, Potsdamban már nem"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Jaltában (február) még megvolt a közös ellenség. Potsdamban (július-augusztus) Truman és Sztálin között már megmutatkoztak a hidegháborúhoz vezető ideológiai és hatalmi ellentétek.",
                "id": "q267"
            },
            {
                "difficulty": "hard",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a magyar 2. hadsereg doni katasztrófájával (1943) kapcsolatban?",
                "options": [
                    "A hadsereg kiváló téli felszereléssel és modern páncélosokkal rendelkezett, a vereséget csak a túlerő okozta",
                    "A szovjet áttörés (Urivnál) napok alatt felmorzsolta a gyengén felszerelt magyar vonalakat",
                    "Mintegy 100-120 ezer magyar katona esett el, sebesült meg vagy esett fogságba",
                    "A hadsereget német követelésre, a keleti front biztosítására küldték ki"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a 2. hadsereg tragédiáját éppen a hiányos fegyverzet, a téli ruházat hiánya és a tarthatatlanul hosszú arcvonal okozta a kemény orosz télben.",
                "id": "q268"
            },
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
            },
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
        "categoryId": "cat4",
        "categoryName": "Világháborúk kora",
        "points": 500,
        "questions": [
            {
                "id": "q90",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az első világháború hátországára (hátország) vonatkozóan?",
                "options": [
                    "A háború végére a nők visszaszorultak a háztartásokba, mivel a frontról hazatérő sebesültek átvették a munkájukat",
                    "Bevezették a jegyrendszert az élelmiszerek és nyersanyagok elosztására",
                    "A gazdaságot központilag irányított hadigazdasággá alakították át",
                    "A propaganda és a cenzúra a mindennapi élet részévé vált"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a háború alatt és után a nők társadalmi szerepe éppen hogy MEGNŐTT. Mivel a férfiak a fronton voltak, a nők tömegesen álltak munkába a gyárakban, ami felgyorsította a női egyenjogúsági (emancipációs) mozgalmakat."
            },
            {
                "id": "q95",
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért volt a trianoni békeszerződés katonai korlátozása politikailag is súlyos következményű Magyarország számára?",
                "options": [
                    "Mert nemcsak a honvédelem lehetőségeit szűkítette le, hanem a revíziós törekvéseket is külső támogatástól függővé tette",
                    "Mert lehetővé tette egy modern, tömeghadseregre épülő magyar katonai rendszer gyors kiépítését",
                    "Mert a béke a hadsereg megerősítésével kívánta biztosítani a belpolitikai stabilitást",
                    "Mert katonai téren kedvezőbb helyzetet teremtett, mint a Monarchia idején"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hadsereg létszámának és fegyverzetének korlátozása nemcsak katonai, hanem diplomáciai értelemben is kiszolgáltatottá tette Magyarországot."
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az első világháborút lezáró párizsi békerendszerrel (Versailles) kapcsolatban?",
                "options": [
                    "A békék sikeresen megszüntették a nemzeti ellentéteket Európában, és egy évszázados békés korszakot alapoztak meg",
                    "Németországot kizárólagos felelőssé tették a háborúért és hatalmas jóvátételre kötelezték",
                    "A Monarchia felbomlásával új nemzetállamok (pl. Csehszlovákia, Jugoszlávia) jöttek létre, jelentős kisebbségekkel",
                    "A veszteseket nem engedték részt venni a béketárgyalásokon, a feltételeket diktálták nekik"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a párizsi békék (a franciák revansvágya miatt) igazságtalanok voltak, újabb feszültségeket teremtettek, és magukban hordozták a II. világháború csíráját.",
                "id": "q269"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért vezetett a Károlyi Mihály-féle őszirózsás forradalom (1918) a Tanácsköztársaság (1919) létrejöttéhez?",
                "options": [
                    "A Károlyi-kormány nem tudta megvédeni az ország határait az antant (Vix-jegyzék) és a szomszédok támadásaival szemben, a csalódott tömegek a radikális kommunistákhoz fordultak",
                    "Mert Károlyi Mihály titokban kommunista volt és átadta a hatalmat Kun Bélának",
                    "Mert a szovjet Vörös Hadsereg megszállta Budapestet",
                    "Mert a magyar parasztság fegyveres felkeléssel követelte a kommunizmust"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A demokratikus Károlyi-kormány bízott a wilsoni elvekben, de az antant egyre több területet követelt (Vix-jegyzék). A kilátástalan helyzetben Károlyi lemondott, és a hatalmat a kommunisták vették át.",
                "id": "q270"
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miben különbözött a magyarországi zsidótörvények logikája a holokauszt végső fázisától?",
                "options": [
                    "A zsidótörvények fokozatosan jogfosztottá és gazdaságilag tönkretetté tették a zsidóságot, ami 'hozzászoktatta' a társadalmat a kirekesztéshez, előkészítve a talajt a fizikai megsemmisítéshez",
                    "A zsidótörvények védték a zsidókat, a holokauszt viszont pusztította őket",
                    "A zsidótörvényeket a magyarok, a holokausztot kizárólag a németek hajtották végre magyar segítség nélkül",
                    "Nem volt kapcsolat a kettő között"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A jogfosztás (1938-tól) egy folyamat volt. Amikor a társadalom elfogadta, hogy a zsidók másodrendű állampolgárok, a német megszállás után sokkal kisebb volt az ellenállás a deportálásokkal szemben.",
                "id": "q271"
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a második világháború alatti magyar külpolitikával (Kállay-kormány) kapcsolatban?",
                "options": [
                    "Kállay Miklós nyíltan hadat üzent Németországnak és csatlakozott a szovjet Vörös Hadsereghez",
                    "A 'kállayi kettős tánc' célja a német szövetség látszatának fenntartása mellett a titkos megegyezés volt az angolszász hatalmakkal",
                    "A kormány remélte, hogy a háború végén az angol-amerikai csapatok érik el előbb Magyarországot",
                    "A titkos tárgyalások kudarca és lelepleződése vezetett az ország 1944-es német megszállásához"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: Kállay soha nem üzent hadat a németeknek, és kifejezetten rettegett a szovjetektől. Titkos diplomáciája az angolszászok felé irányult, de a front közeledtével ez illúziónak bizonyult.",
                "id": "q272"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért dobott le az USA atombombát Hirosimára és Nagaszakira 1945-ben?",
                "options": [
                    "Hogy kikényszerítse Japán azonnali megadását, elkerülve egy véres szárazföldi inváziót, és demonstrálja erejét a Szovjetunió felé",
                    "Mert Japán atombombát akart dobni New Yorkra",
                    "Mert a Szovjetunió erre kérte az amerikai elnököt",
                    "Hogy teszteljék a fegyvert lakatlan területeken"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A japánok fanatikus ellenállása (pl. kamikazék) miatt az amerikai hadvezetés hatalmas saját veszteségektől tartott egy invázió esetén. A bomba bevetése sokkolta Japánt, amely kapitulált.",
                "id": "q273"
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miben különbözött a fasizmus (Olaszország) és a nemzetiszocializmus (Németország) ideológiája?",
                "options": [
                    "A nácizmus központi eleme a biológiai fajelmélet és az antiszemitizmus volt, míg az olasz fasizmus inkább az állam mindenhatóságát (totalitarizmus) és a nemzeti nagyságot hangsúlyozta",
                    "A fasizmus demokratikus volt, a nácizmus diktatórikus",
                    "A nácizmus a kommunizmusra épült, a fasizmus a kapitalizmusra",
                    "Nem volt különbség, a két fogalom teljesen megegyezik"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Bár mindkettő szélsőjobboldali, vezérelvű diktatúra volt, Mussolini fasizmusa eredetileg nem volt rasszista. Hitler nácizmusa viszont a 'felsőbbrendű árja faj' és a zsidóság megsemmisítésének beteges eszméjére épült.",
                "id": "q274"
            },
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
            },
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
    },
    {
        "categoryId": "cat5",
        "categoryName": "Jelenkor és Hidegháború",
        "points": 100,
        "questions": [
            {
                "id": "q21",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Mi volt a Kádár-korszak nem hivatalos, de elterjedt elnevezése a javuló életszínvonal miatt?",
                "options": [
                    "Gulyáskommunizmus",
                    "Vasfüggöny-jólét",
                    "Szocialista piacgazdaság",
                    "Tervgazdasági csoda"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A 'gulyáskommunizmus' vagy 'fridzsiderszocializmus' kifejezés arra utalt, hogy a rendszer a politikai passzivitásért cserébe viszonylagos anyagi jólétet biztosított."
            },
            {
                "id": "q56",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik évben tartották az első szabad, többpárti parlamenti választásokat a rendszerváltás során?",
                "options": [
                    "1990",
                    "1988",
                    "1989",
                    "1991"
                ],
                "correctAnswerIndex": 0,
                "explanation": "1990 tavaszán zajlott le az első szabad választás, amelyet az MDF (Magyar Demokrata Fórum) nyert meg, Antall József vezetésével."
            },
            {
                "id": "q96",
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik két szuperhatalom állt szemben egymással a hidegháború idején?",
                "options": [
                    "Az Amerikai Egyesült Államok (USA) és a Szovjetunió (SZU)",
                    "Nagy-Britannia és Németország",
                    "Kína és Japán",
                    "Franciaország és a Szovjetunió"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A második világháború után a világ kétpólusúvá vált: a kapitalista, demokratikus Nyugatot az USA, a kommunista Keletet a Szovjetunió vezette."
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik évben tört ki a magyar forradalom és szabadságharc a Rákosi-diktatúra és a szovjet megszállás ellen?",
                "options": [
                    "1956",
                    "1948",
                    "1968",
                    "1989"
                ],
                "correctAnswerIndex": 0,
                "explanation": "1956. október 23-án a budapesti diákok tüntetésével kezdődött a forradalom.",
                "id": "q275"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Ki volt a kommunista párt (MSZMP) vezetője Magyarországon 1956 és 1988 között?",
                "options": [
                    "Kádár János",
                    "Rákosi Mátyás",
                    "Nagy Imre",
                    "Grósz Károly"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Kádár János a szovjetek segítségével verte le a forradalmat, majd több mint 30 évig irányította az országot.",
                "id": "q276"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik katonai szövetséghez csatlakozott Magyarország 1999-ben?",
                "options": [
                    "NATO",
                    "Varsói Szerződés",
                    "Kisantant",
                    "Szent Szövetség"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A rendszerváltás után Magyarország a nyugati integráció részeként csatlakozott az Észak-atlanti Szerződés Szervezetéhez (NATO).",
                "id": "q277"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Melyik évben csatlakozott Magyarország az Európai Unióhoz?",
                "options": [
                    "2004",
                    "1990",
                    "1999",
                    "2010"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Magyarország 2004. május 1-jén lett az EU teljes jogú tagja 9 másik országgal együtt.",
                "id": "q278"
            },
            {
                "difficulty": "easy",
                "questionType": "multiple_choice",
                "question": "Mi volt a neve a Szovjetunió által vezetett katonai szövetségnek a hidegháború idején?",
                "options": [
                    "Varsói Szerződés",
                    "KGST",
                    "NATO",
                    "Komintern"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Varsói Szerződést 1955-ben hozták létre a NATO ellensúlyozására, a keleti blokk országainak részvételével.",
                "id": "q279"
            },
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
        "categoryId": "cat5",
        "categoryName": "Jelenkor és Hidegháború",
        "points": 200,
        "questions": [
            {
                "id": "q22",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Melyik Kádár Jánoshoz köthető politikai jelmondat fejezte ki a rendszer kompromisszumos jellegét az 1960-as évektől?",
                "options": [
                    "Aki nincs ellenünk, az velünk van.",
                    "Aki nincs velünk, az ellenünk van.",
                    "Mindent a dolgozó népért!",
                    "Építjük a szocializmus alapjait!"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Ez a jelszó a Rákosi-korszak ('Aki nincs velünk, az ellenünk van') ellentéte volt: a hatalom már nem várt el aktív lelkesedést, csak azt, hogy ne lázadjanak ellene."
            },
            {
                "id": "q57",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mi volt a Nemzeti Kerekasztal-tárgyalások (1989) legfőbb célja?",
                "options": [
                    "A békés átmenet és az új, demokratikus alkotmányos keretek kidolgozása az állampárt (MSZMP) és az ellenzék között",
                    "A szovjet csapatok azonnali fegyveres kiverésének megtervezése",
                    "A privatizáció (magánosítás) lebonyolítása",
                    "Az ország Európai Uniós csatlakozásának előkészítése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Kerekasztal-tárgyalásokon egyezett meg a hatalmon lévő MSZMP és az Ellenzéki Kerekasztal a békés rendszerváltás jogi feltételeiről (pl. választási törvény, alkotmánymódosítás)."
            },
            {
                "id": "q97",
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mi volt a célja a Marshall-tervnek (1947)?",
                "options": [
                    "Európa gazdasági újjáépítésének pénzügyi támogatása, ezzel a kommunizmus terjedésének megállítása",
                    "A Szovjetunió katonai megtámadása",
                    "A NATO létrehozása",
                    "Németország végleges felosztása"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az USA hatalmas segélyprogramot indított Európa talpra állítására, felismerve, hogy a gazdasági nyomor a kommunista pártok megerősödéséhez vezetne Nyugat-Európában."
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'gulyáskommunizmus' (vagy 'legvidámabb barakk') kifejezés a Kádár-korszakban?",
                "options": [
                    "A rendszer viszonylagos jólétet és fogyasztási cikkeket biztosított a társadalomnak a politikai passzivitásért cserébe",
                    "Azt, hogy mindenkinek kötelező volt gulyást enni a gyárakban",
                    "Azt, hogy Magyarország volt a szovjet blokk legszegényebb országa",
                    "Azt, hogy a kommunista párt betiltotta a húsfogyasztást"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Kádár az 1956-os tapasztalatokból okulva az életszínvonal emelésével (pl. háztáji gazdaságok, hitelek) próbálta megvásárolni a társadalom békéjét.",
                "id": "q280"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a legfőbb oka a Szovjetunió összeomlásának az 1980-as évek végén?",
                "options": [
                    "A fegyverkezési verseny okozta gazdasági csőd és a kommunista rendszer belső válsága",
                    "Az USA közvetlen katonai támadása Moszkva ellen",
                    "A csernobili atomkatasztrófa",
                    "Kína gazdasági felemelkedése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A szovjet tervgazdaság nem bírta a versenyt a nyugati technológiával (pl. csillagháborús tervek). Gorbacsov reformjai (peresztrojka) már nem tudták megmenteni a rendszert.",
                "id": "q281"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Milyen szerepet játszott az Ellenzéki Kerekasztal (EKA) a magyar rendszerváltásban?",
                "options": [
                    "Az ellenzéki pártok és mozgalmak egyeztető fóruma volt, amely egységesen tárgyalt az állampárttal (MSZMP) a békés átmenetről",
                    "Fegyveres felkelést szervezett a szovjetek ellen",
                    "Titokban eladta az állami vagyont külföldieknek",
                    "Megakadályozta a szabad választások megtartását"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az EKA (1989) biztosította, hogy az MSZMP ne tudja megosztani az ellenzéket, így a Nemzeti Kerekasztal-tárgyalásokon kikényszerítették a demokratikus alkotmányozást.",
                "id": "q282"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért épült meg a berlini fal 1961-ben?",
                "options": [
                    "Hogy megakadályozzák a keletnémetek (NDK) tömeges menekülését a demokratikus és gazdagabb Nyugat-Berlinbe",
                    "Hogy megvédjék Kelet-Berlint a nyugati katonai támadástól",
                    "Hogy a szovjetek elrejtsék a nukleáris fegyvereiket",
                    "Hogy a várost megvédjék az árvizektől"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A kommunista NDK gazdaságilag lemaradt, és a fiatal, képzett munkaerő tömegesen menekült Nyugatra. A fal a hidegháború megosztottságának fizikai szimbóluma lett.",
                "id": "q283"
            },
            {
                "difficulty": "medium",
                "questionType": "multiple_choice",
                "question": "Mit jelentett a 'vasfüggöny' kifejezés, amelyet Winston Churchill használt először?",
                "options": [
                    "Európa ideológiai, politikai és fizikai kettészakadását a demokratikus Nyugat és a szovjet uralom alatt álló Kelet között",
                    "Egy új típusú szovjet fegyvert",
                    "A náci koncentrációs táborok kerítését",
                    "A brit birodalom védelmi vonalát Indiában"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A vasfüggöny a keleti blokk elzártságát jelképezte (szögesdrótok, aknamezők a határon), amely megakadályozta a szabad mozgást és az információáramlást.",
                "id": "q284"
            },
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
        "categoryId": "cat5",
        "categoryName": "Jelenkor és Hidegháború",
        "points": 300,
        "questions": [
            {
                "id": "q23",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt az 1968-as Új Gazdasági Mechanizmus legfőbb célja?",
                "options": [
                    "A tervgazdaság merevségének enyhítése piaci elemek és vállalati önállóság bevezetésével",
                    "A teljes piacgazdaságra és kapitalizmusra való áttérés",
                    "A mezőgazdaság teljes államosítása és a háztáji gazdaságok betiltása",
                    "A Szovjetuniótól való gazdasági függetlenedés elérése"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A reform célja a gazdaság hatékonyságának növelése volt úgy, hogy a szocialista kereteket megtartva (pl. állami tulajdon), de piaci ösztönzőket (pl. nyereségérdekeltség) is alkalmaztak."
            },
            {
                "id": "q58",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt szimbolikus jelentősége Nagy Imre és mártírtársai 1989. június 16-i újratemetésének?",
                "options": [
                    "Mert a Kádár-rendszer alapmítoszának (az '56-os 'ellenforradalom') megdőlését és a rendszer erkölcsi bukását jelentette",
                    "Mert ekkor jelentették be a szovjet csapatok kivonulását",
                    "Mert ezen a napon kiáltották ki a harmadik Magyar Köztársaságot",
                    "Mert ekkor írták alá a Varsói Szerződés felbontását"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Kádár-rendszer legitimitása az 1956-os forradalom elfojtásán és elhazudásán alapult. A mártír miniszterelnök rehabilitálása és tömegek előtti újratemetése a rendszer végét szimbolizálta."
            },
            {
                "id": "q98",
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért nem került sor soha közvetlen, nyílt fegyveres összecsapásra az USA és a Szovjetunió között a hidegháború alatt?",
                "options": [
                    "A kölcsönös elrettentés elve (nukleáris egyensúly) miatt, mivel egy atomháború mindkét fél pusztulását jelentette volna",
                    "Mert az ENSZ mindig sikeresen békét teremtett",
                    "Mert a két ország földrajzilag túl messze volt egymástól",
                    "Mert titkos békeszerződést kötöttek Jaltában"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A 'kölcsönös biztos megsemmisítés' (MAD) doktrínája miatt a szuperhatalmak kerülték a közvetlen háborút, helyette helyi konfliktusokban (proxy háborúk, pl. Korea, Vietnám) támogatták a szembenálló feleket."
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt jelentős az 1968-as 'új gazdasági mechanizmus' Magyarországon?",
                "options": [
                    "Mert a szigorú tervgazdaságot piaci elemekkel (vállalati önállóság, nyereségérdekeltség) lazította, ami átmeneti gazdasági fellendülést hozott",
                    "Mert teljesen visszaállította a kapitalizmust és a magántulajdont",
                    "Mert bevezette a kötelező beszolgáltatást a parasztok számára",
                    "Mert kiléptette Magyarországot a KGST-ből"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Nyers Rezső reformja a szocialista blokkban egyedülálló módon próbálta hatékonyabbá tenni a gazdaságot, de a szovjet nyomás és a belső ellenállás miatt a 70-es években leállították.",
                "id": "q285"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt történelmi jelentősége a páneurópai pikniknek (1989. augusztus 19.) Sopronpusztánál?",
                "options": [
                    "Mert a határ ideiglenes megnyitását kihasználva több száz keletnémet menekült át Ausztriába, ami elindította a vasfüggöny és a keleti blokk összeomlását",
                    "Mert itt írták alá a Varsói Szerződés feloszlatását",
                    "Mert itt találkozott először Gorbacsov és az amerikai elnök",
                    "Mert itt tartották az első szabad magyar választásokat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar határőrök nem lőttek a menekülőkre. Ez az esemény megmutatta a szovjet blokk gyengeségét, és felgyorsította a berlini fal leomlásához vezető folyamatokat.",
                "id": "q286"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Mi volt a célja a Truman-doktrínának (1947) a hidegháború kezdetén?",
                "options": [
                    "A kommunizmus terjeszkedésének 'feltartóztatása' (containment) gazdasági és katonai segítséggel a fenyegetett országok (pl. Görögország, Törökország) számára",
                    "A Szovjetunió azonnali katonai megsemmisítése",
                    "Az USA teljes elszigetelődése az európai ügyektől",
                    "A gyarmatbirodalmak fenntartása Ázsiában"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az USA felismerte, hogy a Szovjetunió világuralomra tör. A doktrína szakított az izolacionizmussal, és az USA-t a 'szabad világ' védelmezőjévé tette.",
                "id": "q287"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért hozták létre az Európai Szén- és Acélközösséget (Montánunió) 1951-ben?",
                "options": [
                    "Hogy a francia és német nehézipar közös ellenőrzésével lehetetlenné tegyenek egy újabb háborút a két ország között, megalapozva az európai integrációt",
                    "Hogy közös fegyvergyárakat építsenek a Szovjetunió ellen",
                    "Hogy kizárják Nagy-Britanniát az európai kereskedelemből",
                    "Hogy egységesítsék az európai valutákat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Robert Schuman terve zseniális volt: a háborúhoz szükséges alapanyagok (szén, acél) közös felügyelete gazdaságilag összekötötte a korábbi ősellenségeket (franciákat és németeket).",
                "id": "q288"
            },
            {
                "difficulty": "medium",
                "questionType": "cause_effect",
                "question": "Miért volt szükség a 'kárpótlási jegyek' bevezetésére a magyar rendszerváltás után?",
                "options": [
                    "Hogy részleges anyagi kárpótlást nyújtsanak azoknak, akiket a kommunista diktatúra megfosztott a vagyonuktól (pl. államosítás, téeszesítés)",
                    "Hogy kifizessék a szovjet csapatok kivonulásának költségeit",
                    "Hogy a munkanélküliek segélyt kaphassanak",
                    "Hogy az államadósságot visszafizessék a Nyugatnak"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A teljes reprivatizáció (az eredeti vagyon visszaadása) lehetetlen lett volna. A kárpótlási jegyeket földre, részvényekre vagy lakásra lehetett cserélni.",
                "id": "q289"
            },
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
        "categoryId": "cat5",
        "categoryName": "Jelenkor és Hidegháború",
        "points": 400,
        "questions": [
            {
                "id": "q24",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a Kádár-kori mezőgazdaság a szovjet típusú kolhozosítástól?",
                "options": [
                    "Engedélyezték és támogatták a háztáji gazdaságokat, amelyek a piacra is termelhettek",
                    "Teljesen megszüntették a termelőszövetkezeteket (TSZ)",
                    "Csak állami gazdaságok (szovhozok) működhettek",
                    "A parasztság mentesült minden adó alól"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Bár a földeket tsz-esítették, a parasztok megtarthattak egy kis 'háztáji' földet és állatokat, aminek a terményeit szabadon eladhatták, ez biztosította az ország élelmiszer-ellátását."
            },
            {
                "id": "q59",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a magyar rendszerváltás a romániai eseményektől?",
                "options": [
                    "Magyarországon tárgyalásos, békés átmenet történt, Romániában véres, fegyveres forradalom döntötte meg a diktatúrát",
                    "Magyarországon a hadsereg vette át a hatalmat, Romániában civil kormány alakult",
                    "Magyarországon a kommunista párt nyerte az első választást, Romániában az ellenzék",
                    "Magyarországon nem volt gazdasági válság, Romániában igen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar 'tárgyalásos forradalom' vér nélkül, jogi úton zajlott le, míg Romániában Nicolae Ceaușescu diktatúráját csak fegyveres felkelés és sortüzek árán tudták megdönteni."
            },
            {
                "id": "q99",
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a Truman-doktrína a korábbi amerikai külpolitikától (izolacionizmus)?",
                "options": [
                    "Szakított a be nem avatkozás elvével, és globális kötelezettséget vállalt a kommunizmus 'feltartóztatására' (containment) bárhol a világon",
                    "Kizárólag az amerikai kontinens védelmére fókuszált (Monroe-elv felújítása)",
                    "Teljes leszerelést és pacifizmust hirdetett",
                    "Célul tűzte ki a Szovjetunió azonnali, fegyveres megsemmisítését (rollback)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Harry Truman elnök 1947-ben meghirdette, hogy az USA gazdasági és katonai segítséget nyújt minden olyan szabad népnek, amelyet fegyveres kisebbségek vagy külső nyomás (kommunizmus) fenyeget."
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött az 1956-os magyar forradalom az 1968-as csehszlovákiai 'prágai tavasztól'?",
                "options": [
                    "A magyar forradalom fegyveres felkelés volt a rendszer ellen, míg a prágai tavasz a kommunista párton belüli, békés reformkísérlet ('emberarcú szocializmus')",
                    "A magyar forradalmat az USA támogatta, a csehszlovákot a Szovjetunió",
                    "A magyar forradalom győzött, a prágai tavasz elbukott",
                    "A magyar forradalom csak a fővárosra korlátozódott, a prágai tavasz országos volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Bár mindkettőt szovjet tankok verték le, 1956-ban a magyarok fegyverrel harcoltak a függetlenségért, míg 1968-ban Alexander Dubčekék csak reformálni akarták a szocializmust.",
                "id": "q290"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben tért el a Kádár-korszak gazdaságpolitikája az 1970-es évek végén a korábbi évtizedtől?",
                "options": [
                    "Az olajválságok miatt a gazdaság lelassult, az életszínvonal fenntartását pedig egyre inkább nyugati hitelekből (eladósodás) finanszírozták",
                    "A 70-es évek végén Magyarország teljesen önellátóvá vált és visszafizette minden adósságát",
                    "Bevezették a piacgazdaságot és a kapitalizmust",
                    "Megszüntették a háztáji gazdaságokat"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A világpiaci árobbanás (olaj) súlyosan érintette a magyar gazdaságot. Kádár nem akarta csökkenteni az életszínvonalat, ezért az ország csapdahelyzetbe került: hitelből finanszírozta a fogyasztást.",
                "id": "q291"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Hogyan változott az Európai Unió jellege a maastrichti szerződés (1992) elfogadásával?",
                "options": [
                    "A korábbi tisztán gazdasági közösségből (EGK) politikai unióvá is vált, célul tűzve ki a közös valutát (euró) és a közös külpolitikát",
                    "Az EU katonai szövetséggé alakult, felváltva a NATO-t",
                    "Az EU megszüntette a szabad kereskedelmet a tagállamok között",
                    "Az EU kizárta a kelet-európai országokat a csatlakozásból"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Maastricht jelentette a minőségi ugrást: az Európai Közösségből Európai Unió lett, megteremtve a gazdasági és monetáris unió (EMU) alapjait.",
                "id": "q292"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért volt jelentős a magyar rendszerváltás közjogi szempontból abban a formában, ahogyan végbement?",
                "options": [
                    "Mert a jogfolytonosság látszatát fenntartva, alkotmánymódosításokkal építették ki a demokratikus jogállamot, elkerülve a forradalmi jogi vákuumot",
                    "Mert teljesen félretették a jogi kereteket, és kizárólag utcai erővel döntötték meg a rendszert",
                    "Mert az új államrend alapját a katonai szükségállapot és a rendkívüli kormányzás adta",
                    "Mert a kommunista alkotmány minden változtatás nélkül, automatikusan demokratikussá vált"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar átmenet egyik sajátossága az volt, hogy a régi alkotmány radikális módosításával, de jogi keretek között hozták létre az új demokratikus rendszert.",
                "id": "q293"
            },
            {
                "difficulty": "hard",
                "questionType": "comparison",
                "question": "Miben különbözött a NATO és a Varsói Szerződés működése a hidegháború alatt?",
                "options": [
                    "A NATO független, demokratikus államok önkéntes védelmi szövetsége volt, míg a Varsói Szerződés a Szovjetunió dominanciáján alapult, és saját tagállamai ellen is bevetették (pl. 1956, 1968)",
                    "A NATO csak Európát védte, a Varsói Szerződés az egész világot",
                    "A NATO-nak nem voltak nukleáris fegyverei, a Varsói Szerződésnek igen",
                    "A Varsói Szerződés tagjai szabadon kiléphettek, a NATO-ból nem"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A Varsói Szerződés valójában a szovjet birodalmi érdekek eszköze volt, amit a magyar és a csehszlovák forradalom leverése is bizonyít. A NATO-ban a tagállamok szuverenitása megmaradt.",
                "id": "q294"
            },
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
        "categoryId": "cat5",
        "categoryName": "Jelenkor és Hidegháború",
        "points": 500,
        "questions": [
            {
                "id": "q25",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a Kádár-rendszer 1970-es évekbeli gazdaságpolitikájával kapcsolatban?",
                "options": [
                    "A rendszer felismerte az olajválság veszélyeit, és azonnal csökkentette az állami kiadásokat",
                    "A jóléti intézkedéseket egyre inkább nyugati hitelekből finanszírozták",
                    "Az 1968-as gazdasági reformokat leállították a szovjet és belső konzervatív nyomásra",
                    "Az ország eladósodási spirálba került a fenntarthatatlan életszínvonal miatt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a vezetés sokáig 'begyűrűződés-elmélettel' hitegette magát (hogy a válság nem érinti a szocialista blokkot), nem csökkentette a kiadásokat, hanem hiteleket vett fel."
            },
            {
                "id": "q60",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a rendszerváltást kísérő gazdasági átalakulással (privatizáció) kapcsolatban?",
                "options": [
                    "A privatizáció során az állami vagyon jelentős része a dolgozók (munkások) kollektív tulajdonába ment át",
                    "A piacgazdaságra való áttérés magas inflációval és a munkanélküliség drasztikus megugrásával járt",
                    "A korábbi KGST-piacok (keleti export) összeomlottak",
                    "A külföldi tőke beáramlása elengedhetetlen volt a gazdaság modernizálásához"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a privatizáció (magánosítás) során a gyárak és vállalatok nem a munkások, hanem hazai és külföldi magánbefektetők (tőkések) kezébe kerültek."
            },
            {
                "id": "q100",
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az 1962-es kubai rakétaválsággal kapcsolatban?",
                "options": [
                    "A válság azzal végződött, hogy az USA fegyveresen megszállta Kubát és megdöntötte Fidel Castro rendszerét",
                    "A konfliktust az robbantotta ki, hogy a Szovjetunió titokban nukleáris rakétákat telepített Kubába",
                    "John F. Kennedy amerikai elnök tengeri blokádot (karantént) rendelt el a sziget körül",
                    "A megegyezés részeként az USA titokban kivonta saját rakétáit Törökországból"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a válság békés kompromisszummal zárult. A szovjetek kivonták a rakétákat Kubából, cserébe az USA megígérte, hogy nem támadja meg Kubát (és kivonta a törökországi rakétákat)."
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS a Kádár-rendszer társadalmi kompromisszumával kapcsolatban?",
                "options": [
                    "A rendszer megengedte a többpártrendszert és a szabad sajtót, cserébe a lakosság elfogadta a szovjet megszállást",
                    "A hatalom jelszava: 'Aki nincs ellenünk, az velünk van' (szemben a Rákosi-korszak 'Aki nincs velünk, az ellenünk van' elvével)",
                    "A lakosság visszavonult a magánéletbe és a fogyasztásba, lemondva a politikai részvételről",
                    "A rendszer biztosította a teljes foglalkoztatottságot (kapun belüli munkanélküliség)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: a Kádár-rendszer végig szigorú egypártrendszer maradt, cenzúrával. A kompromisszum lényege az életszínvonal emelése volt a politikai szabadságjogok (pl. szabad választások) helyett.",
                "id": "q295"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért vezetett a 'kettős függőség' a magyar gazdaság válságához az 1980-as években?",
                "options": [
                    "Magyarország a nyersanyagokat (olaj) a KGST-ből (Szovjetunió) kapta, de a technológiát és a hiteleket a Nyugattól, így mindkét piac válsága (olajárrobbanás, hitelkamatok) egyszerre sújtotta",
                    "Mert az ország egyszerre volt tagja a NATO-nak és a Varsói Szerződésnek",
                    "Mert a magyar ipar csak Kínába és az USA-ba exportált",
                    "Mert a mezőgazdaság teljesen leállt a kettős adóztatás miatt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar gazdaság nyitott volt. Amikor a szovjet olaj drágult, és a nyugati hitelek kamatai az egekbe szöktek, az ország adósságcsapdába került, ami a rendszer bukásához vezetett.",
                "id": "q296"
            },
            {
                "difficulty": "expert",
                "questionType": "comparison",
                "question": "Miben különbözött a magyarországi rendszerváltás (1989) a szovjet blokk más országainak (pl. Románia) átmenetétől?",
                "options": [
                    "Magyarországon az ellenzék és a reformkommunisták tárgyalásos, alkotmányos úton (jogforradalom) bontották le a diktatúrát, míg Romániában véres fegyveres felkelésre volt szükség",
                    "Magyarországon a hadsereg vette át a hatalmat, Romániában civil kormány alakult",
                    "Magyarországon a Szovjetunió fegyverrel avatkozott be, Romániában nem",
                    "Magyarországon nem tartottak szabad választásokat, Romániában igen"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A magyar 'tárgyalásos forradalom' egyedülálló volt: a Nemzeti Kerekasztal-tárgyalásokon vér nélkül, jogi keretek között zajlott le a rendszerváltás.",
                "id": "q297"
            },
            {
                "difficulty": "expert",
                "questionType": "faulty_statement",
                "question": "Melyik állítás HIBÁS az 1956-os forradalom nemzetközi hátterével kapcsolatban?",
                "options": [
                    "Az ENSZ fegyveres békefenntartókat küldött Budapestre a szovjet támadás megállítására",
                    "A szuezi válság elvonta a nyugati nagyhatalmak (Nagy-Britannia, Franciaország) figyelmét és erejét Magyarországról",
                    "Az USA (Eisenhower elnök) titokban jelezte a Szovjetuniónak, hogy nem tekinti Magyarországot potenciális katonai szövetségesnek",
                    "A Szabad Európa Rádió felelőtlenül bátorította a fegyveres ellenállást nyugati segítséget ígérve"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A hibás állítás az első: az ENSZ csak vitatta a 'magyar kérdést', de semmilyen fegyveres vagy érdemi segítséget nem nyújtott. A Nyugat nem kockáztatott meg egy III. világháborút.",
                "id": "q298"
            },
            {
                "difficulty": "expert",
                "questionType": "cause_effect",
                "question": "Miért volt történelmi jelentősége a schengeni egyezménynek az Európai Unió fejlődésében?",
                "options": [
                    "Mert eltörölte a belső határellenőrzéseket a csatlakozó tagállamok között, biztosítva a személyek szabad mozgását, ami az európai polgárság egyik legkézzelfoghatóbb vívmánya lett",
                    "Mert bevezette a közös európai hadsereget",
                    "Mert kötelezővé tette az euró használatát minden tagállamban",
                    "Mert kizárta a kelet-európai országokat az Unióból"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A schengeni övezet létrehozása (1985/1995) a négy alapszabadság (áruk, szolgáltatások, tőke, személyek) közül a személyek szabad mozgását tette a mindennapok részévé.",
                "id": "q299"
            },
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
        "categoryId": "cat6",
        "categoryName": "Középkor és kultúra",
        "points": 100,
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
                "explanation": "A középkorban az egyetemek a művelődés és az oktatás kiemelt központjai lettek.",
                "skillFocus": "fogalom",
                "oralExamLink": "A középkori művelődés központjai",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "A román stílus egyik alapvető jellemzője a tömörség, a vastag fal és a félkörív.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "A román stílus jellemzői",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
            }
        ]
    },
    {
        "categoryId": "cat6",
        "categoryName": "Középkor és kultúra",
        "points": 200,
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
                "explanation": "A gótika jellegzetessége a csúcsív, a magasba törő szerkezet és a nagy ablakfelület.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "A gótikus stílus fő vonásai",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "A reneszánsz a középkor végén bontakozott ki, főként Itáliában.",
                "skillFocus": "évszám",
                "oralExamLink": "A reneszánsz megjelenése",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat6",
        "categoryName": "Középkor és kultúra",
        "points": 300,
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
                "explanation": "A kolostorok a művelődés fontos központjai voltak, itt másolták és őrizték a szövegeket is.",
                "skillFocus": "ok-okozat",
                "oralExamLink": "Kolostorok és művelődés",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "A reneszánsz egyik lényege az antik minták újrafelfedezése és az emberközpontúbb szemlélet.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "A reneszánsz világszemlélete",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat6",
        "categoryName": "Középkor és kultúra",
        "points": 400,
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
                "explanation": "A román stílust a tömörség, a gótikát a csúcsívek, magas szerkezetek és nagy üvegfelületek jellemzik.",
                "skillFocus": "összehasonlítás",
                "oralExamLink": "Román és gótikus stílus összehasonlítása",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "Ez hibás állítás, mert a reneszánsz éppen az antik örökséghez nyúlt vissza.",
                "skillFocus": "következtetés",
                "oralExamLink": "Középkori művelődés és reneszánsz",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 3
            }
        ]
    },
    {
        "categoryId": "cat6",
        "categoryName": "Középkor és kultúra",
        "points": 500,
        "questions": [
            {
                "id": "kozepkor-muvelodese-500-01",
                "topic": "A középkor művelődése. Román, gótikus és reneszánsz stílus",
                "questionType": "comparison",
                "difficulty": "expert",
                "question": "Miért tekinthető a középkori művelődés és a reneszánsz kapcsolata inkább átalakulásnak, mint teljes törésnek?",
                "options": [
                    "Mert a reneszánsz a középkori intézmények teljes megsemmisítésével jött létre",
                    "Mert a reneszánsz új emberképet és antik mintákat hozott, de sok középkori intézményre és tudásformára is épített",
                    "Mert a középkor és a reneszánsz között semmilyen szellemi kapcsolat nem mutatható ki",
                    "Mert a reneszánsz kizárólag építészeti stílusváltást jelentett, művelődéstörténeti tartalom nélkül"
                ],
                "explanation": "A reneszánsz új szemléletet hozott, de nem a semmiből jött létre: az egyetemek, a latin műveltség és a kéziratos hagyományok részben középkori alapokon álltak.",
                "skillFocus": "következtetés",
                "oralExamLink": "Az egyetemek történelmi jelentősége",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "A reneszánsz nem puszta ismétlés, hanem új kulturális szemléletet is hozott az antik minták felhasználásával.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "A reneszánsz jelentősége",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat7",
        "categoryName": "Eszmék és ideológiák",
        "points": 100,
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
                "explanation": "A liberalizmus központi elemei az egyéni szabadságjogok és az alkotmányos állam.",
                "skillFocus": "fogalom",
                "oralExamLink": "A liberalizmus fő jellemzői",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
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
                "explanation": "A konzervativizmus a hagyományok, intézmények és a fokozatos változás fontosságát emeli ki.",
                "skillFocus": "fogalom",
                "oralExamLink": "A konzervativizmus lényege",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
            }
        ]
    },
    {
        "categoryId": "cat7",
        "categoryName": "Eszmék és ideológiák",
        "points": 200,
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
                "explanation": "A nacionalizmus a nemzeti közösség jelentőségét és önállóságát hangsúlyozta.",
                "skillFocus": "fogalom",
                "oralExamLink": "A nacionalizmus fő elemei",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
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
                "explanation": "A Szent Szövetség célja a restauráció és a radikális változások megakadályozása volt.",
                "skillFocus": "ok-okozat",
                "oralExamLink": "Szent Szövetség és új eszmék",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat7",
        "categoryName": "Eszmék és ideológiák",
        "points": 300,
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
                "explanation": "A liberalizmus fontos célja az alkotmányosság és az egyéni szabadságjogok érvényesítése volt.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "A liberalizmus politikai programja",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "A korszak háborúi és átalakulásai hozzájárultak a nemzeti identitás megerősödéséhez.",
                "skillFocus": "ok-okozat",
                "oralExamLink": "A nacionalizmus megerősödése",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat7",
        "categoryName": "Eszmék és ideológiák",
        "points": 400,
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
                "explanation": "Ez ragadja meg legjobban a két eszmerendszer közti alapvető különbséget.",
                "skillFocus": "összehasonlítás",
                "oralExamLink": "Liberalizmus és konzervativizmus összevetése",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
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
                "explanation": "Ez hibás, mert a Szent Szövetség és más erők több helyen felléptek az új eszmék ellen.",
                "skillFocus": "következtetés",
                "oralExamLink": "Eszmék és ellenállás a korszakban",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 3
            }
        ]
    },
    {
        "categoryId": "cat7",
        "categoryName": "Eszmék és ideológiák",
        "points": 500,
        "questions": [
            {
                "id": "eszmek-19sz-500-01",
                "topic": "A 19. század első felének uralkodó eszméi",
                "questionType": "comparison",
                "difficulty": "expert",
                "question": "Miért váltak a 19. század első felének uralkodó eszméi egyszerre a polgári átalakulás és a politikai konfliktusok forrásává is?",
                "options": [
                    "Mert a liberalizmus, a konzervativizmus és a nacionalizmus minden kérdésben könnyen összeegyeztethető volt",
                    "Mert az új eszmék a szabadság, nemzet és állam kérdését új módon vetették fel, de egymással is ütközhettek",
                    "Mert a korszak társadalmai teljesen közömbösek maradtak az eszmei vitákkal szemben",
                    "Mert ezek az eszmék kizárólag filozófiai körökben léteztek, politikai hatás nélkül"
                ],
                "explanation": "Az új eszmék egyszerre segítették a modern politikai rendszerek kialakulását, ugyanakkor új konfliktusokat is teremtettek például nemzeti és alkotmányos kérdésekben.",
                "skillFocus": "következtetés",
                "oralExamLink": "A korszak eszméinek történelmi jelentősége",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "Ez foglalja össze legjobban a korszak meghatározó eszméinek közös történelmi jelentőségét.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "Uralkodó eszmék összegző értékelése",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat8",
        "categoryName": "Gazdaság és modernizáció",
        "points": 100,
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
                "explanation": "Az ipari forradalom először Angliában bontakozott ki a 18. század végétől.",
                "skillFocus": "topográfia",
                "oralExamLink": "Az ipari forradalom kezdete",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "Az ipari forradalom kezdetén a textilipar fejlődése különösen meghatározó volt.",
                "skillFocus": "fogalom",
                "oralExamLink": "Az ipari forradalom korai ágazatai",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
            }
        ]
    },
    {
        "categoryId": "cat8",
        "categoryName": "Gazdaság és modernizáció",
        "points": 200,
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
                "explanation": "A mezőgazdasági fejlődés hozzájárult a népességnövekedéshez és a bérmunkásréteg kialakulásához.",
                "skillFocus": "ok-okozat",
                "oralExamLink": "Az ipari forradalom előfeltételei",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "Az ipari forradalom egyik fontos következménye a városiasodás, vagyis az urbanizáció volt.",
                "skillFocus": "fogalom",
                "oralExamLink": "Az ipari forradalom társadalmi hatásai",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
            }
        ]
    },
    {
        "categoryId": "cat8",
        "categoryName": "Gazdaság és modernizáció",
        "points": 300,
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
                "explanation": "Az ipari forradalom nem egyetlen találmány, hanem átfogó gazdasági-társadalmi átalakulás volt.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "Az ipari forradalom fogalma",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "A közlekedés fejlődése szorosan összefüggött az ipari növekedéssel és a piacok tágulásával.",
                "skillFocus": "ok-okozat",
                "oralExamLink": "Közlekedés és ipari fejlődés",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat8",
        "categoryName": "Gazdaság és modernizáció",
        "points": 400,
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
                "explanation": "Az ipari forradalom egyik kulcsa a gépesített, nagyobb volumenű, szervezettebb termelés volt.",
                "skillFocus": "összehasonlítás",
                "oralExamLink": "Gyáripar és korábbi termelési formák",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
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
                "explanation": "Ez hibás, mert az ipari forradalom éppen jelentős változásokat hozott a termelésben és közlekedésben is.",
                "skillFocus": "következtetés",
                "oralExamLink": "Az ipari forradalom hatásai",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 3
            }
        ]
    },
    {
        "categoryId": "cat8",
        "categoryName": "Gazdaság és modernizáció",
        "points": 500,
        "questions": [
            {
                "id": "ipari-forradalom-500-01",
                "topic": "Ipari forradalom",
                "questionType": "comparison",
                "difficulty": "expert",
                "question": "Miért tekinthető az ipari forradalom a modern társadalom egyik alapvető kiindulópontjának, nem pusztán technikai fejlődési szakasznak?",
                "options": [
                    "Mert a technikai újítások mellett átalakította a településszerkezetet, a munkaviszonyokat, a társadalmi rétegeket és a mindennapi életet is",
                    "Mert kizárólag a bányászat gépesítését jelentette, más területre nem hatott",
                    "Mert úgy növelte a termelést, hogy közben nem változott a társadalom szerkezete",
                    "Mert csak Anglia belső fejlődésére volt hatással, Európára és a világra nem"
                ],
                "explanation": "Az ipari forradalom komplex folyamat volt: a technika mellett a társadalom, a városok, a munkakultúra és a gazdasági kapcsolatok szerkezete is átalakult.",
                "skillFocus": "következtetés",
                "oralExamLink": "Az ipari forradalom társadalmi jelentősége",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 0
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
                "explanation": "Ez foglalja össze legjobban az ipari forradalom hosszú távú történelmi jelentőségét.",
                "skillFocus": "korszakjellemzés",
                "oralExamLink": "Az ipari forradalom történelmi értékelése",
                "isActive": true,
                "createdBy": "teacher",
                "lastEdited": "2026-04-14",
                "notes": "",
                "correctAnswerIndex": 1
            }
        ]
    },
    {
        "categoryId": "cat9",
        "points": 100,
        "questions": [
            {
                "id": "reformkor-100-01",
                "topic": "Reformkor Magyarországon",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik időszakot nevezzük reformkornak a magyar történelemben?",
                "options": [
                    "1703–1711",
                    "1825–1848",
                    "1849–1867",
                    "1867–1914"
                ],
                "correctAnswerIndex": 1,
                "explanation": "A reformkor hagyományos időhatára 1825-től 1848-ig tart."
            },
            {
                "id": "reformkor-100-02",
                "topic": "Reformkor Magyarországon",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Ki ajánlotta fel birtokainak egyévi jövedelmét a Magyar Tudós Társaság létrehozására?",
                "options": [
                    "Kossuth Lajos",
                    "Deák Ferenc",
                    "Széchenyi István",
                    "Wesselényi Miklós"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Széchenyi István 1825-ben tett felajánlása jelképes reformkori kezdőpont."
            },
            {
                "id": "szabadsagharc-100-01",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik napon tört ki a pesti forradalom 1848-ban?",
                "options": [
                    "Március 13.",
                    "Március 15.",
                    "Április 11.",
                    "Október 6."
                ],
                "correctAnswerIndex": 1,
                "explanation": "A pesti forradalom 1848. március 15-én zajlott le."
            },
            {
                "id": "szabadsagharc-100-02",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik dokumentum foglalta össze a márciusi ifjak követeléseit?",
                "options": [
                    "A Pragmatica Sanctio",
                    "A 12 pont",
                    "Az Aranybulla",
                    "A Hitlevél"
                ],
                "correctAnswerIndex": 1,
                "explanation": "A 12 pont a márciusi forradalom politikai követeléseit foglalta össze."
            },
            {
                "id": "dualizmus-100-01",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik évben jött létre a kiegyezés?",
                "options": [
                    "1848",
                    "1849",
                    "1867",
                    "1873"
                ],
                "correctAnswerIndex": 2,
                "explanation": "A kiegyezés 1867-ben jött létre a Habsburg uralkodó és a magyar politikai elit megegyezéseként."
            },
            {
                "id": "dualizmus-100-02",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Ki volt a kiegyezéshez kapcsolódó magyar politikusok egyik legfontosabb alakja?",
                "options": [
                    "Deák Ferenc",
                    "Görgei Artúr",
                    "Táncsics Mihály",
                    "Bocskai István"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Deák Ferenc kulcsszerepet játszott a kiegyezés politikai előkészítésében."
            }
        ],
        "categoryName": "Magyar történelem a 19. században"
    },
    {
        "categoryId": "cat9",
        "points": 200,
        "questions": [
            {
                "id": "reformkor-200-01",
                "topic": "Reformkor Magyarországon",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik reformkori kérdés kapcsolódott a jobbágyrendszer felszámolásához?",
                "options": [
                    "Örökváltság",
                    "Szent Szövetség",
                    "Perszonálunió",
                    "Pátens"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az örökváltság a jobbágyfelszabadítás egyik kulcsfogalma volt."
            },
            {
                "id": "reformkor-200-02",
                "topic": "Reformkor Magyarországon",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik reformkori politikushoz kapcsoljuk leginkább a 'Hitel' című művet?",
                "options": [
                    "Batthyány Lajos",
                    "Kossuth Lajos",
                    "Széchenyi István",
                    "Eötvös József"
                ],
                "correctAnswerIndex": 2,
                "explanation": "A 'Hitel' Széchenyi programadó műve volt a gazdasági és társadalmi reformokról."
            },
            {
                "id": "szabadsagharc-200-01",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Ki lett Magyarország első felelős miniszterelnöke 1848-ban?",
                "options": [
                    "Kossuth Lajos",
                    "Deák Ferenc",
                    "Batthyány Lajos",
                    "Görgei Artúr"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Az első felelős magyar kormány miniszterelnöke Batthyány Lajos lett."
            },
            {
                "id": "szabadsagharc-200-02",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik törvénycsomag rögzítette a polgári átalakulás alapjait 1848-ban?",
                "options": [
                    "Úrbéri rendelet",
                    "Áprilisi törvények",
                    "Bach-rendszer rendeletei",
                    "Vallásügyi türelmi rendelet"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Az áprilisi törvények a polgári átalakulás legfontosabb jogi alapjait teremtették meg."
            },
            {
                "id": "dualizmus-200-01",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Mit jelentett a dualizmus kifejezés az Osztrák–Magyar Monarchia esetében?",
                "options": [
                    "Két teljesen független köztársaság szövetségét",
                    "Két központtal működő államszerkezetet közös uralkodóval és néhány közös üggyel",
                    "A magyar állam teljes alárendelését Bécsnek minden kérdésben",
                    "A nemzetiségek önálló államait a Monarchián belül"
                ],
                "correctAnswerIndex": 1,
                "explanation": "A dualizmus két államrészre épült, közös uralkodóval és közös ügyekkel."
            },
            {
                "id": "dualizmus-200-02",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "multiple_choice",
                "difficulty": "easy",
                "question": "Melyik ügy tartozott a közös ügyek közé a dualizmus rendszerében?",
                "options": [
                    "A helyi vármegyei igazgatás",
                    "A közoktatás minden részlete",
                    "A hadügy",
                    "A mezőgazdasági termelés közvetlen irányítása"
                ],
                "correctAnswerIndex": 2,
                "explanation": "A hadügy, a külügy és az ezek fedezéséhez szükséges pénzügy közös ügynek számított."
            }
        ],
        "categoryName": "Magyar történelem a 19. században"
    },
    {
        "categoryId": "cat9",
        "points": 300,
        "questions": [
            {
                "id": "reformkor-300-01",
                "topic": "Reformkor Magyarországon",
                "questionType": "cause_effect",
                "difficulty": "medium",
                "question": "Miért vált a reformkorban központi kérdéssé a közteherviselés ügye?",
                "options": [
                    "Mert a nemesség teljes adómentessége egyre inkább akadályozta az igazságosabb és modernebb állami működést",
                    "Mert a jobbágyok adómentességet követeltek a nemességgel együtt",
                    "Mert a korszakban nem léteztek állami kiadások",
                    "Mert a közteherviselés kizárólag külpolitikai kérdés volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A közteherviselés a rendi kiváltságok lebontásának és a polgári átalakulásnak fontos eleme volt."
            },
            {
                "id": "reformkor-300-02",
                "topic": "Reformkor Magyarországon",
                "questionType": "multiple_choice",
                "difficulty": "medium",
                "question": "Melyik állítás írja le legjobban Kossuth reformkori politikáját?",
                "options": [
                    "A gazdasági és politikai reformokat erőteljesebb nemzeti érdekvédelemmel kapcsolta össze",
                    "Teljesen elutasította az ipar fejlesztését",
                    "A rendi kiváltságokat változatlanul meg akarta őrizni",
                    "Minden kérdésben a bécsi kormányzat teljes programját támogatta"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Kossuth programja a reformokat és a nemzeti önállóság erősebb hangsúlyozását kapcsolta össze."
            },
            {
                "id": "szabadsagharc-300-01",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "cause_effect",
                "difficulty": "medium",
                "question": "Miért alakult át a forradalom szabadságharccá 1848 őszére?",
                "options": [
                    "Mert a bécsi udvar elfogadta minden magyar követelést",
                    "Mert a politikai konfliktus fegyveres összeütközéssé vált a magyar kormány és a Habsburg udvar között",
                    "Mert Magyarország lemondott minden önálló intézkedésről",
                    "Mert a nemzetiségi és birodalmi kérdések teljesen megoldódtak"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Az udvar és a magyar kormányzat közötti konfliktus 1848 őszére fegyveres harccá mélyült."
            },
            {
                "id": "szabadsagharc-300-02",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "multiple_choice",
                "difficulty": "medium",
                "question": "Melyik állítás írja le legjobban Kossuth szerepét a szabadságharc idején?",
                "options": [
                    "Csak katonai vezetőként vett részt az eseményekben",
                    "A politikai mozgósítás és az önvédelmi harc egyik legfontosabb irányító alakja volt",
                    "Az osztrák udvar hivatalos képviselője volt Magyarországon",
                    "A szabadságharc teljes idején háttérbe húzódott"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Kossuth meghatározó szerepet játszott a politikai vezetésben és a nemzeti ellenállás megszervezésében."
            },
            {
                "id": "dualizmus-300-01",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "cause_effect",
                "difficulty": "medium",
                "question": "Miért fogadta el a magyar politikai elit jelentős része a kiegyezést 1867-ben?",
                "options": [
                    "Mert úgy látta, hogy a birodalmon belül így lehet a legreálisabban visszaszerezni az alkotmányos önállóság jelentős részét",
                    "Mert a magyar politikusok teljesen lemondtak minden önálló állami intézményről",
                    "Mert a szabadságharc minden célja maradéktalanul, kompromisszum nélkül teljesült",
                    "Mert a kiegyezés megszüntette a Habsburg-ház uralmát"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A kiegyezés kompromisszum volt: nem teljes függetlenséget, hanem jelentős belső önállóságot adott."
            },
            {
                "id": "dualizmus-300-02",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "multiple_choice",
                "difficulty": "medium",
                "question": "Melyik állítás írja le legjobban a dualizmus kori Magyarország fejlődését?",
                "options": [
                    "A korszak teljes gazdasági stagnálást hozott",
                    "Jelentős gazdasági és infrastrukturális fejlődés zajlott, miközben politikai és nemzetiségi problémák is fennmaradtak",
                    "A korszakban megszűnt minden társadalmi és politikai feszültség",
                    "A dualizmus kizárólag katonai rendszer volt, gazdasági hatások nélkül"
                ],
                "correctAnswerIndex": 1,
                "explanation": "A dualizmus egyszerre jelentett modernizációt és megoldatlan politikai feszültségeket."
            }
        ],
        "categoryName": "Magyar történelem a 19. században"
    },
    {
        "categoryId": "cat9",
        "points": 400,
        "questions": [
            {
                "id": "reformkor-400-01",
                "topic": "Reformkor Magyarországon",
                "questionType": "comparison",
                "difficulty": "hard",
                "question": "Mi volt a legfontosabb különbség Széchenyi és Kossuth reformkori politikai felfogása között?",
                "options": [
                    "Széchenyi fokozatosabb, felülről is támogatható reformokat képzelt el, Kossuth pedig szélesebb társadalmi mozgósításra és határozottabb politikai fellépésre támaszkodott",
                    "Kossuth teljesen elutasította a reformokat, Széchenyi pedig forradalmat akart",
                    "Széchenyi a magyar nyelv ellen, Kossuth a latin nyelv mellett érvelt",
                    "A két politikus között nem volt lényeges különbség"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A két reformpolitikus céljai részben hasonlóak voltak, de módszereik és politikai hangsúlyaik eltértek."
            },
            {
                "id": "reformkor-400-02",
                "topic": "Reformkor Magyarországon",
                "questionType": "faulty_statement",
                "difficulty": "hard",
                "question": "Melyik állítás hibás a reformkorral kapcsolatban?",
                "options": [
                    "A reformkor egyik célja a rendi viszonyok meghaladása volt",
                    "A gazdasági modernizáció és a polgári átalakulás összekapcsolódott",
                    "A reformkorban teljes politikai mozdulatlanság uralkodott, érdemi vita nélkül",
                    "A nemzeti kérdés és a nyelvkérdés is fontos szerepet játszott"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Ez hibás, mert a reformkor élénk politikai és társadalmi viták időszaka volt."
            },
            {
                "id": "szabadsagharc-400-01",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "comparison",
                "difficulty": "hard",
                "question": "Mi volt a legfontosabb különbség az 1848 tavaszi forradalmi szakasz és az 1849-es szabadságharc helyzete között?",
                "options": [
                    "1848 tavaszán főként politikai-jogi átalakulás zajlott, míg 1849-re a függetlenségi küzdelem katonai és állami létkérdéssé vált",
                    "1848-ban nem voltak politikai követelések, 1849-ben sem voltak katonai események",
                    "1849-ben Magyarország teljesen visszatért a rendi állapotokhoz",
                    "A két szakasz között nem volt lényeges különbség"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A forradalom kezdeti politikai eredményei később fegyveres önvédelmi és függetlenségi harccá alakultak."
            },
            {
                "id": "szabadsagharc-400-02",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "faulty_statement",
                "difficulty": "hard",
                "question": "Melyik állítás hibás az 1848–49-es eseményekkel kapcsolatban?",
                "options": [
                    "Az áprilisi törvények fontos polgári átalakulást rögzítettek",
                    "A szabadságharc leverésében az orosz beavatkozás is szerepet játszott",
                    "A szabadságharc idején Magyarország és a bécsi udvar között végig teljes együttműködés volt",
                    "A forradalom és szabadságharc a modern magyar nemzet történetének egyik kulcseseménye"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Ez hibás, mert a konfliktus fegyveres összecsapássá alakult a magyar fél és a Habsburg hatalom között."
            },
            {
                "id": "dualizmus-400-01",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "comparison",
                "difficulty": "hard",
                "question": "Mi volt a legfontosabb különbség az 1848-as függetlenségi törekvések és az 1867-es kiegyezés politikai logikája között?",
                "options": [
                    "1848 a teljesebb nemzeti önrendelkezés felé törekedett, míg 1867 kompromisszumos együttélési keretet keresett a Habsburg Birodalmon belül",
                    "1848-ban nem volt szó alkotmányosságról, 1867-ben sem",
                    "Az 1848-as program teljesen a birodalmi központosítást támogatta",
                    "A két politikai célrendszer teljesen azonos volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A két korszak között fontos különbség volt a cél és a realitásérzék alapján választott politikai megoldás."
            },
            {
                "id": "dualizmus-400-02",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "faulty_statement",
                "difficulty": "hard",
                "question": "Melyik állítás hibás a dualizmus rendszerével kapcsolatban?",
                "options": [
                    "A Monarchiának közös uralkodója volt",
                    "A hadügy és a külügy közös ügynek számított",
                    "A dualizmus minden nemzetiségi kérdést tartósan és teljesen megoldott",
                    "Magyarország belső kormányzata jelentős önállósággal működött"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Ez hibás, mert a nemzetiségi kérdés a dualizmus egész időszakában komoly feszültségforrás maradt."
            }
        ],
        "categoryName": "Magyar történelem a 19. században"
    },
    {
        "categoryId": "cat9",
        "points": 500,
        "questions": [
            {
                "id": "reformkor-500-01",
                "topic": "Reformkor Magyarországon",
                "questionType": "comparison",
                "difficulty": "expert",
                "question": "Miért tekinthető a reformkor egyszerre társadalmi modernizációs és nemzetépítő folyamatnak?",
                "options": [
                    "Mert kizárólag gazdasági technikai fejlesztésekről szólt, politikai és nemzeti tartalom nélkül",
                    "Mert a rendi viszonyok lebontását, a polgári átalakulást és a magyar nemzeti önállóság erősítését párhuzamosan próbálta előmozdítani",
                    "Mert a reformkor elsődleges célja a középkori viszonyok teljes visszaállítása volt",
                    "Mert a korszakban a társadalmi reformok és a nemzeti kérdés teljesen függetlenek voltak egymástól"
                ],
                "correctAnswerIndex": 1,
                "explanation": "A reformkor jelentősége éppen abban áll, hogy a társadalmi-gazdasági modernizáció és a nemzeti program összekapcsolódott."
            },
            {
                "id": "reformkor-500-02",
                "topic": "Reformkor Magyarországon",
                "questionType": "cause_effect",
                "difficulty": "expert",
                "question": "Miért volt a reformkor legnagyobb politikai kérdése az, hogy miként lehet átalakítani az országot a Habsburg Birodalmon belüli helyzet megtartása vagy módosítása mellett?",
                "options": [
                    "Mert a magyar reformpolitika egyszerre akart belső modernizációt és nagyobb önállóságot, ami szükségszerűen érintette a birodalmi keretek kérdését",
                    "Mert a korszakban senki sem foglalkozott a birodalmi viszonyokkal",
                    "Mert a reformkor célja kizárólag az volt, hogy Magyarország teljesen lemondjon minden önálló intézményéről",
                    "Mert a Habsburg Birodalom és a magyar politikai elit között minden kérdésben teljes egyetértés volt"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A reformkor kulcskérdése a modernizáció és az állami önállóság viszonyának kezelése volt."
            },
            {
                "id": "szabadsagharc-500-01",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "comparison",
                "difficulty": "expert",
                "question": "Miért tekinthető az 1848–49-es forradalom és szabadságharc egyszerre polgári átalakulásnak és nemzeti függetlenségi küzdelemnek?",
                "options": [
                    "Mert kizárólag társadalmi reformokról szólt, állami kérdések nélkül",
                    "Mert egyszerre akarta felszámolni a rendi viszonyok jelentős részét és biztosítani a magyar politikai önrendelkezést",
                    "Mert csupán katonai eseménysor volt, jogi és társadalmi tartalom nélkül",
                    "Mert a korszakban a nemzeti és társadalmi kérdések teljesen elváltak egymástól"
                ],
                "correctAnswerIndex": 1,
                "explanation": "A korszak jelentősége abban áll, hogy a polgári reformok és a nemzeti önállóság programja összekapcsolódott."
            },
            {
                "id": "szabadsagharc-500-02",
                "topic": "1848–49-es forradalom és szabadságharc",
                "questionType": "cause_effect",
                "difficulty": "expert",
                "question": "Miért volt döntő jelentőségű a szabadságharc sorsa szempontjából az, hogy a Habsburg Birodalom külső segítséget is igénybe vett annak leverésére?",
                "options": [
                    "Mert ez azt jelezte, hogy a konfliktus már nem pusztán belső alkotmányos vita volt, hanem nemzetközi súlyú hatalmi kérdéssé vált",
                    "Mert a külső segítség valójában a magyar függetlenség biztosítását szolgálta",
                    "Mert az orosz beavatkozás kizárólag gazdasági támogatást jelentett, katonai következmények nélkül",
                    "Mert a magyar fél is ugyanakkora külső katonai támogatással rendelkezett"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Az orosz beavatkozás megmutatta, hogy a szabadságharc leverése a birodalmi rend és az európai hatalmi egyensúly kérdésévé is vált."
            },
            {
                "id": "dualizmus-500-01",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "comparison",
                "difficulty": "expert",
                "question": "Miért tekinthető a kiegyezés egyszerre sikeres politikai kompromisszumnak és hosszú távon vitatható megoldásnak?",
                "options": [
                    "Mert jelentős alkotmányos mozgásteret és fejlődési lehetőséget adott Magyarországnak, ugyanakkor több alapvető kérdést, köztük a nemzetiségi és teljes szuverenitási problémákat nyitva hagyta",
                    "Mert a kiegyezés semmilyen gyakorlati változást nem hozott Magyarország helyzetében",
                    "Mert a kiegyezés azonnal megszüntette a Monarchia egész államszerkezetét",
                    "Mert a rendszer kizárólag rövid távú katonai szerződés volt politikai tartalom nélkül"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A kiegyezés történelmi megítélése éppen azért összetett, mert egyszerre hozott stabilizációt és hagyott fenn tartós feszültségeket."
            },
            {
                "id": "dualizmus-500-02",
                "topic": "Kiegyezés és a dualizmus rendszere",
                "questionType": "cause_effect",
                "difficulty": "expert",
                "question": "Miért vált a dualizmus kori gazdasági fejlődés ellenére is sérülékennyé a Monarchia és benne Magyarország politikai rendszere a 20. század elejére?",
                "options": [
                    "Mert a modernizáció önmagában nem oldotta meg a nemzetiségi, társadalmi és birodalmi hatalommegosztási feszültségeket",
                    "Mert a dualizmus korában semmilyen gazdasági fejlődés nem zajlott",
                    "Mert a Monarchia politikai rendszerét kizárólag külföldi államok irányították közvetlenül",
                    "Mert a korszakban megszűnt minden társadalmi és nemzeti konfliktus, így nem volt belső feszültség"
                ],
                "correctAnswerIndex": 0,
                "explanation": "A gazdasági fejlődés nem szüntette meg azokat a szerkezeti problémákat, amelyek később a rendszer megrendüléséhez vezettek."
            }
        ],
        "categoryName": "Magyar történelem a 19. században"
    }
];

export type Question = QuestionItem & { categoryId: string; points: number };

export function generateGameData(customBoard?: BoardCell[], customCategories?: Category[]) {
  const boardToUse = customBoard || gameBoard;
  const categoriesToUse = customCategories || gameCategories;
  
  // Shuffle and pick 8 random categories
  const shuffledCategories = [...categoriesToUse].sort(() => 0.5 - Math.random());
  const selectedCategories = shuffledCategories.slice(0, 8);
  const selectedCategoryIds = new Set(selectedCategories.map(c => c.id));
  
  const selectedQuestions: Question[] = [];
  
  for (const cell of boardToUse) {
    if (!selectedCategoryIds.has(cell.categoryId)) continue;
    if (!cell.questions || cell.questions.length === 0) continue;
    // Pick a random question from the available for this cell
    const randomIndex = Math.floor(Math.random() * cell.questions.length);
    const q = cell.questions[randomIndex];
    selectedQuestions.push({
      ...q,
      categoryId: cell.categoryId,
      points: cell.points
    });
  }
  
  return { selectedCategories, selectedQuestions };
}
