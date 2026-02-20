// Replace this with your real App Store URL once available.
const APP_STORE_URL = "https://apps.apple.com/us/app/momentum/id0000000000";

for (const link of document.querySelectorAll("[data-app-store-link]")) {
  link.setAttribute("href", APP_STORE_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.14 }
);

for (const block of document.querySelectorAll(".reveal")) {
  observer.observe(block);
}
