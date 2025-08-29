// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Contact Form (fake submission for now)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formResponse").innerText =
      "✅ Thank you! Your message has been sent.";
    form.reset();
  });
}
