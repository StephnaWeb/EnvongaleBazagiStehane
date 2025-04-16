// Affiche le bouton "Retour en haut" quand on scroll
const btnTop = document.getElementById("btn-top");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// Fait remonter en haut de la page en douceur
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animation fade-in au scroll (si tu as des éléments avec la classe fade-in)
const fadeInElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    }
  });
}, {
  threshold: 0.3
});

fadeInElements.forEach(el => {
  appearOnScroll.observe(el);
});

// Active le lien du menu correspondant à la section en cours
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
