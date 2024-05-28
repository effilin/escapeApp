import moment from"moment";
import express from "express";

const app = express();
const port = 3000
const shadows = 0;
const sunLocal = '';


let myHours = moment().hour();
let myMin = moment().minute();

function moveSun(myHours){
    const sunSpot=myHours * 4;
    document.getElementById('sun').style.marginLeft=sunSpot;
}

moveSun();

function myClock(myHours, myMin) {

    let display = document.getElementById('clockDisplay').innerHTML= ` ${myHours} : ${myMin} ` ;
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



console.log(myHours)
app.use('/', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening
    at http://localhost:${port}`)
    });