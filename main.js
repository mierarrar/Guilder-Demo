
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

scrollTop.addEventListener("click", function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})

