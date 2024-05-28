import moment from"moment";
import express from "express";

const app = express();
const port = 3000;
app.use('/', express.static('public'));

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
        alert("you canceled")
    }
}
console.log(myMins);
app.listen(port, () => {
    console.log(`Example app listening
    at http://localhost:${port}`)
    });