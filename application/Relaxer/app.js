const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');
let breathsLeft = 2;

// observing user's selected breaths 
numberOfBreaths.addEventListener('change', () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

// growth/shrinkage of circle
const growthCircle = () => {
    circleProgress.classList.add("circle-growth");
    setTimeout(() => {
        circleProgress.classList.remove("circle-growth");
    }, 8000)
};

// breath instructions
const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Inhale slowly";
    setTimeout(() => {
        instructions.innerText = "Hold breath";
        setTimeout(() => {
            instructions.innerText = "Exhale slowly";
        }, 4000);
    }, 4000);
};

// relaxer app (breathing) functionality
const relaxerApp = () => {
    const breathAnimation = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathAnimation);
            instructions.innerText = "'Start' to try another session";
            start.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
        }
        growthCircle();
        breathTextUpdate();  
    }, 12000);
};

// start of breathing
start.addEventListener("click", () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Prepare to take breaths";
    setTimeout(() => {
        instructions.innerText = "Relaxer is about to start...";
        setTimeout(() => {
            relaxerApp();
            growthCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});