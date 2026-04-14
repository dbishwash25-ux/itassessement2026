const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme") || "dark";
body.classList.add(savedTheme);
toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
body.classList.toggle("dark");
body.classList.toggle("light");

const currentTheme = body.classList.contains("dark") ? "dark" : "light";
localStorage.setItem("theme", currentTheme);

toggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
});