function showTime() {
  var d = new Date();
  const clock = document.querySelector(".clock");
  if (clock) {
    clock.innerHTML = d.toLocaleTimeString();
  }
}
setInterval(showTime, 1000);

function showDate() {
  var d = new Date();

  document.querySelector(".date").innerHTML = d.toLocaleDateString("pl-PL");
}

showDate();

const navbarIcon = document.querySelector("#js-navbar-toggle");

navbarIcon.addEventListener("click", function () {
  console.log("test");
  const navbar = document.querySelector(".navbar-list");
  console.log(navbar);
  navbar.classList.toggle("active");
});

function logo() {
  const canvas = document.querySelector("#logo");
  canvas.width = 50;
  canvas.height = 50;
  const ctx = canvas.getContext("2d");
  ctx.fillRect(0,0,50,50)
  ctx.strokeStyle = "#FF00FF";
ctx.lineWidth=3;
// ctx.strokeStyle = "#FF00FF";



ctx.beginPath()

ctx.arc(25, 25, 24, 0, 2* Math.PI);
ctx.strokeStyle = "#FFFF00";
ctx.fillStyle = "#FFFF00";
ctx.fill()
ctx.stroke()

ctx.closePath()


  ctx.beginPath();
  ctx.strokeStyle = "#FF00FF";
  ctx.fillStyle="#FFEEFF"

  ctx.moveTo(0,50)
  ctx.lineTo(25,0)
  ctx.moveTo(25,0)
  ctx.lineTo(50,50)
  ctx.moveTo(50,50)
  ctx.lineTo(0,50)
  ctx.fill()
  ctx.stroke()

  ctx.closePath();

  ctx.beginPath()
ctx.font = "italic bold 12px Arial";
ctx.fillStyle = "#FF00FF";
const textMetrics  = ctx.measureText('P&K').width;

ctx.fillText("P&K", 25-(textMetrics/2),40);
ctx.stroke();
ctx.closePath()

}
logo();
