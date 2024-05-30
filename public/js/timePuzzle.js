
const today= new Date()
const shadows = 0;
const sunLocal = '';
let myClicks = 0;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = days[today.getDay()];

function getThatDay() {
  document.getElementById("dayDisplay").innerHTML= dayOfWeek;
}
setInterval(getThatDay,1000);

function numClicks(myClicks){
  return myClicks++;
}

const crazyBox = document.getElementById("crazyBtnBox");
crazyBox.addEventListener("click", (click) =>{
  return myClicks++;
});

const myHours = today.getHours();
const myMins = today.getMinutes();

console.log(myHours);
console.log(myMins)


function moveSun(myHours){
    const sunSpot = myHours * 4;
    let sunny = document.getElementById('sun')
    sunny.style.marginLeft = sunSpot;
    console.log(sunSpot);
}

moveSun(myHours);


function myClock(parHours = myHours, parMin = myMins) {
    let myDisplay = document.getElementById('clockDisplay');
    myDisplay.innerHTML=  `${parHours} : ${parMin} `;
}


setInterval(myClock(parHours = myHours, parMin = myMins),1000);

function pickFunction() {
    alert("You shall Not PASS!")
}

function rejectFunction() {
    
    if (confirm("Press a Button!")) {
        alert("you canceled")
    } else {
        alert("hint 11")
    }
}

console.log(myMins);


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['clicks', 'probability', 'just here', 'time',],
    datasets: [{
      label: '# of Votes',
      data: [myClicks, 19, 3, 5,],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function sideOpen() {
  document.getElementById("aside").style.visibility= "visible"; 
  document.getElementById("aside").style.width= "30vw"; 
  document.getElementById("aside").style.zIndex= "99";
  document.getElementById("aside").style.position= "absolute";
}
function closePict() {
  document.getElementById("aside").style.visibility= "hidden";  
  document.getElementById("aside").style.width= "0vw"
  document.getElementById("aside").style.zIndex= "0";
  document.getElementById("aside").style.position= "absolute"
}
