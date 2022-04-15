

var scrollTop = document.getElementById("scroll-btn");

window.onscroll = function(){
    scrollfunction()
};

function scrollfunction(){
    if( document.body.scrollTop > 220 || document.documentElement.scrollTop > 220){
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

/*
$(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $(".contents").fadeIn(1000)
})
*/