document.querySelector(".note").classList.add("hidden");
$(".display").on("click", function(){
    $(".note").slideToggle();
});