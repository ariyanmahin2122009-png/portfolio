// Footer-e bochor automatic
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Contact form: apnar email app khule message ready kore dey
// EDIT: nicher email ta apnar email diye bodlan
const MY_EMAIL = "ariyanmahin10@gmail.com";

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent("Portfolio message from " + f.get("name"));
  const body = encodeURIComponent(f.get("message") + "\n\nFrom: " + f.get("name") + " (" + f.get("email") + ")");
  window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  document.getElementById("form-note").textContent = "Opening your email app...";
});