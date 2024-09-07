document.addEventListener("DOMContentLoaded", () => {
  // Simple GSAP animation for header
  gsap.from("header", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
  });

  // Animate the portfolio items as they come into view
  gsap.from(".portfolio-item", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 80%",
    },
  });
});
