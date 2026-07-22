// Custom Cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animateRing);
}
animateRing();

document
  .querySelectorAll("a, button, .diff-card, .skill-pill")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      ring.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      ring.classList.remove("hover");
    });
  });

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
);
reveals.forEach((el) => observer.observe(el));

// Counters
function animateCounter(el, target, suffix = "") {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const heroObs = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        animateCounter(document.getElementById("counter-projects"), 100, "+");
        animateCounter(document.getElementById("counter-years"), 5, "+");
        animateCounter(document.getElementById("counter-clients"), 50, "+");
      }, 900);
      heroObs.disconnect();
    }
  },
  { threshold: 0.3 },
);
heroObs.observe(document.getElementById("hero"));

// Nav scroll effect
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.background =
    window.scrollY > 50 ? "rgba(8,8,8,0.9)" : "rgba(8,8,8,0.6)";
});

// Swiper Initialization
document.addEventListener("DOMContentLoaded", () => {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  new Swiper(".cases-swiper", swiperOptions);
});
