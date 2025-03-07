//assigning values
let boxes = document.querySelectorAll(".box");
let turnO = true;
let count = 1;
const winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let heading = document.querySelector("h3");


//arrow function to check for the winner
let checkwinner = () => {
    for (let patterns of winpatterns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                heading.innerText = `Congrats... Winner ${pos1}`;
                disablefun();
                break;
            }
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        heading.innerText = "It's a Draw!";
    }
};

//function to disable the boxes
function disablefun() {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}


//function to enable the boxes
function enablefun() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    heading.innerText = "Tic Tac Toe";
    turnO = count % 2 !== 0;
}


//loop to enter the values and invoke the checkwinner() function
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


//function to start new game
let newgamebutton = document.querySelector("#newgameBt");
newgamebutton.addEventListener("click", () => {
    console.log("You are starting a new game");
    count++;
    enablefun();
    console.log(count % 2 === 0 ? "X turn" : "O turn");
});


//function to reset the game
let resetgamebutton = document.querySelector("#resetBt");
resetgamebutton.addEventListener("click", () => {
    console.log("You are resetting the game");
    enablefun();
    console.log(count % 2 === 0 ? "X turn" : "O turn");
});
