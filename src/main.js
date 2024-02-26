import { gsap } from "gsap";
import { ScrollTrigger, CustomEase } from "gsap/all";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

// WAVE TEXT ANIMATION

// wave-text has an attribute of startOffset, this is moved from 0 to -50% as the user scrolls down. 
gsap.to("#wave-text", {
    attr: {
        startOffset: "-50%"
    },
    scrollTrigger: {
        trigger: ".section_wave",
        scrub: 1,
    }
});


gsap.to('[data-logosize="large"]', {
    height: "2.5rem",
    scrollTrigger: {
        trigger: ".header",
        start: "bottom top",
        end: "bottom -10vw",
        scrub: 1,
    }

})

// home hero text animation
gsap.from('.strapline', {
    y: 40,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1,0.3)",
})
gsap.from('[home-button]', {
    y: 20,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: "elastic.out(1,0.3)",
})
gsap.from('.home-hero_icons', {
    y: 20,
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    ease: "elastic.out(1,0.3)",
})


// MEET YOUR MATCH SECTION

gsap.from('.collection_product-wrapper', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: CustomEase.create("custom", "M0,0 C0.2223,0 0.3007,1.1527 0.523,1.1527 0.6514,1.1527 0.6968,0.9441 0.8253,0.9441 0.8995,0.9441 0.9257,1 1,1"),

    scrollTrigger: {
        trigger: ".section_meetyourmatch",
        start: "top center",
        end: "bottom 20%"
    }
})


// Headings [gsap-heading] attribute
const headings = document.querySelectorAll('[gsap-heading]');

headings.forEach(heading => {
    gsap.from(heading, {
        yPercent: 40,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
        scrollTrigger: {
            trigger: heading,
            start: "top 90%",
        }
    })
});

// Headings [gsap-paragraph] attribute
const paragraphs = document.querySelectorAll('[gsap-paragraph]');

paragraphs.forEach(paragraph => {
    gsap.from(paragraph, {
        yPercent: 90,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
        scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
        }
    })
});


gsap.from('.allthebest_flower',{
    scale:0,
    duration: 1.5,
    ease: "elastic.out(0.4,0.3)",
    stagger: 0.1,

    scrollTrigger:{
        trigger: ".section_allthebest",
        start: "top 60%",
    }
})





var scienceTimeline = gsap.timeline();

// Add animations to the timeline
scienceTimeline.from(
    ['.thescience_heading.ts_tc-pink', '.thescience_paragraph', '#nosweettxt'], 
    {
        yPercent: 90,
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "elastic.out(0.4,0.3)",
    }
)
.from('.thescience_icon-bg',{
    scale:0.5,
    opacity:0,
    duration: 1,
    ease: "elastic.out(0.4,0.3)",
    stagger: 0.1,
}, "-=1.6"); // Relative delay

// Define the ScrollTrigger
ScrollTrigger.create({
    trigger: ".section_science", 
    start: "top 40%", 
    animation: scienceTimeline, 

    
});