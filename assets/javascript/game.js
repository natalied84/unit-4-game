var counter = 0;
var wins = 0;
var losses = 0;
var imageCrystal;
var goalScore = Math.ceil(Math.random() * 112) + 18;
var numberOptions;
var crystalGem = ["pearl", "garnet", "bismuth", "lapis"];
var gemSrc = ["assets/images/Pearl.png", "assets/images/Garnet.png", "assets/images/Bismuth.png", "assets/images/Lapis Lazuli.png"];
var clod = new Audio("Peridot - You... CLOD!!!.mp3");

$("#goal-number").text(goalScore);
$("#win-counter").text(wins);
$("#loss-counter").text(losses);

for (let i = 0; i < 4; i++) {

    numberOptions = Math.ceil(Math.random() * 12);
    imageCrystal = $("<img>");
    imageCrystal.addClass(crystalGem[i]);
    imageCrystal.addClass("crystal-gem")
    imageCrystal.attr("src", gemSrc[i]);
    imageCrystal.attr("value", numberOptions);
    $("#crystals").append(imageCrystal);

}

$("#button").click(function () {

    counter = 0;
    goalScore = Math.ceil(Math.random() * 69) + 41;
        $(".crystal-gem").removeAttr("value");
               
        for (let i = 0; i < 4; i++) {

            numberOptions = Math.ceil(Math.random() * 12);
            imageCrystal = $("." + crystalGem[i]);
            $(imageCrystal).attr("value", numberOptions);
        
        }
        
    $("#goal-number").text(goalScore);
    $(".score").text(counter);
    $("#end-message").text("")

})



$(".crystal-gem").click(function () {

 clod.play()
    if ($("#end-message").text() === "")
    var crystalValue = ($(this).attr("value"));

    crystalValue = parseInt(crystalValue);
    console.log(counter);
    $(".score").text(counter);


     if (counter < goalScore) {

        counter += crystalValue;
        $(".score").text(counter);

        if (counter === goalScore) {

            console.log("you win");
            wins += 1;
            $("#win-counter").text(wins);
            $("#end-message").text("You win")

        } else if (counter > goalScore) {

        console.log("you lose");
        losses += 1;
        $("#loss-counter").text(losses);
        $("#end-message").text("You lose")
 
    }} 

})