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

// UI
document.querySelector('body').style.overflow = '';
function createUI() {
  const MOD_item = document.createElement('div');
  MOD_item.id = "MOD_CeatMenu";
  document.body.appendChild(MOD_item);

  MOD_item.innerHTML +=
  `
    <style>
      body {
        overflow: visible;
      }
      #cheatMenuOpener {
        position: fixed; z-index: 999; 
          right: 0; top: 0;
        padding: 0 4px;
        font-size: 30px;
          background: #00000055;
          color: #fff;
      }
      #cheatMenu {
        display: none;
        position: absolute; z-index: 998;
          top: 0; left: 0;
        width: 300px; height: max-content;
        background: #333;
        color: #fff;
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
      <span id="cheatMenuName">CHEAT MENU</span>
      <span>│ Money</span>
      <div id="chapterMoney">
        <div id="moneySubd">
          <div>
            <button id="getMoneyB" class="MOD_CM_B">│> Get</button>
            <input id="getMoneyI" class="MOD_CM_I" type="number" placeholder="num" />
          </div>
          <div>
            <button id="setMoneyB" class="MOD_CM_B">│> Set</button>
            <input id="setMoneyI" class="MOD_CM_I" type="number" placeholder="num" />
          </div>
        </div>
      </div>
      <span>│ Skills</span>
      <div id="chapterSkills">
        <button id="setAllSkillsMax" class="MOD_CM_B">│> Max all</button>
        <div id="setSkillSubd">
          ${cc}
        </div>
      </div>
      <span>│ Kidnap</span>
      <div id="chapterKidnap">
        <button id="kidnapTimer" class="MOD_CM_B">│> Toggle timer</button>
        <button id="godMode" class="MOD_CM_B">│> Toggle godmode</button>
        <button id="releaseSelf" class="MOD_CM_B">│> Release self</button>
      </div>
    </div>
  `;
  function DATA_setSkillSubd() {
    const setSkillSubdivision = document.getElementById('setSkillSubd');
    setSkillSubdivision.innerHTML = "";
    const DATA_standartSkills = [
      Bondage      = "Bondage",
      SelfBondage  = "SelfBondage",
      LockPicking  = "LockPicking",
      Evasion      = "Evasion",
      Willpower    = "Willpower",
      Infiltration = "Infiltration",
      Dressage     = "Dressage"
    ];
    for (let i = 0; i <= DATA_standartSkills.length - 1; i++) {
      const setSkill = document.createElement('button'); es = setSkill.style;
        setSkill.id = `setSkillB${DATA_standartSkills[i]}`; setSkill.classList.add("MOD_CM_B");
        setSkill.textContent = `│> Set ${DATA_standartSkills[i]}`;
        es.marginRight = '3px';
      setSkillSubdivision.appendChild(setSkill);
      const setSkillI = document.createElement('input'); es = setSkillI.style;
        setSkillI.id = `setSkillI${DATA_standartSkills[i]}`; setSkillI.classList.add("MOD_CM_I");
        setSkillI.placeholder = "num"; setSkillI.type = "Number"; setSkillI.max = 10; setSkillI.min = 0;
      setSkillSubdivision.appendChild(setSkillI);
    }
  };
  var cc = DATA_setSkillSubd();
}
createUI();

// ITEMS
const cheatMenuOpener = document.getElementById('cheatMenuOpener');
const cheatMenu = document.getElementById('cheatMenu');
cheatMenuOpener.addEventListener('click', () => {
  if (cheatMenu.style.display != 'block') {
    cheatMenu.style.display = 'block';
  } else {
    cheatMenu.style.display = 'none';
  }
});
const getMoneyBtn = document.getElementById('getMoneyB');
const getMoneyInp = document.getElementById('getMoneyI');
const setMoneyBtn = document.getElementById('setMoneyB');
const setMoneyInp = document.getElementById('setMoneyI');
const setAllSkillsMaxBtn = document.getElementById('setAllSkillsMax');
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
const kidnapTimer = document.getElementById('kidnapTimer');
const godMode = document.getElementById("godMode");
const releaseSelf = document.getElementById("releaseSelf");

// CHEATS
getMoneyBtn.addEventListener('click', () => {
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
  SkillChange(Player, 'Bondage', 10, 999, true);
  SkillChange(Player, 'SelfBondage', 10, 999, true)
  SkillChange(Player, 'LockPicking', 10, 999, true)
  SkillChange(Player, 'Evasion', 10, 999, true)
  SkillChange(Player, 'Willpower', 10, 999, true)
  SkillChange(Player, 'Infiltration', 10, 999, true)
  SkillChange(Player, 'Dressage', 10, 999, true)
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

releaseSelf.addEventListener('click', () => {
  CharacterReleaseTotal(Player);
});
