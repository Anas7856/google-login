document.addEventListener("DOMContentLoaded", function () {
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextBtn = document.getElementById("nextBtn");
  const loginBtn = document.getElementById("loginBtn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const displayEmail = document.getElementById("displayEmail");
  const showPasswordCheckbox = document.getElementById("showPassword");
  const userEmailDisplay = document.getElementById("userEmailDisplay");

  // Go to step 2 when Next is clicked
  nextBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    if (email) {
      displayEmail.textContent = email;

      // Animate transition
      step1.classList.add("slide-out");

      setTimeout(() => {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");

        // Small delay before showing step2
        setTimeout(() => {
          step2.classList.add("slide-in");
          passwordInput.focus();
        }, 50);
      }, 300);
    } else {
      // Show validation message
      emailInput.style.borderColor = "#d93025";
      emailInput.focus();
    }
  });

  // Go back to step 1 when email is clicked
  userEmailDisplay.addEventListener("click", function () {
    step2.classList.remove("slide-in");

    setTimeout(() => {
      step2.classList.add("hidden");
      step1.classList.remove("hidden");
      step1.classList.remove("slide-out");

      setTimeout(() => {
        emailInput.focus();
      }, 50);
    }, 300);
  });

  // Show/hide password
  showPasswordCheckbox.addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";
  });

  // Login button click handler
  loginBtn.addEventListener("click", function () {
    const password = passwordInput.value.trim();
    if (password) {
      // Here you would typically send the credentials to a server
      alert(
        "Login successful!\nEmail: " +
          displayEmail.textContent +
          "\nPassword: " +
          password
      );
    } else {
      passwordInput.style.borderColor = "#d93025";
      passwordInput.focus();
    }
  });

  // Allow Enter key to proceed
  emailInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      nextBtn.click();
    }
  });

  passwordInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      loginBtn.click();
    }
  });
});
