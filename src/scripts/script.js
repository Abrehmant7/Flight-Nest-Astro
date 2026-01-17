import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    // 1. INTRO ANIMATION (Loader)
    // The loader divs start at height: 100% (covering screen) via CSS/Tailwind
    // We animate them to 0% to reveal the content under them.
    const tl1 = gsap.timeline();

    tl1.to(".loader-div", {
        height: "0%",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.inOut",
        delay: 0.2
    })
        .to(".loader-container", {
            display: "none",
            duration: 0
        });

    // 2. MENU ANIMATION
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector(".cross-btn");
    const menuOverlayDiv = document.querySelector("#menu-overlay-div");

    // We create a timeline for opening, paused initially
    const menuTl = gsap.timeline({ paused: true });

    // Open Animation
    menuTl.to(menuOverlayDiv, {
        display: "flex",
        duration: 0
    })
        .from(".menu-overlay", {
            height: "0%",
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut"
        })
        .to(".menu-content", {
            opacity: 1,
            duration: 0.3
        }, "-=0.2")
        .to(".menu-link", {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.2")
        .to(".cross-btn", {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(1.7)"
        }, "-=0.4");

    // Handlers
    menuBtn?.addEventListener("click", () => {
        menuTl.play();
    });

    closeBtn?.addEventListener("click", () => {
        menuTl.reverse();
    });
});