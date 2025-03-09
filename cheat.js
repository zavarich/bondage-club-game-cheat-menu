const log = console.log;

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
  const cheatMenuButton = document.createElement('div');
  var es = cheatMenuButton.style;
  cheatMenuButton.id = 'cheatMenuButton'
  es.position = 'fixed';
  es.top = '0'; es.right = '0';
  es.color = '#fff';
  es.fontSize = '30px';
  cheatMenuButton.textContent = '∞';
  document.body.appendChild(cheatMenuButton);
  const cheatMenu = document.createElement('div'); // CHEAT MENU
  es = cheatMenu.style;
  cheatMenu.id = 'cheatMenu';
  es.display = 'none';
  es.position = 'absolute';
  es.top = '0'; es.left = '0';
  es.width = '300px'; es.height = 'max-content';
  es.background = '#333'; es.color = '#fff';
  document.body.appendChild(cheatMenu); // CREATE
  const cheatMenuName = document.createElement('div'); // CHEAT MENU NAME
  es = cheatMenuName.style;
  es.color = '#fff'; es.fontSize = '30px'; es.textAlign = 'center';
  cheatMenuName.textContent = 'Cheat Menu'; // TEXT
  cheatMenu.appendChild(cheatMenuName); // CREATE
  const chapterMoney = document.createElement('div'); // MONEY CHAPTER
  es = chapterMoney.style;
  es.color = '#fff'; es.fontSize = '25px'
  chapterMoney.textContent = '│ Money'; // TEXT
  cheatMenu.appendChild(chapterMoney); // CREATE
  const getMoneyBtn = document.createElement('button'); // GET MONEY BUTTON
  es = getMoneyBtn.style;
  getMoneyBtn.id = 'getMoney';
  es.display = 'block';
  es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'pointer';
  es.transition = '.3s all';
  getMoneyBtn.textContent = '│> Get'; // TEXT
  chapterMoney.appendChild(getMoneyBtn); // CREATE
  const setMoneySubdivision = document.createElement('div'); // SUBD FOR SET MONEY BTN AND INP
  chapterMoney.appendChild(setMoneySubdivision); // CREATE
  const setMoneyBtn = document.createElement('button'); // SET MONEY BUTTON
  es = setMoneyBtn.style;
  setMoneyBtn.id = 'setMoneyB';
  es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px'; es.marginRight = '3px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'pointer';
  es.transition = '.3s all';
  setMoneyBtn.textContent = '│> Set'; // TEXT
  setMoneySubdivision.appendChild(setMoneyBtn); // CREATE
  const setMoneyI = document.createElement('input'); // SET MONEY INPUT
  es = setMoneyI.style;
  setMoneyI.placeholder = 'Number here'; setMoneyI.id = 'setMoneyI';
  es.width = '150px';
  es.border = 0; es.padding = '7px 5px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'text';
  es.transition = '.3s all';
  setMoneySubdivision.appendChild(setMoneyI) // CREATE
  const chapterSkills = document.createElement('div'); // SKILLS CHAPTER
  es = chapterSkills.style; 
  chapterSkills.id = 'chapterSkills'
  es.color = '#fff'; es.fontSize = '25px'
  chapterSkills.textContent = '│ Skills'; // TEXT
  cheatMenu.appendChild(chapterSkills); // CREATE
  const setAllSkillsMax = document.createElement('button'); // SET ALL SKILLS MAX
  es = setAllSkillsMax.style;
  setAllSkillsMax.id = 'setAllSkillsMax';
  es.display = 'block';
  es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'pointer';
  es.transition = '.3s all';
  setAllSkillsMax.textContent = '│> Max all'; // TEXT
  chapterSkills.appendChild(setAllSkillsMax); // CREATE
  const setSkillSubdivision = document.createElement('div'); // SUBD FOR SET SKILL BTN AND INP
  setSkillSubdivision.id = 'setSkillSubdivision';
  chapterSkills.appendChild(setSkillSubdivision); // CREATE
  const standartSkills = [
    Bondage      = "Bondage",
    SelfBondage  = "SelfBondage",
    LockPicking  = "LockPicking",
    Evasion      = "Evasion",
    Willpower    = "Willpower",
    Infiltration = "Infiltration",
    Dressage     = "Dressage"
  ]
  for (let i = 0; i <= standartSkills.length - 1; i++) {
    const setSkill = document.createElement('button'); // SET SKILL BUTTON
    es = setSkill.style;
    setSkill.id = `setSkillB${standartSkills[i]}`;
    es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px'; es.marginRight = '3px';
    es.color = '#fff', es.background = "#222";
    es.fontSize = '20px'; es.cursor = 'pointer';
    es.transition = '.3s all';
    setSkill.textContent = `│> Set ${standartSkills[i]}`; // TEXT
    setSkillSubdivision.appendChild(setSkill); // CREATE
    const setSkillI = document.createElement('input'); // SET SKILL INPUT
    es = setSkillI.style;
    setSkillI.placeholder = 'Number here'; setSkillI.id = `setSkillI${standartSkills[i]}`;
    es.width = '70px';
    es.border = 0; es.padding = '7px 5px';
    es.color = '#fff', es.background = "#222";
    es.fontSize = '20px'; es.cursor = 'text';
    es.transition = '.3s all';
    setSkillSubdivision.appendChild(setSkillI) // CREATE
  }
  const chapterKidnap = document.createElement('div'); // KIDNAP CHAPTER
  es = chapterKidnap.style;
  es.color = '#fff'; es.fontSize = '25px'
  chapterKidnap.textContent = '│ Kidnap'; // TEXT
  cheatMenu.appendChild(chapterKidnap); // CREATE
  const kidnapTimer = document.createElement('button'); // TOGGLE KIDNAP TIMER
  es = kidnapTimer.style;
  kidnapTimer.id = 'kidnapTimer';
  es.display = 'block';
  es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'pointer';
  es.transition = '.3s all';
  kidnapTimer.textContent = '│> Toggle timer'; // TEXT
  chapterKidnap.appendChild(kidnapTimer); // CREATE
  const godMode = document.createElement('button'); // TOGGLE GOD MODE
  es = godMode.style;
  godMode.id = 'godMode';
  es.display = 'block';
  es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'pointer';
  es.transition = '.3s all';
  godMode.textContent = '│> Toggle godmod'; // TEXT
  chapterKidnap.appendChild(godMode); // CREATE
  const releaseSelf = document.createElement('button'); // RELEASE SELF
  es = releaseSelf.style;
  releaseSelf.id = 'releaseSelf';
  es.display = 'block';
  es.border = 0; es.padding = '7px 5px'; es.margin = '3px 10px';
  es.color = '#fff', es.background = "#222";
  es.fontSize = '20px'; es.cursor = 'pointer';
  es.transition = '.3s all';
  releaseSelf.textContent = '│> Release self'; // TEXT
  chapterKidnap.appendChild(releaseSelf); // CREATE
}
createUI();

