function scrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
scrollTrigger();

function page1Animation() {
    let page1Content = document.querySelector('.page_1_content');
    let orangeCursor = document.querySelector('#cursor');

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(orangeCursor, {
            x: dets.x,
            y: dets.y,
        })
    })

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(orangeCursor, {
            scale: 1,
            opacity: 1,
        })
    })

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(orangeCursor, {
            scale: 0,
            opacity: 0,
        })
    })

    gsap.from('.main-heading span', {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 1.2,
        stagger: 0.2,
    })
}
page1Animation();

function page2Animation() {
    gsap.from(".page2_content p", {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page_2",
            scroller: ".main", 
            start: "top 47%",
            end: "top 30%",
            scrub: 2,
        }
    })

}
page2Animation();


function page4Animation() {
    gsap.from(".page4_content p", {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page_4",
            scroller: ".main",
            start: "top 47%",
            end: "top 30%",
            scrub: 2,
        }
    })
}
page4Animation();


function page5Animation() {
    gsap.from('.page5_content .menuLine div', {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.page_5',
            scroller: '.main',
            start: "top 40%",
            end: "top 10%",
            scrub: 2,
        }
    })
}
page5Animation()


function page6Animation() {
    let aboutUs = document.querySelector('.page_6 .about_us');
    let aboutHeading = document.querySelector('.page_6 .about_us h2');

    gsap.to(".page_6 .video_content", {
        width: '100%',
        duration: 0.6,
        scrollTrigger: {
            trigger: ".page_6 .video_content",
            scroller: ".main",
            start: "top 47%",
            end: "top 0%",
            scrub: 2,
        }
    })

    aboutUs.addEventListener('mouseenter', function(){
        gsap.to(aboutHeading, {
            text: 'About Us',
            duration:1,
            ease: "elastic.out(1,0.3)"
        })
    })

    aboutUs.addEventListener('mouseleave', function() {
        gsap.to(aboutHeading, {
            text: 'Get to know us',
            duration: 1,
            ease: "elastic.out(1,0.3)"
        })
    })
}
page6Animation();

function footerAnimation() {
    gsap.from('.footer-row2 .main-heading span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: true
    })

    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".footer",
    //         scroller: ".main",
    //         markers: true,
    //         start: "top 40%",
    //         end: "top 0%",
    //         scrub: 2,
    //     }
    // });

    // tl.from('.footer-row2 .main-heading span', {
    //     y: 120,
    //     opacity: 0,
    //     delay: 0.5
    // })


}
footerAnimation();