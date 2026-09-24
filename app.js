const LEVELS = [
  {
    name: "Азбука", desc: "One sentence · everyday words", fontSize: "26px", minH: "100px",
    passages: [
      { plain: "Жила-была старая бабушка.", stressed: "Жила́-была́ ста́рая ба́бушка.", en: "Once there lived an old grandmother." },
      { plain: "Кошка сидит на окне и смотрит на птиц.", stressed: "Ко́шка сиди́т на окне́ и смо́трит на птиц.", en: "The cat sits on the windowsill and watches the birds." },
      { plain: "Мальчик нашёл в лесу маленького ёжика.", stressed: "Ма́льчик нашёл в лесу́ ма́ленького ёжика.", en: "The boy found a little hedgehog in the forest." },
      { plain: "Бабушка испекла пирог с яблоками.", stressed: "Ба́бушка испекла́ пиро́г с я́блоками.", en: "Grandma baked a pie with apples." },
      { plain: "На улице идёт сильный снег.", stressed: "На у́лице идёт си́льный снег.", en: "It's snowing heavily outside." },
      { plain: "Дед не смог вытащить репку один, и на помощь пришла вся семья, а последней — маленькая мышка.", stressed: "Дед не смог вы́тащить ре́пку оди́н, и на по́мощь пришла́ вся семья́, а после́дней — ма́ленькая мы́шка.", en: "Grandfather couldn't pull the turnip out alone, so his whole family came to help, and last of all came a little mouse." },
      { plain: "Курочка Ряба снесла золотое яичко, но мышка нечаянно разбила его хвостиком.", stressed: "Ку́рочка Ря́ба снесла́ золото́е яи́чко, но мы́шка неча́янно разби́ла его́ хво́стиком.", en: "The hen Ryaba laid a golden egg, but a mouse accidentally broke it with a flick of her tail." },
      { plain: "Великая Китайская стена тянется на тысячи километров.", stressed: "Вели́кая Кита́йская стена́ тя́нется на ты́сячи киломе́тров.", en: "The Great Wall of China stretches for thousands of kilometers." },
      { plain: "У каждого человека есть уникальный набор генов.", stressed: "У ка́ждого челове́ка есть уника́льный набо́р ге́нов.", en: "Every person has a unique set of genes." },
      { plain: "Свет от Солнца летит до Земли восемь минут.", stressed: "Свет от Со́лнца лети́т до Земли́ во́семь мину́т.", en: "Light from the Sun takes eight minutes to reach Earth." },
      { plain: "Новорождённый ребёнок спит почти весь день.", stressed: "Новорождённый ребёнок спит почти́ весь день.", en: "A newborn baby sleeps almost the whole day." },
      { plain: "Первые Олимпийские игры прошли в Греции более двух тысяч лет назад.", stressed: "Пе́рвые Олимпи́йские и́гры прошли́ в Гре́ции бо́лее двух ты́сяч лет наза́д.", en: "The first Olympic Games took place in Greece more than two thousand years ago." },
      { plain: "Однояйцевые близнецы имеют почти одинаковую ДНК.", stressed: "Однояйцевы́е близнецы́ име́ют почти́ одина́ковую ДНК.", en: "Identical twins have almost the same DNA." },
      { plain: "Мёд может храниться тысячи лет и не портиться.", stressed: "Мёд мо́жет храни́ться ты́сячи лет и не по́ртиться.", en: "Honey can be stored for thousands of years without spoiling." },
      { plain: "Малыши учатся узнавать лица уже в первые недели жизни.", stressed: "Малыши́ у́чатся узнава́ть ли́ца уже́ в пе́рвые неде́ли жи́зни.", en: "Babies learn to recognize faces already in the first weeks of life." },
      { plain: "Помидор на самом деле является фруктом, а не овощем.", stressed: "Помидо́р на са́мом де́ле явля́ется фру́ктом, а не о́вощем.", en: "A tomato is actually a fruit, not a vegetable." }
    ]
  },
  {
    name: "Потешки", desc: "Two sentences · everyday words", fontSize: "21px", minH: "120px",
    passages: [
      { plain: "Ёжик жил в старом саду. Каждое утро он гулял между яблонями.", stressed: "Ёжик жил в ста́ром саду́. Ка́ждое у́тро он гуля́л ме́жду я́блонями.", en: "The hedgehog lived in an old garden. Every morning he walked among the apple trees." },
      { plain: "Дети слепили снеговика во дворе. У него был морковный нос и старая шапка.", stressed: "Де́ти слепи́ли снегови́ка во дворе́. У него́ был морко́вный нос и ста́рая ша́пка.", en: "The children built a snowman in the yard. He had a carrot nose and an old hat." },
      { plain: "Кот забрался на высокий шкаф. Он долго сидел там и смотрел вниз.", stressed: "Кот забра́лся на высо́кий шкаф. Он до́лго сиде́л там и смотре́л вниз.", en: "The cat climbed onto the tall cabinet. He sat there a long time looking down." },
      { plain: "В поле стоял пустой теремок, и туда одно за другим приходили звери жить. Последним пришёл медведь, сел на крышу — и домик развалился.", stressed: "В по́ле стоя́л пусто́й терем́ок, и туда́ одно́ за други́м приходи́ли зве́ри жить. После́дним пришёл медве́дь, сел на кры́шу — и до́мик развали́лся.", en: "In a field stood an empty little house, and one animal after another came to live there. Last came the bear, who sat on the roof — and the house fell apart." },
      { plain: "Колобок укатился от бабушки и дедушки и распевал песенку каждому, кто хотел его съесть. Но хитрая лиса перехитрила его и в конце концов съела.", stressed: "Колобо́к укати́лся от ба́бушки и де́душки и распева́л пе́сенку ка́ждому, кто хоте́л его́ съесть. Но хи́трая лиса́ перехитри́ла его́ и в конце́ концо́в съе́ла.", en: "Kolobok rolled away from grandmother and grandfather, singing his little song to everyone who wanted to eat him. But the clever fox outwitted him and ate him in the end." },
      { plain: "Пирамиды в Египте построили более четырёх тысяч лет назад. Они до сих пор поражают своими размерами.", stressed: "Пирами́ды в Еги́пте постро́или бо́лее четырёх ты́сяч лет наза́д. Они́ до сих пор поража́ют свои́ми разме́рами.", en: "The pyramids in Egypt were built more than four thousand years ago. They still amaze with their size." },
      { plain: "Человек получает половину генов от матери и половину от отца. Поэтому дети немного похожи на обоих родителей.", stressed: "Челове́к получа́ет полови́ну ге́нов от ма́тери и полови́ну от отца́. Поэ́тому де́ти немно́го похо́жи на обо́их роди́телей.", en: "A person gets half their genes from their mother and half from their father. That's why children look a little like both parents." },
      { plain: "Осьминоги умеют менять цвет за доли секунды. Они делают это, чтобы прятаться от врагов.", stressed: "Осьмино́ги уме́ют меня́ть цвет за до́ли секу́нды. Они́ де́лают э́то, что́бы пря́таться от враго́в.", en: "Octopuses can change color in a fraction of a second. They do this to hide from predators." },
      { plain: "Сердце ребёнка начинает биться уже на пятой неделе беременности. Это происходит задолго до того, как живот становится заметным.", stressed: "Се́рдце ребёнка начина́ет би́ться уже́ на пя́той неде́ле бере́менности. Э́то происхо́дит задо́лго до того́, как живо́т стано́вится заме́тным.", en: "A baby's heart starts beating as early as the fifth week of pregnancy. This happens long before the belly becomes noticeable." },
      { plain: "Колесо изобрели около шести тысяч лет назад в Месопотамии. Сначала его использовали для гончарного дела, а не для транспорта.", stressed: "Колесо́ изобрели́ о́коло шести́ ты́сяч лет наза́д в Месопота́мии. Снача́ла его́ испо́льзовали для гонча́рного де́ла, а не для тра́нспорта.", en: "The wheel was invented around six thousand years ago in Mesopotamia. At first it was used for pottery, not for transport." },
      { plain: "У человека и банана совпадает довольно много генов. Это потому, что многие гены отвечают за базовые процессы жизни, общие для всех живых существ.", stressed: "У челове́ка и бана́на совпада́ет дово́льно мно́го ге́нов. Э́то потому́, что мно́гие ге́ны отвеча́ют за базо́вые проце́ссы жи́зни, о́бщие для всех живы́х суще́ств.", en: "Humans and bananas share quite a lot of the same genes. That's because many genes handle basic life processes common to all living things." },
      { plain: "Бананы на самом деле являются ягодами, а клубника — нет. Это определяется тем, как устроен плод изнутри, а не его размером.", stressed: "Бана́ны на са́мом де́ле явля́ются я́годами, а клубни́ка — нет. Э́то определя́ется тем, как устро́ен плод изнутри́, а не его́ разме́ром.", en: "Bananas are actually berries, but strawberries are not. This is determined by how the fruit is structured inside, not by its size." },
      { plain: "К двум годам мозг ребёнка достигает примерно восьмидесяти процентов от размера мозга взрослого. Именно поэтому первые годы жизни так важны для развития.", stressed: "К двум года́м мозг ребёнка достига́ет приме́рно восьми́десяти проце́нтов от разме́ра мо́зга взро́слого. И́менно поэ́тому пе́рвые го́ды жи́зни так важны́ для разви́тия.", en: "By age two, a child's brain reaches about eighty percent of an adult brain's size. That's exactly why the first years of life matter so much for development." },
      { plain: "Шоколад делают из какао-бобов, которые растут на дереве какао. Чтобы получить всего одну плитку, нужны бобы из нескольких стручков.", stressed: "Шокола́д де́лают из кака́о-бобо́в, кото́рые расту́т на де́реве кака́о. Что́бы получи́ть всего́ одну́ пли́тку, нужны́ бобы́ из не́скольких стручко́в.", en: "Chocolate is made from cacao beans, which grow on the cacao tree. Making just one bar requires beans from several pods." }
    ]
  },
  {
    name: "Сказки", desc: "Three sentences · storybook vocabulary", fontSize: "18px", minH: "150px",
    passages: [
      { plain: "В маленькой деревне жила девочка по имени Маша. Она любила гулять по лесу и собирать грибы. Однажды она встретила говорящего волка.", stressed: "В ма́ленькой дере́вне жила́ де́вочка по и́мени Ма́ша. Она́ люби́ла гуля́ть по лесу́ и собира́ть грибы́. Одна́жды она́ встре́тила говоря́щего во́лка.", en: "In a small village lived a girl named Masha. She loved walking in the forest and gathering mushrooms. One day she met a talking wolf." },
      { plain: "Старый мельник жил у реки много лет. Каждый вечер он слушал, как шумит вода. Но однажды мельница вдруг остановилась.", stressed: "Ста́рый ме́льник жил у реки́ мно́го лет. Ка́ждый ве́чер он слу́шал, как шуми́т вода́. Но одна́жды ме́льница вдруг останови́лась.", en: "The old miller had lived by the river for many years. Every evening he listened to the water rushing. But one day the mill suddenly stopped." },
      { plain: "Девочка заблудилась в лесу и нашла домик, где жили три медведя. Она попробовала их кашу, посидела на стульях и легла спать на самой маленькой кроватке. Когда медведи вернулись домой и заревели от удивления, девочка проснулась, выпрыгнула в окно и убежала.", stressed: "Де́вочка заблуди́лась в лесу́ и нашла́ до́мик, где жи́ли три медве́дя. Она́ попро́бовала их ка́шу, посиде́ла на сту́льях и легла́ спать на са́мой ма́ленькой крова́тке. Когда́ медве́ди верну́лись домо́й и зареве́ли от удивле́ния, де́вочка просну́лась, вы́прыгнула в окно́ и убежа́ла.", en: "A girl got lost in the forest and found a little house where three bears lived. She tasted their porridge, sat on their chairs, and lay down to sleep in the smallest bed. When the bears came home and roared in surprise, the girl woke up, jumped out the window, and ran away." },
      { plain: "В древнем Риме водопровод подавал воду в города по акведукам. Некоторые из этих сооружений сохранились до наших дней. Инженеры того времени строили их без современных инструментов.", stressed: "В дре́внем Ри́ме водопрово́д подава́л во́ду в города́ по акведу́кам. Не́которые из э́тих сооруже́ний сохрани́лись до на́ших дней. Инжене́ры того́ вре́мени стро́или их без совреме́нных инструме́нтов.", en: "In ancient Rome, aqueducts carried water into the cities. Some of these structures have survived to this day. Engineers of that time built them without modern tools." },
      { plain: "Рыжий цвет волос появляется из-за особого варианта одного гена. Этот вариант встречается довольно редко во всём мире. Больше всего рыжих людей живёт в Шотландии и Ирландии.", stressed: "Ры́жий цвет воло́с появля́ется из-за осо́бого вариа́нта одного́ ге́на. Э́тот вариа́нт встреча́ется дово́льно ре́дко во всём ми́ре. Бо́льше всего́ ры́жих люде́й живёт в Шотла́ндии и Ирла́ндии.", en: "Red hair appears because of a particular variant of one gene. This variant is fairly rare worldwide. The most redheaded people live in Scotland and Ireland." },
      { plain: "Молния горячее, чем поверхность Солнца, хотя длится лишь долю секунды. За одну секунду на Земле происходит около пятидесяти ударов молний. Учёные до сих пор изучают, как именно она возникает.", stressed: "Мо́лния горя́чее, чем пове́рхность Со́лнца, хотя́ дли́тся лишь до́лю секу́нды. За одну́ секу́нду на Земле́ происхо́дит о́коло пяти́десяти уда́ров мо́лний. Учёные до сих пор изуча́ют, как и́менно она́ возника́ет.", en: "Lightning is hotter than the surface of the Sun, even though it lasts only a fraction of a second. About fifty lightning strikes happen on Earth every second. Scientists are still studying exactly how it forms." },
      { plain: "Малыши узнают голос матери ещё до рождения. Они слышат его через стенку живота уже в последние месяцы беременности. После родов знакомый голос помогает ребёнку успокоиться.", stressed: "Малыши́ узнаю́т го́лос ма́тери ещё до рожде́ния. Они́ слы́шат его́ че́рез сте́нку живота́ уже́ в после́дние ме́сяцы бере́менности. По́сле родо́в знако́мый го́лос помога́ет ребёнку успоко́иться.", en: "Babies recognize their mother's voice even before birth. They hear it through the belly wall already in the last months of pregnancy. After birth, the familiar voice helps calm the baby." },
      { plain: "Викинги достигли берегов Северной Америки почти за пятьсот лет до Колумба. Они основали небольшое поселение на территории современной Канады. Однако оно просуществовало недолго, и о нём забыли на много веков.", stressed: "Ви́кинги дости́гли берего́в Се́верной Аме́рики почти́ за пятьсо́т лет до Колу́мба. Они́ основа́ли небольшо́е поселе́ние на террито́рии совреме́нной Кана́ды. Одна́ко оно́ просуществова́ло недо́лго, и о нём забы́ли на мно́го веко́в.", en: "The Vikings reached the shores of North America almost five hundred years before Columbus. They founded a small settlement in what is now Canada. However, it survived only a short time, and it was forgotten for many centuries." },
      { plain: "Цвет глаз человека определяется не одним геном, а сразу несколькими. Поэтому у двух кареглазых родителей вполне может родиться голубоглазый ребёнок. Учёные насчитывают больше десяти генов, влияющих на итоговый оттенок.", stressed: "Цвет глаз челове́ка определя́ется не одни́м ге́ном, а сра́зу не́сколькими. Поэ́тому у двух карегла́зых роди́телей вполне́ мо́жет роди́ться голубогла́зый ребёнок. Учёные насчи́тывают бо́льше десяти́ ге́нов, влия́ющих наито́говый отте́нок.", en: "A person's eye color is determined not by one gene but by several at once. That's why two brown-eyed parents can quite possibly have a blue-eyed child. Scientists count more than ten genes that influence the final shade." },
      { plain: "Глубоко в океане существуют места, куда никогда не проникает солнечный свет. Тем не менее там обитают удивительные существа, которые сами создают свет благодаря особым химическим реакциям. Это явление называется биолюминесценцией.", stressed: "Глубоко́ в океа́не существу́ют места́, куда́ никогда́ не проника́ет со́лнечный свет. Тем не ме́нее там обита́ют удиви́тельные существа́, кото́рые са́ми создаю́т свет благодаря́ осо́бым хими́ческим реа́кциям. Э́то явле́ние называ́ется биолюминесце́нцией.", en: "Deep in the ocean there are places sunlight never reaches. Even so, remarkable creatures live there that produce their own light through special chemical reactions. This phenomenon is called bioluminescence." },
      { plain: "В третьем триместре беременности малыш уже видит сны, хотя его глаза ещё закрыты. Учёные предполагают это по характерным движениям глаз, которые фиксируют приборы. Что именно снится ребёнку до рождения, остаётся загадкой.", stressed: "В тре́тьем триме́стре бере́менности малы́ш уже́ ви́дит сны, хотя́ его́ глаза́ ещё за́крыты. Учёные предполага́ют э́то по характе́рным движе́ниям глаз, кото́рые фикси́руют прибо́ры. Что и́менно сни́тся ребёнку до рожде́ния, остаётся зага́дкой.", en: "In the third trimester of pregnancy, the baby already dreams, even though its eyes are still closed. Scientists infer this from characteristic eye movements that instruments record. What exactly the baby dreams about before birth remains a mystery." },
      { plain: "Рис является основным продуктом питания для более чем половины населения планеты. Его выращивают на затопленных полях, которые называются рисовыми чеками. Из одного зёрнышка риса может вырасти растение с несколькими сотнями новых зёрен.", stressed: "Рис явля́ется основны́м проду́ктом пита́ния для бо́лее чем полови́ны населе́ния плане́ты. Его́ выра́щивают на затопле́нных поля́х, кото́рые называ́ются ри́совыми че́ками. Из одного́ зёрнышка ри́са мо́жет вы́расти расте́ние с не́сколькими со́тнями но́вых зёрен.", en: "Rice is a staple food for more than half the world's population. It's grown in flooded fields called paddies. A single grain of rice can grow into a plant with several hundred new grains." }
    ]
  },
  {
    name: "Рассказы", desc: "A short paragraph · richer storytelling words", fontSize: "15.5px", minH: "190px",
    passages: [
      { plain: "Зимним вечером в маленькой избушке горела свеча. За окном мела метель, и ветер стучал в ставни. Старик сидел у печки и рассказывал внукам сказку. Дети слушали, затаив дыхание, а кот дремал у него на коленях.", stressed: "Зи́мним ве́чером в ма́ленькой избу́шке горе́ла свеча́. За окно́м мела́ мете́ль, и ве́тер стуча́л в ста́вни. Стари́к сиде́л у пе́чки и расска́зывал вну́кам ска́зку. Де́ти слу́шали, затаи́в дыха́ние, а кот дрема́л у него́ на коле́нях.", en: "On a winter evening, a candle burned in a small hut. Outside a blizzard was sweeping by, and the wind knocked against the shutters. The old man sat by the stove telling his grandchildren a tale. The children listened, holding their breath, while the cat dozed on his lap." },
      { plain: "Летом бабушкин сад наполнялся ароматом жасмина. Пчёлы кружили над цветами, а бабочки перелетали с ветки на ветку. По утрам бабушка выходила поливать грядки, напевая старую песню. К вечеру вся семья собиралась пить чай на веранде.", stressed: "Ле́том ба́бушкин сад наполня́лся арома́том жасми́на. Пчёлы кружи́ли над цвета́ми, а ба́бочки перелета́ли с ве́тки на ве́тку. По утра́м ба́бушка выходи́ла полива́ть гря́дки, напева́я ста́рую пе́сню. К ве́черу вся семья́ собира́лась пить чай на вера́нде.", en: "In summer, grandmother's garden filled with the scent of jasmine. Bees circled over the flowers, and butterflies flitted from branch to branch. Each morning grandmother went out to water the beds, humming an old song. By evening the whole family gathered to drink tea on the veranda." },
      { plain: "Девочка заигралась и не уследила за братцем, а гуси-лебеди унесли его к Бабе-яге. Она бросилась в погоню и по дороге встретила печку, яблоню и речку, которые обещали помочь, если она отведает их угощения. Сначала девочка отказывалась, но на обратном пути, уже с братцем на руках, она согласилась — и они спрятали детей от гусей. Так брат и сестра благополучно вернулись домой.", stressed: "Де́вочка заигра́лась и не уследи́ла за бра́тцем, а гу́си-ле́беди унесли́ его́ к Ба́бе-яге́. Она́ бро́силась в пого́ню и по доро́ге встре́тила пе́чку, я́блоню и ре́чку, кото́рые обеща́ли помо́чь, е́сли она́ отве́дает их угоще́ния. Снача́ла де́вочка отка́зывалась, но на обра́тном пути́, уже́ с бра́тцем на рука́х, она́ согласи́лась — и они́ спря́тали дете́й от гусе́й. Так брат и сестра́ благополу́чно верну́лись домо́й.", en: "A girl got absorbed in play and lost track of her little brother, and the swan-geese carried him off to Baba Yaga. She rushed off in pursuit and met a stove, an apple tree, and a little river along the way, who each promised to help if she tasted their food. At first the girl refused, but on the way back, now carrying her brother, she agreed — and they hid the children from the geese. So brother and sister made it safely home." },
      { plain: "Изобретение книгопечатания в середине пятнадцатого века изменило весь мир. До этого каждую книгу переписывали от руки, и она стоила очень дорого. Печатный станок позволил создавать много копий гораздо быстрее и дешевле. Благодаря этому знания стали доступны гораздо большему числу людей.", stressed: "Изобрете́ние книгопеча́тания в середи́не пятна́дцатого ве́ка измени́ло весь мир. До э́того ка́ждую кни́гу перепи́сывали от руки́, и она́ сто́ила о́чень до́рого. Печа́тный стано́к позво́лил создава́ть мно́го ко́пий гора́здо быстре́е и деше́вле. Благодаря́ э́тому зна́ния ста́ли досту́пны гора́здо бо́льшему числу́ люде́й.", en: "The invention of printing in the mid-15th century changed the whole world. Before that, every book was copied by hand and cost a great deal. The printing press made it possible to create many copies much faster and cheaper. Because of this, knowledge became accessible to far more people." },
      { plain: "Внутри почти каждой клетки человеческого тела хранится полный набор генетической информации. Если растянуть в одну линию всю ДНК одной клетки, она окажется около двух метров в длину. При этом умещается она в ядре, которое в тысячи раз меньше булавочной головки. Именно эта информация определяет цвет глаз, рост и многие другие особенности организма.", stressed: "Внутри́ почти́ ка́ждой кле́тки челове́ческого те́ла храни́тся по́лный набо́р генети́ческой информа́ции. Е́сли растяну́ть в одну́ ли́нию всю ДНК одно́й кле́тки, она́ ока́жется о́коло двух ме́тров в длину́. При э́том умеща́ется она́ в ядре́, кото́рое в ты́сячи раз ме́ньше була́вочной голо́вки. И́менно э́та информа́ция определя́ет цвет глаз, рост и мно́гие други́е осо́бенности органи́зма.", en: "Inside almost every cell of the human body is stored a complete set of genetic information. If you stretched out all the DNA of a single cell into one line, it would be about two meters long. Yet it fits inside a nucleus thousands of times smaller than a pinhead. It's this information that determines eye color, height, and many other features of the body." },
      { plain: "Осьминоги и каракатицы способны видеть мир способом, совершенно непохожим на человеческий. Хотя они не различают цвета так, как мы, их кожа содержит светочувствительные клетки. Благодаря этому животное может как будто чувствовать свет всем телом. Учёные до сих пор спорят, как именно это связано с их удивительной способностью менять окраску.", stressed: "Осьмино́ги и карака́тицы спосо́бны ви́деть мир спо́собом, соверше́нно непохо́жим на челове́ческий. Хотя́ они́ не различа́ют цвета́ так, как мы, их ко́жа соде́ржит светочувстви́тельные кле́тки. Благодаря́ э́тому живо́тное мо́жет как бу́дто чу́вствовать свет всем те́лом. Учёные до сих пор спо́рят, как и́менно э́то свя́зано с их удиви́тельной спосо́бностью меня́ть окра́ску.", en: "Octopuses and cuttlefish are able to perceive the world in a way quite unlike humans. Although they don't distinguish colors the way we do, their skin contains light-sensitive cells. Because of this, the animal can, in a sense, sense light with its whole body. Scientists still debate exactly how this relates to their remarkable ability to change color." },
      { plain: "В первые годы жизни мозг ребёнка развивается быстрее, чем в любой другой период. Каждую секунду в нём образуется огромное количество новых связей между нейронами. Простое общение с малышом, разговоры и чтение вслух напрямую влияют на то, как формируется этот мозг. Поэтому даже обычный разговор за завтраком — это уже часть обучения ребёнка.", stressed: "В пе́рвые го́ды жи́зни мозг ребёнка развива́ется быстре́е, чем в любо́й друго́й пери́од. Ка́ждую секу́нду в нём образу́ется огро́мное коли́чество но́вых связе́й ме́жду нейро́нами. Просто́е обще́ние с малышо́м, разгово́ры и чте́ние вслух напряму́ю влия́ют на то, как формиру́ется э́тот мозг. Поэ́тому да́же обы́чный разгово́р за за́втраком — э́то уже́ часть обуче́ния ребёнка.", en: "In the first years of life, a child's brain develops faster than at any other period. Every second, an enormous number of new connections form between neurons. Simply talking with the baby, conversing, and reading aloud directly influence how this brain takes shape. So even an ordinary conversation over breakfast is already part of the child's learning." },
      { plain: "В средневековой Европе часы на городских башнях часто были единственным способом узнать точное время для целого города. Их строительство обходилось очень дорого и требовало труда искусных мастеров. Некоторые из этих часов работают до сих пор, спустя несколько веков после установки. Они стали не только техническим достижением, но и символом статуса города.", stressed: "В средневеко́вой Евро́пе часы́ на городски́х ба́шнях ча́сто бы́ли еди́нственным спо́собом узна́ть то́чное вре́мя для це́лого го́рода. Их строи́тельство обходи́лось о́чень до́рого и тре́бовало труда́ иску́сных ма́стеров. Не́которые из э́тих часо́в рабо́тают до сих пор, спустя́ не́сколько веко́в по́сле устано́вки. Они́ ста́ли не то́лько техни́ческим достиже́нием, но и си́мволом ста́туса го́рода.", en: "In medieval Europe, clocks on city towers were often the only way for an entire city to know the exact time. Building them was very expensive and required the labor of skilled craftsmen. Some of these clocks still work today, centuries after they were installed. They became not just a technical achievement but a symbol of a city's status." },
      { plain: "У некоторых людей есть особая генетическая черта, из-за которой они почти не чувствуют горького вкуса определённых овощей, например брокколи. У других же этот вкус кажется настолько сильным, что есть такие овощи неприятно. Разница объясняется вариантом одного конкретного гена, отвечающего за вкусовые рецепторы. Именно поэтому вкусы в семье могут так сильно различаться, даже если все едят одну и ту же еду.", stressed: "У не́которых люде́й есть осо́бая генети́ческая черта́, из-за кото́рой они́ почти́ не чу́вствуют го́рького вку́са определённых овоще́й, наприме́р бро́кколи. У други́х же э́тот вкус ка́жется насто́лько си́льным, что есть таки́е о́вощи неприя́тно. Ра́зница объясня́ется вариа́нтом одного́ конкре́тного ге́на, отвеча́ющего за вкусовы́е реце́пторы. И́менно поэ́тому вку́сы в семье́ мо́гут так си́льно различа́ться, да́же е́сли все едя́т одну́ и ту же еду́.", en: "Some people have a particular genetic trait that means they barely taste the bitterness in certain vegetables, like broccoli. For others, that taste feels so strong that eating such vegetables is unpleasant. The difference comes down to a variant of one specific gene responsible for taste receptors. That's exactly why tastes within a family can differ so much, even when everyone eats the same food." },
      { plain: "Пауки плетут паутину из шёлка, который они производят в собственном теле, и этот материал поразительно прочен для своего веса. По некоторым оценкам, нить того же диаметра, что и паутина, оказалась бы прочнее стали. При этом паутина остаётся достаточно эластичной, чтобы растягиваться и не рваться при порывах ветра. Учёные давно пытаются создать искусственный материал с похожими свойствами.", stressed: "Пауки́ плету́т паути́ну из шёлка, кото́рый они́ произво́дят в со́бственном те́ле, и э́тот материа́л порази́тельно про́чен для своего́ ве́са. По не́которым оце́нкам, нить того́ же диа́метра, что и паути́на, оказа́лась бы про́чнее ста́ли. При э́том паути́на остаётся доста́точно эласти́чной, что́бы растя́гиваться и не рва́ться при поры́вах ве́тра. Учёные давно́ пыта́ются созда́ть иску́сственный материа́л с похо́жими сво́йствами.", en: "Spiders weave webs from silk they produce inside their own bodies, and this material is remarkably strong for its weight. By some estimates, a thread of the same diameter as spider silk would be stronger than steel. At the same time, the web stays elastic enough to stretch and not tear in gusts of wind. Scientists have long been trying to create an artificial material with similar properties." },
      { plain: "Учиться говорить ребёнок начинает задолго до того, как произносит первое слово. Уже с рождения младенцы внимательно вслушиваются в интонации и ритм речи взрослых вокруг них. К шести месяцам многие дети начинают лепетать, повторяя похожие слоги снова и снова. А ближе к первому дню рождения появляются первые осознанные слова, которые обычно связаны с самыми близкими людьми и предметами.", stressed: "Учи́ться говори́ть ребёнок начина́ет задо́лго до того́, как произно́сит пе́рвое сло́во. Уже́ с рожде́ния младе́нцы внима́тельно вслу́шиваются в интона́ции и ритм ре́чи взро́слых вокру́г них. К шести́ ме́сяцам мно́гие де́ти начина́ют лепета́ть, повторя́я похо́жие слоги́ сно́ва и сно́ва. А бли́же к пе́рвому дню рожде́ния появля́ются пе́рвые осо́знанные слова́, кото́рые обы́чно свя́заны с са́мыми бли́зкими людьми́ и предме́тами.", en: "A child begins learning to talk long before saying their first word. From birth, infants listen closely to the intonation and rhythm of the speech around them. By six months, many babies start babbling, repeating similar syllables over and over. And closer to their first birthday, the first meaningful words appear, usually tied to the closest people and objects in their life." },
      { plain: "Сыр начали делать ещё в глубокой древности, вероятно, почти случайно, когда молоко перевозили в мешках из желудков животных. Ферменты, естественным образом присутствующие в таком мешке, заставляли молоко сворачиваться и превращаться в творожистую массу. Со временем люди заметили, что такой продукт хранится намного дольше свежего молока. Сегодня в мире существуют тысячи сортов сыра, и у каждого — свой особый вкус и способ приготовления.", stressed: "Сыр на́чали де́лать ещё в глубо́кой дре́вности, вероя́тно, почти́ случа́йно, когда́ молоко́ перевози́ли в мешка́х из желу́дков живо́тных. Ферме́нты, есте́ственным о́бразом прису́тствующие в тако́м мешке́, заставля́ли молоко́ свора́чиваться и превраща́ться в творо́жистую ма́ссу. Со вре́менем лю́ди заме́тили, что тако́й проду́кт храни́тся намно́го до́льше све́жего молока́. Сего́дня в ми́ре существу́ют ты́сячи со́ртов сы́ра, и у ка́ждого — свой осо́бый вкус и спо́соб приготовле́ния.", en: "Cheese-making began in deep antiquity, probably almost by accident, when milk was carried in bags made from animal stomachs. Enzymes naturally present in such a bag made the milk curdle and turn into a curd-like mass. Over time, people noticed that this product kept much longer than fresh milk. Today there are thousands of varieties of cheese in the world, each with its own distinct taste and method of preparation." }
    ]
  },
  {
    name: "Повесть", desc: "A full paragraph · real sentence structure", fontSize: "14px", minH: "230px",
    passages: [
      { plain: "Мельница простояла без дела уже три дня, и жители деревни начали волноваться, потому что зерно нужно было смолоть до начала дождей. Мельник несколько раз спускался к колесу и осматривал его, но не находил поломки. Наконец соседский мальчик заметил, что в жёлоб упало большое бревно, которое перекрыло воду. Когда бревно убрали, колесо снова медленно, со скрипом, начало вращаться, и вся деревня вздохнула с облегчением.", stressed: "Ме́льница простоя́ла без де́ла уже́ три дня, и жи́тели дере́вни на́чали волнова́ться, потому́ что зерно́ ну́жно бы́ло смоло́ть до нача́ла дожде́й. Ме́льник не́сколько раз спуска́лся к колесу́ и осма́тривал его́, но не находи́л поло́мки. Наконе́ц сосе́дский ма́льчик заме́тил, что в жёлоб упа́ло большо́е бревно́, кото́рое перекры́ло во́ду. Когда́ бревно́ убра́ли, колесо́ сно́ва ме́дленно, со скри́пом, на́чало враща́ться, и вся дере́вня вздохну́ла с облегче́нием.", en: "The mill had stood idle for three days already, and the villagers began to worry, because the grain needed to be ground before the rains started. The miller climbed down to the wheel several times and examined it, but couldn't find the damage. Finally the neighbor's boy noticed that a large log had fallen into the sluice and was blocking the water. When the log was cleared, the wheel slowly began turning again, creaking, and the whole village breathed a sigh of relief." },
      { plain: "Волк не спешил её пугать, а вместо этого предложил показать короткую дорогу домой через овраг. Маша сначала испугалась, но потом вспомнила, что бабушка всегда говорила: не всякий зверь в лесу желает зла. Она пошла за волком, стараясь запомнить дорогу, а он рассказывал ей о лесных тропах, по которым сам ходил ещё щенком. К закату они вышли прямо к околице деревни, и волк, попрощавшись, скрылся между деревьями.", stressed: "Волк не спеши́л её пуга́ть, а вме́сто э́того предложи́л показа́ть коро́ткую доро́гу домо́й че́рез овра́г. Ма́ша снача́ла испуга́лась, но пото́м вспо́мнила, что ба́бушка всегда́ говори́ла: не вся́кий зверь в лесу́ жела́ет зла. Она́ пошла́ за во́лком, стара́ясь запо́мнить доро́гу, а он расска́зывал ей о лесны́х тро́пах, по кото́рым сам ходи́л ещё щенко́м. К зака́ту они́ вы́шли пря́мо к око́лице дере́вни, и волк, попроща́вшись, скры́лся ме́жду дере́вьями.", en: "The wolf was in no hurry to frighten her, and instead offered to show her a shortcut home through the ravine. Masha was scared at first, but then remembered that grandmother always said not every beast in the forest wishes harm. She followed the wolf, trying to remember the way, while he told her about forest paths he'd walked as a pup. By sunset they came out right at the edge of the village, and the wolf, saying goodbye, vanished among the trees." },
      { plain: "Маша заблудилась в лесу и оказалась в избушке огромного медведя, который не отпускал её домой и заставлял готовить и убирать. Чтобы вернуться к бабушке и дедушке, она придумала хитрость: испекла пироги, спряталась в корзине под пирогами и велела медведю отнести корзину в деревню, а сама покрикивала оттуда, чтобы он не садился на пенёк и не ел пирожок. Медведь ничего не заподозрил и донёс корзину до самой околицы, где его встретили лающие собаки. Испугавшись, он бросил корзину и убежал в лес, а Маша выбралась целой и невредимой к родным.", stressed: "Ма́ша заблуди́лась в лесу́ и оказа́лась в избу́шке огро́много медве́дя, кото́рый не отпуска́л её домо́й и заставля́л гото́вить и убира́ть. Что́бы верну́ться к ба́бушке и де́душке, она́ приду́мала хи́трость: испекла́ пироги́, спря́талась в корзи́не под пирога́ми и веле́ла медве́дю отнести́ корзи́ну в дере́вню, а сама́ покри́кивала отту́да, что́бы он не сади́лся на пенёк и не ел пирожо́к. Медве́дь ничего́ не заподо́зрил и донёс корзи́ну до са́мой око́лицы, где его́ встре́тили ла́ющие соба́ки. Испуга́вшись, он бро́сил корзи́ну и убежа́л в лес, а Ма́ша вы́бралась це́лой и невреди́мой к родны́м.", en: "Masha got lost in the forest and ended up at the hut of a huge bear, who wouldn't let her go home and made her cook and clean. To get back to her grandmother and grandfather, she came up with a trick: she baked pies, hid herself in the basket under the pies, and told the bear to carry the basket to the village, calling out from inside not to sit on a stump and not to eat the pie. The bear suspected nothing and carried the basket all the way to the edge of the village, where barking dogs met him. Frightened, he dropped the basket and ran back into the forest, while Masha climbed out safe and sound to her family." },
      { plain: "Когда археологи впервые вскрыли гробницу Тутанхамона в тысяча девятьсот двадцать втором году, они обнаружили тысячи предметов, которые пролежали нетронутыми более трёх тысяч лет. Среди находок были золотая маска, драгоценности и даже еда, оставленная для загробной жизни фараона. Это открытие стало одним из самых значимых в истории археологии, потому что большинство древнеегипетских гробниц были разграблены ещё в древности. Благодаря тому что гробница Тутанхамона осталась почти нетронутой, учёные смогли гораздо лучше понять, как жили и во что верили древние египтяне.", stressed: "Когда́ архео́логи впервы́е вскры́ли гробни́цу Тутанха́мона в ты́сяча девятьсо́т два́дцать второ́м году́, они́ обнару́жили ты́сячи предме́тов, кото́рые пролежа́ли нетро́нутыми бо́лее трёх ты́сяч лет. Среди́ нахо́док бы́ли золота́я ма́ска, драгоце́нности и да́же еда́, оста́вленная для загро́бной жи́зни фарао́на. Э́то откры́тие ста́ло одни́м из са́мых значи́мых в исто́рии археоло́гии, потому́ что большинство́ древнееги́петских гробни́ц бы́ли разгра́блены ещё в дре́вности. Благодаря́ тому́ что гробни́ца Тутанха́мона оста́лась почти́ нетро́нутой, учёные смогли́ гора́здо лу́чше поня́ть, как жи́ли и во что ве́рили дре́вние египтя́не.", en: "When archaeologists first opened Tutankhamun's tomb in 1922, they found thousands of objects that had lain untouched for more than three thousand years. Among the finds were a golden mask, jewelry, and even food left for the pharaoh's afterlife. This discovery became one of the most significant in the history of archaeology, because most ancient Egyptian tombs had already been looted in antiquity. Because Tutankhamun's tomb remained almost untouched, scholars were able to understand far better how the ancient Egyptians lived and what they believed." },
      { plain: "Хотя у человека и шимпанзе очень разные тела и поведение, их ДНК совпадает почти на девяносто девять процентов. Небольшая разница в оставшемся проценте накопилась за миллионы лет, пока два вида развивались отдельно друг от друга. Именно эти небольшие отличия отвечают за то, что у человека такой большой мозг, развитая речь и способность создавать сложные орудия труда. Учёные изучают эти различия, потому что они помогают понять, что вообще делает нас людьми.", stressed: "Хотя́ у челове́ка и шимпанзе́ о́чень ра́зные тела́ и поведе́ние, их ДНК совпада́ет почти́ на девяно́сто де́вять проце́нтов. Небольша́я ра́зница в оста́вшемся проце́нте накопи́лась за миллио́ны лет, пока́ два ви́да развива́лись отде́льно друг от дру́га. И́менно э́ти небольши́е отли́чия отвеча́ют за то, что у челове́ка тако́й большо́й мозг, разви́тая речь и спосо́бность создава́ть сло́жные ору́дия труда́. Учёные изуча́ют э́ти разли́чия, потому́ что они́ помога́ют поня́ть, что вообще́ де́лает нас людьми́.", en: "Although humans and chimpanzees have very different bodies and behavior, their DNA matches almost ninety-nine percent. The small difference in the remaining percent built up over millions of years while the two species developed separately from each other. It is precisely these small differences that are responsible for humans having such a large brain, developed speech, and the ability to create complex tools. Scientists study these differences because they help us understand what actually makes us human." },
      { plain: "Осенью некоторые виды птиц пролетают тысячи километров, чтобы провести зиму в более тёплых краях, и делают это, ориентируясь без карт и компаса. Учёные считают, что птицы чувствуют магнитное поле Земли благодаря особому белку в глазах, который помогает им буквально видеть направление на север. Кроме того, многие виды запоминают расположение звёзд и используют его как дополнительный ориентир. Такое путешествие может занимать несколько недель, и птицы преодолевают его, почти не останавливаясь на отдых.", stressed: "О́сенью не́которые ви́ды птиц пролета́ют ты́сячи киломе́тров, что́бы провести́ зи́му в бо́лее тёплых края́х, и де́лают э́то, ориенти́руясь без карт и ко́мпаса. Учёные счита́ют, что пти́цы чу́вствуют магни́тное по́ле Земли́ благодаря́ осо́бому белку́ в глаза́х, кото́рый помога́ет им буква́льно ви́деть направле́ние на се́вер. Кро́ме того́, мно́гие ви́ды запомина́ют расположе́ние звёзд и испо́льзуют его́ как дополни́тельный ориенти́р. Тако́е путеше́ствие мо́жет занима́ть не́сколько неде́ль, и пти́цы преодолева́ют его́, почти́ не остана́вливаясь на о́тдых.", en: "In autumn, some bird species fly thousands of kilometers to spend the winter in warmer regions, navigating without maps or a compass. Scientists believe that birds sense the Earth's magnetic field thanks to a special protein in their eyes that helps them, in effect, see which direction is north. In addition, many species memorize the position of the stars and use it as an extra reference point. Such a journey can take several weeks, and the birds get through it with almost no stops to rest." },
      { plain: "На протяжении беременности ребёнок постепенно учится узнавать не только голос матери, но и её запах, а после рождения именно запах помогает ему найти материнскую грудь в первые часы жизни. Исследователи заметили, что новорождённые успокаиваются быстрее, если чувствуют знакомый запах, который они улавливали ещё до появления на свет. Кроме того, вкус околоплодных вод отчасти зависит от того, что ест будущая мать, и это может влиять на пищевые предпочтения ребёнка в будущем. Поэтому то, что происходит задолго до рождения, продолжает влиять на малыша ещё много лет спустя.", stressed: "На протяже́нии бере́менности ребёнок постепе́нно у́чится узнава́ть не то́лько го́лос ма́тери, но и её за́пах, а по́сле рожде́ния и́менно за́пах помога́ет ему́ найти́ матери́нскую грудь в пе́рвые часы́ жи́зни. Иссле́дователи заме́тили, что новорождённые успока́иваются быстре́е, е́сли чу́вствуют знако́мый за́пах, кото́рый они́ ула́вливали ещё до появле́ния на свет. Кро́ме того́, вкус околопло́дных вод отча́сти зави́сит от того́, что ест бу́дущая мать, и э́то мо́жет влия́ть на пищевы́е предпочте́ния ребёнка в бу́дущем. Поэ́тому то, что происхо́дит задо́лго до рожде́ния, продолжа́ет влия́ть на малыша́ ещё мно́го лет спустя́.", en: "Throughout pregnancy, a baby gradually learns to recognize not only the mother's voice but also her scent, and after birth it's precisely that scent which helps the baby find the mother's breast in the first hours of life. Researchers have noticed that newborns calm down faster when they sense a familiar smell that they had picked up even before being born. In addition, the taste of the amniotic fluid partly depends on what the expectant mother eats, and this can influence the child's food preferences later in life. So what happens long before birth continues to influence the child for many years afterward." },
      { plain: "Библиотека в древней Александрии считалась одним из крупнейших центров знаний античного мира, и в ней, по разным оценкам, хранились сотни тысяч свитков. Учёные, поэты и философы съезжались туда со всего Средиземноморья, потому что нигде больше нельзя было найти столько собранных вместе текстов. Точные причины и обстоятельства её гибели до сих пор вызывают споры среди историков, поскольку библиотека, судя по всему, приходила в упадок постепенно, а не была уничтожена в один момент. Тем не менее судьба Александрийской библиотеки стала символом того, как много знаний может быть безвозвратно потеряно.", stressed: "Библиоте́ка в дре́вней Александри́и счита́лась одни́м из крупне́йших це́нтров зна́ний анти́чного ми́ра, и в ней, по ра́зным оце́нкам, храни́лись со́тни ты́сяч сви́тков. Учёные, поэ́ты и фило́софы съезжа́лись туда́ со всего́ Средиземномо́рья, потому́ что нигде́ бо́льше нельзя́ бы́ло найти́ сто́лько со́бранных вме́сте те́кстов. То́чные причи́ны и обстоя́тельства её ги́бели до сих пор вызыва́ют спо́ры среди́ исто́риков, поско́льку библиоте́ка, судя́ по всему́, приходи́ла в упа́док постепе́нно, а не была́ уничто́жена в оди́н моме́нт. Тем не ме́нее судьба́ Александри́йской библиоте́ки ста́ла си́мволом того́, как мно́го зна́ний мо́жет быть безвозвра́тно поте́ряно.", en: "The library in ancient Alexandria was considered one of the greatest centers of knowledge in the ancient world, holding, by various estimates, hundreds of thousands of scrolls. Scholars, poets, and philosophers traveled there from across the Mediterranean, because nowhere else could so many texts be found gathered together. The exact causes and circumstances of its destruction are still debated among historians, since the library, it seems, declined gradually rather than being destroyed in a single moment. Still, the fate of the Library of Alexandria became a symbol of how much knowledge can be lost forever." },
      { plain: "Учёные обнаружили, что в геноме современного человека сохранились небольшие фрагменты ДНК, доставшиеся от неандертальцев, с которыми предки некоторых людей когда-то скрещивались. У большинства людей неевропейского и неазиатского происхождения таких фрагментов почти нет, потому что их предки разошлись с неандертальцами до этих контактов. Эти унаследованные участки генома, судя по всему, влияют на некоторые особенности иммунной системы и даже на то, как организм переносит холод. Таким образом, в каждом из нас может буквально жить крошечная часть истории, которой уже десятки тысяч лет.", stressed: "Учёные обнару́жили, что в гено́ме совреме́нного челове́ка сохрани́лись небольши́е фрагме́нты ДНК, доста́вшиеся от неандерта́льцев, с кото́рыми пре́дки не́которых люде́й когда́-то скре́щивались. У большинства́ люде́й неевропе́йского и неазиа́тского происхожде́ния таки́х фрагме́нтов почти́ нет, потому́ что их пре́дки разошли́сь с неандерта́льцами до э́тих конта́ктов. Э́ти унасле́дованные уча́стки гено́ма, судя́ по всему́, влия́ют на не́которые осо́бенности имму́нной систе́мы и да́же на то, как органи́зм перено́сит хо́лод. Таки́м о́бразом, в ка́ждом из нас мо́жет буква́льно жить кро́шечная часть исто́рии, кото́рой уже́ деся́тки ты́сяч лет.", en: "Scientists have found that the genome of modern humans still holds small fragments of DNA inherited from Neanderthals, with whom some people's ancestors once interbred. Most people of non-European and non-Asian ancestry have almost none of these fragments, because their ancestors split from Neanderthals before those contacts happened. These inherited segments of the genome, it seems, influence certain features of the immune system and even how the body handles cold. So, quite literally, each of us may carry a tiny piece of history that is tens of thousands of years old." },
      { plain: "Полярное сияние возникает, когда заряженные частицы, летящие от Солнца, сталкиваются с атомами в верхних слоях земной атмосферы возле полюсов. Магнитное поле Земли направляет эти частицы к северу и югу, поэтому сияние обычно видно именно в приполярных широтах, а не по всей планете. Разные газы в атмосфере светятся разными цветами при столкновении с частицами: кислород чаще даёт зелёное и красное свечение, а азот — синее и фиолетовое. Похожие явления, судя по данным космических аппаратов, наблюдаются и на других планетах с магнитным полем, например на Юпитере и Сатурне.", stressed: "Поля́рное сия́ние возника́ет, когда́ заря́женные части́цы, летя́щие от Со́лнца, ста́лкиваются с а́томами в ве́рхних слоя́х земно́й атмосфе́ры во́зле по́люсов. Магни́тное по́ле Земли́ направля́ет э́ти части́цы к се́веру и ю́гу, поэ́тому сия́ние обы́чно видно́ и́менно в приполя́рных широ́тах, а не по всей плане́те. Ра́зные га́зы в атмосфе́ре светя́тся ра́зными цвета́ми при столкнове́нии с части́цами: кислоро́д ча́ще даёт зелёное и кра́сное свече́ние, а азо́т — си́нее и фиоле́товое. Похо́жие явле́ния, судя́ по да́нным косми́ческих аппара́тов, наблюда́ются и на други́х плане́тах с магни́тным по́лем, наприме́р на Юпи́тере и Сату́рне.", en: "The aurora appears when charged particles flying from the Sun collide with atoms in the upper layers of Earth's atmosphere near the poles. Earth's magnetic field channels these particles toward the north and south, which is why the aurora is usually visible mainly at polar latitudes rather than across the whole planet. Different gases in the atmosphere glow different colors on collision with the particles: oxygen most often produces green and red light, while nitrogen produces blue and violet. Similar phenomena, according to data from space probes, are observed on other planets with a magnetic field too, such as Jupiter and Saturn." },
      { plain: "Специалисты по развитию давно заметили, что совместное чтение вслух с малышом приносит пользу задолго до того, как ребёнок начинает понимать сами слова. Сам процесс — то, что родитель держит книгу, показывает картинки и меняет интонацию голоса, — помогает ребёнку учиться концентрировать внимание и связывать звуки с образами. Исследования показывают, что дети, которым регулярно читают в раннем возрасте, впоследствии нередко осваивают речь и чтение быстрее сверстников. При этом важнее не количество прочитанных страниц за один раз, а сама регулярность такого совместного времени, день за днём.", stressed: "Специали́сты по разви́тию давно́ заме́тили, что совме́стное чте́ние вслух с малышо́м прино́сит по́льзу задо́лго до того́, как ребёнок начина́ет понима́ть са́ми слова́. Сам проце́сс — то, что роди́тель де́ржит кни́гу, пока́зывает карти́нки и меня́ет интона́цию го́лоса, — помога́ет ребёнку учи́ться концентри́ровать внима́ние и свя́зывать зву́ки с о́бразами. Иссле́дования пока́зывают, что де́ти, кото́рым регуля́рно чита́ют в ра́ннем во́зрасте, впосле́дствии нере́дко осва́ивают речь и чте́ние быстре́е све́рстников. При э́том важне́е не коли́чество прочи́танных страни́ц за оди́н раз, а сама́ регуля́рность тако́го совме́стного вре́мени, день за днём.", en: "Child development specialists have long noticed that reading aloud together with a baby brings benefits long before the child understands the words themselves. The process itself — a parent holding the book, showing pictures, and varying the tone of voice — helps the child learn to focus attention and connect sounds with images. Studies show that children who are regularly read to at an early age often go on to pick up speech and reading faster than their peers. What matters more than the number of pages read at once is the sheer regularity of that shared time, day after day." },
      { plain: "Специи, такие как перец, корица и гвоздика, столетиями ценились настолько высоко, что за право контролировать торговлю ими велись целые войны. В Средние века некоторые специи стоили дороже золота, потому что путь от места их произрастания до европейских рынков был долгим, опасным и проходил через множество посредников. Именно поиск более короткого морского пути к странам, богатым пряностями, подтолкнул европейских мореплавателей к дальним путешествиям, включая экспедиции Колумба и Васко да Гамы. Так обычное желание сделать еду вкуснее незаметно изменило ход мировой истории.", stressed: "Спе́ции, таки́е как пе́рец, кори́ца и гвозди́ка, столе́тиями цени́лись насто́лько высоко́, что за пра́во контроли́ровать торго́влю и́ми велись це́лые во́йны. В Сре́дние века́ не́которые спе́ции сто́или доро́же зо́лота, потому́ что путь от ме́ста их произраста́ния до европе́йских ры́нков был до́лгим, опа́сным и проходи́л че́рез мно́жество посре́дников. И́менно по́иск бо́лее коро́ткого морско́го пути́ к стра́нам, бога́тым пря́ностями, подтолкну́л европе́йских мореплава́телей к да́льним путеше́ствиям, включа́я экспеди́ции Колу́мба и Ва́ско да Га́мы. Так обы́чное жела́ние сде́лать еду́ вкусне́е незаме́тно измени́ло ход мирово́й исто́рии.", en: "Spices such as pepper, cinnamon, and cloves were prized for centuries so highly that whole wars were fought over the right to control trade in them. In the Middle Ages, some spices cost more than gold, because the route from where they grew to European markets was long, dangerous, and passed through many middlemen. It was precisely the search for a shorter sea route to spice-rich lands that pushed European sailors toward distant voyages, including the expeditions of Columbus and Vasco da Gama. So an ordinary wish to make food tastier quietly changed the course of world history." }
    ]
  }
];

