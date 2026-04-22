const btn = document.getElementById("mobileTogglebtn");
const menu = document.getElementById("mobilemenu");

// Toggle menu open/close (CORE LOGIC)
function toggleMenu() {
  const isOpen = btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute("aria-expanded", String(!isOpen));
  menu.setAttribute("aria-hidden", String(isOpen));

  menu.classList.toggle("hidden");
}

// Close menu (helper function)
function closeMenu() {
  btn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");

  menu.classList.add("hidden");
}

// Button click → toggle open/close
btn.addEventListener("click", toggleMenu);

// Menu link click → auto close (UX improvement)
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});