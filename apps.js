const colors = ["green", "FFA500", "rgb(70, 192, 196)", "#f15025", "808000", "maroon", "#DB77A9"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

const randomNumber = getRandomNumber();


document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber(){

    return Math.floor(Math.random() * colors.length);
}