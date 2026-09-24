const LEVELS = [
  {
    name: "Азбука", desc: "One sentence · everyday words", fontSize: "26px", minH: "100px",
    passages: [
      { plain: "Жила-была старая бабушка.", stressed: "Жила́-была́ ста́рая ба́бушка.", en: "Once there lived an old grandmother." },
      { plain: "Кошка сидит на окне и смотрит на птиц.", stressed: "Ко́шка сиди́т на окне́ и смо́трит на птиц.", en: "The cat sits on the windowsill and watches the birds." },
      { plain: "Мальчик нашёл в лесу маленького ёжика.", stressed: "Ма́льчик нашёл в лесу́ ма́ленького ёжика.", en: "The boy found a little hedgehog in the forest." },
      { plain: "Бабушка испекла пирог с яблоками.", stressed: "Ба́бушка испекла́ пиро́г с я́блоками.", en: "Grandma baked a pie with apples." },
      { plain: "На улице идёт сильный снег.", stressed: "На у́лице идёт си́льный снег.", en: "It's snowing heavily outside." }
    ]
  },
  {
    name: "Потешки", desc: "Two sentences · everyday words", fontSize: "21px", minH: "120px",
    passages: [
      { plain: "Ёжик жил в старом саду. Каждое утро он гулял между яблонями.", stressed: "Ёжик жил в ста́ром саду́. Ка́ждое у́тро он гуля́л ме́жду я́блонями.", en: "The hedgehog lived in an old garden. Every morning he walked among the apple trees." },
      { plain: "Дети слепили снеговика во дворе. У него был морковный нос и старая шапка.", stressed: "Де́ти слепи́ли снегови́ка во дворе́. У него́ был морко́вный нос и ста́рая ша́пка.", en: "The children built a snowman in the yard. He had a carrot nose and an old hat." },
      { plain: "Кот забрался на высокий шкаф. Он долго сидел там и смотрел вниз.", stressed: "Кот забра́лся на высо́кий шкаф. Он до́лго сиде́л там и смотре́л вниз.", en: "The cat climbed onto the tall cabinet. He sat there a long time looking down." }
    ]
  },
  {
    name: "Сказки", desc: "Three sentences · storybook vocabulary", fontSize: "18px", minH: "150px",
    passages: [
      { plain: "В маленькой деревне жила девочка по имени Маша. Она любила гулять по лесу и собирать грибы. Однажды она встретила говорящего волка.", stressed: "В ма́ленькой дере́вне жила́ де́вочка по и́мени Ма́ша. Она́ люби́ла гуля́ть по лесу́ и собира́ть грибы́. Одна́жды она́ встре́тила говоря́щего во́лка.", en: "In a small village lived a girl named Masha. She loved walking in the forest and gathering mushrooms. One day she met a talking wolf." },
      { plain: "Старый мельник жил у реки много лет. Каждый вечер он слушал, как шумит вода. Но однажды мельница вдруг остановилась.", stressed: "Ста́рый ме́льник жил у реки́ мно́го лет. Ка́ждый ве́чер он слу́шал, как шуми́т вода́. Но одна́жды ме́льница вдруг останови́лась.", en: "The old miller had lived by the river for many years. Every evening he listened to the water rushing. But one day the mill suddenly stopped." }
    ]
  },
  {
    name: "Рассказы", desc: "A short paragraph · richer storytelling words", fontSize: "15.5px", minH: "190px",
    passages: [
      { plain: "Зимним вечером в маленькой избушке горела свеча. За окном мела метель, и ветер стучал в ставни. Старик сидел у печки и рассказывал внукам сказку. Дети слушали, затаив дыхание, а кот дремал у него на коленях.", stressed: "Зи́мним ве́чером в ма́ленькой избу́шке горе́ла свеча́. За окно́м мела́ мете́ль, и ве́тер стуча́л в ста́вни. Стари́к сиде́л у пе́чки и расска́зывал вну́кам ска́зку. Де́ти слу́шали, затаи́в дыха́ние, а кот дрема́л у него́ на коле́нях.", en: "On a winter evening, a candle burned in a small hut. Outside a blizzard was sweeping by, and the wind knocked against the shutters. The old man sat by the stove telling his grandchildren a tale. The children listened, holding their breath, while the cat dozed on his lap." },
      { plain: "Летом бабушкин сад наполнялся ароматом жасмина. Пчёлы кружили над цветами, а бабочки перелетали с ветки на ветку. По утрам бабушка выходила поливать грядки, напевая старую песню. К вечеру вся семья собиралась пить чай на веранде.", stressed: "Ле́том ба́бушкин сад наполня́лся арома́том жасми́на. Пчёлы кружи́ли над цвета́ми, а ба́бочки перелета́ли с ве́тки на ве́тку. По утра́м ба́бушка выходи́ла полива́ть гря́дки, напева́я ста́рую пе́сню. К ве́черу вся семья́ собира́лась пить чай на вера́нде.", en: "In summer, grandmother's garden filled with the scent of jasmine. Bees circled over the flowers, and butterflies flitted from branch to branch. Each morning grandmother went out to water the beds, humming an old song. By evening the whole family gathered to drink tea on the veranda." }
    ]
  },
  {
    name: "Повесть", desc: "A full paragraph · real sentence structure", fontSize: "14px", minH: "230px",
    passages: [
      { plain: "Мельница простояла без дела уже три дня, и жители деревни начали волноваться, потому что зерно нужно было смолоть до начала дождей. Мельник несколько раз спускался к колесу и осматривал его, но не находил поломки. Наконец соседский мальчик заметил, что в жёлоб упало большое бревно, которое перекрыло воду. Когда бревно убрали, колесо снова медленно, со скрипом, начало вращаться, и вся деревня вздохнула с облегчением.", stressed: "Ме́льница простоя́ла без де́ла уже́ три дня, и жи́тели дере́вни на́чали волнова́ться, потому́ что зерно́ ну́жно бы́ло смоло́ть до нача́ла дожде́й. Ме́льник не́сколько раз спуска́лся к колесу́ и осма́тривал его́, но не находи́л поло́мки. Наконе́ц сосе́дский ма́льчик заме́тил, что в жёлоб упа́ло большо́е бревно́, кото́рое перекры́ло во́ду. Когда́ бревно́ убра́ли, колесо́ сно́ва ме́дленно, со скри́пом, на́чало враща́ться, и вся дере́вня вздохну́ла с облегче́нием.", en: "The mill had stood idle for three days already, and the villagers began to worry, because the grain needed to be ground before the rains started. The miller climbed down to the wheel several times and examined it, but couldn't find the damage. Finally the neighbor's boy noticed that a large log had fallen into the sluice and was blocking the water. When the log was cleared, the wheel slowly began turning again, creaking, and the whole village breathed a sigh of relief." },
      { plain: "Волк не спешил её пугать, а вместо этого предложил показать короткую дорогу домой через овраг. Маша сначала испугалась, но потом вспомнила, что бабушка всегда говорила: не всякий зверь в лесу желает зла. Она пошла за волком, стараясь запомнить дорогу, а он рассказывал ей о лесных тропах, по которым сам ходил ещё щенком. К закату они вышли прямо к околице деревни, и волк, попрощавшись, скрылся между деревьями.", stressed: "Волк не спеши́л её пуга́ть, а вме́сто э́того предложи́л показа́ть коро́ткую доро́гу домо́й че́рез овра́г. Ма́ша снача́ла испуга́лась, но пото́м вспо́мнила, что ба́бушка всегда́ говори́ла: не вся́кий зверь в лесу́ жела́ет зла. Она́ пошла́ за во́лком, стара́ясь запо́мнить доро́гу, а он расска́зывал ей о лесны́х тро́пах, по кото́рым сам ходи́л ещё щенко́м. К зака́ту они́ вы́шли пря́мо к око́лице дере́вни, и волк, попроща́вшись, скры́лся ме́жду дере́вьями.", en: "The wolf was in no hurry to frighten her, and instead offered to show her a shortcut home through the ravine. Masha was scared at first, but then remembered that grandmother always said not every beast in the forest wishes harm. She followed the wolf, trying to remember the way, while he told her about forest paths he'd walked as a pup. By sunset they came out right at the edge of the village, and the wolf, saying goodbye, vanished among the trees." }
    ]
  }
];

