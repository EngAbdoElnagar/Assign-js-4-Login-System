let main_btn = document.querySelector("#main #btn");
let main_email = document.querySelector("#main #email");
let main_password = document.querySelector("#main #pass");

let email = main_email.value;
let pass = main_password.value;
let localStorageData = localStorage.getItem("user");

let box_wellcome = document.getElementById("box_wellcome");

main_btn.addEventListener("click", function () {
  console.log("ffffffffff")
  if (localStorageData) {
    let data = JSON.parse(localStorageData);
    let existingUser = data.find(
      (user) => user.em === email && user.pass === pass
    );
    if (existingUser) {
      localStorage.getItem("user", JSON.parse(usersList[i].fname));
      window.location.href = "../wellcome/wellcome.html";
      box_wellcome.innerHTML =
        box_wellcome +
        `<h1 class="bg-danger p-5 w-75 text-center shadow-lg group"
      id="welcome_name"
      >Welcome ${localStorage.getItem(
        "user",
        JSON.parse(usersList[i].fname)
      )}</h1>`;

    } else {
      alert("اسم المستخدم او كلمة المرور غير صحيحة");
    }
  }
});

