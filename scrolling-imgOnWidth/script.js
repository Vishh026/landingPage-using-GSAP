var tl = gsap.timeline({
    //repeart this timeline infinite
    repeat:-1
});
tl.to(".box",{
    width:"100%",
    ease: Expo.easeInOut,   
    duration:2,
    stagger:2
},'flagForSameAnime')

tl.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:2,
    top:0
},'flagForSameAnime')
tl.to(".text h1",{
    delay:2,
    ease: Expo.easeInOut,
    stagger:2,
    top:"100%"
},'flagForSameAnime')


