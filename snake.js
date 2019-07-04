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
createBoard(15,15);