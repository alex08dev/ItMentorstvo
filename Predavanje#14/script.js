
let clickPoitns =[];

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext("2d");
let lineCounter = document.getElementById("lineCounter");

let drawButton = document.getElementById("nacrtaj");
let resetButton = document.getElementById("resetuj");
let colorPickBtn = document.getElementById("colorPick");

let drawCounter = 0;

canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoitns.push({x:x, y:y});




})

drawButton.addEventListener("click", function() {

    let randomColor = generateRandomColor();
    drawPath(randomColor);
    incrementDrawCounter()
    resetClickPoitns()
    sendDrawMessage()
    


})

colorPickBtn.addEventListener("click", function(event) {
    let colorPrompt = prompt("Pick a color");

    drawPath(colorPrompt);
    incrementDrawCounter()
    resetClickPoitns()
    sendDrawMessage()

})

resetButton.addEventListener("click", function() {
    ctx.clearRect(0,0, canvasElement.width, canvasElement.height);
})

function incrementDrawCounter() {
    drawCounter++;
}
function resetClickPoitns() {
    clickPoitns =[];
}

function generateRandomColor() {
    return "#"+Math.floor(Math.random() * 16777215).toString(16);
}

function sendDrawMessage() {
    lineCounter.innerText += "Nacrtana "+drawCounter +". linija "+ colorPrompt;
}

function drawPath(color){
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

    /* Vezba moj nacin
    let color ='#';
    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    getRandomHexColor();
    ctx.strokeStyle = color;
     */

    ctx.strokeStyle = color;
    ctx.stroke();

}