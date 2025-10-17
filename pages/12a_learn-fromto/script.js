import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,

    { scaleY: 0.4, duration: 0.2, delay: 2 },
    {
      scaleY: 1.6,
      duration: 0.6,
      ease: "sine.inout",
      delay: index * 0.1,
      repeat: -1,
      yoyo: true,
    },
  );
});