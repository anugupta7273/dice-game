function playGame() {

// first image

let randomNumber= Math.floor(Math.random()*6)+1;

let randomDiceImage="dice"+randomNumber+ ".png";

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

// second image
let randomNumber2=Math.floor(Math.random()*6)+1;

let randomDiceImage2="dice" +randomNumber2+ ".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

    // if player 1 wins
    if(randomNumber > randomNumber2){
        document.querySelector("h1").innerHTML = "🥊Player1 Wins!";
    }else if(randomNumber < randomNumber2){
        document.querySelector("h1").innerHTML ="🎃Player2 Wins!";

    }else{
        document.querySelector("h1").innerHTML ="🎃DRAW BITCH!🎎";
    }

    // Check if it's a draw
    if (randomNumber1 === randomNumber2) {
        // Play the draw sound effect
        var drawSound = document.getElementById("drawSound");
        drawSound.play();
    }
}
    