const THRESHOLD = 3;
const SESSION_SIZE = 5;
const LEVEL_UP_MESSAGE = ["", "Two sentences now ↑", "A short paragraph now ↑", "A richer paragraph now ↑", "Real chapter-book prose ↑"];
const STORAGE_KEY = "chitalka:v1";

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
    lastCompletedDate: null,
    levelIndex: 0,
    passageIndex: 0,
    easyStreak: 0,
    totalRead: 0,
    weekLog: {}
  };
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let showStress = true;
let session = null; // { items: [{ru, en, rating}], leveledUp: [] }

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

function renderHome(){
  renderTopStreak(els.topStreak);
  els.streakNum.textContent = state.streakDays;
  const level = LEVELS[state.levelIndex];
  els.levelLineValue.textContent = (state.levelIndex + 1) + " · " + level.name;

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
  session = { items: [] };
  renderTopStreak(els.practiceStreak);
  renderPassage();
  showView("practice");
}

function finishSession(){
  const wasAlreadyDoneToday = state.lastCompletedDate === todayStr();
  if (!wasAlreadyDoneToday){
    const y = todayStr(-1);
    state.streakDays = (state.lastCompletedDate === y) ? state.streakDays + 1 : 1;
    state.lastCompletedDate = todayStr();
    state.weekLog[todayStr()] = true;
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
