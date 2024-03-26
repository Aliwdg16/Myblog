function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "admin@wbs.de" && password == "12345") {
    window.location.assign("index.html");
    alert("login successfully");
  } else {
    alert("A Rong Email or Password");
    return;
  }
}
