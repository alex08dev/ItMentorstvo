
let clickPoitns =[];

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext("2d");

let drawButton = document.getElementById("nacrtaj");
let resetButton = document.getElementById("resetuj");

canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoitns.push({x:x, y:y});




})

drawButton.addEventListener("click", function() {

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

})

resetButton.addEventListener("click", function() {
    ctx.clearRect(0,0, canvasElement.width, canvasElement.height);
})