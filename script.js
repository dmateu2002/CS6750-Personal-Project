const APP_STORE_URL = "https://apps.apple.com/us/app/id0000000000";

function wireAppStoreCTAs() {
  const ctas = document.querySelectorAll("[data-appstore-cta]");
  ctas.forEach((cta) => {
    cta.setAttribute("href", APP_STORE_URL);
    cta.setAttribute("target", "_blank");
    cta.setAttribute("rel", "noopener noreferrer");
  });
}

function setupRevealAnimations() {
  const nodes = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  nodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
    observer.observe(node);
  });
}

function init() {
  wireAppStoreCTAs();
  setupRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);

