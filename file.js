// 1)
function helloWorld() {
    alert ("Hello, World!")
}
let world = document.querySelector('.wrld')
world.addEventListener('click', helloWorld)

// 2)
function insertText() {
    input.value = "test@email.com"
}
let input = document.querySelector(".email")
let insert = document.querySelector(".insert")
insert.addEventListener('click', insertText)

// 3)
function modify() {
    let text = modifier.value
    if (text == "") {
        alert (`Вы ничего не ввели`)
    }
    else {
        alert (`Вы ввели ${text}`)       
    }
}

let modifier = document.querySelector(".modifier")
let modifierButton = document.querySelector(".modifierAction")
modifierButton.addEventListener('click', modify)

// 4)
function swapAction() {
    let firstValue = firstTxt.value
    let secondValue = secondTxt.value
    secondTxt.value = firstValue
    firstTxt.value = secondValue
}

let firstTxt = document.querySelector(".firstText")
let secondTxt = document.querySelector(".secondText")
let swapButton = document.querySelector(".Swap")
swapButton.addEventListener('click', swapAction)

// 5)
function lockInput() {
    check.setAttribute("disabled", "")
}
function unlockInput() {
    check.removeAttribute("disabled")
}

let check = document.querySelector(".checker")
let lock = document.querySelector(".lock")
let unlock = document.querySelector(".unlock")
lock.addEventListener('click', lockInput)
unlock.addEventListener('click', unlockInput)

// 6)
function hideAction() {
    if (square.getAttribute('hidden') == null) {
        square.setAttribute("hidden", "")  
        hider.textContent = 'Показать квадрат'      
    }
    else {
        square.removeAttribute("hidden")
        hider.textContent = "Скрыть квадрат"
    }
}
square = document.querySelector("#square")
hider = document.querySelector(".hider")
hider.addEventListener('click', hideAction)

// 7)
function changeSquareCol() {
    squareColour.style.backgroundColor = 'green'
}

function changeSquareColBack() {
    squareColour.style.backgroundColor = 'red'
}
let squareColour = document.querySelector("#changeColour")
squareColour.addEventListener('mouseover', changeSquareCol)
squareColour.addEventListener('mouseout', changeSquareColBack)

// 8)
let Squares = document.querySelectorAll(".squares")
for (let i = 0; i < Squares.length; i++) {
    let square = Squares[i]
    function squareChange() {
        if (Squares[i].style.backgroundColor = 'green') {
            for (let i = 0; i < Squares.length; i++) {
                Squares[i].style.backgroundColor = 'red'                
            }
        }
        square.style.backgroundColor = 'green'          
    }
    square.addEventListener('mouseover', square.addEventListener('click', squareChange))
}

// 8.2)
let inSquare = document.querySelectorAll(".upgradedSquares")
let secSquares = document.querySelector(".bunchOfSquares")
function event1(click) {
    let clck = click.target
    if (clck != secSquares) {
        for (let i = 0; i < inSquare.length; i++) {
            inSquare[i].style.backgroundColor = "red"        
        }
        clck.style.backgroundColor = "green"
}

}
secSquares.addEventListener('click', event1)

// 9)

let calc = document.querySelector(".calculator")
let inputWindow = document.querySelector(".input")
let equal = document.querySelector(".equal")
function Input(click) {
    let press = click.target
    if (press != document.querySelector(".calculator")) {
        if (press == equal) {
            inputWindow.value = inputWindow.value
        }
        else {    
        inputWindow.value = inputWindow.value + press.textContent   
        }     
    }
    if (press == equal) {
        abc = inputWindow.value
        inputWindow.value = eval(abc)
    }        
}
calc.addEventListener("click", Input)