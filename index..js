var randomNumber1 = Math.floor(Math.random()*6 ) + 1
var diceImg = "dice" +  randomNumber1 + ".png"

var soucre = "images/" +  diceImg

var img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src",soucre)


var randomNumber2 = Math.floor(Math.random()*6 ) + 1
var diceImg2 = "dice" +  randomNumber2 + ".png"

var soucre2 = "images/" +  diceImg2

var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src",soucre2)



if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins ❤"
}
else if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins ❤"
}
else {
    document.querySelector("h1").innerHTML="Draw"
}