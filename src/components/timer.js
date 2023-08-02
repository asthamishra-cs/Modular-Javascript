import { generateUniqueId } from "../generateUniqueId";

let i = 0;

class Timer {
    constructor(){
        this.sec=0;
        this.min=0;
        this.hour=0;
        this.timeout = null;
        this.uniqueId = generateUniqueId(i.toString());
        i++;
    }

    timer(){
        let displayHour = "";
        let displayMin = "";
        let displaySec = "";
        this.sec++;
        if(this.sec/60===1){
            this.min++;
            this.sec=0;
        }
        if(this.min/60===1){
            this.hour++;
            this.min=0;
        }
        if(this.sec<10){
            displaySec="0"+this.sec.toString();

        }else{
            displaySec = this.sec.toString();
        }
        if(this.min<10){
            displayMin="0"+this.min.toString();
        }else{
            displayMin= this.min.toString();
        }
        if(this.hour<10){
            displayHour="0"+this.hour.toString();
        }else{
            displayHour= this.hour.toString();
        }

        const timerValue = document.getElementById(this.uniqueId);
        timerValue.innerText = `${displayHour}:${displayMin}:${displaySec}`;
    }

    startTimer(){
        if(this.timeout!==null){
            return;
        }
        this.timeout=setInterval(this.timer.bind(this),100);
    }

    pauseTimer(){
        clearInterval(this.timeout);
        this.timeout=null;
    }

    resetTimer(){
        clearInterval(this.timeout);
        this.sec=0;
        this.min=0;
        this.hour=0;
        this.timeout=null;
        const timerValue = document.getElementById(this.uniqueId);
        timerValue.innerText=`00:00:00`
    }

    render(){
        const timerContainer = document.createElement("div");
        const timerValue = document.createElement("p");
        const startButton = document.createElement("button");
        const pauseButton = document.createElement("button");
        const resetButton = document.createElement("button");

        timerValue.innerText="00:00:00";
        startButton.innerText="Start";
        pauseButton.innerText="Pause";
        resetButton.innerText="Reset";

        timerContainer.classList.add("timerConatiner");
        timerValue.id = this.uniqueId;
        startButton.id = "startBtn";
        pauseButton.id = "pauseBtn";
        resetButton.id = "resetBtn";

        timerContainer.appendChild(timerValue);
        timerContainer.appendChild(startButton);
        timerContainer.appendChild(pauseButton);
        timerContainer.appendChild(resetButton);

        startButton.addEventListener('click',this.startTimer.bind(this));
        pauseButton.addEventListener('click',this.pauseTimer.bind(this));
        resetButton.addEventListener('click',this.resetTimer.bind(this));

        return timerContainer;

        
        
    }

    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
        
    }
}

export default Timer;