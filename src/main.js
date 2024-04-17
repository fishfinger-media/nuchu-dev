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


// HOME HERO ANIMATION

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


// GLOBAL ANIMATIONS

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





// SPLIT CHARACTERS

const splitChars = document.querySelectorAll('[gsap-split-text="chars"]');

splitChars.forEach(splitChars => {
    const text = new SplitType(splitChars);

    gsap.from(text.chars,{
        yPercent: 20,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
        // stagger: {amount: 0.2, from: "random"},
       stagger: 0.02,
       scrollTrigger: {
        trigger: splitChars,
        start: "top 80%",
       }

    })
});

// SPLIT WORDS

const splitWords = document.querySelectorAll('[gsap-split-text="words"]');

splitWords.forEach(splitWords => {
    const text = new SplitType(splitWords);
    gsap.from(text.words,{
        yPercent: 20,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
        stagger: 0.1,
        scrollTrigger: {
            trigger: splitWords,
            start: "top 80%",
        }
    })
});


// SPLIT LINES

const splitLines = document.querySelectorAll('[gsap-split-text="lines"]');

splitLines.forEach(splitLines => {
    const text = new SplitType(splitLines);
    gsap.from(text.lines,{
        yPercent: 20,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1,0.3)",
        stagger: 0.1,
        scrollTrigger: {
            trigger: splitLines,
            start: "top 80%",
        }
    })
});

// THE SCIENCE SECTION

    var scienceTimeline = gsap.timeline();

    // Add animations to the timeline
    scienceTimeline.from(
            ['.thescience_heading.ts_tc-pink', '.thescience_paragraph', '#nosweettxt'], {
                yPercent: 90,
                opacity: 0,
                duration: 1.5,
                stagger: 0.05,
                ease: "elastic.out(0.4,0.3)",
            }
        )
        .from(['.thescience_icon-bg', '#fancy-you'], {
            scale: 0.5,
            opacity: 0,
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


// Star Animation

    const config = {
        starAnimationDuration: 1500,
        minimumTimeBetweenStars: 250,
        minimumDistanceBetweenStars: 75,
        sizes: ["5rem", "2.5rem", "1.6rem"],
        animations: ["fall-1", "fall-2", "fall-3"]
    };

    let last = {
        starTimestamp: new Date().getTime(),
        starPosition: {
            x: 0,
            y: 0
        },
        mousePosition: {
            x: 0,
            y: 0
        }
    };

    let count = 0;

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selectRandom = items => items[rand(0, items.length - 1)];
    const withUnit = (value, unit) => `${value}${unit}`;
    const px = value => withUnit(value, "px");
    const ms = value => withUnit(value, "ms");

    const calcDistance = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
    const calcElapsedTime = (start, end) => end - start;

    const appendElement = element => document.body.appendChild(element);
    const removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

    const createStar = position => {
        const star = document.createElement("span");
        star.className = "star";
        star.style.left = px(position.x);
        star.style.top = px(position.y);
        star.style.height = selectRandom(config.sizes);
        star.style.width = star.style.height;
        star.style.pointerEvents = "none";
        star.style.animationName = config.animations[count++ % 3];
        star.style.animationDuration = ms(config.starAnimationDuration);
        appendElement(star);
        removeElement(star, config.starAnimationDuration);
    };

    const updateLastStar = position => {
        last.starTimestamp = new Date().getTime();
        last.starPosition = position;
    };

    const updateLastMousePosition = position => last.mousePosition = position;

    const handleOnMove = e => {
        const mousePosition = {
            x: e.clientX,
            y: e.clientY + window.scrollY
        };
        if (calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars ||
            calcElapsedTime(last.starTimestamp, new Date().getTime()) > config.minimumTimeBetweenStars) {
            createStar(mousePosition);
            updateLastStar(mousePosition);
        }
        updateLastMousePosition(mousePosition);
    };

    const gummiesElement = document.querySelector('.section_ohmygummies');
    if (gummiesElement) {
        gummiesElement.addEventListener('mousemove', handleOnMove);
        gummiesElement.addEventListener('touchmove', e => handleOnMove(e.touches[0]));
    }

// BUTTON ANIMATIONS
const isDesktop = window.innerWidth >= 992;
const isHomePage = window.location.pathname === '/' || window.location.pathname === '/fr/';

if (isDesktop) {

    if (isHomePage) {
        gsap.set('[data-logosize]', { height: "4.68rem" });

        gsap.to('[data-logosize]', {
            height: "2.5rem",
            scrollTrigger: {
                trigger: ".header",
                start: "bottom top",
                end: "bottom -10vw",
                scrub: 1,
            }
        });
    }
    
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.1,
                duration: 0.8,
                ease: "elastic.out(1,0.3)",
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "elastic.out(1,0.3)",
            });
        });
    });
}
// JAR ANIMATION

gsap.fromTo('.science_heading.small', 
    { scale: 0.8, opacity: 0, rotation: 0 }, 
    { 
        scale: 1, 
        opacity: 1, 
        duration: 1.5, 
        ease: "elastic.out(1,0.3)" 
    }
);

gsap.to('.science_heading.small', {
    rotation: 8,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1 
});

