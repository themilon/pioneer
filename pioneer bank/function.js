 //  Login btn section
 const logInBtn = document.getElementById("login");
 logInBtn.addEventListener("click", function() {
     const LogInArea = document.getElementById("login-area");
     LogInArea.style.display = "none";
     const transitionArea = document.getElementById("transition-area");
     transitionArea.style.display = "block";
 });

 const depositBtn = document.getElementById("deposit-btn");
 depositBtn.addEventListener("click", function() {
     const depositAmount = document.getElementById("deposit-amount").value;
     const depositNumber = parseFloat(depositAmount);

     updateSpanText("current-Deposit", depositNumber);
     updateSpanText("current-balance", depositNumber);

     document.getElementById("deposit-amount").value = "";

 })
 const withdrawBtn = document.getElementById("withdraw-btn");
 withdrawBtn.addEventListener("click", function() {
     const withdrawMoney = document.getElementById("withdraw-target").value;
     const withdrawAmount = parseFloat(withdrawMoney);
     updateSpanText("withdraw-balance", withdrawAmount);
     updateSpanText("current-balance", -1 * withdrawAmount);
 })

 function updateSpanText(id, depositNumber) {
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalAmount = depositNumber + currentNumber;
     document.getElementById(id).innerText = totalAmount;
 }