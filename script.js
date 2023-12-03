gsap.from(".logo", { opacity: 0, duration: 1, y: -50, ease: "power2.out" });
gsap.from(".nav-list li", { opacity: 0, duration: 1, y: -30, stagger: 0.2, ease: "power2.out" });
gsap.from(".hero-title", { opacity: 0, duration: 1.5, y: 50, ease: "power2.out" });
gsap.from(".hero-description", { opacity: 0, duration: 2, y: 30, delay: 0.5, ease: "power2.out" });
gsap.from(".hero-btn", { opacity: 0, duration: 2.5, y: 20, delay: 1, ease: "power2.out" });

gsap.from(".product-item", { opacity: 0, duration: 3, y: 50, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".product-item", start: "top 80%" } });
gsap.from(".page-header", { opacity: 0, duration: 4, y: -50, ease: "power2.out" });
gsap.from(".tutorial-item", { opacity: 0, duration: 5, y: 50, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".tutorial-item", start: "top 80%" } });
gsap.from(".about-content", { opacity: 0, duration: 6, y: 50, ease: "power2.out", scrollTrigger: { trigger: ".about-content", start: "top 80%" } });
// gsap.from(".page-header", { opacity: 0, duration: 1, y: -50, ease: "power2.out" });
gsap.from(".contact-form", { opacity: 0, duration: 7, x: -50, ease: "power2.out", scrollTrigger: { trigger: ".contact-form", start: "top 80%" } });
gsap.from(".contact-info", { opacity: 0, duration: 8, x: 50, ease: "power2.out", scrollTrigger: { trigger: ".contact-info", start: "top 80%" } });
gsap.from(".site-footer", { opacity: 0, duration: 9, y: 50, ease: "power2.out" });
gsap.from(".footer-section", { opacity: 0, duration: 9, y: 50, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".footer-section", start: "top 80%" } });
