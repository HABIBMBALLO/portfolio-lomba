$(document).ready(function(){
    $(window).scrolly(function(){
        if(this.scrolly > 20){
            $('..navbar').addClass("stricky");
        } else{
            $('..navbar').removeClass("stricky");

        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navebar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
});