const input = document.getElementById("email");
const btn = document.getElementById("btn");
const errMsg = document.getElementById("errMsg");
const errIcon = document.getElementById("errIcon");
const formControl = document.getElementById("formControl");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", () => {
  let err = false;
  if (input.value === "" || !validateEmail(input.value)) err = true;
  if (err) {
    errMsg.classList.remove("hidden");
    formControl.classList.add("border-softRed");
    errIcon.classList.remove("hidden");
  }
});
