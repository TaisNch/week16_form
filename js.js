const myForm = document.forms.myForm;
const inputs = document.querySelectorAll(".input_form");
const button = document.querySelector(".submitBtn");

let errorMassage = [];
function checkValidity(input) {
  errorMassage = [];
  let validity = input.validity;
  if (validity.typeMismatch) {
    input.classList.add("error");
    errorMassage.push("Неверный формат заполнения");
  } 
  else{input.classList.remove("error");}
    if (validity.patternMismatch) {
      input.classList.add("error");
      errorMassage.push(
      "Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру"
    );
  } 
  else{input.classList.remove("error");}
  if (validity.tooLong) {
    input.classList.add("error");
    errorMassage.push("Количество символов не может быть больше 20");
  } 
  else{input.classList.remove("error");}
    if (validity.tooShort) {
      input.classList.add("error");
      errorMassage.push(
      `Количество символов должно быть не меньше ${input.getAttribute(   "minlength"  )}`
    );}
    else{input.classList.remove("error");}
  if (validity.valueMissing) {
    input.classList.add("error");
    errorMassage.push("Поле не заполнено");
  }
  else{input.classList.remove("error");}
  }
const userName = myForm.elements.name;
const userNameError = document.getElementById("userNameError");
const email = myForm.elements.email;
const emailError = document.getElementById("emailError");
const age = myForm.elements.age;
const ageError = document.getElementById("ageError");
const profession = myForm.elements.profession;
const professionError = document.getElementById("professionError");
const password = myForm.elements.password;
const passwordError = document.getElementById("passwordError");

const errorMassages = () => {
  checkValidity(userName);
  userNameError.textContent = errorMassage.join(", ");
  checkValidity(email);
  emailError.textContent = errorMassage.join(", ");
  checkValidity(age);
  ageError.textContent = errorMassage.join(", ");
  checkValidity(profession);
  professionError.textContent = errorMassage.join(", ");
  checkValidity(password);
  passwordError.textContent = errorMassage.join(", ");
  
};

const checkbox = document.getElementById("checkbox");
const chekboxError = document.getElementById("chekboxError");
checkbox.addEventListener ('change', function (){
  if (checkbox.checked) {
   submitBtn.disabled = !checkbox.checked;
  } 
  else {
   chekboxError.textContent = "Необходимо согласиться с условиями обработки";}
 })

 const checkAllInputs = () => {
  for (let input of inputs) {
    checkValidity(input);
  }
}

button.onclick = (event) => {
  event.preventDefault();
  checkAllInputs();
  errorMassages();
  };


// const cleanForm = () => {
//   form.reset();
//   userNameError.textContent = "";
//   emailError.textContent = "";
//   ageError.textContent = "";
//   professionError.textContent = "";
//   passwordError.textContent = "";
//   chekboxError.textContent = "";
// };

userName.addEventListener("input", function (evt) {
  checkValidity(userName);
  userNameError.textContent=errorMassage.join(", ");
});
email.addEventListener("input", function (evt) {
  checkValidity(email);
  emailError.textContent=errorMassage.join(", ");
});
age.addEventListener("input", function (evt) {
  checkValidity(age);
  ageError.textContent=errorMassage.join(", ");
});
