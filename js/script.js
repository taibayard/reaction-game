let homeScreen = document.getElementById("home-screen");
let playBtn = document.getElementById("play-btn");
let homeLabel = document.getElementsByClassName("title")[0];
let stopLight = document.getElementById("stop-light");
let lights = document.getElementsByClassName("light");
let main = document.getElementsByTagName("main")[0];
let currentLight = 0;
var randomTime = function(min, max) {
    return ((Math.random() * max) + min)*1000;
}

function changeLights() {
    let timer = randomTime(0, 2);
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
                changeLights();
                break;
            case currentLight > 2:
            	stopLight.style.display = "none";
            break;
        }
        currentLight++;
    }, timer)
}

function playBtnClick() {
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