const THRESHOLD = 3;
const SESSION_SIZE = 5;
const LEVEL_UP_MESSAGE = ["", "Two sentences now ↑", "A short paragraph now ↑", "A richer paragraph now ↑", "Real chapter-book prose ↑"];
const STORAGE_KEY = "chitalka:v1";
const MAX_SHIELDS = 2;

const ICONS = {
  flame: "M12 2c1 3-3 4-3 7a3 3 0 006 0c1.5 1 2 3 2 4.5A5.5 5.5 0 0111.5 19 5.5 5.5 0 016 13.5C6 9 9 6 12 2z",
  bookmark: "M6 3h12v18l-6-5-6 5z",
  star: "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z",
  shield: "M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5l7-3z"
};

const BADGES = [
  { id: "first_step", name: "Первый шаг", icon: "star", check: s => s.totalRead >= 5 },
  { id: "read_50", name: "50 предложений", icon: "star", check: s => s.totalRead >= 50 },
  { id: "read_100", name: "100 предложений", icon: "star", check: s => s.totalRead >= 100 },
  { id: "streak_3", name: "3 дня подряд", icon: "flame", check: s => s.bestStreak >= 3 },
  { id: "streak_7", name: "Неделя", icon: "flame", check: s => s.bestStreak >= 7 },
  { id: "streak_30", name: "Месяц", icon: "flame", check: s => s.bestStreak >= 30 },
  { id: "level_2", name: "Потешки", icon: "bookmark", check: s => s.levelIndex >= 1 },
  { id: "level_3", name: "Сказки", icon: "bookmark", check: s => s.levelIndex >= 2 },
  { id: "level_4", name: "Рассказы", icon: "bookmark", check: s => s.levelIndex >= 3 },
  { id: "level_5", name: "Повесть", icon: "bookmark", check: s => s.levelIndex >= 4 }
];

