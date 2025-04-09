/*

> CheatMenu by ZavarichRU.
> Social
> . Discord: https://discord.gg/ZmBKFjvhZp
> . GitHub: https://github.com/zavarich/bondage-club-game-cheat-menu

*/

const log = console.log;
log(
  `
\x1b[33m> CheatMenu by ZavarichRU
> Social\x1b[0m
\x1b[36m> . Discord: \x1b[37mhttps://discord.gg/ZmBKFjvhZp\x1b[0m
\x1b[36m> . GitHub: https://github.com/zavarich/bondage-club-game-cheat-menu
  `
)

// USER DEVICE
let isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent);
let menuWidth = 0;
isMobile ? menuWidth = "100vw" : menuWidth = "50%";

// AUTO LOGIN
const setLogin = document.getElementById("InputName");
const setPassword = document.getElementById("InputPassword");

setLogin.value = ""; // get u login
setPassword.value = ""; // get u pass

var event = new KeyboardEvent('keydown', { // auto apply
  bubbles: true, cancelable: true,
  key: 'Enter', keyCode: 13, code: 'Enter',
  shiftKey: false, ctrlKey: false, metaKey: false
});

var element = document.querySelector('body');
element.dispatchEvent(event);

// LOCALISATION DATA
let curLocalisation = "en";
const localization = {
  "ru": {
    menuName: "ЧИТ МЕНЮ",
    moneyChapter: "│ Деньги",
    addMoney: "│> Добавить",
    setMoney: "│> Задать",
    skillsChapter: "│ Навыки",
    maxAll: "│> Всё на максимум",
    minAll: "│> Всё на минимум",
    setBondage: "│> Задать Бондаж",
    setSelfBondage: "│> Задать Самобондаж",
    setLockPicking: "│> Задать Взлом Замков",
    setEvasion: "│> Задать Побег",
    setWillpower: "│> Задать Сила Воли",
    setInfiltartion: "│> Задать Проникновение",
    setDressage: "│> Задать Выездка",
    kidnapChapeter: "│ Похищение",
    toggleKidnapTimer: "│> Переключить таймер",
    toggleGodMode: "│> Переключить бессмертие",
    ultimaDamage: "│> Огромный урон",
    otherChapter: "│ Другое",
    releaseSelf: "│> Освободить себя"
  },
  "en": {
    menuName: "CHEAT MENU",
    moneyChapter: "│ Money",
    addMoney: "│> Add",
    setMoney: "│> Set",
    skillsChapter: "│ Skills",
    maxAll: "│> Max all",
    minAll: "│> Min all",
    setBondage: "│> Set Bondage",
    setSelfBondage: "│> Set SelfBondage",
    setLockPicking: "│> Set LockPicking",
    setEvasion: "│> Set Evasion",
    setWillpower: "│> Set Willpower",
    setInfiltartion: "│> Set Infiltration",
    setDressage: "│> Set Dressage",
    kidnapChapeter: "│ Kidnap",
    toggleKidnapTimer: "│> Toggle timer",
    toggleGodMode: "│> Toggle godmode",
    ultimaDamage: "│> Ultima damage",
    otherChapter: "│ Other",
    releaseSelf: "│> Release self"
  }
};

