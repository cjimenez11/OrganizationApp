import '../relax.css'


function Relaxer() {

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

  let interval =0;
  let breathTimeout1=0;
  let breathTimeout2=0;
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

  return(
  <>
        <div id="sceneFlexbox">
    <div className="sceneSelector">
      {" "}
      {/*module selector*/}
      <button className="toggleSceneBreather button-inactive">
        Take a Breather{" "}
      </button>
      <button className="toggleSceneExercise">Muscle Exercises </button>
      <button className="toggleSceneMusic">Relaxing Music </button>
    </div>
    <div className="sceneContents" style={{ flexGrow: 2 }}>
      <div id="sceneBreather">
        {" "}
        {/*breath module*/}
        <div style={{ textAlign: "center" }}>
          <button className="toggleRelax">Switch</button>
        </div>
        <div id="relaxContentsFlexbox">
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            {/*breath variant1*/}
            <div id="relax-wrapper1" style={{ display: "none" }}>
              <div className="relax-input">
                <select className="breath-input">
                  <option value={3}>3 Breaths</option>
                  <option value={5}>5 Breaths</option>
                </select>
              </div>
              <div className="circle-wrap">
                <div className="circle-outline" />
                <div className="circle-progress" />
              </div>
              <p className="breaths">
                Breaths remaining: <span className="breaths-text">3</span>
              </p>
              <p className="instructions">Are you ready to start breathing?</p>
              <div style={{ textAlign: "center" }}>
                <button className="breathStart">Start</button>
              </div>
            </div>
            {/*breath variant2*/}
            <div id="relax-wrapper2" style={{ display: "flex" }}>
              <div className="circle2" />
              <div id="relaxText2" />
              <div className="relax-pointer-container">
                <div className="relax-pointer" />
              </div>
              <div className="relax-gradient-circle" />
            </div>
          </div>
        </div>
      </div>
      {/* exercise module */}
      <div id="sceneExercise" style={{ display: "none" }}>
        <div className="slideshow-container">
          {/*GIFS w/ numbering and caption text */}
          <div className="Slidefade">
            <div className="numbertext">1 / 6</div>
            <img
              src="https://cdn.dribbble.com/users/919329/screenshots/2796076/media/05715cb3ea596b61dea95dbdea228d40.gif"
              style={{ maxHeight: 700, width: "100%" }}
            />
            <div className="Slidetext">Arms &amp; Legs Exercises</div>
          </div>
          <div className="Slidefade">
            <div className="numbertext">2 / 6</div>
            <img
              src="https://i.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif"
              style={{ maxHeight: 700, width: "100%" }}
            />
            <div className="Slidetext">Leg Exercises</div>
          </div>
          <div className="Slidefade">
            <div className="numbertext" style={{ color: "black" }}>
              3 / 6
            </div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34c52563799919.5abc9eb3f3f75.gif"
              style={{ maxHeight: 700, width: "100%" }}
            />
            <div className="Slidetext" style={{ color: "black" }}>
              Back &amp; Body Exercises
            </div>
          </div>
          <div className="Slidefade">
            <div className="numbertext">4 / 6</div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc49a55989429.599c07a9224c3.gif"
              style={{ maxHeight: 700, width: "100%" }}
            />
            <div className="Slidetext">Arm Exercises</div>
          </div>
          <div className="Slidefade">
            <div className="numbertext" style={{ color: "black" }}>
              5 / 6
            </div>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFjMzc0MjEyMGQ4YjE0NTQ2Yjg2Nzg2Njc2MjkzMGE5NzVmMjU1MyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xTk9ZXimSga3WsARt6/giphy.gif"
              style={{ maxHeight: 700 }}
              width="100%"
            />
            <div className="Slidetext" style={{ color: "black" }}>
              Neck, Core &amp; Leg Exercises
            </div>
          </div>
          <div className="Slidefade">
            <div className="numbertext" style={{ color: "black" }}>
              6 / 6
            </div>
            <img
              src="https://media.giphy.com/media/kcT0AAkJxu8xTKfjwd/giphy.gif"
              style={{ maxHeight: 700 }}
              width="100%"
            />
            <div className="Slidetext" style={{ color: "black" }}>
              Neck &amp; Body Exercises
            </div>
          </div>
          {/* Next and previous buttons */}
          <a className="prev" onclick="plusSlides(-1)">
            ❮
          </a>
          <a className="next" onclick="plusSlides(1)">
            ❯
          </a>
        </div>
      </div>
      {/*music module*/}
      {/* <div id="sceneMusic" style="display:none">
              <div id="musicSelect">
                  <select class="musicInput">
                  <option value="audio/filthySoil.mp3">Song1</option>
                  <option value="audio/meditation.mp3">Song2</option>
                  </select>
              </div>
              <audio id="audio-control" controls src="audio/filthySoil.mp3" type="audio/mpeg"></audio>
          </div> */}
      <div id="sceneMusic" style={{ display: "none" }}>
        <div
          style={{
            display: "block",
            marginLeft: "20%",
            marginBottom: "5%",
            lineHeight: 26
          }}
        >
          <p className="music-text">
            White Noise :{" "}
            <audio
              id="audio-control1"
              controls=""
              src="audio/White_noise.mp3"
              type="audio/mpeg"
            />
          </p>
          <p className="music-text">
            Meditation :{" "}
            <audio
              id="audio-control2"
              controls=""
              src="audio/meditation.mp3"
              type="audio/mpeg"
            />
          </p>
          <p className="music-text">
            Stress-Relief :{" "}
            <audio
              id="audio-control2"
              controls=""
              src="audio/stressfree.mp3"
              type="audio/mpeg"
            />
          </p>
          <p className="music-text">
            Motivational/Focus :{" "}
            <audio
              id="audio-control2"
              controls=""
              src="audio/motivational.mp3"
              type="audio/mpeg"
            />
          </p>
        </div>
        <img
          src="https://cdn.dribbble.com/users/1242979/screenshots/7099165/media/e521bd143bf1e795af3ec725a68e273f.gif"
          className="playergif"
        />
      </div>
    </div>
  </div>
  </>)

  
  
}

export default Relaxer;