const textInput = document.querySelector("#textarea");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");
const button = document.querySelector("#button");
const feedbackForm = document.querySelector("#feedback-form");
const form = document.querySelector("#question-form");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  let text = textInput.value;
  let email = emailInput.value;
  let tel = telephoneInput.value;

  if (text.length > 10) {
    feedbackForm.innerText = "Your question submitted succesfully";
  } else {
    feedbackForm.innerText = "Your question must be more than 10 characters";
  }
}

const hamburgerMenu = document.querySelector(".mobile");
const asideMenu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", openAsideMenu);

function openAsideMenu() {
  asideMenu.classList.toggle("show");
}
