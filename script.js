$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.nav_bar').addClass("sticky");
        } else {
            $('.nav_bar').removeClass("sticky");
        }
    });
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    //toggle menu/nav_barscript
    $('.menu-btn').click(function(){
        $('.nav_bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation script
    var typed =new Typed(".typing", {
        strings: ["Student."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed =new Typed(".typing-2", {
        strings: ["Student."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});