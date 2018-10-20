var h2 = document.querySelector("h2");
var input1 = document.querySelector(".colors1");
var input2 = document.querySelector(".colors2");
var body1 = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient(){
  body1.style.background =
  "linear-gradient(to right, "
  + input1.value
  + ", "
  + input2.value +
  ")";

  h2.textContent = body1.style.background + ";";
}

function genRandColors(){
  var x = Math.round(Math.random()*255);
  var y = Math.round(Math.random()*255);
  var z = Math.round(Math.random()*255);
  var bg = "rgba(" + x + ' ,' + y + ' ,' + z + ')';
  return bg;
}

input1.addEventListener("input", setGradient);

input2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
  var l1 = genRandColors();
  var l2 = genRandColors();
  body1.style.background = "linear-gradient(to right, "
  + l1
  + ", "
  + l2 +
  ")";
})
