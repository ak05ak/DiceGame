var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var string1 = "images/dice" + randomNumber1 + ".png";
var string2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", string1);
document.querySelectorAll("img")[1].setAttribute("src", string2);
if (randomNumber1 > randomNumber2)
  document.querySelector(".heading").innerHTML = "Player1 wins!";
else if (randomNumber2 > randomNumber1)
  document.querySelector(".heading").innerHTML = "Player2 wins!";
else document.querySelector(".heading").innerHTML = "Draw!";
