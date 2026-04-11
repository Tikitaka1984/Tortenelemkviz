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
  }
];

export const gameBoard: BoardCell[] = [
  {
    categoryId: "cat1",
    categoryName: "Ókor és Középkor",
    points: 100,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat1",
    categoryName: "Ókor és Középkor",
    points: 200,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat1",
    categoryName: "Ókor és Középkor",
    points: 300,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat1",
    categoryName: "Ókor és Középkor",
    points: 400,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat1",
    categoryName: "Ókor és Középkor",
    points: 500,
    questions: [
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
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS a középkori céhek működésével kapcsolatban?",
            "options": [
                "A céhek ösztönözték a tagok közötti szabad versenyt és az árak letörését",
                "Szabályozták a termelés minőségét és mennyiségét",
                "Korlátozták a kontárok (céhen kívüliek) tevékenységét",
                "Gondoskodtak az elhunyt tagok özvegyeiről és árváiról"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a céhek pont a verseny KIZÁRÁSÁRA törekedtek. Rögzítették az árakat, a béreket és a munkaidőt, hogy minden mester megélhessen."
        },
        {
            "id": "q30",
            "difficulty": "expert",
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS a Hanza-szövetséggel kapcsolatban?",
            "options": [
                "A Földközi-tenger keleti medencéjének kereskedelmét uralta",
                "Észak-német és balti városok kereskedelmi érdekszövetsége volt",
                "Főként tömegcikkekkel (fa, prém, viasz, gabona) kereskedtek",
                "Saját hadiflottával rendelkezett a kalózok és riválisok ellen"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a Hanza-szövetség az Északi- és a Balti-tenger térségét uralta. A Földközi-tengeri (levantei) kereskedelmet Velence és Genova irányította."
        },
        {
            "id": "q35",
            "difficulty": "expert",
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS Szent István törvénykezésével kapcsolatban?",
            "options": [
                "A törvények megszüntették a magántulajdont, minden föld a királyé lett",
                "Kötelezővé tették a vasárnapi templomba járást",
                "Minden tíz falunak egy templomot kellett építenie",
                "Szigorúan büntették a lopást és a gyilkosságot"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: István törvényei éppen hogy VÉDTÉK a magántulajdont, ezzel is elősegítve a feudális társadalmi rend megszilárdulását a régi közös törzsi tulajdonnal szemben."
        },
        {
            "id": "q40",
            "difficulty": "expert",
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS Mátyás kulturális és udvari életével kapcsolatban?",
            "options": [
                "A Corvina könyvtár kizárólag magyar nyelvű kódexeket tartalmazott",
                "Udvarában megjelent a reneszánsz építészet és a humanista műveltség",
                "Felesége, Aragóniai Beatrix révén erős itáliai kulturális hatás érte az udvart",
                "Pozsonyban egyetemet alapított (Universitas Istropolitana)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a Bibliotheca Corviniana kódexei túlnyomórészt latin, görög és arab nyelvűek voltak, a korabeli európai humanista tudományosság nyelvén íródtak."
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
        }
    ]
  },
  {
    categoryId: "cat2",
    categoryName: "Kora Újkor és Felvilágosodás",
    points: 100,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat2",
    categoryName: "Kora Újkor és Felvilágosodás",
    points: 200,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat2",
    categoryName: "Kora Újkor és Felvilágosodás",
    points: 300,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat2",
    categoryName: "Kora Újkor és Felvilágosodás",
    points: 400,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat2",
    categoryName: "Kora Újkor és Felvilágosodás",
    points: 500,
    questions: [
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
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS a felvilágosult abszolutizmus magyarországi gyakorlatával kapcsolatban?",
            "options": [
                "A reformok célja a magyar rendi alkotmány és a függetlenség teljes helyreállítása volt",
                "Az uralkodók (Mária Terézia, II. József) rendeletekkel, az országgyűlés megkerülésével kormányoztak",
                "A reformok felülről, az uralkodói hatalom megerősítése érdekében történtek",
                "Intézkedéseik (pl. jobbágyvédelem, oktatás) hozzájárultak az ország modernizációjához"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a felvilágosult abszolutizmus célja a birodalom egységesítése és modernizálása volt, nem pedig a magyar rendi függetlenség erősítése.",
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
        }
    ]
  },
  {
    categoryId: "cat3",
    categoryName: "A hosszú 19. század",
    points: 100,
    questions: [
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
    categoryId: "cat3",
    categoryName: "A hosszú 19. század",
    points: 200,
    questions: [
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
    categoryId: "cat3",
    categoryName: "A hosszú 19. század",
    points: 300,
    questions: [
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
    categoryId: "cat3",
    categoryName: "A hosszú 19. század",
    points: 400,
    questions: [
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
            "difficulty": "hard",
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS a dualizmus kori Magyarország társadalmával kapcsolatban?",
            "options": [
                "A társadalom teljesen polgárosodott, a régi nemesi arisztokrácia elvesztette minden politikai és gazdasági befolyását",
                "Kialakult a 'torlódó társadalom', ahol a régi rendi és az új tőkés-polgári rétegek egymás mellett éltek",
                "A parasztság alkotta a társadalom legnépesebb rétegét",
                "Megjelent egy erősödő, de politikai jogokkal alig rendelkező ipari munkásság"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a dualizmus korában a nagybirtokos arisztokrácia megőrizte vezető politikai és társadalmi szerepét, a polgárosodás felemás maradt.",
            "id": "q240"
        }
    ]
  },
  {
    categoryId: "cat3",
    categoryName: "A hosszú 19. század",
    points: 500,
    questions: [
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
    categoryId: "cat4",
    categoryName: "Világháborúk kora",
    points: 100,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat4",
    categoryName: "Világháborúk kora",
    points: 200,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat4",
    categoryName: "Világháborúk kora",
    points: 300,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat4",
    categoryName: "Világháborúk kora",
    points: 400,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat4",
    categoryName: "Világháborúk kora",
    points: 500,
    questions: [
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
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS a trianoni békeszerződés katonai és politikai rendelkezéseivel kapcsolatban?",
            "options": [
                "A szerződés engedélyezte az általános hadkötelezettséget, de a hadsereg létszámát 100 ezer főben maximálta",
                "Magyarországnak jóvátételt kellett fizetnie a győzteseknek",
                "Megtiltották a modern fegyvernemek (légierő, páncélosok) tartását",
                "A béke elcsatolt területeket Ausztriának (Őrvidék/Burgenland) is juttatott"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a békeszerződés MEGTILTOTTA az általános hadkötelezettséget. Csak zsoldoshadsereget engedélyezett, és annak létszámát szigorúan 35 ezer főben maximálta."
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
        }
    ]
  },
  {
    categoryId: "cat5",
    categoryName: "Jelenkor és Hidegháború",
    points: 100,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat5",
    categoryName: "Jelenkor és Hidegháború",
    points: 200,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat5",
    categoryName: "Jelenkor és Hidegháború",
    points: 300,
    questions: [
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
        }
    ]
  },
  {
    categoryId: "cat5",
    categoryName: "Jelenkor és Hidegháború",
    points: 400,
    questions: [
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
            "difficulty": "hard",
            "questionType": "faulty_statement",
            "question": "Melyik állítás HIBÁS a magyarországi rendszerváltás (1989-1990) közjogi folyamatával kapcsolatban?",
            "options": [
                "Az 1989. október 23-án kikiáltott harmadik Köztársaság egy teljesen új, a nulláról megírt alkotmányt fogadott el",
                "A békés átmenet jogi alapját az 1949-es (sztálini) alkotmány radikális módosítása adta",
                "Létrejött az Alkotmánybíróság a jogállamiság őreként",
                "Bevezették a többpártrendszert és a szabad választásokat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A hibás állítás az első: a közjogi folytonosság fenntartása érdekében nem írtak új alkotmányt, hanem az 1949. évi XX. törvényt módosították olyan mértékben, hogy az egy demokratikus jogállam alapja lett.",
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
        }
    ]
  },
  {
    categoryId: "cat5",
    categoryName: "Jelenkor és Hidegháború",
    points: 500,
    questions: [
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
        }
    ]
  },
];

export type Question = QuestionItem & { categoryId: string; points: number };

export function generateGameData(customBoard?: BoardCell[], customCategories?: Category[]) {
  const boardToUse = customBoard || gameBoard;
  const categoriesToUse = customCategories || gameCategories;
  
  const selectedCategories = categoriesToUse;
  const selectedQuestions: Question[] = [];
  
  for (const cell of boardToUse) {
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
