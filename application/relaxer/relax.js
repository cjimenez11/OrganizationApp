//relax toggle
let toggledRelaxer = 0;

/*
white noise 
sleep
focus/concentrate
study
stress relief
ambient noise

*/

//breath var 2 variables
let interval = 0;
let breathTimeout1 = 0; //needed to clear breath function & resync
let breathTimeout2 = 0;

const toggleRelax = document.querySelector(".toggleRelax");

//toggles between diff relaxers
toggleRelax.addEventListener("click", () => {
    var scene = document.getElementById("relax-wrapper1");
    var scene2 = document.getElementById("relax-wrapper2");
    var contentContainer = document.getElementById("relaxContentsFlexbox");

    toggledRelaxer++;
    if(toggledRelaxer > 1) {
      toggledRelaxer = 0;
    }
    switch(toggledRelaxer) {
      case 0: //circle relaxer hovering around
        scene.style.display = "none";
        scene2.style.display = "flex";

        clearInterval(interval);
        clearTimeout(breathTimeout1);
        clearTimeout(breathTimeout2);

        breathAnim2()
        interval = setInterval(breathAnim2, time2);

        contentContainer.style.marginTop = "80px";
        contentContainer.style.marginBottom = "80px";
        break;
      case 1: //num of breathes relaxer
        scene.style.display = "block";
        scene2.style.display = "none";

        contentContainer.style.marginTop = "0px";
        contentContainer.style.marginBottom = "0px";
        break;
      default:
    }
});
//relax toggle end
//-----------------------------------
//breath var 1
const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".breathStart");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");

const relaxSelect = document.querySelector(".relax-input select");

let breathsLeft = 3;

// Watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing Instructions
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breath in";
  setTimeout(() => {
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      instructions.innerText = "Exhale Breath Slowly";
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
      start.classList.remove("button-inactive");
      numberOfBreaths.id = "";

      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  numberOfBreaths.id = "breath-select-disable";

  instructions.innerText = "Get relaxed, and ready to begin breathing";
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});
//breath var 1 end
//-----------------------------------
//breath var 2
const containerVar2 = document.querySelector("#relax-wrapper2");
const text2 = document.querySelector("#relaxText2");

let time2 = 7500;
let breathTime2 = (time2 /5) *2;
let holdTime2 = time2/5;

breathAnim2()

function breathAnim2() {
    text2.innerHTML = "Breathe in.";
    containerVar2.className="contain2-grow";

    breathTimeout1 = setTimeout(() => {
        text2.innerHTML = "Hold..";
        breathTimeout2 = setTimeout(() => {
            text2.innerHTML = "Breathe out...";
            containerVar2.className="contain2-shrink";
        }, holdTime2);
    }, breathTime2);
}
interval = setInterval(breathAnim2, time2);

//breath var 2 end
//-----------------------------------
//slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slidefade");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
//slideshow end
//-----------------------------------
//audio looping playlist
var audioPlayer = document.getElementById("audio-control");
var audioArray = ["audio/filthySoil.mp3", "audio/meditation.mp3"];
var counter = 0;
audioPlayer.addEventListener('ended', () => {
  counter++;
  if(counter >= audioArray.length) {
    counter = 0;
  }
  audioPlayer.src = audioArray[counter];
  audioPlayer.play();
});

//-----------------------------------