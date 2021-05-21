function rollTheDice() {
    console.log("roll the dice.");
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomImages = "images/dice" + randomNumber + ".png";
    let image1 = document.querySelectorAll(".diceContainer img")[0];
    image1.setAttribute("src", randomImages);
    let diceSound = new Audio("sound/dice.mp3");
    diceSound.play();

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImages2 = "images/dice" + randomNumber2 + ".png";
    let image2 = document.querySelectorAll(".diceContainer img")[1];
    image2.setAttribute("src", randomImages2);

    if (randomNumber > randomNumber2) {
        document.querySelector(".result").style.visibility = "visible";
        document.querySelector(".result").innerHTML = `<h1>Player 1 Wins!<img src="images/flag-icon.png"></h1>`;
    } else if (randomNumber < randomNumber2) {
        document.querySelector(".result").style.visibility = "visible";
        document.querySelector(".result").innerHTML = `<h1>Player 2 Wins!<img src="images/flag-icon.png"></h1>`;
    } else {
        document.querySelector(".result").style.visibility = "visible";
        document.querySelector(".result").innerHTML = `<h1>Draw!!!</h1>`;
    }
}
let roll_btn = document.querySelector(".roll-btn");
console.log(roll_btn);
roll_btn.addEventListener("click", function() {
    rollTheDice();
});