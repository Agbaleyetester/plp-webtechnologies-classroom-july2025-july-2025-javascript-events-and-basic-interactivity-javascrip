// Light/Dark Mode Toggle
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Counter Game
let count = 0;
document.getElementById("countButton").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});

// Dropdown Menu
document.getElementById("dropdownBtn").addEventListener("click", () => {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
});

// Tabs
const tabBtns = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContents.forEach(content => content.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  // Clear errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Password validation
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 chars, include 1 number & 1 uppercase.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
    document.getElementById("formMessage").style.color = "green";
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix errors above.";
    document.getElementById("formMessage").style.color = "red";
  }
});