// UI
document.querySelector('body').style.overflow = '';
function createUI() {
  const MOD_item = document.createElement('div');
  MOD_item.id = "MOD_CeatMenu";
  document.body.appendChild(MOD_item);

  MOD_item.innerHTML +=
  `
    <style>
      ::-webkit-scrollbar {
        width: 0; height: 0;
      }
      body {
        overflow: visible;
      }
      #cheatMenuOpener {
        position: fixed; z-index: 999; 
          right: 0; top: 0;
        font-size: 30px;
          background: #00000088;
          color: #fff;
        cursor: pointer
      }
      #cheatMenu {
        display: none;
        position: absolute; z-index: 998;
          top: 0; left: 0;
        width: ${menuWidth}; height: max-content;
        background: #333;
        color: #fff;
        user-select: none;
      }
      .language-switch {
        position: fixed;
          top: 0; right: 35px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 5px;
      }
      .flag {
        display: inline-block;
          width: 40px; height: 23.94px;
      }
      #real-checkbox {
        position: absolute;
        opacity: 0;
      }
      #flagContainer {
        position: relative;
        display: inline-block;
          width: 40px; height: 23.94px;
        cursor: pointer;
      }
      #flagContainer svg {
        position: absolute;
          top: 0; left: 0;
        width: 100%; height: 100%;
        transition: opacity 0.3s;
      }
      #ukFlag {
        opacity: 1;
      }
      #ruFlag {
        opacity: 0;
      }
      #real-checkbox:checked ~ #flagContainer #ukFlag {
        opacity: 0;
      }
      #real-checkbox:checked ~ #flagContainer #ruFlag {
        opacity: 1;
      }
      #cheatMenuName {
        font-size: 30px; text-align: center;
      }
      #cheatMenu > span { display: block; font-size: 27px; }
      button.MOD_CM_B {
        display: inline-block;
          border: 0; padding: 7px 5px; margin: 3px 0px 3px 10px;
        font-size: 20px; cursor: pointer;
          background: #222;
          color: #fff;
        transition: .3s all;
      }
      input.MOD_CM_I {
        width: 70px;
          border: 0; padding: 7px 5px;
        font-size: 20px; cursor: text;
          background: #222;
          color: #fff;
        transition: .3s all;
        &:invalid:not(:disabled):not(:read-only) {
          background: #cc222288;
        }
      }
    </style>
    <div id="cheatMenuOpener">∞</div>
    <div id="cheatMenu">
      <div class="language-switch">
        <input type="checkbox" id="real-checkbox">
        <label for="real-checkbox" id="flagContainer">
          <svg id="ukFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30"><clipPath id="t"><path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z"/></clipPath><path d="M0,0v30h50v-30z" fill="#012169"/><path d="M0,0 50,30M50,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 50,30M50,0 0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z" fill="#C8102E" stroke="#FFF" stroke-width="2"/></svg>
          <svg id="ruFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6"><path d="m0 0h9v2H0" fill="#fff"/><path d="m0 2h9v2H0" fill="#0039a6"/><path d="m0 4h9v2H0" fill="#d52b1e"/></svg>
        </label>
      </div>
      <span id="cheatMenuName" data-l10n="menuName">CHEAT MENU</span>
      <span data-l10n="moneyChapter">│ Money</span>
      <div id="chapterMoney">
        <div id="moneySubd">
          <div>
            <button id="addMoneyB" class="MOD_CM_B" data-l10n="addMoney">│> Add</button>
            <input id="addMoneyI" class="MOD_CM_I" type="number" placeholder="num" />
          </div>
          <div>
            <button id="setMoneyB" class="MOD_CM_B" data-l10n="setMoney">│> Set</button>
            <input id="setMoneyI" class="MOD_CM_I" type="number" placeholder="num" />
          </div>
        </div>
      </div>
      <span data-l10n="skillsChapter">│ Skills</span>
      <div id="chapterSkills">
        <button id="setAllSkillsMax" class="MOD_CM_B" data-l10n="maxAll">│> Max all</button>
        <button id="setAllSkillsMin" class="MOD_CM_B" style="display:block;" data-l10n="minAll">│> Min all</button>
        <div id="setSkillSubd">
          ${UIElementsHere}
        </div>
      </div>
      <span data-l10n="kidnapChapeter">│ Kidnap</span>
      <div id="chapterKidnap">
        <button id="kidnapTimer" class="MOD_CM_B" data-l10n="toggleKidnapTimer">│> Toggle timer</button>
        <button id="godMode" class="MOD_CM_B" style="display: block;" data-l10n="toggleGodMode">│> Toggle godmode</button>
        <button id="ultimaDamage" class="MOD_CM_B" data-l10n="ultimaDamage">│> Ultra damage</button>
      </div>
      <span data-l10n="otherChapter">│ Other</span>
      <div id="chpaterOther">
        <button id="releaseSelf" class="MOD_CM_B" data-l10n="releaseSelf">│> Release self</button>
      </div>
    </div>
  `;
  function DATA_setSkillSubd() {
    const setSkillSubdivision = document.getElementById('setSkillSubd');
    setSkillSubdivision.innerHTML = "";
    const DATA_standartSkills = [
      {id: "Bondage", key: "setBondage"},
      {id: "SelfBondage", key: "setSelfBondage"},
      {id: "LockPicking", key: "setLockPicking"},
      {id: "Evasion", key: "setEvasion"},
      {id: "Willpower", key: "setWillpower"},
      {id: "Infiltration", key: "setInfiltartion"},
      {id: "Dressage", key: "setDressage"}
    ];
    for (let i = 0; i <= DATA_standartSkills.length - 1; i++) {
      const itemPos = document.createElement("div");
      setSkillSubdivision.appendChild(itemPos);
      const setSkill = document.createElement('button'); es = setSkill.style;
        setSkill.id = `setSkillB${DATA_standartSkills[i].id}`; setSkill.classList.add("MOD_CM_B");
        setSkill.setAttribute('data-l10n', DATA_standartSkills[i].key);
        setSkill.textContent = `│> Set ${DATA_standartSkills[i].id}`;
        es.marginRight = '3px';
      itemPos.appendChild(setSkill);
      const setSkillI = document.createElement('input'); es = setSkillI.style;
        setSkillI.type = "number"; setSkillI.min = "0"; setSkillI.max = "10"
        setSkillI.id = `setSkillI${DATA_standartSkills[i].id}`; setSkillI.classList.add("MOD_CM_I");
        setSkillI.placeholder = "num";
      itemPos.appendChild(setSkillI);
    }
  }
  var UIElementsHere = DATA_setSkillSubd();
};
createUI();

