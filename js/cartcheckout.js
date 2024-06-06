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

document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  homePage.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
});


document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const postcode = document.getElementById('postcode').value;
  const country = document.getElementById('country').value;
  const phone = document.getElementById('phone').value;
  const quantity = document.getElementById('quantity').value;

  const orderDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      postcode: postcode,
      country: country,
      phone: phone,
      quantity: quantity
  };

  localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

  // window.location.href = "/html/carthoodie";
});
