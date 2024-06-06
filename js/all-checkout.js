document.addEventListener("DOMContentLoaded", function () {
  // drop down for info-container 👇
  // collecting id
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const materiale = document.getElementById("materiale");
  const shipping = document.getElementById("shipping");

  // hiding box1 and box2
  box1.style.display = "none";
  box2.style.display = "none";

  materiale.addEventListener("click", function () {
    if (box1.style.display === "none") {
      box1.style.display = "block";
    } else {
      box1.style.display = "none";
    }
  });

  shipping.addEventListener("click", function () {
    if (box2.style.display === "none") {
      box2.style.display = "block";
    } else {
      box2.style.display = "none";
    }
  });
  // drop down for info-container 👆
});
