const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function cursor() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}
function firstPageAnime() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to("#boundingelem", {
    y: "0",
    duration: 2,
    ease: Expo.easeInOut,
    delay: -1,
    stagger: 0.2,
  });
  tl.from(".hero-footer", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}
function imgOverflow(){
    //selection of element
document.querySelectorAll(".elem").forEach(function (event) {
    var rotate = 0;
    var diffrot = 0;
  //add event on them
  event.addEventListener("mousemove", function (details) {
    //clientY= current position 
    //event.getBoundingClientRect().top = fixed position
    var diff = details.clientY - event.getBoundingClientRect().top;
    diffrot = details.clientX -rotate ;
    rotate = details.clientX;

    var imgstore = event.querySelector("img");

    //get img dimensions
    var imgwidth = imgstore.offsetWidth / 2;
   
    var imgheight = imgstore.offsetHeight /2;

    //getting mouse location
    // console.log(details.clientX,details.clientY)
    gsap.to(imgstore, {
      display: "initial",
    //   opacity: 1,
      ease: Power3,
      top: diff - imgheight,
      left: details.clientX - imgwidth,
      rotate:gsap.utils.clamp(-20,20,diffrot*0.5)
    });
  });

  event.addEventListener("mouseleave", function (details) {
    gsap.to(event.querySelector("img"), {
      display: "none",
    //   opacity: 1,
      ease: Power3,
      
    });
  });
});
}

cursor();
firstPageAnime();
imgOverflow();




