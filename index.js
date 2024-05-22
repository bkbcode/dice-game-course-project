var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var images = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", images)

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var images = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", images)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerText = "Draw! Refresh Me."
}