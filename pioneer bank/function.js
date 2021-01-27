 //  Btn section
 const logInBtn = document.getElementById("login");
 logInBtn.addEventListener("click", function() {
     const LogInArea = document.getElementById("login-area");
     LogInArea.style.display = "none";
     const transitionArea = document.getElementById("transition-area");
     transitionArea.style.display = "block";
 });
 //  hello