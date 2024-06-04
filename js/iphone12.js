document.getElementById("burgerMenu").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("closeBttn").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "0";
});
