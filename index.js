//increment scores

let homeStore = document.getElementById('home-score')
let homeScore = 0;
let guestStore = document.getElementById('guest-score')
let guestScore = 0;

function addHomeScoreOne() {
  homeScore+=1;
  homeStore.textContent = homeScore;
}
function addHomeScoreTwo() {
  homeScore+=2;
  homeStore.textContent = homeScore;
}
function addHomeScoreThree() {
  homeScore+=3;
  homeStore.textContent = homeScore;
}

function addGuestScoreOne() {
  guestScore+=1;
  guestStore.textContent = guestScore;
}

function addGuestScoreTwo() {
  guestScore+=2;
  guestStore.textContent = guestScore;
}

function addGuestScoreThree() {
  guestScore+=3;
  guestStore.textContent = guestScore;
}

//reset scores

function resetScore () {
  homeScore=0;
  guestScore = 0;
  homeStore.textContent = homeScore;
  guestStore.textContent = guestScore;
}

//timer

let start = document.getElementById('start-btn');
let stop = document.getElementById('stop-btn');
let reset = document.getElementById('reset-timer-btn');

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("sec");

let startTimer = null; //store reference to startTimer variable

start.addEventListener('click', () => {
  const startInterval = () => {
    startTimer = setInterval(timer, 1000);
  }
startInterval(); 
})

const timer = () => {
  if(h.value == 0 && m.value == 0 && s.value == 0){
    h.value = 0;
    m.value = 0;
    s.value = 0;
} else if(s.value != 0){
    s.value--;
} else if(m.value != 0 && s.value == 0){
    s.value = 59;
    m.value--;
} else if(h.value != 0 && m.value == 0){
    m.value = 60;
    h.value--;
}
return;
}

const stopInterval = () => {
  clearInterval(startTimer);
}

stop.addEventListener('click', stopInterval)

reset.addEventListener('click', ()=>{
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopInterval()
});