// LOCALISATON LOGIC
function updateLocalization() {
  const currentLang = localization[curLocalisation];
  document.querySelectorAll('[data-l10n]').forEach(element => {
    const key = element.getAttribute('data-l10n');
    if (currentLang[key]) {
      element.textContent = currentLang[key];
    }
  });
}

const changeLocalisation = document.getElementById('real-checkbox');
changeLocalisation.addEventListener('change', function() {
  curLocalisation = !this.checked ? "en" : "ru";
  updateLocalization();
  localStorage.setItem('language', curLocalisation);
});

document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    curLocalisation = savedLang;
    changeLocalisation.checked = curLocalisation === "en";
  }
  updateLocalization();
});

// ITEMS
const cheatMenuOpener = document.getElementById("cheatMenuOpener");
const cheatMenu = document.getElementById("cheatMenu");
cheatMenuOpener.addEventListener('click', () => {
  if (cheatMenu.style.display != 'block') {
    cheatMenu.style.display = 'block';
  } else {
    cheatMenu.style.display = 'none';
  }
});
const addMoneyBtn = document.getElementById("addMoneyB");
const addMoneyInp = document.getElementById("addMoneyI");
const setMoneyBtn = document.getElementById("setMoneyB");
const setMoneyInp = document.getElementById("setMoneyI");
const setAllSkillsMaxBtn = document.getElementById("setAllSkillsMax");
const setAllSkillsMinBtn = document.getElementById("setAllSkillsMin");
const skillBondageB = document.getElementById("setSkillBBondage");
const skillBondageI = document.getElementById("setSkillIBondage");
const skillSelfBondageB = document.getElementById("setSkillBSelfBondage");
const skillSelfBondageI = document.getElementById("setSkillISelfBondage");
const skillLockPickingB = document.getElementById("setSkillBLockPicking");
const skillLockPickingI = document.getElementById("setSkillILockPicking");
const skillEvasionB = document.getElementById("setSkillBEvasion");
const skillEvasionI = document.getElementById("setSkillIEvasion");
const skillWillpowerB = document.getElementById("setSkillBWillpower");
const skillWillpowerI = document.getElementById("setSkillIWillpower");
const skillInfiltrationB = document.getElementById("setSkillBInfiltration");
const skillInfiltrationI = document.getElementById("setSkillIInfiltration");
const skillDressageB = document.getElementById("setSkillBDressage");
const skillDressageI = document.getElementById("setSkillIDressage");
const kidnapTimer = document.getElementById("kidnapTimer"); 
const godMode = document.getElementById("godMode");
const ultimaDamage = document.getElementById("ultimaDamage");
const releaseSelf = document.getElementById("releaseSelf");

// CHEATS
addMoneyBtn.addEventListener('click', () => {
  let monCountInInp = getMoneyInp.value;
  let playerMoneyCurr = Player.Money;
  let newMoney = parseInt(playerMoneyCurr) + parseInt(monCountInInp);
  Player.Money = newMoney;
});

