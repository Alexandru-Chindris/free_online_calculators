// created by Alexandru Chindris
let title = document.getElementById("page_title");

window.addEventListener("scroll", function(){
    let ofset = window.pageYOffset;
    title.style.backgroundPositionY = ofset *0.7 + "px";
})
