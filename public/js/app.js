const shadows = 0;
const sunLocal = '';


const myHours = moment().hour();
const myMins = moment().minute();

function moveSun(myHours){
    const sunSpot=myHours * 4;
    let sunny =document.getElementById('sun')
    sunny.style= `marginLeft: ${sunSpot}`;
    console.log(sunSpot);
}

moveSun(myHours);

function myClock(myHours, myMins) {
    let myDisplay = document.getElementById('clockDisplay');
    myDisplay.innerHTML= ` ${myHours} : ${myMins} ` ;
    console.log(displayTime);
}

function pickFunction() {
    alert("You shall Not PASS!")
}

function rejectFunction() {
    
    if (confirm("Press a Button!")) {
        alert("you canceled")
    } else {
        alert("hint 10")
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
      data: [12, 19, 3, 5, 2, 3],
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
