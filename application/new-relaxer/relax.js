
let interval = 0; //breath var 2 variables
let breathTimeout1 = 0; //needed to clear breath function & resync
let breathTimeout2 = 0;

//toggle between diff 'scenes' (breather app, exercise slideshow, music selector)
const toggleSceneBreath = document.querySelector(".toggleSceneBreather");
toggleSceneBreath.addEventListener("click" , function() {
  sceneSwitch(0);
});

const toggleSceneExercise = document.querySelector(".toggleSceneExercise");
toggleSceneExercise.addEventListener("click", function() {
  sceneSwitch(1);
});

const toggleSceneAudio = document.querySelector(".toggleSceneMusic");
toggleSceneAudio.addEventListener("click", function() {
  sceneSwitch(2);
});

const sceneContents = document.querySelector(".sceneContents");

const sceneBreath = document.getElementById("sceneBreather");
const sceneExercise = document.getElementById("sceneExercise");
const sceneMusic = document.getElementById("sceneMusic");

//changes which module is displayed, which button is inactive, & the margins for sceneContents
function sceneSwitch(sceneNum) {
  switch(sceneNum) {
    case 0: //breather
      clearInterval(interval);
      clearTimeout(breathTimeout1);
      clearTimeout(breathTimeout2);
      breathAnim2()
      interval = setInterval(breathAnim2, time2);

      toggleSceneBreath.classList.add("button-inactive");
      toggleSceneExercise.classList.remove("button-inactive");
      toggleSceneAudio.classList.remove("button-inactive");

      sceneBreath.style.display = "block";
      sceneExercise.style.display = "none";
      sceneMusic.style.display = "none";

      sceneContents.style.marginTop = "5%";
      sceneContents.style.marginBottom = "0px";
      break;
    case 1: //exerciser
      toggleSceneBreath.classList.remove("button-inactive");
      toggleSceneExercise.classList.add("button-inactive");
      toggleSceneAudio.classList.remove("button-inactive");

      sceneBreath.style.display = "none";
      sceneExercise.style.display = "block";
      sceneMusic.style.display = "none";

      sceneContents.style.marginTop = "auto";
      sceneContents.style.marginBottom = "auto";
      break;
    case 2: //audio

      toggleSceneBreath.classList.remove("button-inactive");
      toggleSceneExercise.classList.remove("button-inactive");
      toggleSceneAudio.classList.add("button-inactive");

      sceneBreath.style.display = "none";
      sceneExercise.style.display = "none";
      sceneMusic.style.display = "flex";

      sceneContents.style.marginTop = "auto";
      sceneContents.style.marginBottom = "auto";
      break;
    default:
  }
}
//scene toggle end
//-----------------------------------
//toggles between diff relaxers
//relax toggle
let toggledRelaxer = 0;

const toggleRelax = document.querySelector(".toggleRelax");

toggleRelax.addEventListener("click", () => {
    var relaxScene = document.getElementById("relax-wrapper1");
    var relaxScene2 = document.getElementById("relax-wrapper2");
    var contentContainer = document.getElementById("relaxContentsFlexbox");

    toggledRelaxer++;
    if(toggledRelaxer > 1) {
      toggledRelaxer = 0;
    }
    switch(toggledRelaxer) {
      case 0: //circle relaxer hovering around
        relaxScene.style.display = "none";
        relaxScene2.style.display = "flex";

        clearInterval(interval);
        clearTimeout(breathTimeout1);
        clearTimeout(breathTimeout2);

        breathAnim2()
        interval = setInterval(breathAnim2, time2);

        contentContainer.style.marginTop = "80px";
        contentContainer.style.marginBottom = "80px";
        break;
      case 1: //num of breathes relaxer
        relaxScene.style.display = "block";
        relaxScene2.style.display = "none";

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

  const prevArrow = document.querySelector(".prev");
  const nextArrow = document.querySelector(".next");
  prevArrow.style.setProperty('--slideshow-button', 'rgba(0,0,0,0.8)');
  nextArrow.style.setProperty('--slideshow-button', 'rgba(0,0,0,0.8)');

  if(n==3 || n==5 || n==6 ||n==8 || n<1)  {//slides 3,5,6,8 have light bgs, need to change arrow
    prevArrow.style.setProperty('--slideshow-button', 'rgba(33,33,33,0.8)');
    nextArrow.style.setProperty('--slideshow-button', 'rgba(33,33,33,0.8)');

    prevArrow.style.color = "black"
    nextArrow.style.color = "black";

  } else {
    prevArrow.style.setProperty('--slideshow-button', 'rgba(0,0,0,0.8)');
    nextArrow.style.setProperty('--slideshow-button', 'rgba(0,0,0,0.8)');

    prevArrow.style.color = "white";
    nextArrow.style.color = "white";
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
//slideshow end
//-----------------------------------

/*
white noise 
sleep
focus/concentrate
study
stress relief
ambient noise
*/

var audioPlayer = document.getElementById("audio-control");
var audioArray = ["audio/filthySoil.mp3", "audio/meditation.mp3"];
//audio looping playlist
/*
var counter = 0;
audioPlayer.addEventListener('ended', () => {
  counter++;
  if(counter >= audioArray.length) {
    counter = 0;
  }
  audioPlayer.src = audioArray[counter];
  audioPlayer.play();
});
//*/

//OR, audio dropdown selector
/*
const musicInput = document.querySelector(".musicInput");
musicInput.addEventListener("change", () => {
  audioPlayer.src = musicInput.value;
});*/


//-----------------------------------