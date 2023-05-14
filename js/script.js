const submit = document.querySelector(".btn"),
  emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
  form = document.querySelector("form"),
  name = [
    "First Name cannot be empty",
    "Last Name cannot be empty",
    "Looks like this is not an email",
    "Password cannot be empty",
  ];

form.addEventListener("submit", function () {
  const input = document.querySelectorAll("input");
  const text = document.querySelectorAll("form p");

  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < text.length; i++) {
      if (input[i].value === "") {
        input[i].classList.add("error");
        text[i].classList.remove("hidden");
        text[i].innerHTML = name[i];
      } else {
        input[i].classList.remove("error");
        text[i].classList.add("hidden");
        text[i].innerHTML = "";
      }

      if (i == 2 && !input[2].value.match(emailFormat)) {
        input[i].classList.add("error");
        text[i].classList.remove("hidden");
        text[i].innerHTML = name[i];
      }
    }
  }
});
