let timer=10;
let timerForRocket;

function changeState(stateToUpdate) {
    let newBodyClass="state"+stateToUpdate
    document.body.className=newBodyClass;

    if(stateToUpdate==3 || stateToUpdate==1){
        timer=10;
        document.getElementById("timer-counter").innerText=timer;
        clearInterval(timerForRocket)
    }
    if(stateToUpdate==2){
        timerForRocket=setInterval(()=>{
            console.log(timer--)
            document.getElementById("timer-counter").innerText=timer;
            if(timer==0){
                clearInterval(timerForRocket);
                changeState(3)
            }
        },1000)
    }
    
}

// setInterval(()=>{
//     console.log("sumanth");
// },1000)