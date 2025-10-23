/*
let clickButton = document.getElementById("clickMe");

clickButton.addEventListener("click", clickEvent);

function clickEvent(){
    console.log("Test click Event");
}

 */

// Canvas

// Moj Nacin

/*
let canvas = document.getElementById("drawArea");

canvas.addEventListener("click", function(event) {
    let clickX =event.clientX;
    let clickY =event.clientY;

    console.log("X: " + clickX + ", Y: " + clickY);
})

 */

// Skolski nacin

let clickPoitns =[];

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext("2d");

canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoitns.push({x:x, y:y});



    if (clickPoitns.length >= 10) {
        ctx.beginPath();
        ctx.moveTo(clickPoitns[0].x, clickPoitns[0].y);
        /* vezba
        for (let i = 1; i < 5; i++) {
            ctx.lineTo(clickPoitns[i].x, clickPoitns[i].y);
        }

         */
        for (let i in clickPoitns) {
            if(i==0){
                continue;
            }
            ctx.lineTo(clickPoitns[i].x, clickPoitns[i].y);
        }


        ctx.stroke();
        clickPoitns = [];
    }
})