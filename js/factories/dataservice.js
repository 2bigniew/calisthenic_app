(function(){
    
    angular
        .module("KalistenikaApp")
        .factory("DataService", DataFactory);
    
        
        function DataFactory(){
            var dataObj = {
                exercisesData: exercisesData,
                quizQuestions: quizQuestions,
                correctAnswers: correctAnswers
            };
            
            return dataObj;
        }
    
    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
    
    var quizQuestions = [
        {
            type: "text",
            text: "Podczas robienia pompki, mięśnie które nie biorą udziału w ćwiczeniu to: ",
            possibilities: [
                {
                    answer: "Triceps"
                },
                {
                    answer: "Biceps"
                },
                {
                    answer: "Mięśnie klatki piersiowej"
                },
                {
                    answer: "Mięśnie barków"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Która z poniższych możliwości nie jest warunkiem prawidłowego wykonania podciągnięcia",
            possibilities: [
                {
                    answer: "Podnoszenie się, aż drążek nie znajdzie się pod brodą"
                },
                {
                    answer: "Wyprostowane nogi, stopy wychylone przed sylwetkę"
                },
                {
                    answer: "Trzymanie drążka, z palcami zginającymi sie w kierunku przeciwnym do kierunku naszj twarzy"
                },
                {
                    answer: "Opuszczanie się do pełnego wyprostu ramion"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Rozpoczynając trening pompek w staniu na rękach, warto",
            possibilities: [
                {
                    answer: "Przywiązać nogi sznurkiem do drążka, aby jak najdłużej utrzymywać je do góry"
                },
                {
                    answer: "Rozpoczynać stanie na rękach jeszcze przed wykonaniem rozgrzewki"
                },
                {
                    answer: "Trzymać przykórczone nogi"
                },
                {
                    answer: "Pomóc sobie utrzymywać równowagę, opierając nogi o ścianę"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Wariacją ćwiczenia \"Przysiady\" nie jest",
            possibilities: [
                {
                    answer: "Podskoki obunóz z wymachem rąk tzw \"Pajac\""
                },
                {
                    answer: "Wskakiwanie na skrzynie"
                },
                {
                    answer: "Wykrok"
                },
                {
                    answer: "Przysiad na jednej nodze"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "image",
            text: "Wybierz zdjęcie przedstawiające Podciąganie",
            possibilities: [
                {
                    answer: "http://i1.wp.com/www.myprotein.com/thezone/wp-content/uploads/2016/05/squatmuscles.jpg?resize=348%2C177"
                },
                {
                    answer: "https://static1.squarespace.com/static/57620587f7e0ab9b6d6b86e8/t/58d18cf42994ca0e80dc1348/1490128119434/"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/originals/3d/73/a8/3d73a801418004c240eccc47c0157d3b.jpg"
                },
                {
                    answer: "https://i.pinimg.com/736x/ef/bb/48/efbb48f5c065d369203ef3150b2ba978--abdominal-muscles-fitness-weightloss.jpg"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Wznosy nóg z podstawowych sześciu ćwiczeń, wykorzystujących masę własnego ciała, najskuteczniej trenują",
            possibilities: [
                {
                    answer: "Mięśnie brzucha"
                },
                {
                    answer: "Mięśnie nóg"
                },
                {
                    answer: "Mięśnie klatki piersiowej"
                },
                {
                    answer: "Mięśnie barków"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Pompki w staniu na rękach z podstawowych sześciu ćwiczeń, wykorzystujących masę własnego ciała, najskuteczniej trenują",
            possibilities: [
                {
                    answer: "Mięśnie brzucha"
                },
                {
                    answer: "Mięśnie klatki piersiowej"
                },
                {
                    answer: "Bicepsy"
                },
                {
                    answer: "Mięśnie barków"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "W poprawnie wykonanym mostku, części ciała stykające się z podłożem to",
            possibilities: [
                {
                    answer: "Stopy"
                },
                {
                    answer: "Dłonie"
                },
                {
                    answer: "Stopy i dłonie"
                },
                {
                    answer: "Łopatki i pośladki"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Głowny błędem przy staniu na rękach jest",
            possibilities: [
                {
                    answer: "Wyginanie sylwetki w grzbiecie"
                },
                {
                    answer: "Zbyt wczesne prostowanie rąk przy stawaniu"
                },
                {
                    answer: "Brak regularnego oddychania"
                },
                {
                    answer: "Odchylanie głow w strone pleców"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "Wznosów nóg nie można wykonać",
            possibilities: [
                {
                    answer: "Wisząc na drążku"
                },
                {
                    answer: "Utrzymując się na poręczach"
                },
                {
                    answer: "Leząc na macie"
                },
                {
                    answer: "Siedząc na ławeczce do ćwiczeń"
                }
            ],
            selected: null,
            correct: null
            
        }
        ]
    
    var exercisesData = [
    
    {
        title: "Rodzaj ćwiczenia",
        type: "Pompki",
        muscles: "Klatka piersiowa, triceps, przednia część mięśni barków",
        zalety: "Można wykonać wszędzie i w każdej chwili, może służyc jako ćwiczenie główne, lub jako ćwiczenie uzupełniające",
        wady: "Sprawiają wrażenie powolnego progresu",
        wariacje: "Pompki na poręczach, pompki z nogami na podwyższeniu, pompki diamentowe, pompki na jednej ręce, pompki z klaśnięciem, pompki z podskokiem",
        img_URL: "https://static1.squarespace.com/static/57620587f7e0ab9b6d6b86e8/t/58d18cf42994ca0e80dc1348/1490128119434/" ,
        opis: "Pompka - popularna nazwa ćwiczenia fizycznego wykonywanego w pozycji poziomej, twarzą do ziemi, polegającego na podnoszeniu i obniżaniu tułowia. Wykonywanie pompek rozwija mięśnie piersiowe i mięsień trójgłowy ramienia (pot. triceps), a także mięsień naramienny, mięsień zębaty przedni i mięsień kruczo-ramienny (jeżeli chcesz ćwiczyć pompki, musisz rozgrzać przynajmniej mięśnie rąk i brzucha, aby nie doznać kontuzji). Pompki odgrywają dużą rolę w treningu sportowców, szkoleniu żołnierzy jak i wychowaniu fizycznym. Jako tzw. giby są również popularnym ćwiczeniem w zakładach karnych i aresztach.Należy przestrzegać kilku podstawowych zasad, żeby prawidłowo wykonywać klasyczne pompki: ciało powinno być wyprostowane (bardzo częsty błąd), stopy powinny być ułożone blisko siebie (należy opierać się na palcach), ręce powinny być ułożone nieco szerzej niż klatka piersiowa, dłonie lekko odchylone na zewnątrz, należy opuszczać tułów do momentu, aż w stawie łokciowym utworzy się kąt prosty (przy czym plecy mają być cały czas proste Najczęstsze błędy to: Zbyt krótkie pompki (klatka piersiowa powinna niemal dotknąć podłogi), wiszące plecy, brzuch bliżej podłogi niż klatka piersiowa, w końcowej fazie ćwiczenia"
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Podciągnięcia nachwytem",
        muscles: "Najszerszy grzbietu, biceps, przedramię, mięśnie brzucha",
        zalety: "Duży progres siłowy, buduje mięśnie i poszerza sylwetkę, trenuje całe ciało",
        wady: "Trudno zacząć, potrzebny jest drążek",
        wariacje: "Podciągnięcia nachwytem szerokim, podciągnięcia podchwytem, wydłużanie ruchu opuszczania się, podciągnięcia wąskim podchwytem z nogami wyprostowanymi przed sylwetką",
        img_URL: "https://s-media-cache-ak0.pinimg.com/originals/3d/73/a8/3d73a801418004c240eccc47c0157d3b.jpg" ,
        opis: "Podciągnięcie to ćwiczenie, podczas którego wisimy w powietrzu trzymając się drążka, podciągamy sylwetkę do momentu, w którym drążek znajduje się pod brodą, a następnie opuszczamy się do pełnego wyprostu ramion (jednak ramiona powinny być cały czas napęte, nie powinny luzować się w barkach). Podczas podciągania, sylwetka powinna być wyprostowana, łopatki i mięśnie grzbietu spięte, a nogi wyprostowane, złączone, delikatnie wychylone do przodu przed sylwetkę (w takiej pozycji angażujemy najwięcej mięśni podczas podciągania). Aby uniknąć skracania bicepsu i angażować mięsień najszerszy grzbietu w największy stopniu, należy podciągać się nachwytem tzn. palce zginają sie w kierunku przeciwnym do naszej twarzy, dłonie ułożone są na drążku na szerokość barków. Chcąc zwiększać poziom ćwiczenia, poszerza się odstęp między dłońmi w nachwycie, a także wydłuża czas podciągnięcia, pozostawania w najwyższej pozycji oraz opuszczania się. Najczęstsze błędy to: huśtanie się przed podciągnięciem, uginanie nóg, podciąganie sie do czoła (czoło na wysokości drążka), opuszczanie się nie do pełnego wyprostu ramion. Jeśli nie możesz się podciągnąć ani razu, chcąć wykonać pierwsze podciągnięcie, warto ćwiczyć w ten sposób, że wyskakujesz do drążka (nie podciągasz się) a następnie opóźniasz ruch opuszczania się do maksimum"
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Przysiady",
        muscles: "Pośladki, dwugłowy uda",
        zalety: "Można wykonać wszędzie i w każdej chwili, może służyc jako ćwiczenie główne, lub jako ćwiczenie uzupełniające",
        wady: "Sprawiają wrażenie powolnego progresu",
        wariacje: "Przysiady z podkoskiem, przysiady na jednej nodze, wskakiwanie na skryznie, wykroki",
        img_URL: "https://i.pinimg.com/474x/8a/6e/dd/8a6edde99fee552c4f5e13b569bed56b--sumo-squats-muscle-groups.jpg",
        opis: "Przysiady to najlepsze ćwiczenie na nogi spośród tych, w których wykorzystuje się tylko ciężar własnego ciała. Polega na tym, że stawiamy stopy równolegle do siebie, na szerokość delikatnie większą od rozstawu barków, trzymając proste plecy i wypinając pośladki opuszczamy sie tak aby w kolanie powstał kąt min 90 st, a następnie spowrotem prostujemy sylwetkę, dbając aby napięte podczas ćwiczenia były uda i pośladki. Manipulowanie rozstawem nóg ma na celu zachowanie prawidłowej postawy, zaangażowanie pośladków, oraz odciążenie kolan podczas wykonywania przysiadu. Podczas przysiadu plecy i grzbiet powinny być wyprostowane, a kolana nie powinny wysówać się poza stopy - tzn, że najbardziej wysuniętą częścią ciała podczas robienia przysiadu powinny być stopy a nie kolana. Najczęstsze błędy to: zbyt wąski rozstaw stóp - kolana wysówają sie przed stopy, stopy ułożone pługiem (w literę A), stopy ułożone w litere V, nie wyponanie pośladków"
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Pompki w staniu na rękach",
        muscles: "Obręcz barkowa, mięśnie grzbietu, triceps",
        zalety: "Można wykonać wszędzie i w każdej chwili, mocny progres, baza wyjściowa do najtrudniejszych ćwiczeń",
        wady: "Bardzo trudno zacząć",
        wariacje: "Stanie na rękach, chodzenie na rękach, frogstand, stanie na jednej ręce ze zmianą ręki",
        img_URL: "http://crossfitamplify.com/wp-content/uploads/2015/07/tumblr_msdl5iOr4p1rlz4xxo1_1280.jpg" ,
        opis: "Pompka w staniu na rękach, to ćwiczenie polegające na tym, że stojąc na rękach, z wyprotowana sylwetką, zginamy ręce w łokciach, opuszczając sylwetkę do momentu, w którym głowa ociera sie o podłogę, a następnie prostujemy ramiona. Dłonie układamy zrozstawionymi palcami, na szerokość rozstawu barków, w taki sposób aby łokcie uginały się równolegle, w stronę, w którą patrzymy stojąc na rękach. Ćwiczenie w największym stopniu angażuje barki, triceps oraz mięśnie grzbietu. Dobrze jest zacząć od zwykłego stania na rekach, w oparciu o ściane, od wolnego stania na rękach (w celu wypracowania równowagi), oraz rozwijać mięśnie pompkami, w których sylwetka przypomina trójkąt o podstawie złożonej z stóp i rąk, oraz wierzchołka którym są wypięte pośladki (sylwetka podobna do litery A). Samo stanie na rękach, również powoduje przyrost siły w barkach. Głównym błędem jest wyginanie sylwetki w grzbiecie, tak że brzuch wychyla się za linie prostą powstałą pomiędzy dłońmi i stopami. Sylwetka powinna być prosta."
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Wznosy nóg",
        muscles: "Brzuch",
        zalety: "Bardzo krótki czas regeneracji mięśni brzucha",
        wady: "Potrzebny drążek, lub poręcze.",
        wariacje: "wznosy nóg prostych, wznosy nóg ugiętych, okręcenie tłowia utrzymując nogi prostopadle dodrążka, podnoszenie bioder w zwisie oburącz",
        img_URL: "https://i.pinimg.com/736x/ef/bb/48/efbb48f5c065d369203ef3150b2ba978--abdominal-muscles-fitness-weightloss.jpg" ,
        opis: "Wnzosy nóg to najskuteczniejsze ćwiczenie wzmacniające brzuch, ponieważ angażuje dolną partie mięśni brzucha, mięśnie skośne brzucha, oraz górną partie mięśni brzucha - (spięcia (popularne brzuszki) angażują głównie górną partie mięśni brzucha). Polega ono na tym, że utrzymując sie na drążku, z ciałem w powietrzu, wznosimy nogi (wyprostowane lub podgięte) tak aby tyłów i uda tworzyły min, kąt prosty. Warto podczas wznoszenia nóg podnosić również miednicę w strone czoła, tak aby brzuch miał możliwość skórczenia i rozciągnięcia się (najlepsza stymulowanie mięśni doi wzrostu). W drugim wariancie ćwiczenia, możemy wznosić nogi, utrzymując sylwetke w powietrzu przy pomocy ramion opartych na poręczach (jeśli ktoś nie utrzymuje się na drążku). W trzecim wariancie, wznosimy nogi leżąc na macie, jednak jest to najmniej skuteczna forma wznoszenia nóg. Najczęściej popełnianym błędem jest huśtanie sylwetką, zamiast podnoszenia nóg siłą mięśni brzucha."
        
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Mostki",
        muscles: "Grzbiet, łydki, pośladki",
        zalety: "Można wykonać wszędzie i w każdej chwili, może służyc jako ćwiczenie główne, lub jako ćwiczenie uzupełniające",
        wady: "Łatwo o kontuzje, potrzeba intensywnej rozgrzewki pleców i barków",
        wariacje: "Podnoszenie miednicy, leżąc na plecach z nogami ugiętymi w kolanach, supermany - podnoszenie całego tłowia, leżąc na brzuchu, tak aby jedynym punktem stykowym z podłożem bydolna partia mięśni brzucha",
        img_URL: "https://i.pinimg.com/736x/9d/ea/a7/9deaa74df411a82bbdb9068450ee2512--lungs-yoga-anatomy.jpg" ,
        opis: "Mostek to ćwiczenie, które angażuje dolne mięśnie grzbietu, a więc te mięśnie, które obok mięśni brzucha w największym stopniu odpowiadają za utrzymanie naszej sylwetki wyprostowanej. Mostek polega na tym, żeleżąc na plecach z nogami ugiętymi w kolanach, wypychamy sylwetkę do góry tak aby kąt w kolanie powiększał się, a plecy odrywały od ziemi, sprawiając aby ciało utrzymywało się tylko na dłoniach i stopach. Należy dbać o rozgrzewkę, gdyż mięśnie grzbietu, są mięśniami, które angażowane są do takiego wysiłku stosunkowo żatko i są podatne na kontuzje, z uwagi na całodniową pracę związaną z utrzymywaniem prostej sylwetki. Jeśli ćwiczenie początkowo jest zbyt ciężkie warto podnosić samą miednicy, napinając grzbiet, tak aby ciało opierało się na ziemi na stopach orazłopatkach. Mostki sa podstawowym ćwiczeniem w treningu zapaśniczym. Najczęstrzej popełnianym błędem jest brak rozgrzewki doprowadzający do kontuzji."
        
    },
        
]
    
}) ();