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
    color1.style.border = "3px solid #A73828";
  });

  color2.addEventListener("click", function () {
    removeBorders();
    color2.style.border = "3px solid #A73828";
  });

  color3.addEventListener("click", function () {
    removeBorders();
    color3.style.border = "3px solid #A73828";
  });

  color4.addEventListener("click", function () {
    removeBorders();
    color4.style.border = "3px solid #A73828";
  });

  // Get size option boxes
  const sizeS = document.getElementById("sizeS");
  const sizeM = document.getElementById("sizeM");
  const sizeL = document.getElementById("sizeL");
  const sizeXL = document.getElementById("sizeXL");
  const sizeXXL = document.getElementById("sizeXXL");

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

  // Function to toggle the color
  function toggleColor(element) {
    if (element.style.backgroundColor === "black") {
      removeDefaultColor(element);
    } else {
      setDefaultColor(element);
    }
  }

  // Add event listener for toggling the color on click
  sizeS.addEventListener("click", function () {
    toggleColor(sizeS);
  });

  sizeM.addEventListener("click", function () {
    toggleColor(sizeM);
  });

  sizeL.addEventListener("click", function () {
    toggleColor(sizeL);
  });

  sizeXL.addEventListener("click", function () {
    toggleColor(sizeXL);
  });

  sizeXXL.addEventListener("click", function () {
    toggleColor(sizeXXL);
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
    changeBigImage("/img improved/Hoodie (Brown Patched).webp");
  });

  // pop up close btn 👇

  const popUp = document.getElementById("popUp");
  const closeBtn = document.getElementById("closeBtn");

  popUp.style.display = "none";
  closeBtn.style.fontSize = "2Rem";
  closeBtn.style.fontSize = "2Rem";
  closeBtn.style.fontWeight = "bold";

  btn.addEventListener("click", function () {
    popUp.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popUp.style.display = "none";
  });
});
