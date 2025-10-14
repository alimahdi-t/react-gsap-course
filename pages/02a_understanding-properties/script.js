import { gsap } from "gsap";

gsap.to(".box", {
  opacity: 1,
  borderRadius: "50%",
  duration: 1,
  scale: 1.25,
  rotation: 360,
  delay: 0.3,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  yoyoEase: "",
  repeatDelay: 0.5,
});