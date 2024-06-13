// arrow down click
document.addEventListener("DOMContentLoaded", function () {
  const arro = document.getElementById("arro");
  arro.addEventListener("click", function () {
    window.location.href = "#pG";
  });
});

// Get the shop element
const shopElement = document.getElementById("shop");
const omOsElement = document.getElementById("omOs");

// Get the shop nav container
const shopNavContainer = document.getElementById("shop-nav-container");
// Get the om os nav container
const omOsNavContainer = document.getElementById("om-os-nav-container");

// Hiding containers
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

// Arrow left and right scrolling
function scrollContainerLeft() {
  const container = document.querySelector(".product-front-page");
  container.scrollLeft -= 400; // Adjust the value to control the scroll amount
}

// bestseller produckt link path
const hoodiePath = document.getElementById("hoodiePath");
const tshirtPath = document.getElementById("tshirtPath");

// bestseller produckt link path
hoodiePath.addEventListener("click", function () {
  window.location.href = "/html/checkout-hoodie.html";
});
tshirtPath.addEventListener("click", function () {
  window.location.href = "/html/checkout-tshirt.html";
});

function scrollContainerRight() {
  const container = document.querySelector(".product-front-page");
  container.scrollLeft += 400; // Adjust the value to control the scroll amount
}

// Thank you message
const subscribeButton = document.getElementById("subscribeButton");
const messageContainer = document.getElementById("messageContainer");
const emailSection = document.getElementById("emailSection");

messageContainer.style.display = "none";

subscribeButton.addEventListener("click", function () {
  messageContainer.style.display = "block";
  emailSection.style.display = "none";

  setTimeout(function () {
    messageContainer.style.display = "none";
    emailSection.style.display = "block";
  }, 3000);
});

// Links and paths
const links = [
  { id: "tShirt", path: "/html/tshirt.html" },
  { id: "jackets", path: "/html/404.html" },
  { id: "jeans", path: "/html/404.html" },
  { id: "jerseys", path: "/html/404.html" },
  { id: "sweatshirts", path: "/html/404.html" },
  { id: "lookBook", path: "/html/lookbook.html" },
  { id: "baeredygtighed", path: "/html/404.html" },
  { id: "vMv", path: "/html/404.html" },
  { id: "capCap", path: "/html/404.html" },
  { id: "shopHereButton", path: "/html/hoodies.html" },
  { id: "shopHereButtonMobile", path: "/html/hoodies.html" },
  { id: "comingSoon", path: "/html/comming-soon.html" },
];

// Add event listeners for navigation
links.forEach((link) => {
  const element = document.getElementById(link.id);
  if (element) {
    element.addEventListener("click", function () {
      window.location.href = link.path;
    });
  }
});

// Arrow down click event
document.addEventListener("DOMContentLoaded", function () {
  const arrowDown = document.getElementById("arrowDown");
  arrowDown.addEventListener("click", function () {
    const bestsellerBtn = document.getElementById("bestseller-btn");
    if (bestsellerBtn) {
      bestsellerBtn.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Path to hoodie
document.addEventListener("DOMContentLoaded", function () {
  const path = document.getElementById("path");
  path.addEventListener("click", function () {
    window.location.href = "../html/hoodies.html";
  });
});
