import { gsap } from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

const repeat = document.querySelector(".repeat");

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  duration: 2,
  scale: 1.25,
});

play.addEventListener("click", (e) => {
  animation.play();
});

pause.addEventListener("click", (e) => {
  animation.pause();
});

resume.addEventListener("click", (e) => {
  animation.resume();
});

reverse.addEventListener("click", (e) => {
  animation.reverse();
});

restart.addEventListener("click", (e) => {
  animation.restart();
});
kill.addEventListener("click", (e) => {
  animation.kill();
});
yoyo.addEventListener("click", (e) => {
  animation.yoyo(true);
});

repeat.addEventListener("click", (e) => {
  animation.repeat(2);
});