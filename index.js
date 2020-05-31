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
