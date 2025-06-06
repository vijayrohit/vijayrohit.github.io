// AOS initialization
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Typed.js for hero section
new Typed("#typed", {
  strings: ["Software Engineer", "Software Optimization"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeIcon.textContent = newTheme === "light" ? "🌙" : "☀️";
  localStorage.setItem("theme", newTheme);
});

// Set theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "light" ? "🌙" : "☀️";

// Particle.js-like background (simple vanilla version)
const canvas = document.getElementById("particle-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  const PARTICLE_COUNT = 70;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.speedY = Math.random() * 1.5 - 0.75;
    this.color = "#2ecc71";
  }

  Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = "#2ecc71";
          ctx.globalAlpha = 0.15;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
}

// Animate skill bars on scroll (when they enter viewport)
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar span");
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      bar.style.width = bar
        .getAttribute("style")
        .match(/width:\s*([\d.]+%)/)[1];
    } else {
      bar.style.width = "0%";
    }
  });
}
window.addEventListener("scroll", animateSkillBars);
window.addEventListener("DOMContentLoaded", animateSkillBars);

// Contact form (demo only: shows alert)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    contactForm.reset();
  });
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  ".NET",
  "Azure",
  "AWS",
  "Python",
  "SQL",
  "SQL Server",
  "Automic",
  "NewRelic",
  "LogicMonitor",
  "Splunk",
  "Dynatrace",
  "Power BI",
];

const grid = document.getElementById("tetris-skills-grid");

if (grid) {
  // Create badges but keep them hidden initially
  const badges = skills.map((skill) => {
    const badge = document.createElement("div");
    badge.className = "tetris-skill-badge";
    badge.textContent = skill;
    grid.appendChild(badge);
    return badge;
  });

  // Sequentially animate each badge
  badges.forEach((badge, i) => {
    setTimeout(() => {
      badge.classList.add("visible");
    }, i * 180); // Adjust 180ms for speed between drops
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const headerOffset = document.querySelector(".header").offsetHeight || 0;
      const elementPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset + 1;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
