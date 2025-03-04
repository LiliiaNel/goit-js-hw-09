const STORAGE_KEY = "feedback-form-state";
const formData = { email: "", message: "" };

const form = document.querySelector(".form");
const email = form.querySelector("input");
const message = form.querySelector("textarea");

dataFromLocalStorage();
form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

function onFormInput(event) {
    if (event.target.nodeName === "INPUT") {
   formData.email = event.target.value;
  }
    if (event.target.nodeName === "TEXTAREA") {
     formData.message = event.target.value;
    }    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}


function dataFromLocalStorage() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);
      if (!savedMsg) {
    return;
    }
    const parsedMsg = JSON.parse(savedMsg);  
     Object.keys(parsedMsg).forEach((key) => {
     formData[key] = parsedMsg[key];
    formData[key].value = parsedMsg[key].value;
});
    console.log(formData);
}


function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    const targetForm = event.currentTarget;
    targetForm.reset();
}
