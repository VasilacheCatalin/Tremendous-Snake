
function createBoard(rows, cols){
    for(let i=0; i<rows; i++) {
        const ro = document.createElement("div");
        ro.id=`${i}`;
        const b = document.getElementById("board");
        b.appendChild(ro);
        const r = document.getElementById(`${i}`);
        r.style.display = "flex";

        for(let j=0; j<cols; j++){
            const sq = document.createElement("div");
            sq.id="square";
            r.appendChild(sq);
        }
    }
}

 function getRandomNumber(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min;
 }

function getRandomPosition (rows, cols){
    let randomR = getRandomNumber(0, rows);
    let randomC = getRandomNumber(0, cols);
    return [randomR, randomC];
}

 function colorCell([row, column]){
     const rowElement = document.getElementById(`${row}`);
     const cell = rowElement.childNodes[column];
     cell.style.backgroundColor = "red";
 }

 function keyListener(){
    window.addEventListener("keypress", motionCell )
 }

function motionCell(randomRow, randomColumn, direction) {
    colorCell([randomRow, randomColumn]);
    switch (direction){
        case "left":
            setInterval(() => colorCell([randomRow, randomColumn--]), 100);
            break;
        case "right":
            setInterval(() => colorCell([randomRow, randomColumn++]), 100);
            break;
        case "up":
            setInterval(() => colorCell([randomRow--, randomColumn]), 100);
            break;
        case "down":
            setInterval(() => colorCell([randomRow++, randomColumn]), 100);
            break;
        default:
            setInterval(() => colorCell([randomRow, randomColumn]), 100);

    }
}

function initGame(){
    let rows = 20;
    let cols = 20;
     createBoard(rows,cols);
    let [randomRow, randomColumn] = getRandomPosition(rows,cols);
    motionCell(randomRow, randomColumn, "right");
}

initGame();




