document.addEventListener("DOMContentLoaded", function () {
  // Get color option boxes
  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const color3 = document.getElementById("color3");
  const color4 = document.getElementById("color4");

  // Function to remove borders from all color boxes
  function removeBorders() {
    color1.style.border = "none";
    color2.style.border = "none";
    color3.style.border = "none";
    color4.style.border = "none";
  }

  color1.addEventListener("click", function () {
    removeBorders();
    color1.style.border = "2px solid #000000";
  });

  color2.addEventListener("click", function () {
    removeBorders();
    color2.style.border = "2px solid #000000";
  });

  color3.addEventListener("click", function () {
    removeBorders();
    color3.style.border = "2px solid #000000";
  });

  color4.addEventListener("click", function () {
    removeBorders();
    color4.style.border = "2px solid #000000";
  });

  // Get size option boxes
  // Get size option boxes
  const sizeS = document.getElementById("sizeS");
  const sizeM = document.getElementById("sizeM");
  const sizeL = document.getElementById("sizeL");
  const sizeXL = document.getElementById("sizeXL");
  const sizeXXL = document.getElementById("sizeXXL");

  // Get the span element that will display the selected size
  const selectedSizeSpan = document.querySelector(".pop-size-s");

  // Function to add black color with white text
  function setDefaultColor(element) {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  }

  // Function to remove the default color
  function removeDefaultColor(element) {
    element.style.backgroundColor = "white";
    element.style.color = "black";
  }

  // Function to remove default color from all size options
  function resetAllColors() {
    removeDefaultColor(sizeS);
    removeDefaultColor(sizeM);
    removeDefaultColor(sizeL);
    removeDefaultColor(sizeXL);
    removeDefaultColor(sizeXXL);
  }

  // Function to set the selected color
  function setSelectedColor(element, size) {
    resetAllColors();
    setDefaultColor(element);
    selectedSizeSpan.textContent = size;
  }

  // Add event listeners for setting the selected color on click
  sizeS.addEventListener("click", function () {
    setSelectedColor(sizeS, "S");
  });

  sizeM.addEventListener("click", function () {
    setSelectedColor(sizeM, "M");
  });

  sizeL.addEventListener("click", function () {
    setSelectedColor(sizeL, "L");
  });

  sizeXL.addEventListener("click", function () {
    setSelectedColor(sizeXL, "XL");
  });

  sizeXXL.addEventListener("click", function () {
    setSelectedColor(sizeXXL, "XXL");
  });

  //   change hoodie place
  // Get the big image element
  const bigImage = document.getElementById("bigImage");

  // Get all small images
  const smallImages = document.querySelectorAll(".small-img-hoodie");

  // Add click event listeners to each small image
  smallImages.forEach(function (smallImage) {
    smallImage.addEventListener("click", function () {
      // Swap the src attribute of the big image and the clicked small image
      const tempSrc = bigImage.src;
      bigImage.src = smallImage.src;
      smallImage.src = tempSrc;
    });
  });

  //   color box change img src
  function changeBigImage(colorImgSrc) {
    bigImage.src = colorImgSrc;
  }

  // Add click event listeners to each color option
  color1.addEventListener("click", function () {
    changeBigImage("/img/hoodies-img/Hoodie (Light Blue Patched).jpg");
  });

  color2.addEventListener("click", function () {
    changeBigImage("/img/hoodies-img/Hoodie (Black Patched).jpg");
  });

  color3.addEventListener("click", function () {
    changeBigImage("/img/hoodies-img/Hoodie(Black Black Patched).jpg");
  });

  color4.addEventListener("click", function () {
    changeBigImage("/img_improved/Hoodie (Brown Patched).webp");
  });

  // pop up close btn and shopping cart  👇

  const counter = document.getElementById("counter");
  const btn = document.getElementById("btn");
  const shoppingCart = document.getElementById("shoppingCart");
  const popUp = document.getElementById("popUp");
  const closeBtn = document.getElementById("closeBtn");

  // hide counter
  counter.style.display = "none";

  btn.addEventListener("click", function () {
    counter.style.display = "block";
    counter.textContent = "1";
  });

  popUp.style.display = "none";
  closeBtn.style.fontSize = "2Rem";
  closeBtn.style.fontSize = "2Rem";
  closeBtn.style.fontWeight = "bold";

  // btn.addEventListener("click", function () {
  //   popUp.style.display = "block";
  // });
  shoppingCart.addEventListener("click", function () {
    popUp.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popUp.style.display = "none";
  });
});
