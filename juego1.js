const buttonPC = document.getElementById('buttonPC');
const buttonAndroid = document.getElementById('buttonAndroid');

gsap.registerPlugin("bounce");

buttonPC.addEventListener('click', () => {
  gsap.to(buttonPC, { duration: 0.3, scale: 1.2, ease: "bounce.out" });
  setTimeout(() => {
    gsap.to(buttonPC, { duration: 0.3, scale: 1, ease: "bounce.out" });
  }, 300);
});

buttonAndroid.addEventListener('click', () => {
  gsap.to(buttonAndroid, { duration: 0.3, scale: 1.2, ease: "bounce.out" });
  setTimeout(() => {
    gsap.to(buttonAndroid, { duration: 0.3, scale: 1, ease: "bounce.out" });
  }, 300);
});
