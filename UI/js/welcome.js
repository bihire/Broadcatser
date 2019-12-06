const signin = document.getElementById("signin");
const signup = document.getElementById("signup");

const signi = (a, b) => {
  var s = document.getElementsByClassName(a)[0].style;
  s.opacity = 1;
  function fade() {
    (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
  }
  fade();
  var d = document.getElementsByClassName(b)[0].style;
  d.display = "block";
  d.opacity = 1;
  if (a == "signIn") {
    signin.style.display = "none";
    signup.style.display = "block";
  } else {
    signup.style.display = "none";
    signin.style.display = "block";
  }
};

signin.onclick = () => {
  signi("signIn", "signUp");
};
signup.onclick = () => {
  signi("signUp", "signIn");
};
