const body = document.getElementById("body");

body.style.visibility = "visible";

ScrollTrigger.matchMedia({
  //  > 1062px to prevent overflow on x axis
  "(min-width: 1063px)": function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline();

    gsap.set(".hero--sub", { opacity: 0, y: "100px" });
    gsap.set(".hero--see-next", { opacity: 0, y: "-100px" });

    heroDisplay
      .to(".hero--color-block", {
        duration: 1,
        width: 192,
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hero--title-span", { duration: 1, y: "9vw", ease: "power3.out" })
      .to(".hero--color-block", {
        duration: 10,
        height: 100,
        ease: "elastic.out",
      })
      .from(".hero--div", { duration: 1, y: "25vh", ease: "power3.out" }, "-=9")
      .to(".hero--sub", { duration: 0.65, opacity: "100%", y: 0 }, "-=10")
      .from(
        ".hero--pitch",
        { duration: 1.5, opacity: "0", ease: "power3.out" },
        "-=9"
      )
      .from(
        ".hero--cta",
        { duration: 1.5, opacity: "0", y: "-9vh", ease: "power3.out" },
        "-=9"
      )
      .to(".hero--see-next", { duration: 0.65, opacity: "100%", y: 0 }, "-=9");

    /*
      Controls for the services section sequence
      */

    gsap.set(".service--card", { y: 100 });

    ScrollTrigger.batch(".service--card", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.5, grid: [4, 2] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });

    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".service--card", { y: 0 })
    );

    return function () {
      heroDisplay.kill();
      serviceDisplayDown.kill();
    };
  },

  //  < 1062px to prevent overflow on x axis
  "(max-width: 1063px)": function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline();

    gsap.set(".hero--sub", { opacity: 0, y: "100px" });
    gsap.set(".hero--see-next", { opacity: 0, y: "-100px" });

    heroDisplay
      .to(".hero--color-block", {
        duration: 1,
        width: 192,
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hero--title-span", { duration: 1, y: "9vw", ease: "power3.out" })
      .to(".hero--color-block", {
        duration: 10,
        height: 100,
        ease: "elastic.out",
      })
      .from(".hero--div", { duration: 1, y: "25vh", ease: "power3.out" }, "-=9")
      .to(".hero--sub", { duration: 0.65, opacity: "100%", y: 0 }, "-=10")
      .from(
        ".hero--pitch",
        { duration: 1.5, opacity: "0", ease: "power3.out" },
        "-=9"
      )
      .from(
        ".hero--cta",
        { duration: 1.5, opacity: "0", y: "-9vh", ease: "power3.out" },
        "-=9"
      )
      .to(".hero--see-next", { duration: 0.65, opacity: "100%", y: 0 }, "-=9");

    /*
      Controls for the services section sequence
      */

    gsap.set(".service--card", { y: 100 });

    ScrollTrigger.batch(".service--card", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.5, grid: [4, 2] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });

    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".service--card", { y: 0 })
    );

    return function () {
      heroDisplay.kill();
      serviceDisplayDown.kill();
    };
  },

  "(max-width: 883px)": function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline();

    heroDisplay.to(".hero--color-block", {
      duration: 1,
      width: 153,
      delay: 0.5,
      ease: "power4.inOut",
    });

    return function () {
      heroDisplay.kill();
    };
  },

  "(max-width: 708px)": function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline();

    heroDisplay.to(".hero--color-block", {
      duration: 1,
      width: 123,
      delay: 0.5,
      ease: "power4.inOut",
    });

    return function () {
      heroDisplay.kill();
    };
  },

  "(max-width: 570px)": function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline();

    heroDisplay.to(".hero--color-block", {
      duration: 1,
      width: 98,
      delay: 0.5,
      ease: "power4.inOut",
    });

    return function () {
      heroDisplay.kill();
    };
  },

  "(max-width: 460px)": function () {
    /*
    Controls for the hero section sequence
    */
    const heroDisplay = gsap.timeline();

    heroDisplay.to(".hero--color-block", {
      duration: 1,
      width: 78,
      delay: 0.5,
      ease: "power4.inOut",
    });

    return function () {
      heroDisplay.kill();
    };
  },
});

/*
Technologies Display
*/

gsap.set(".technologies--list-item", { y: 100 });

ScrollTrigger.batch(".technologies--list-item", {
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [4, 1] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
});

ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set(".technologies--list-item", { y: 0 })
);