gsap.timeline()
.from('[floating]', {
    scale:0,
    
    duration:1.6,
    ease: "elastic.out(1,0.5)",

})
.to('[floating]', {
    y: 10,
    duration:1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to('[floating="alt"]', {
    y: 10,
    duration:1,
    ease: "power1.inOut",
    yoyo: true,
    delay: 0.5,
    repeat: -1
})

gsap.to('[floating="alt2"]', {
    y: -10,
    duration:1,
    ease: "power1.inOut",
    yoyo: true,
    delay: 0.3,
    repeat: -1  
})



// HERO TUBS ANIMATION
var heroTubs = gsap.timeline();

heroTubs.from('.home-hero_pot-wrapper.is-beauty',{
    scale:0,
    duration:2,
    ease: "elastic.out(0.9,0.4)",
}).from('.home-hero_pot-wrapper.is-calming',{
    scale:0,
    delay:-1.8,
    duration:2,
    ease: "elastic.out(0.9,0.4)",
}).from('.home-hero_pot-wrapper.is-immunity',{
    scale:0,
    delay:-1.8,
    duration:2,
    ease: "elastic.out(0.9,0.4)",
}).from('.home-hero_pot-wrapper.is-beauty',{
     yPercent: 5,
    duration:1.5,
    ease: "power1.inOut",
    yoyo:true,
    delay:-1.8,
    repeat:-1
}).from('.home-hero_pot-wrapper.is-calming',{
    yPercent: 5,
    duration:1.5,
    ease: "power1.inOut",
    yoyo:true,
    delay:-2.5,
    repeat:-1
}).from('.home-hero_pot-wrapper.is-immunity',{
     yPercent: 5,
    duration:1.5,
    ease: "power1.inOut",
    yoyo:true,
    delay:-1,
    repeat:-1
});



const fadeups = document.querySelectorAll('[gsap-fadeup]');

fadeups.forEach(fadeup => {
    gsap.from(fadeup, {
        yPercent: 5,
        duration: 2,
        ease: "elastic.out(1,0.3)",
        scrollTrigger: {
            trigger: fadeup,
            start: 'top 90%',
            
        }
    });

    gsap.from(fadeup, {
        opacity: 0,
        duration: 0.25,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: fadeup,
            start: 'top 90%',
           
        }
    });
});





    gsap.from('[gsap-staggerup]', {
        yPercent:15,
        opacity:0,
        duration:0.5,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
            trigger: '[gsap-staggerup]',
            start: 'top 90%',
        }
    })


    // PRODUCT PAGE ANIMATIONS

    gsap.from('.product-info_imagecontainer', {
        scale: 0.6,
        opacity: 0,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.2223,0 0.3007,1.1527 0.523,1.1527 0.6514,1.1527 0.6968,0.9441 0.8253,0.9441 0.8995,0.9441 0.9257,1 1,1"),
        
    });

   
    gsap.from('[gsap-product]', {
        yPercent:50,
        opacity:0,
        duration:0.8,
        ease: CustomEase.create("custom", "M0,0 C0.2223,0 0.3007,1.1527 0.523,1.1527 0.6514,1.1527 0.6968,0.9441 0.8253,0.9441 0.8995,0.9441 0.9257,1 1,1"),
        stagger: 0.15,
        
    })

    gsap.to('.fixed-basket_container',{
        yPercent: -100,
        duration: 0.7,
        ease: CustomEase.create("custom", "M0,0 C0.2223,0 0.3007,1.1527 0.523,1.1527 0.6514,1.1527 0.6968,0.9441 0.8253,0.9441 0.8995,0.9441 0.9257,1 1,1"),
        scrollTrigger: {
            trigger: '.product-header_default-state',
            start: 'top 5%%',
            end: 'bottom 5%',
            scrub: 1
        }
    });
    
  
 


    function runAnimationOnLargeScreens() {
        if (window.innerWidth > 991) {
            gsap.to('.product-info_imagecontainer', {
                height: "calc(100dvh - 8.1rem - 2rem)",
                ease: "power2.in",
                marker: true,
                scrollTrigger: {
                    trigger: '.header',
                    start: 'bottom 10%',
                    end: 'bottom -10%',
                    scrub: 1,
                }
            });
        }
    }

    // Run the function initially
    runAnimationOnLargeScreens();

    // Run the function whenever the window is resized
    window.addEventListener('resize', runAnimationOnLargeScreens);



// Function to play video and then trigger GSAP animation
function playVideoAndAnimate() {
    var video = document.getElementById('nuchu-pot');
    if(video) {
        video.play(); // Play the video if it exists
    }
}

gsap.set('.allthebest_flower', {scale: 0});

gsap.from('#nuchu-pot', {
    scrollTrigger:{
        trigger: '.allthebest_flower-container',
        start: 'top 70%',
        repeat: 0,
        onEnter: function() {
            playVideoAndAnimate();
            gsap.to('.allthebest_flower', {
                scale: 1,
                duration: 1.5,
                ease: "elastic.out(0.4,0.3)",
                stagger: 0.1,
                delay: 1 
            });
        }
    }
});
