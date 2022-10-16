let timer = 5;
let timerForRocket;

function changeState(stateToUpdate){
    // document.body.className = "state"+state;

    let newBodyClass = "state"+stateToUpdate;
    document.body.className = newBodyClass;
    // console.log("state"+state)
    if(stateToUpdate == 3 || stateToUpdate == 1){
        timer = 5;
        document.getElementById("timer-counter").innerText = timer;
        clearInterval(timerForRocket)
            
    }

    if(stateToUpdate == 2){
        timerForRocket = setInterval(()=>{
            console.log(timer--)
            document.getElementById("timer-counter").innerText = timer;
            if(timer == 0){
                clearInterval(timerForRocket);
                changeState(3)
            }
        },1000)
    }
}

// setInterval(()=>{
//     console.log("I am from setInterval")
// },1000)



// function stateTest(x){
//     let bodyClass = "state" + x;
//     console.log("Body Class", bodyClass)

// }