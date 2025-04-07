// Toggle the sliding menu and hamburger icon.
const hamburger = document.querySelector(".menu-icon-container");
const menuContainer = document.getElementById("menu-container");
const hamburger2 = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger2.classList.toggle("active");
  menuContainer.classList.toggle("active");
});

// Close the menu when clicking on menu-container.active.
menuContainer.addEventListener("click", (event) => {
  if (
    menuContainer.classList.contains("active") &&
    event.target === menuContainer
  ) {
    hamburger2.classList.remove("active");
    menuContainer.classList.remove("active");
  }
});


// Toggle dark mode (change theme toggle icon).
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggleBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? '<img src="logo/brightness.png" alt="" style="filter: brightness(1) invert(1);">'
    : '<img src="logo/sleep-mode.png" alt="">';
});

// Smooth language toggle: toggling between "EN" and "PR".
const langToggleBtn = document.getElementById("lang-toggle");
const quickAccessItems = document.querySelectorAll(".quick-access-container li");
const menuItems = document.querySelectorAll(".menu ul li");
const mapButton = document.querySelector(".map span");
const translateButton = document.querySelector(".translate span");
const locationButton = document.querySelector(".location span");
const mapContainer = document.querySelector(".map-container");
const translateContainer = document.querySelector(".translate-container");
const locationContainer = document.querySelector(".location-container");

langToggleBtn.addEventListener("click", () => {
  langToggleBtn.style.transition = "opacity 0.3s ease";
  langToggleBtn.style.opacity = "0";

  setTimeout(() => {
    const isEnglish = langToggleBtn.textContent === "En";

    // Toggle button text
    langToggleBtn.textContent = isEnglish ? "Fr" : "En";

    // Smoothly translate quick access items
    quickAccessItems.forEach((item, index) => {
      item.style.transition = "opacity 0.3s ease";
      item.style.opacity = "0";
      setTimeout(() => {
        item.textContent = isEnglish
          ? ["Translate", "Map", "Location"][index]
          : ["ترجمه", "نقشه", "موقعیت"][index];
        item.style.opacity = "1";
      }, 300);
    });

    // Smoothly translate menu items
    menuItems.forEach((item, index) => {
      item.style.transition = "opacity 0.3s ease";
      item.style.opacity = "0";
      setTimeout(() => {
        if (index === 0) {
          item.querySelector("a").textContent = isEnglish ? "Cities" : "شهرها";
        }
        item.style.opacity = "1";
      }, 300);
    });

    // Smoothly translate buttons
    [mapButton, translateButton, locationButton].forEach((button, index) => {
      button.style.transition = "opacity 0.3s ease";
      button.style.opacity = "0";
      setTimeout(() => {
        button.textContent = isEnglish
          ? ["Map", "Translate", "Location"][index]
          : ["نقشه", "ترجمه", "موقعیت"][index];
        button.style.opacity = "1";
      }, 300);
    });

    // Smoothly transition the whole containers
    [mapContainer, translateContainer, locationContainer].forEach((container) => {
      container.style.transition = "all 0.3s ease, opacity 0.3s ease";
      container.style.opacity = "0";
      setTimeout(() => {
        container.style.direction = isEnglish ? "ltr" : "rtl";
        container.style.opacity = "1";
      }, 300);
    });

    langToggleBtn.style.opacity = "1";
  }, 300);
});
