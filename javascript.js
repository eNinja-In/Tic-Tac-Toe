let boxes = document.querySelectorAll("#box")
let reset = document.querySelector("#Reset")
let winner = document.querySelector("#winner")
let newBtn = document.querySelector("#newGame")
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
                                turn = false
                            }
                        else
                        {
                            box.innerText = "O"
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
                                winn()
                            }
                    }
            }
    }
const winn = () =>
    {
        let win = document.querySelector(".win")
        win.style = "display : block;"
    }
newBtn.onclick = () => 
    {
        let win = document.querySelector(".win")
        win.style = "display : none;"
        reset.onclick()
    }