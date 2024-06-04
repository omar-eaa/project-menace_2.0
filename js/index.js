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

// arrow left and right 👇
function scrollContainerLeft() {
  const container = document.querySelector(".product-front-page");
  container.scrollLeft -= 400; // Adjust the value to control the scroll amount
}

function scrollContainerRight() {
  const container = document.querySelector(".product-front-page");
  container.scrollLeft += 400; // Adjust the value to control the scroll amount
}
// arrow left and right 👆

// thank you message 📧👇

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

// link connection area 👇

arrowDown;
// arrow down click event
document.addEventListener("DOMContentLoaded", function () {
  const arrowDown = document.getElementById("arrowDown");
  arrowDown.addEventListener("click", function () {
    const bestsellerBtn = document.getElementById("bestseller-btn");
    if (bestsellerBtn) {
      bestsellerBtn.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// link to heavyweightHoodie
document.addEventListener("DOMContentLoaded", function () {
  const heavyweightHoodie = document.getElementById("heavyweightHoodie");
  heavyweightHoodie.addEventListener("click", function () {
    window.location.href = "../html/havyhoodies.html";
  });
});
// link to bæredygtighed
document.addEventListener("DOMContentLoaded", function () {
  const bæredygtighed = document.getElementById("bæredygtighed");
  bæredygtighed.addEventListener("click", function () {
    window.location.href = "../html/bearedygtighed.html";
  });
});

// link to vision mision vædier
document.addEventListener("DOMContentLoaded", function () {
  const vMv = document.getElementById("vMv");
  vMv.addEventListener("click", function () {
    window.location.href = "../html/Om-os.html";
  });
});

// link to coming zoon
document.addEventListener("DOMContentLoaded", function () {
  const comingSoon = document.getElementById("comingSoon");
  comingSoon.addEventListener("click", function () {
    window.location.href = "../html/comming-soon.html";
  });
});

// link to t-shirt
document.addEventListener("DOMContentLoaded", function () {
  const tShirt = document.getElementById("tShirt");
  tShirt.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to jackets
document.addEventListener("DOMContentLoaded", function () {
  const jackets = document.getElementById("jackets");
  jackets.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to jeans
document.addEventListener("DOMContentLoaded", function () {
  const jeans = document.getElementById("jeans");
  jeans.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to jerseys
document.addEventListener("DOMContentLoaded", function () {
  const jerseys = document.getElementById("jerseys");
  jerseys.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to sweatshirts
document.addEventListener("DOMContentLoaded", function () {
  const sweatshirts = document.getElementById("sweatshirts");
  sweatshirts.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to lookbook
document.addEventListener("DOMContentLoaded", function () {
  const lookBook = document.getElementById("lookBook");
  lookBook.addEventListener("click", function () {
    window.location.href = "";
  });
});

// link to 404
document.addEventListener("DOMContentLoaded", function () {
  const baeredygtighed = document.getElementById("baeredygtighed");
  baeredygtighed.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to 404
document.addEventListener("DOMContentLoaded", function () {
  const vMv = document.getElementById("vMv");
  vMv.addEventListener("click", function () {
    window.location.href = "/html/404.html";
  });
});

// link to 404
document.addEventListener("DOMContentLoaded", function () {
  const capCap = document.getElementById("capCap");
  capCap.addEventListener("click", function () {
    window.location.href = "/html/404.html";
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

//  link to hoodie from shop here button
document.addEventListener("DOMContentLoaded", function () {
  const shopHereButton = document.getElementById("shopHereButton");
  shopHereButton.addEventListener("click", function () {
    window.location.href = "/html/hoodies.html";
  });
});

shopHereButtonMobile;

//  link to hoodie from shop here button mobile
document.addEventListener("DOMContentLoaded", function () {
  const shopHereButtonMobile = document.getElementById("shopHereButtonMobile");
  shopHereButtonMobile.addEventListener("click", function () {
    window.location.href = "/html/hoodies.html";
  });
});
