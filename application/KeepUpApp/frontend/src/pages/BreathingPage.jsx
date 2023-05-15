import {Flex} from "@chakra-ui/react";
import "../relax.css";


//var breath = require('C:\Users\cjime\CSC648-TermProject sp2023\csc648-spring23-04-team01\application\Relaxer\breathingApp.html')
function BreathingApp(){
    

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
    <meta charSet="utf-8" />
  <title>Relaxer</title>

  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            /*internal stylesheet overrides external stylesheets*/\n            html {\n                height: 100%;\n            }\n            body {\n            /*#866aa3 -> #7f84be*/\n            /*background-color: transparent;\n            background-image: linear-gradient(to right,#866aa3 33%,#7f84be 66%);*/\n            }\n        "
    }}
  />
  {/*how to find direct mp3 urls: type "intitle:index.of?mp3 [song title]" into google*/}
  <div style={{ textAlign: "center" }}>
    <button className="toggleRelax">Switch</button>
  </div>
  <div id="relaxContentsFlexbox">
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
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
  <div id="topNavFlexbox">
    <p style={{ textAlign: "center" }}>
      White noise :{" "}
      <audio
        id="audio-control1"
        controls=""
        style={{ marginLeft: "auto", marginRight: 0 }}
        src="audio/White_noise.mp3"
        type="audio/mpeg"
      />
    </p>
    <p style={{ textAlign: "center" }}>
      Meditate/Focus:{" "}
      <audio
        id="audio-control2"
        controls=""
        style={{ marginLeft: "auto", marginRight: 0 }}
        src="audio/meditation.mp3"
        type="audio/mpeg"
      />
    </p>
    <p style={{ textAlign: "center" }}>
      Motivational :{" "}
      <audio
        id="audio-control2"
        controls=""
        style={{ marginLeft: "auto", marginRight: 0 }}
        src="audio/stress_relieve_music.mp3"
        type="audio/mpeg"
      />
    </p>
  </div>
  {/* Slideshow container */}
  <div className="slideshow-container">
    {/*GIFS w/ numbering and caption text */}
    <div className="Slidefade">
      <div className="numbertext">1 / 4</div>
      <img
        src="https://cdn.dribbble.com/users/919329/screenshots/2796076/media/05715cb3ea596b61dea95dbdea228d40.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext">Arms &amp; Legs Exercises</div>
    </div>
    <div className="Slidefade">
      <div className="numbertext">2 / 4</div>
      <img
        src="https://i.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext">Leg Exercises</div>
    </div>
    <div className="Slidefade">
      <div className="numbertext" style={{ color: "black" }}>
        3 / 4
      </div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34c52563799919.5abc9eb3f3f75.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext" style={{ color: "black" }}>
        Back &amp; Body Exercises
      </div>
    </div>
    <div className="Slidefade">
      <div className="numbertext">4 / 4</div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc49a55989429.599c07a9224c3.gif"
        style={{ maxHeight: 700 }}
        width="100%"
      />
      <div className="Slidetext">Arm Exercises</div>
    </div>
    {/* Next and previous buttons */}
    <a className="prev" onclick="plusSlides(-1)">
      ❮
    </a>
    <a className="next" onclick="plusSlides(1)">
      ❯
    </a>
  </div>
    </>
}


export default  BreathingApp;