class Navbar {
  constructor() {
    this.toggleBtn = document.getElementById("mobileTogglebtn");
    this.menu = document.getElementById("mobilemenu");
    this.icon = document.getElementById("menuIcon");

    this.isOpen = false;

    this.init();
  }

  init() {
    this.toggleBtn.addEventListener("click", () => this.toggleMenu());

    // close on outside click
    document.addEventListener("click", (e) => {
      if (
        this.isOpen &&
        !this.menu.contains(e.target) &&
        !this.toggleBtn.contains(e.target)
      ) {
        this.closeMenu();
      }
    });

    // ESC close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeMenu();
      }
    });

    // close on link click
    this.menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isOpen = true;

    // show menu
    this.menu.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "translate-y-4"
    );

    this.menu.classList.add("opacity-100", "translate-y-0");

    // aria update
    this.toggleBtn.setAttribute("aria-expanded", "true");
    this.menu.setAttribute("aria-hidden", "false");

    // icon change
    this.icon.classList.remove("fa-bars");
    this.icon.classList.add("fa-xmark");

    // scroll lock (important SaaS feature)
    document.body.style.overflow = "hidden";
  }

  closeMenu() {
    this.isOpen = false;

    this.menu.classList.add(
      "opacity-0",
      "pointer-events-none",
      "translate-y-4"
    );

    this.menu.classList.remove("opacity-100", "translate-y-0");

    this.toggleBtn.setAttribute("aria-expanded", "false");
    this.menu.setAttribute("aria-hidden", "true");

    this.icon.classList.remove("fa-xmark");
    this.icon.classList.add("fa-bars");

    document.body.style.overflow = "";
  }
}

// init
document.addEventListener("DOMContentLoaded", () => {
  new Navbar();
});