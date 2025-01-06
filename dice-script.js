

var p1=(Math.floor(Math.random()*6))+1;
console.log(p1);
var i1="dice"+p1+".png";

var p2=(Math.floor(Math.random()*6))+1;
console.log(p2);
var i2="dice"+p2+".png";

document.querySelectorAll(".img1")[0].src=i1;
document.querySelectorAll(".img2")[0].src=i2;

if(p1>p2){
    document.querySelector(".container>h1").innerHTML="Player 1 Wins!";
}
else if(p2>p1){
    document.querySelector(".container>h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector(".container>h1").innerHTML="Draw";
}


