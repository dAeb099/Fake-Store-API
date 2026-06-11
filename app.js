const elForm = document.querySelector("#form");
const elUsername = document.querySelector("#username");
const elPassword = document.querySelector("#password");
const elLoginBtn = document.querySelector("#login-btn");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = elUsername.value.trim();
  const password = elPassword.value.trim();

  const user = {
    username: username,
    password: password,
  };

  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      window.location.href = "./html/admin.html";
    })
    .catch(() => {
      Toastify({
        text: "Login failed! Please check your credentials/internet.",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #ff0000, #a12f2f)",
          margin: "5px",
          borderRadius: "5px",
        },
      }).showToast();
    });
});
