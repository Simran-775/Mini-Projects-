const Button = document.querySelector(".start")
const options = document.querySelectorAll(".opt")
const urChoice = document.querySelector(".urChoice")
const compChoice = document.querySelector(".compChoice")
const info = document.querySelector("p")
let urScore = document.querySelector(".urScore")
let compScore = document.querySelector(".compScore")
const end = document.querySelector(".end")
let uChose =""
let compChose = ""
let ob = {
    1:"Rock",
    2:"Paper",
    3:"Scissor"
}
let playGame = 0
let you=0
let comp=0 

Button.addEventListener('click',(e)=>{
    Button.style.display = "none"
    end.style.display = "block"
    reset()
})

function reset(){
    urChoice.textContent = ""
    compChoice.textContent = ""
    let score = [0,0]
    urScore.textContent ="0"
    compScore.textContent = "0"
    info.style.display = "block"
    optionSelected()
}

function optionSelected(){
    options.forEach((option)=>{
        option.addEventListener('click',(event)=>{
            uChose = option.getAttribute("id")
            urChoice.textContent = uChose
            compSelected()
        })
    })
}

function compSelected(){
    let n= Math.floor(Math.random() * (3-0) + 1)
    compChose = ob[n]
    compChoice.textContent = compChose
    calcResult()
}

function calcResult(){
    if( uChose == compChose){
        display("DRAW")
    }
    else if(uChose == "Rock"){
        if(compChose == "Paper"){
            display("Comp Won")
            comp++
            updateScore()
        }
        if(compChose == "Scissor"){
            display("You Won")
            you++
            updateScore()
        }
    }
    else if(uChose=="Paper"){
        if(compChose=="Rock"){
            display("You Won")
            you++
            updateScore()
        }
        if(compChose=="Scissor"){
            display("Comp Won")
            comp++
            updateScore()
        }
    }
    else if(uChose=="Scissor"){
        if(compChose=="Rock"){
            display("Comp Won")
            comp++
            updateScore()
        }
        if(compChose=="Paper"){
            display("You Won")
            you++
            updateScore()
        }
    }

}

function display(str){
    Button.style.display = "block"
    Button.textContent = str   
}

function updateScore(){
    urScore.textContent = you
    compScore.textContent = comp
}


    end.addEventListener('click',()=>{
        Button.style.display = "block"
        Button.textContent = "START"
        end.style.display = "none"
        reset()
    })


