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

tl.from("#contaner",{
  opacity:0,
 
  y: -100,
  stagger: 0.5,
  // rotate: 36
})

gsap.to("#page2 .hfhf",{
  width: '100%',

  scrollTrigger:{
      trigger:"#page2",
      scroll: "body",
      markers: true,
      start: "top 0",
      end: "top -100%",
      scrub: 2,
      pin: true
  }

})

