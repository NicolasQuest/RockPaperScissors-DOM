let enPartida = false;
let timeoutID; // nuevo


let userScore = 0
let computerScore = 0

function handleUserChoice(userChoice) {
    // Si hay un timeout activo, lo cancelo

    clearTimeout(timeoutID); 

    enPartida = true;

    let hOne = document.querySelector("h1");
    let body = document.querySelector("body");
    let resultado = document.getElementById("resultado"); 
    let user = document.getElementById("userChoice");
    let computer = document.getElementById("computerChoice");
    let vs =  document.querySelector("#vs")


    let opciones = ["Rock", "Paper", "Scissors"];
    let computerRandomSelection = opciones[Math.floor(Math.random() * opciones.length)];

    let result = '';

    if (userChoice === computerRandomSelection) {
        
        resultado.style.color = "yellow";
        body.style.backgroundColor = "rgb(152, 152, 6)";
        result = "IT'S A TIE 🤝";
        computerScore += 0
        userScore += 0
        document.querySelector("#user").innerHTML = userScore
        document.querySelector("#computer").innerHTML = computerScore
        vs.innerHTML = "vs"
        
    }
   
    
    else if (
        (userChoice === "Rock" && computerRandomSelection === "Scissors") ||
        (userChoice === "Paper" && computerRandomSelection === "Rock") ||
        (userChoice === "Scissors" && computerRandomSelection === "Paper")
    ) {
        result = "YOU WON ✅";
        resultado.style.color = "green";
        body.style.backgroundColor = "rgb(3, 88, 3)";
        userScore += 1
        computerScore += 0
        document.querySelector("#user").innerHTML = userScore
        document.querySelector("#computer").innerHTML = computerScore
        vs.innerHTML = "vs"
        

    } else {
        result = "YOU LOSE ❌";
        resultado.style.color = "red";
        body.style.backgroundColor = "rgb(121, 4, 4)";
        computerScore += 1
        userScore += 0
        document.querySelector("#user").innerHTML = userScore
        document.querySelector("#computer").innerHTML = computerScore
        vs.innerHTML = "vs"
    }

    document.querySelector("#guion").innerHTML = "-"

    hOne.style.visibility = "hidden";
    resultado.textContent = ` ${result}`;
    user.textContent = ` ${userChoice}`;
    computer.textContent = ` ${computerRandomSelection}`;

    resultado.style.visibility = "visible";
    user.style.visibility = "visible";
    computer.style.visibility = "visible";
    vs.style.visibility = "visible";

    // Guardamos el ID del timeout para cancelarlo si clickea de nuevo
    timeoutID = setTimeout(() => {
        body.style.backgroundColor = "#121212";
        resultado.style.visibility = "hidden";
        user.style.visibility = "hidden";
        computer.style.visibility = "hidden";
        vs.style.visibility = "hidden";
        hOne.style.visibility = "visible";
        enPartida = false;
    }, 3500);
}




document.querySelector("#piedra").addEventListener("click", () => handleUserChoice("Rock")); // I add the value of userChoice, and assign it to de button 
document.querySelector("#papel").addEventListener("click", () => handleUserChoice("Paper"));
document.querySelector("#tijera").addEventListener("click", () => handleUserChoice("Scissors"));   



