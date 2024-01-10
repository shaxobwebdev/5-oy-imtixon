const form = document.getElementById("form");
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";

      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

showHiddenPass("login-pass", "login-eye");

const handleSubmit = (e) => {
  e.preventDefault();
  const username = e.target[0].value;
  const password = e.target[1].value;

  localStorage.setItem("userData", JSON.stringify({ username, password }));
  e.target.reset();

  window.location.href = "home.html";
};

form.addEventListener("submit", handleSubmit);
