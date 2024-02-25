import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// WAVE TEXT ANIMATION

// wave-text has an attribute of startOffset, this is moved from 0 to -50% as the user scrolls down. 
    gsap.to("#wave-text", {
        attr: {startOffset: "-50%"},
        scrollTrigger: {
            trigger: ".section_wave",
            scrub: 1,
        }
    });


gsap.to(".nav_logo",{
    height: "2.5rem",
    scrollTrigger: {
        trigger: ".header",
        start: "bottom top",
        end: "bottom -10vw",
        scrub: 1,
    }

})