let boxes = document.querySelectorAll("#box")
let reset = document.querySelector("#Reset")
let winner = document.querySelector("#winner")
let newBtn = document.querySelector("#newGame")
let win = document.querySelector(".win")
let hide = document.querySelector(".container")

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let turn = true;
boxes.forEach((box) => 
    {
        box.onclick = () => 
            {
                if(box.innerText == "")
                    {
                        if(turn)
                            {
                                box.innerText = "X"
                                box.style = "-webkit-text-stroke: 3px rgb(250, 114, 114, 0.7);"
                                turn = false
                            }
                        else
                        {
                            box.innerText = "O"
                            box.style = "-webkit-text-stroke: 3px blue;"
                            turn = true
                        }
                        checkWinner()
                    }

            }
    })
reset.onclick = () => 
    {
        boxes.forEach((box) => {box.innerText = ""})
    }
const checkWinner = () =>
    {
        for(pattern of winpattern)
            {
                let pan1 = boxes[pattern[0]].innerText
                let pan2 = boxes[pattern[1]].innerText
                let pan3 = boxes[pattern[2]].innerText
                if(pan1 != "" && pan2 != "" && pan3 != "")
                    {
                        if(pan1 == pan2 && pan2 == pan3)
                            {
                                winn(pan1)
                            }
                        else
                        {
                            console.log("FAil")
                        }
                    }
            }
    }
const winn = (player) =>
    {
        winner.innerText = `Congratulation,\nWinner is ${player}`
        winner.style = "font-size:9vmin;" 
        win.style = "display : block;"
        hide.style = "display : none;"
    }
newBtn.onclick = () => 
    {
        win.style = "display : none;"
        reset.onclick()
        hide.style = "display : grid;"
    }
