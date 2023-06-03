//form validation by simple Js

// reterving html elements from DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    //get the parent element of input feild (.form-control)
  const formControl = input.parentElement;
  //override class
  formControl.className = "form-control error";
  //get the small elemnt of form-element
  const small = formControl.querySelector("small");
  small.innerText = message;
  console.log(message);
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//function to check email is valid
function isValidEmail(email){
 const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 return re.test(String(email).toLowerCase())
}
// create event listner for submit
//eventlistner js k sb se neche hota hai
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "email is required");
  } else if(!isValidEmail(email.value)){
    showError(email, 'invalid email')
  }
  else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "password2 is required");
  } else {
    showSuccess(password2);
  }
});
