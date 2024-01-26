const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



const tl = gsap.timeline()

tl.from('#nav-l img',{
  y: -100,
  opacuty: 0,
  duration: 1,
  // delay: 0.2,
  stagger: 0.1
})
tl.from('#nav-l h1',{
  y: -100,
  opacuty: 0,
  duration: 1,
  // delay: 0.2,
  stagger: 0.1
})

tl.from('#nav-r a',{
    y: -100,
    opacuty: 0,
    duration: 1,
    // delay: 0.5,
    stagger: 0.2
  })

tl.from('#nav-r .login',{
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  // stagger: 0.3
})

// tl.from("#contaner",{
//   opacity:0,
 
//   y: -100,
//   stagger: 0.5,
//   // rotate: 36
// })

gsap.from("#page2 .hfhf",{
  y: -100,
  duration: 2,
  opacity: 0,
  // stagger: 0.5,
  // rotate: 36

  scrollTrigger:{
      trigger:"#page2",
      scroll: "body",
      // markers: true,
      start: "top 30%",
      end: "top 130%",
      scrub: 5,
      // pin: true
  }

})


gsap.from("#page3 iframe",{
  y: -100,
  duration: 2,
  opacity: 0,
  // stagger: 0.5,
  // rotate: 36

  scrollTrigger:{
      trigger:"#page3",
      scroll: "body",
      // markers: true,
      start: "top 30%",
      end: "top 130%",
      scrub: 2,
      // pin: true
  }

})


// gsap.from("#main footer",{
//   y: -100,
//   duration: 2,
//   opacity: 0,
//   // stagger: 0.5,
//   // rotate: 36

//   scrollTrigger:{
//       trigger:"#main",
//       scroll: "body",
//       markers: true,
//       start: "top 130%",
//       end: "top -100%",
//       scrub: 2,
//       // pin: true
//   }

// })
