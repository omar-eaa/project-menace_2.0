// note: linkBack dont work it not going to the right path remember to fix❌

// for drop down on header 👇
// Get the shop element
console.log("linkBack");

const shopElement = document.getElementById("shop");

const omOsElement = document.getElementById("omOs");
const linkBack = document.getElementById("linkBack");

// Apply the styles to the back link element
linkBack.style.textDecoration = "none";
linkBack.style.color = "inherit";
linkBack.style.fontSize = "2rem";
linkBack.style.position = "absolute";
linkBack.style.top = "15%";
linkBack.style.left = "5%";

linkBack.addEventListener("click", function () {
  window.location.href = "/html/tshirt.html";
});

// Get the shop nav container
const shopNavContainer = document.getElementById("shop-nav-container");
// get the om os nav container
const omOsNavContainer = document.getElementById("om-os-nav-container");

// hiding containers
shopNavContainer.style.display = "none";
omOsNavContainer.style.display = "none";

// Add event listener for mouseover event on shop element or nav container
shopElement.addEventListener("mouseover", () => {
  // Show the shop nav container
  shopNavContainer.style.display = "block";
  shopNavContainer.style.display = "flex";
  // Hide the omOs nav container
  omOsNavContainer.style.display = "none";
});
shopNavContainer.addEventListener("mouseleave", () => {
  // Hide the shop nav container
  shopNavContainer.style.display = "none";
});

// Add event listener for mouseover event on omOs element or om os nav container
omOsElement.addEventListener("mouseover", () => {
  // Show the omOs nav container
  omOsNavContainer.style.display = "block";
  // Hide the shop nav container
  shopNavContainer.style.display = "none";
});
omOsNavContainer.addEventListener("mouseleave", () => {
  // Hide the omOs nav container
  omOsNavContainer.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  homePage.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
});