function svgIcon(name){
  return '<svg viewBox="0 0 24 24"><path d="' + ICONS[name] + '"/></svg>';
}

function todayStr(offsetDays = 0){
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toLocaleDateString("en-CA");
}

function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {}
  return defaultState();
}

function defaultState(){
  return {
    streakDays: 0,
    bestStreak: 0,
    lastCompletedDate: null,
    levelIndex: 0,
    passageIndex: 0,
    easyStreak: 0,
    totalRead: 0,
    weekLog: {},
    streakShields: 1,
    shieldsEarnedAt: 0
  };
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let showStress = true;
let session = null; // { items, leveledUpTo, shieldUsed, badgesBefore }

const els = {
  home: document.getElementById("view-home"),
  practice: document.getElementById("view-practice"),
  complete: document.getElementById("view-complete"),
  topStreak: document.getElementById("topStreak"),
  streakNum: document.getElementById("streakNum"),
  levelLineValue: document.getElementById("levelLineValue"),
  weekStrip: document.getElementById("weekStrip"),
  homeStatus: document.getElementById("homeStatus"),
  startBtn: document.getElementById("startBtn"),
  homeFoot: document.getElementById("homeFoot"),
  shieldLine: document.getElementById("shieldLine"),
  shieldText: document.getElementById("shieldText"),
  badgesGrid: document.getElementById("badgesGrid"),
  badgesCount: document.getElementById("badgesCount"),

  practiceStreak: document.getElementById("practiceStreak"),
  stressToggle: document.getElementById("stressToggle"),
  sessionDots: document.getElementById("sessionDots"),
  levelNum: document.getElementById("levelNum"),
  levelName: document.getElementById("levelName"),
  levelFlash: document.getElementById("levelFlash"),
  levelDesc: document.getElementById("levelDesc"),
  dots: document.getElementById("dots"),
  cardFace: document.getElementById("cardFace"),
  ruText: document.getElementById("ruText"),
  enText: document.getElementById("enText"),
  peekBtn: document.getElementById("peekBtn"),
  answered: document.getElementById("answered"),
  backBtn: document.getElementById("backBtn"),

  completeSub: document.getElementById("completeSub"),
  completeStreakChip: document.getElementById("completeStreakChip"),
  completeLevelChip: document.getElementById("completeLevelChip"),
  shieldChip: document.getElementById("shieldChip"),
  badgeChip: document.getElementById("badgeChip"),
  recap: document.getElementById("recap"),
  homeBtn: document.getElementById("homeBtn")
};

function showView(name){
  els.home.hidden = name !== "home";
  els.practice.hidden = name !== "practice";
  els.complete.hidden = name !== "complete";
}

function renderTopStreak(target){
  target.textContent = state.streakDays;
}

function earnedBadgeIds(){
  return new Set(BADGES.filter(b => b.check(state)).map(b => b.id));
}

function renderBadges(){
  const earned = earnedBadgeIds();
  els.badgesCount.textContent = earned.size + " / " + BADGES.length;
  els.badgesGrid.innerHTML = "";
  BADGES.forEach(b => {
    const tile = document.createElement("div");
    const isEarned = earned.has(b.id);
    tile.className = "badge b-" + b.icon + (isEarned ? " earned" : "");
    tile.title = b.name + (isEarned ? "" : " (locked)");
    tile.innerHTML = svgIcon(b.icon);
    els.badgesGrid.appendChild(tile);
  });
}

function renderShieldLine(){
  const n = state.streakShields;
  els.shieldLine.classList.toggle("active", n > 0);
  els.shieldLine.querySelector("svg").outerHTML = svgIcon("shield");
  els.shieldText.textContent = n > 0
    ? n + " streak shield" + (n > 1 ? "s" : "") + " ready"
    : "No streak shield yet";
}

function renderHome(){
  renderTopStreak(els.topStreak);
  els.streakNum.textContent = state.streakDays;
  const level = LEVELS[state.levelIndex];
  els.levelLineValue.textContent = (state.levelIndex + 1) + " · " + level.name;
  renderShieldLine();
  renderBadges();

  els.weekStrip.innerHTML = "";
  const labels = ["M","T","W","T","F","S","S"];
  for (let i = 6; i >= 0; i--){
    const date = todayStr(-i);
    const d = document.createElement("div");
    const dow = (new Date(date + "T00:00:00")).getDay();
    const label = labels[(dow + 6) % 7];
    d.className = "day" + (state.weekLog[date] ? " done" : "") + (i === 0 ? " today" : "");
    d.textContent = label;
    els.weekStrip.appendChild(d);
  }

  const doneToday = state.lastCompletedDate === todayStr();
  if (doneToday){
    els.homeStatus.textContent = "Today's practice is done ✓";
    els.homeStatus.classList.add("done");
    els.startBtn.textContent = "Practice again";
  } else {
    els.homeStatus.textContent = "";
    els.homeStatus.classList.remove("done");
    els.startBtn.textContent = "Start today's practice";
  }
  els.homeFoot.textContent = state.totalRead + " sentences read so far";
}

function currentPassage(){ return LEVELS[state.levelIndex].passages[state.passageIndex]; }

function renderDots(){
  els.dots.innerHTML = "";
  for (let i = 0; i < THRESHOLD; i++){
    const d = document.createElement("div");
    d.className = "dot" + (i < state.easyStreak ? " filled" : "");
    els.dots.appendChild(d);
  }
}

function renderSessionDots(){
  els.sessionDots.innerHTML = "";
  for (let i = 0; i < SESSION_SIZE; i++){
    const d = document.createElement("div");
    const item = session.items[i];
    let cls = "sdot";
    if (item) cls += " " + item.rating;
    if (i === session.items.length) cls += " current";
    d.className = cls;
    els.sessionDots.appendChild(d);
  }
}

function renderPassage(){
  const level = LEVELS[state.levelIndex];
  const p = currentPassage();
  els.ruText.textContent = showStress ? p.stressed : p.plain;
  els.ruText.style.fontSize = level.fontSize;
  els.cardFace.style.minHeight = level.minH;
  els.enText.textContent = p.en;
  els.levelNum.textContent = state.levelIndex + 1;
  els.levelName.textContent = level.name;
  els.levelDesc.textContent = level.desc;
  els.peekBtn.hidden = false;
  els.answered.hidden = true;
  renderDots();
  renderSessionDots();
}

function startSession(){
  session = { items: [], badgesBefore: earnedBadgeIds() };
  renderTopStreak(els.practiceStreak);
  renderPassage();
  showView("practice");
}

function finishSession(){
  const wasAlreadyDoneToday = state.lastCompletedDate === todayStr();
  if (!wasAlreadyDoneToday){
    const y = todayStr(-1);
    const y2 = todayStr(-2);
    if (state.lastCompletedDate === y){
      state.streakDays += 1;
    } else if (state.lastCompletedDate === y2 && state.streakShields > 0){
      state.streakShields -= 1;
      state.streakDays += 1;
      session.shieldUsed = true;
    } else {
      state.streakDays = 1;
    }
    state.lastCompletedDate = todayStr();
    state.weekLog[todayStr()] = true;

    if (state.streakDays > state.bestStreak) state.bestStreak = state.streakDays;
    if (state.streakDays % 7 === 0 && state.streakDays > state.shieldsEarnedAt && state.streakShields < MAX_SHIELDS){
      state.streakShields += 1;
      state.shieldsEarnedAt = state.streakDays;
      session.shieldEarned = true;
    }
  }
  state.totalRead += session.items.length;
  saveState();

  const easyCount = session.items.filter(i => i.rating === "easy").length;
  const hardCount = session.items.length - easyCount;
  els.completeSub.textContent = session.items.length + " passages read · " + easyCount + " easy · " + hardCount + " tricky";
  els.completeStreakChip.textContent = "Streak: " + state.streakDays + (state.streakDays === 1 ? " day" : " days");

  const level = LEVELS[state.levelIndex];
  if (session.leveledUpTo){
    els.completeLevelChip.textContent = "Leveled up today — now " + (state.levelIndex + 1) + " · " + level.name;
  } else {
    const remaining = THRESHOLD - state.easyStreak;
    els.completeLevelChip.textContent = remaining > 0
      ? "Still " + (state.levelIndex + 1) + " · " + level.name + " — " + remaining + " more easy pass" + (remaining === 1 ? "" : "es") + " to level up"
      : "At the top level for now — " + level.name;
  }

  if (session.shieldUsed){
    els.shieldChip.textContent = "Streak shield used — yesterday's gap is covered";
    els.shieldChip.hidden = false;
  } else if (session.shieldEarned){
    els.shieldChip.textContent = "New streak shield earned — one missed day won't break your streak";
    els.shieldChip.hidden = false;
  } else {
    els.shieldChip.hidden = true;
  }

  const newBadges = BADGES.filter(b => b.check(state) && !session.badgesBefore.has(b.id));
  if (newBadges.length > 0){
    els.badgeChip.textContent = "New badge" + (newBadges.length > 1 ? "s" : "") + ": " + newBadges.map(b => b.name).join(", ");
    els.badgeChip.hidden = false;
  } else {
    els.badgeChip.hidden = true;
  }

  els.recap.innerHTML = "";
  session.items.forEach(item => {
    const row = document.createElement("div");
    row.className = "recap-row";
    const dot = document.createElement("div");
    dot.className = "recap-dot " + item.rating;
    const text = document.createElement("div");
    text.className = "recap-text";
    text.textContent = item.ru;
    row.appendChild(dot);
    row.appendChild(text);
    els.recap.appendChild(row);
  });

  showView("complete");
}

els.startBtn.addEventListener("click", startSession);
els.homeBtn.addEventListener("click", () => { renderHome(); showView("home"); });
els.backBtn.addEventListener("click", () => { renderHome(); showView("home"); });

els.peekBtn.addEventListener("click", () => {
  els.peekBtn.hidden = true;
  els.answered.hidden = false;
});

els.stressToggle.addEventListener("click", () => {
  showStress = !showStress;
  els.stressToggle.setAttribute("aria-pressed", String(showStress));
  const p = currentPassage();
  els.ruText.textContent = showStress ? p.stressed : p.plain;
});

document.querySelectorAll(".rate-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const level = LEVELS[state.levelIndex];
    const p = currentPassage();
    const rating = btn.dataset.rate;

    session.items.push({ ru: p.plain, en: p.en, rating });

    if (rating === "hard"){
      state.easyStreak = 0;
      state.passageIndex = (state.passageIndex + 1) % level.passages.length;
    } else {
      state.easyStreak++;
      if (state.easyStreak >= THRESHOLD && state.levelIndex < LEVELS.length - 1){
        state.levelIndex++;
        state.passageIndex = 0;
        state.easyStreak = 0;
        session.leveledUpTo = state.levelIndex;
        els.levelFlash.textContent = LEVEL_UP_MESSAGE[state.levelIndex];
        els.levelFlash.hidden = false;
        setTimeout(() => { els.levelFlash.hidden = true; }, 2400);
      } else {
        if (state.easyStreak >= THRESHOLD) state.easyStreak = THRESHOLD;
        state.passageIndex = (state.passageIndex + 1) % level.passages.length;
      }
    }
    saveState();

    if (session.items.length >= SESSION_SIZE){
      finishSession();
    } else {
      renderPassage();
    }
  });
});

renderHome();
showView("home");

if ("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}
