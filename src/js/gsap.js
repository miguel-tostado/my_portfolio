// ScrollTrigger.saveStyles(
//   '.hero--color-block, .hero--hello, .hero--title-span, .hero--color-block, .hero--div, .hero--sub, .hero--pitch, .hero--cta, .hero--see-next',
// )

const body = document.getElementById('body')

body.style.visibility = 'visible'

ScrollTrigger.matchMedia({
  //  > 1062px to prevent overflow on x axis
  '(min-width: 1063px)': function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline()
    const defaultSubHeroSection = {opacity: 0, y: '-10vh'}

    gsap.set('.hero--sub', {opacity: 0, y: 50})
    gsap.set('.hero--pitch', defaultSubHeroSection)
    gsap.set('.hero--cta', defaultSubHeroSection)
    gsap.set('.hero--see-next', defaultSubHeroSection)

    heroDisplay
      .to('.hero--color-block', {
        duration: 1,
        width: 192,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .from('.hero--title-span', {duration: 1, y: '9vw', ease: 'power3.out'})
      .to('.hero--color-block', {
        duration: 10,
        height: 100,
        ease: 'elastic.out',
      })
      .to('.hero--div', {duration: 1, y: '-25vh', ease: 'power3.out'}, '-=9')
      .to('.hero--sub', {duration: 0.65, opacity: '100%', y: 0}, '-=10')
      .to(
        '.hero--pitch',
        {duration: 1, opacity: '100%', y: '-40vh', ease: 'power3.out'},
        '-=9',
      )
      .to(
        '.hero--cta',
        {duration: 1, opacity: '100%', y: '-39vh', ease: 'power3.out'},
        '-=9',
      )
      .to('.hero--see-next', {duration: 1, opacity: '100%', y: '-13vh'}, '-=9')

    /*
      Controls for the services section sequence
      */

    const serviceDisplayDown = gsap.timeline({
      scrollTrigger: {
        trigger: '.service--cards',
        start: '30% 90%',
        end: 'center 50%',
        scrub: 2.5,
        // markers: true,
      },
    })

    const defaultService_left = {opacity: 0, x: '-15%', y: '75%'}
    const defaultService_right = {opacity: 0, x: '15%', y: '75%'}

    const defaultServiceMovementIn = {
      opacity: '100%',
      x: '0%',
      y: '0%',
    }

    gsap.set('.service--card-design', defaultService_left)
    gsap.set('.service--card-development', defaultService_right)
    gsap.set('.service--card-analytics', defaultService_left)
    gsap.set('.service--card-audit', defaultService_right)

    serviceDisplayDown
      .to('.service--card-design', defaultServiceMovementIn)
      .to('.service--card-development', defaultServiceMovementIn)
      .to('.service--card-analytics', defaultServiceMovementIn)
      .to('.service--card-audit', defaultServiceMovementIn)

    return function () {
      heroDisplay.kill()
      serviceDisplayDown.kill()
    }
  },

  //  < 1062px to prevent overflow on x axis
  '(max-width: 1062px)': function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline()
    const defaultSubHeroSection = {opacity: 0, y: '-10vh'}

    gsap.set('.hero--sub', {opacity: 0, y: 50})
    gsap.set('.hero--pitch', defaultSubHeroSection)
    gsap.set('.hero--cta', defaultSubHeroSection)
    gsap.set('.hero--see-next', defaultSubHeroSection)

    heroDisplay
      .to('.hero--color-block', {
        duration: 1,
        width: 192,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .from('.hero--title-span', {duration: 1, y: '9vw', ease: 'power3.out'})
      .to('.hero--color-block', {
        duration: 10,
        height: 100,
        ease: 'elastic.out',
      })
      .to('.hero--div', {duration: 1, y: '-25vh', ease: 'power3.out'}, '-=9')
      .to('.hero--sub', {duration: 0.65, opacity: '100%', y: 0}, '-=10')
      .to(
        '.hero--pitch',
        {duration: 1, opacity: '100%', y: '-30vh', ease: 'power3.out'},
        '-=9',
      )
      .to(
        '.hero--cta',
        {duration: 1, opacity: '100%', y: '-29vh', ease: 'power3.out'},
        '-=9',
      )
      .to('.hero--see-next', {duration: 1, opacity: '100%', y: '-3vh'}, '-=9')

    /*
      Controls for the services section sequence
      */

    const serviceDisplayDown = gsap.timeline({
      scrollTrigger: {
        trigger: '.service--cards',
        start: '30% 90%',
        end: 'center 50%',
        scrub: 2.5,
        // markers: true,
      },
    })

    const defaultService_left = {opacity: 0, x: '-8%', y: '75%'}
    const defaultService_right = {opacity: 0, x: '8%', y: '75%'}

    const defaultServiceMovementIn = {
      opacity: '100%',
      x: '0%',
      y: '0%',
    }

    gsap.set('.service--card-design', defaultService_left)
    gsap.set('.service--card-development', defaultService_right)
    gsap.set('.service--card-analytics', defaultService_left)
    gsap.set('.service--card-audit', defaultService_right)

    serviceDisplayDown
      .to('.service--card-design', defaultServiceMovementIn)
      .to('.service--card-development', defaultServiceMovementIn)
      .to('.service--card-analytics', defaultServiceMovementIn)
      .to('.service--card-audit', defaultServiceMovementIn)

    return function () {
      heroDisplay.kill()
      serviceDisplayDown.kill()
    }
  },

  '(max-width: 882px)': function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline()
    const defaultSubHeroSection = {opacity: 0, y: '-10vh'}

    gsap.set('.hero--sub', {opacity: 0, y: 50})
    gsap.set('.hero--pitch', defaultSubHeroSection)
    gsap.set('.hero--cta', defaultSubHeroSection)
    gsap.set('.hero--see-next', defaultSubHeroSection)

    heroDisplay
      .to('.hero--color-block', {
        duration: 1,
        width: 153,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .from('.hero--title-span', {duration: 1, ease: 'power3.out'})
      .to('.hero--color-block', {
        duration: 10,
        height: 100,
        ease: 'elastic.out',
      })
      .to('.hero--div', {duration: 1, y: '-25vh', ease: 'power3.out'}, '-=9')
      .to('.hero--sub', {duration: 0.65, opacity: '100%', y: 0}, '-=10')
      .to(
        '.hero--pitch',
        {duration: 1, opacity: '100%', y: '-30vh', ease: 'power3.out'},
        '-=9',
      )
      .to(
        '.hero--cta',
        {duration: 1, opacity: '100%', y: '-29vh', ease: 'power3.out'},
        '-=9',
      )
      .to('.hero--see-next', {duration: 1, opacity: '100%', y: '-3vh'}, '-=9')

    return function () {
      heroDisplay.kill()
    }
  },

  '(max-width: 800px)': function () {
    /*
      Controls for the services section sequence
      */

    const serviceDisplayDown = gsap.timeline({
      scrollTrigger: {
        trigger: '.service--cards',
        start: '30% 90%',
        end: 'center 50%',
        scrub: 2.5,
        // markers: true,
      },
    })

    const defaultService_left = {opacity: 0, x: '-4%', y: '75%'}
    const defaultService_right = {opacity: 0, x: '4%', y: '75%'}

    const defaultServiceMovementIn = {
      opacity: '100%',
      x: '0%',
      y: '0%',
    }

    gsap.set('.service--card-design', defaultService_left)
    gsap.set('.service--card-development', defaultService_right)
    gsap.set('.service--card-analytics', defaultService_left)
    gsap.set('.service--card-audit', defaultService_right)

    serviceDisplayDown
      .to('.service--card-design', defaultServiceMovementIn)
      .to('.service--card-development', defaultServiceMovementIn)
      .to('.service--card-analytics', defaultServiceMovementIn)
      .to('.service--card-audit', defaultServiceMovementIn)

    return function () {
      serviceDisplayDown.kill()
    }
  },

  '(max-width: 708px)': function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline()
    const defaultSubHeroSection = {opacity: 0, y: '-10vh'}

    gsap.set('.hero--sub', {opacity: 0, y: 50})
    gsap.set('.hero--pitch', defaultSubHeroSection)
    gsap.set('.hero--cta', defaultSubHeroSection)
    gsap.set('.hero--see-next', defaultSubHeroSection)

    heroDisplay
      .to('.hero--color-block', {
        duration: 1,
        width: 123,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .from('.hero--title-span', {duration: 1, ease: 'power3.out'})
      .to('.hero--color-block', {
        duration: 10,
        height: 100,
        ease: 'elastic.out',
      })
      .to('.hero--div', {duration: 1, y: '-25vh', ease: 'power3.out'}, '-=9')
      .to('.hero--sub', {duration: 0.65, opacity: '100%', y: 0}, '-=10')
      .to(
        '.hero--pitch',
        {duration: 1, opacity: '100%', y: '-30vh', ease: 'power3.out'},
        '-=9',
      )
      .to(
        '.hero--cta',
        {duration: 1, opacity: '100%', y: '-29vh', ease: 'power3.out'},
        '-=9',
      )
      .to('.hero--see-next', {duration: 1, opacity: '100%', y: '-3vh'}, '-=9')

    return function () {
      heroDisplay.kill()
    }
  },

  '(max-width: 570px)': function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline()
    const defaultSubHeroSection = {opacity: 0, y: '-10vh'}

    gsap.set('.hero--sub', {opacity: 0, y: 50})
    gsap.set('.hero--pitch', defaultSubHeroSection)
    gsap.set('.hero--cta', defaultSubHeroSection)
    gsap.set('.hero--see-next', defaultSubHeroSection)

    heroDisplay
      .to('.hero--color-block', {
        duration: 1,
        width: 98,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .from('.hero--title-span', {duration: 1, ease: 'power3.out'})
      .to('.hero--color-block', {
        duration: 10,
        height: 100,
        ease: 'elastic.out',
      })
      .to('.hero--div', {duration: 1, y: '-25vh', ease: 'power3.out'}, '-=9')
      .to('.hero--sub', {duration: 0.65, opacity: '100%', y: 0}, '-=10')
      .to(
        '.hero--pitch',
        {duration: 1, opacity: '100%', y: '-30vh', ease: 'power3.out'},
        '-=9',
      )
      .to(
        '.hero--cta',
        {duration: 1, opacity: '100%', y: '-29vh', ease: 'power3.out'},
        '-=9',
      )
      .to('.hero--see-next', {duration: 1, opacity: '100%', y: '-3vh'}, '-=9')

    return function () {
      heroDisplay.kill()
    }
  },

  '(max-width: 460px)': function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline()
    const defaultSubHeroSection = {opacity: 0, y: '-10vh'}

    gsap.set('.hero--sub', {opacity: 0, y: 50})
    gsap.set('.hero--pitch', defaultSubHeroSection)
    gsap.set('.hero--cta', defaultSubHeroSection)
    gsap.set('.hero--see-next', defaultSubHeroSection)

    heroDisplay
      .to('.hero--color-block', {
        duration: 1,
        width: 78,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .from('.hero--title-span', {duration: 1, ease: 'power3.out'})
      .to('.hero--color-block', {
        duration: 10,
        height: 100,
        ease: 'elastic.out',
      })
      .to('.hero--div', {duration: 1, y: '-25vh', ease: 'power3.out'}, '-=9')
      .to('.hero--sub', {duration: 0.65, opacity: '100%', y: 0}, '-=10')
      .to(
        '.hero--pitch',
        {duration: 1, opacity: '100%', y: '-30vh', ease: 'power3.out'},
        '-=9',
      )
      .to(
        '.hero--cta',
        {duration: 1, opacity: '100%', y: '-29vh', ease: 'power3.out'},
        '-=9',
      )
      .to('.hero--see-next', {duration: 1, opacity: '100%', y: '-3vh'}, '-=9')

    return function () {
      heroDisplay.kill()
    }
  },
})
