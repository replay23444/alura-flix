document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const wrapper = document.querySelector(".wrapper");

  // na base da gambiarra mais é chuva da nuvem
  setTimeout(() => {
    wrapper.classList.add("show");
  }, 3000);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputUser = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    const storedUser = localStorage.getItem("user");
    const storedPassword = localStorage.getItem("password");

    if (inputUser === storedUser && inputPassword === storedPassword) {
      window.location.href = "nicflix.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });
});
