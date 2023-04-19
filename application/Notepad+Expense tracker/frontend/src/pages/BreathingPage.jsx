import {Flex} from "@chakra-ui/react";

//var breath = require('C:\Users\cjime\CSC648-TermProject sp2023\csc648-spring23-04-team01\application\Relaxer\breathingApp.html')
export default function BreathingApp(){
    

    const styles = {
        "#relaxContentsFlexbox": {
          display: "flex",
          alignItems: "center",
          marginTop: "80px",
          marginBottom: "80px"
        },
        ".slideshow-container": {
          maxWidth: "1000px",
          position: "relative",
          margin: "auto",
          boxSizing: "border-box"
        },
        ".mySlides": { display: "none" },
        ".prev, .next": {
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          width: "auto",
          marginTop: "-22px",
          padding: "16px",
          color: "grey",
          fontWeight: "bold",
          fontSize: "18px",
          transition: "0.6s ease",
          borderRadius: "0 3px 3px 0",
          userSelect: "none"
        },
        ".next": { right: "0", borderRadius: "3px 0 0 3px" },
        ".prev:hover, .next:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
        ".Slidetext": {
          color: "#f2f2f2",
          fontSize: "15px",
          padding: "8px 12px",
          position: "absolute",
          bottom: "8px",
          width: "100%",
          textAlign: "center"
        },
        ".numbertext": {
          color: "#f2f2f2",
          fontSize: "12px",
          padding: "8px 12px",
          position: "absolute",
          top: "0"
        },
        ".fade": { animationName: "fade", animationDuration: "1.5s" },
        "@keyframes fade": { from: { opacity: 0.4 }, to: { opacity: 1 } },
        ".relax-input": {
          display: "flex",
          flexDirection: "column",
          marginBottom: "40px"
        },
        ".relax-input select": {
          border: "none",
          minWidth: "300px",
          fontSize: "16px",
          padding: "8px 4px",
          backgroundColor: "#6666ff",
          color: "#fff",
          alignSelf: "center"
        },
        ".relax-input select:focus": { outline: "none" },
        ".circle-wrap": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginBottom: "40px"
        },
        ".circle-outline": {
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "15px solid #f1f1f1",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        },
        ".circle-progress": {
          width: "50px",
          height: "50px",
          position: "absolute",
          backgroundColor: "#6666ff",
          borderRadius: "50%",
          transition: "4s ease all",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        },
        ".circle-grow": { transform: "scale(5.3)" },
        ".breaths": {
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "24px",
          color: "white"
        },
        ".instructions": {
          textAlign: "center",
          marginBottom: "35px",
          color: "white"
        },
        button: {
          alignSelf: "center",
          padding: "8px 20px",
          backgroundColor: "#6666ff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "0.3s ease all"
        },
        "button:hover": { backgroundColor: "#f1f1f1", color: "#6666ff" },
        ".button-inactive": { pointerEvents: "none", backgroundColor: "#969696" },
        "#breath-select-disable": {
          pointerEvents: "none",
          backgroundColor: "#969696"
        },
        "#relax-wrapper2": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          width: "300px",
          margin: "auto",
          marginTop: "0px",
          position: "relative",
          transform: "scale(1)"
        },
        "#relaxText2": { color: "white" },
        ".relax-gradient-circle": {
          borderRadius: "50%",
          background:
            "conic-gradient(\n        #9999ff 0%,\n        #cc99ff 40%,\n        #ffffff 40%,\n        #ffffff 60%,\n        #99ccff 60%,\n        #6699ff 100%\n    )",
          height: "320px",
          width: "320px",
          position: "absolute",
          top: "-10px",
          left: "-10px",
          zIndex: -2
        },
        ".circle2": {
          backgroundColor: "#010f1c",
          borderRadius: "50%",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: -1
        },
        ".relax-pointer-container": {
          position: "absolute",
          top: "-40px",
          left: "140px",
          width: "20px",
          height: "190px",
          animation: "rotate 7.5s linear forwards infinite",
          transformOrigin: "bottom center"
        },
        "#relax-wrapper2.contain2-grow": { animation: "grow 3s linear forwards" },
        "#relax-wrapper2.contain2-shrink": { animation: "shrink 3s linear forwards" },
        ".relax-pointer": {
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          display: "block"
        },
        "@keyframes rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        "@keyframes grow": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.2)" }
        },
        "@keyframes shrink": {
          from: { transform: "scale(1.2)" },
          to: { transform: "scale(1)" }
        }
      }
    return <>
         <div style={{ textAlign: "center" }}>
    <button className="toggleRelax" style={styles.button}>Switch</button>
  </div>
  <div id="relaxContentsFlexbox" style={styles["#relaxContentsFlexbox"]}>
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <div id="relax-wrapper1" style={{ display: "none" }}>
        <div className="relax-input" style={styles[".relax-input"]}>
          <select className="breath-input">
            <option value={3}>3 Breaths</option>
            <option value={5}>5 Breaths</option>
          </select>
        </div>
        <div className="circle-wrap" style={styles[".circle-wrap"]}>
          <div className="circle-outline" style={styles[".circle-outline"]}/>
          <div className="circle-progress" style={styles[".circle-progress"]}/>
        </div>
        <p className="breaths" style={styles[".breaths"]}>
          Breaths remaining: <span className="breaths-text">3</span>
        </p>
        <p className="instructions" style={styles[".instructions"]}>Are you ready to start breathing?</p>
        <div style={{ textAlign: "center" }}>
          <button className="breathStart">Start</button>
        </div>
      </div>
      <div id="relax-wrapper2" style={styles["#relax-wrapper2"]} >
        <div className="circle2" style={styles[".circle2"]}/>
        <div id="relaxText2" style={styles["#relaxText2"]}/>
        <div className="relax-pointer-container" style={styles[".relax-pointer-container"]}>
          <div className="relax-pointer" style={styles[".relax-pointer"]}/>
        </div>
        <div className="relax-gradient-circle" style={styles[".relax-gradient-circle"]}/>
      </div>
    </div>
  </div>
  
  {/* Slideshow container */}
  <div className="slideshow-container" style={styles[".slideshow-container"]}>
    {/*GIFS w/ numbering and caption text */}
    <div className="Slidefade">
      <div className="numbertext" style={styles[".numbertext"]}>1 / 4</div>
      <img
        src="https://cdn.dribbble.com/users/919329/screenshots/2796076/media/05715cb3ea596b61dea95dbdea228d40.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext" style={styles[".Slidetext"]}>Arms &amp; Legs Exercises</div>
    </div>
    <div className="Slidefade">
      <div className="numbertext" style={styles[".numbertext"]}>2 / 4</div>
      <img
        src="https://i.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext" style={styles[".Slidetext"]}>Leg Exercises</div>
    </div>
    <div className="Slidefade">
      <div className="numbertext" style={styles[".numbertext"]}>
        3 / 4
      </div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34c52563799919.5abc9eb3f3f75.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext" style={styles[".Slidetext"]}>
        Back &amp; Body Exercises
      </div>
    </div>
    <div className="Slidefade">
      <div className="numbertext" style={styles[".numbertext"]}>4 / 4</div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc49a55989429.599c07a9224c3.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext" style={styles[".Slidetext"]}>Arm Exercises</div>
    </div>
    {/* Next and previous buttons */}
    <a className="prev" onclick="plusSlides(-1)" style={styles[".prev, .next"]}>
      ❮
    </a>
    <a className="next" onclick="plusSlides(1)" style={styles[".prev, .next"]}>
      ❯
    </a>
  </div>

    </>
}
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