// ITEMS
const cheatMenuButton = document.getElementById('cheatMenuButton');
const cheatMenu = document.getElementById('cheatMenu');
cheatMenuButton.addEventListener('click', () => {
  if (cheatMenu.style.display != 'block') {
    cheatMenu.style.display = 'block';
  } else {
    cheatMenu.style.display = 'none';
  }
});
const getMoneyBtn = document.getElementById('getMoney');
const setMoneyBtn = document.getElementById('setMoneyB');
const setMoneyInp = document.getElementById('setMoneyI');
const setAllSkillsMaxBtn = document.getElementById('setAllSkillsMax');
const setSkillSubdivision = document.getElementById('setSkillSubdivision');
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
  Player.Money += 200;
});

setMoneyBtn.addEventListener('click', () => {
  let monCountInInp = setMoneyInp.value;
  Player.Money = monCountInInp;
});

setAllSkillsMaxBtn.addEventListener('click', () => {
  SkillChange(Player, 'Bondage', 15, 999, true);
  SkillChange(Player, 'SelfBondage', 15, 999, true)
  SkillChange(Player, 'LockPicking', 15, 999, true)
  SkillChange(Player, 'Evasion', 15, 999, true)
  SkillChange(Player, 'Willpower', 15, 999, true)
  SkillChange(Player, 'Infiltration', 15, 999, true)
  SkillChange(Player, 'Dressage', 15, 999, true)
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