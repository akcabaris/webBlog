$("#buyukBaslik").click(function () {
    $("#buyukBaslik").fadeOut();
    $("#buyukBaslik").fadeIn();
});

$("button").hover(function () {
    $(this).toggleClass("buttonHoverFon");
})
$("p").hover(function () {
    $(this).toggleClass("paragrafHoverFon");
})
$("h1").hover(function () {
    $(this).toggleClass("baslikHoverFon");
})