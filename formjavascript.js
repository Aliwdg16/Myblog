function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "admin@wbs.de" && password == "12345") {
    window.location.assign("myblog.html");
    alert("login successfully");
  } else {
    alert("A Rong Email or Password");
    return;
  }
}
