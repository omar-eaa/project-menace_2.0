document.addEventListener("DOMContentLoaded", function () {
  // Get color option boxes
  const hoodieColor1 = document.getElementById("hoodieColor1");
  const hoodieColor2 = document.getElementById("hoodieColor2");
  const hoodieColor3 = document.getElementById("hoodieColor3");
  const hoodieColor4 = document.getElementById("hoodieColor4");

  // Get the big image element
  const bigImage = document.getElementById("bigImage");

  // Get the popup image element
  const popupImg = document.getElementById("popupImg");

  // get cartcheckout.html tag element
  const productImg = document.getElementById("productImg");

  // Function to change big image, popup image, and product image in cartcheckout.html
  function changeImages(colorImgSrc) {
    if (bigImage) bigImage.src = colorImgSrc;
    if (popupImg) popupImg.src = colorImgSrc;
    if (productImg) productImg.src = colorImgSrc;

    // Store the selected image in localStorage
    localStorage.setItem("selectedImage", colorImgSrc);
  }

  // Function to remove borders from all color boxes
  function removeBorders() {
    hoodieColor1.style.border = "none";
    hoodieColor2.style.border = "none";
    hoodieColor3.style.border = "none";
    hoodieColor4.style.border = "none";
  }

  // Add click event listeners to each color option
  hoodieColor1.addEventListener("click", function () {
    removeBorders();
    hoodieColor1.style.border = "2px solid #000000";
    changeImages("/img_improved/Hoodie (Black Patched).webp");
  });

  hoodieColor2.addEventListener("click", function () {
    removeBorders();
    hoodieColor2.style.border = "2px solid #000000";
    changeImages("/img_improved/Hoodie (Green Patched) copy.webp");
  });

  hoodieColor3.addEventListener("click", function () {
    removeBorders();
    hoodieColor3.style.border = "2px solid #000000";
    changeImages("/img_improved/Hoodie (Light Blue Patched).webp");
  });

  hoodieColor4.addEventListener("click", function () {
    removeBorders();
    hoodieColor4.style.border = "2px solid #000000";
    changeImages("/img_improved/Hoodie (Brown Patched).webp");
  });

  // Other existing code...

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

  // Change hoodie place
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

  // Popup close button and shopping cart
  const counter = document.getElementById("counter");
  const btn = document.getElementById("btn");
  const shoppingCart = document.getElementById("shoppingCart");
  const popUp = document.getElementById("popUp");
  const closeBtn = document.getElementById("closeBtn");

  // Hide counter
  counter.style.display = "none";

  btn.addEventListener("click", function () {
    counter.style.display = "block";
    counter.textContent = "⚫️";
  });

  popUp.style.display = "none";
  closeBtn.style.fontSize = "2Rem";
  closeBtn.style.fontWeight = "bold";

  shoppingCart.addEventListener("click", function () {
    popUp.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popUp.style.display = "none";
  });
});
