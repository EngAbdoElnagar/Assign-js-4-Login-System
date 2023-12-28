let signUn_btn = document.querySelector("#signUn #btn_s");
let signUn_name = document.querySelector("#signUn #name_s");
let signUn_email = document.querySelector("#signUn #email_s");
let signUn_password = document.querySelector("#signUn #pass_s");

let signUn_N = signUn_name;
let signUn_E = signUn_email;
let usersList = [];

signUn_btn.addEventListener("click", function () {
  if (validationName() && validationEmail() && validationPass()) {
    let user = {
      fname: signUn_name.value,
      em: signUn_email.value,
      pass: signUn_password.value,
    };
    localStorage.setItem("user", JSON.stringify(usersList));
    for (let i = 0; i < usersList.length; i++) {
      if (
        localStorage.getItem("user", JSON.parse(usersList[i].fname == signUn_N))
      ) {
        alert("الاسم موجود مسبقا قم بانشاء اسم اخر");
        return;
      }
      if (
        localStorage.getItem("user", JSON.parse(usersList[i].em == signUn_E))
      ) {
        alert("الايميل موجود مسبقا قم بانشاء ايميل اخر");
        return;
      }
    }
    usersList.push(user);
    signUn_btn.addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  }
  clearForm();
});

function clearForm() {
  signUn_name.value = "";
  signUn_email.value = "";
  signUn_password.value = "";
}

/////////////////////////////////////////////////////////
function validationName() {
  let fnameRegex = /^[A-Za-z]{3,15}$/;
  let nameValue = signUn_name.value;
  if (fnameRegex.test(nameValue) === true) {
    return true;
  } else {
    return alert("Name is Not Valid");
  }
}

function validationEmail() {
  let emailRegex = /^\w+@\w+.\w+$/;
  let emailValue = signUn_email.value;
  if (emailRegex.test(emailValue) === true) {
    return true;
  } else {
    return alert("Email is Not Valid");
  }
}

function validationPass() {
  let passwordRegex = /^[A-Za-z1-9]{8,15}$/;
  let passwordValue = signUn_password.value;
  if (passwordRegex.test(passwordValue) === true) {
    return true;
  } else {
    return alert("Password is Not Valid shoud butwen 8 to 15 charactar");
  }
}
