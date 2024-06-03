

const today= new Date();
const shadows = 0;
const sunLocal = '';
let myClicks = 0;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = days[today.getDay()];
let counterOne = 0;
const formSubmits =[]
const quoteData = document.getElementById("quoteForm");

quoteData.addEventListener('submit',(event) => {
  event.preventDefault();
  const info = new FormData(quoteData);
  for(const[name,value] of info) {
    console.log(name, ':', value);
    formSubmits.push(value);
    console.log(formSubmits);
  }
});
console.log(formSubmits);

function myCounter() {
  return counterOne++
};
setInterval(myCounter, 1000);

function getThatDay() {
  document.getElementById("dayDisplay").innerHTML= dayOfWeek;
};
setInterval(getThatDay,1000);

function numClicks(){
  return myClicks++;
};

numClicks(myClicks);
console.log(myClicks);

const myHours = today.getHours();
const myMins = today.getMinutes();

console.log(myHours);
console.log(myMins)


function helios(myMins){

    let sunSpot = myMins * 1.6;
    let sunny = document.getElementById('sun')
    sunny.style.marginLeft = `${sunSpot}vw`;
    console.log(`${sunSpot}vw`);
}
helios(myMins);


function myClock(parHours = myHours, parMin = myMins) {
    let myDisplay = document.getElementById('clockDisplay');
    myDisplay.innerHTML=  `${parHours} : ${parMin} `;
}


setInterval(myClock(parHours = myHours, parMin = myMins),1000);

function pickFunction() {
    myClicks++;
    alert("You shall Not PASS!")
}

function rejectFunction() {
    
    if (confirm("Press a Button!")) {
        myClicks++;
        alert("we are all mad here")
    } else {
      myClicks++;
        alert("Does it matter which way you go?")
    }
}

const myChartData = [
  {label: "clickBox", amount: 5}, 
  {label: "probability", amount: 4},
  {label: "here", amount: 3},
  {label: "time", amount: 2},
  ]

function randomNum(x=1) {
  let myNum = Math.floor((Math.random()* 10));
  myChartData[2].amount = myNum;
};

myChartData[0].amount= myClicks;
myChartData[3].amount= myMins;
randomNum(x=1);

//const uniqueChart = formSubmits.reduce((prev, cur) => {
  
//})

 const ctx = document.getElementById('myChart');

 new Chart(ctx, {
   type: 'bar',
   data: {
    
     datasets: [{
       label: '# of Votes',
       data: myChartData,
       borderWidth: 1,
       parsing: {
        xAxisKey: 'label',
        yAxisKey: 'amount',
       }
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
  document.getElementById("closebtn").style.visibility= "visible";
}
function closePict() {
  document.getElementById("aside").style.visibility= "hidden";  
  document.getElementById("aside").style.width= "0vw"
  document.getElementById("aside").style.zIndex= "0";
  document.getElementById("aside").style.position= "absolute"
  document.getElementById("closebtn").style.visibility= "hidden";

}

function solveMe() {
  let guess = document.forms['solutionForm']['timeSolution'].value;
  let solutions =['anytime','whenever','whatever'];
  if (solutions.includes(guess)) {;
    alert( 'correct! You Win!');
  } else { alert ("try again!")} ;
  console.log(guess);
}
