var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+randomnumber1+".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src", randomimage1);



var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomnumber2+".png";
var image1=document.querySelector(".img2");
image1.setAttribute("src", randomimage2);


if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").textContent="Player1 Wins🚩";
}
else if (randomnumber1<randomnumber2) {

  document.querySelector("h1").textContent="Player2 Wins🚩";
}
else {
  document.querySelector("h1").textContent="Match Draw";
}