setMoneyBtn.addEventListener('click', () => {
  let monCountInInp = setMoneyInp.value;
  Player.Money = monCountInInp;
});

setAllSkillsMaxBtn.addEventListener('click', () => {
  SkillChange(Player, 'Bondage',      10, 0, true);
  SkillChange(Player, 'SelfBondage',  10, 0, true);
  SkillChange(Player, 'LockPicking',  10, 0, true);
  SkillChange(Player, 'Evasion',      10, 0, true);
  SkillChange(Player, 'Willpower',    10, 0, true);
  SkillChange(Player, 'Infiltration', 10, 0, true);
  SkillChange(Player, 'Dressage',     10, 0, true);
});

setAllSkillsMinBtn.addEventListener('click', () => {
  SkillChange(Player, 'Bondage',      0, 0, true);
  SkillChange(Player, 'SelfBondage',  0, 0, true);
  SkillChange(Player, 'LockPicking',  0, 0, true);
  SkillChange(Player, 'Evasion',      0, 0, true);
  SkillChange(Player, 'Willpower',    0, 0, true);
  SkillChange(Player, 'Infiltration', 0, 0, true);
  SkillChange(Player, 'Dressage',     0, 0, true);
});

skillBondageB.addEventListener('click', () => {
  let skillBondageLevel = parseInt(skillBondageI.value, 10)
  SkillChange(Player, 'Bondage', skillBondageLevel, 0, true)
});

skillSelfBondageB.addEventListener('click', () => {
  let skillSelfBondageLevel = parseInt(skillSelfBondageI.value, 10)
  SkillChange(Player, 'SelfBondage', skillSelfBondageLevel, 0, true)
});

skillLockPickingB.addEventListener('click', () => {
  let skillLockPickingLevel = parseInt(skillLockPickingI.value, 10)
  SkillChange(Player, 'LockPicking', skillLockPickingLevel, 0, true)
});

skillEvasionB.addEventListener('click', () => {
  let skillEvasionLevel = parseInt(skillEvasionI.value, 10)
  SkillChange(Player, 'Evasion', skillEvasionLevel, 0, true)
});

skillWillpowerB.addEventListener('click', () => {
  let skillWillpowerLevel = parseInt(skillWillpowerI.value, 10)
  SkillChange(Player, 'Willpower', skillWillpowerLevel, 0, true)
});

skillInfiltrationB.addEventListener('click', () => {
  let skillInfiltrationLevel = parseInt(skillInfiltrationI.value, 10)
  SkillChange(Player, 'Infiltration', skillInfiltrationLevel, 0, true)
});

skillDressageB.addEventListener('click', () => {
  let skillDressageLevel = parseInt(skillDressageI.value, 10)
  SkillChange(Player, 'Dressage', skillDressageLevel, 0, true)
});


let timerInterval = null;
kidnapTimer.addEventListener('click', () => {
  if (KidnapTimer != Infinity) {
    kidnapTimer.style.background = '#0f0';
    timerInterval = setInterval(() => {
      KidnapTimer = Infinity;
    }, 1000);
  } else {
    clearInterval(timerInterval);
    kidnapTimer.style.background = '#222';
    KidnapTimer = 0;
  }
});

let godInterval = null;
let isGodMode = false;
godMode.addEventListener('click', () => {
  if (!isGodMode) {
    isGodMode = true;
    godMode.style.background = '#0f0';
    godInterval = setInterval(() => {
      Player.KidnapWillpower = 1000;
    }, 1000);
  } else {
    clearInterval(godInterval);
    isGodMode = false;
    godMode.style.background = '#222';
    Player.KidnapWillPower = Player.KidnapWillpowerMax;
  }
});

let ultimaDamageInterval = null;
let isUltimaDamage = false;
ultimaDamage.addEventListener('click', () => {
  if (!isUltimaDamage) {
    isUltimaDamage = true;
    ultimaDamage.style.background = '#0f0';
    godInterval = setInterval(() => {
      for (let i = 0; i < Player.KidnapCard.length - 1; i++) {
        Player.KidnapCard[i].Value = 100;
      }
    }, 1000);
  } else {
    clearInterval(godInterval);
    isUltimaDamage = false;
    ultimaDamage.style.background = '#222';
  }
});

releaseSelf.addEventListener('click', () => {
  CharacterReleaseTotal(Player);
});
