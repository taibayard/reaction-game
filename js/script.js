let homeScreen = document.getElementById("home-screen");
let playBtn = document.getElementById("play-btn");
let homeLabel = document.getElementsByClassName("title")[0];
let stopLight = document.getElementById("stop-light");
let lights = document.getElementsByClassName("light");
let main = document.getElementsByTagName("main")[0];
let inputDisplayText = document.getElementById("input-display").getElementsByTagName("a")[0];
let currentLight = 0;
let clearLights = false;
let inputArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let currentKey = null;
let currentTime = null;
let userInputEnabled = false;
var randomTime = function(min, max) {
    return ((Math.random() * max) + min) * 1000;
}
var random = function(min, max) {
    return Math.floor((Math.random() * max) + min)
}
function correctKey(){
    alert("key matched");
}
function displayKey() {
    currentKey = inputArr[random(0,inputArr.length-1)];
    console.log(currentKey);
    inputDisplayText.innerText = currentKey;
    console.log(userInputEnabled);
}
function displayTimer(){
    setTimeout(function(){
        currentTime += 0.01
    },10)
}
function changeLights() {
    let timer;
    if (clearLights === true) {
        timer = 100;
    } else {
        timer = randomTime(0, 2);
    }
    console.log(timer);
    setTimeout(function() {
        switch (true) {
            case currentLight === 0:
                lights[currentLight].style.backgroundColor = "red";
                changeLights();
                break;
            case currentLight === 1:
                lights[currentLight].style.backgroundColor = "yellow";
                changeLights();
                break;
            case currentLight === 2:
                lights[currentLight].style.backgroundColor = "green";
                clearLights = true;
                changeLights();
                break;
            case currentLight > 2:
                stopLight.style.display = "none";
                userInputEnabled = true;
                displayKey();
                displayTimer();
                break;
        }
        currentLight++;
        console.log(timer);
    }, timer)
}

function playBtnClick() {
    userInputEnabled = false
    currentTime = null;
    currentKey = null;
    homeScreen.style.setProperty("display", "none");
    main.style.setProperty("display", "block");
    changeLights();
}

function addListeners() {
    playBtn.addEventListener("click", playBtnClick);
}
window.onload = function() {
    addListeners();
}
window.onkeyup = function(e) {
    e = e || window.event;
    switch (true) {
        case userInputEnabled === false:
        break;
        case e.key.toUpperCase() === currentKey:
            correctKey();
        break;
    }
}