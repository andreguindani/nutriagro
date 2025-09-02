// AgriNutri - Main JavaScript File
// Handles navigation, modals, forms, and interactive components


// Mobile Menu Toggle - robusto
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");

  if (!toggle || !menu) return;

  // estado inicial acessível
  toggle.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");

  const openMenu = () => {
    menu.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    toggle.innerHTML = "✕";
  };

  const closeMenu = () => {
    menu.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    toggle.innerHTML = "☰";
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que o click suba imediatamente para document
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      if (menu.classList.contains("active")) closeMenu();
    }
  });


  // fechar quando um link do menu for clicado (útil para navegação single-page)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      closeMenu();
    });
  });

  // ao redimensionar para desktop, garantir que o menu esteja fechado
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && menu.classList.contains("active")) {
      closeMenu();
    }
  });
}

// inicializar quando DOM pronto
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  if (typeof setActiveNavLink === "function") setActiveNavLink();
});

// Set Active Navigation Link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    }
  })
}
