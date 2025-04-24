$(window).on("load", function () {
  $("#title01").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content01").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title02").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content02").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title03").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content03").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title04").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content04").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title05").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content05").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title06").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content06").slideToggle();
    $(this).toggleClass("active");
  });
});
