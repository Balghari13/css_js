//re-factoring with better way

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
function checkEmail(input){
 const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 //trim() remove/neglect spaces
 if(re.test(email.value.trim())){
  showSuccess(email)
 }else{
  showError(email, 'Enter a valid email')
 }
}
//check req feild
function checkRequiredFeild(arrayInput){
  arrayInput.forEach(function(input){
     if(input.value===''){
      showError(input, `${getFeildID(input)} is required`)
     }
     else{
      showSuccess(input)
     }
  })
}
//check len
function checkLenght(input, min, max) {
  if(input.value.length<min){
    showError(input, `${getFeildID(input)} atleast ${min} character`)
  }else if(input.value.length>max){
    showError(input, `${getFeildID(input)} should less than ${max}`)
  }else{
    showSuccess(input)
  }
}
//check confirm paswrd
function checkPassword(input1, input2){
  if(input1.value!==input2.value){
    showError(input2, 'Password does not match')
  }else{
    showSuccess(input1,input2)
  }
}

function getFeildID(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// create event listner for submit
//eventlistner js k sb se neche hota hai
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequiredFeild([username, email, password,password2])
  checkLenght(username, 3,10);
  checkLenght(password, 6,15)
  checkEmail(email)
  checkPassword(password,password2)
});

