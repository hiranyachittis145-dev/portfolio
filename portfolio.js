// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Change button icon
    themeBtn.textContent = body.classList.contains("dark") ? "☀" : "🌙";
});