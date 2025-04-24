$(window).on("load", function () {
  $("#title01 button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content01").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title02 button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content02").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title03 button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content03").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title04 button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content04").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title05 button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content05").slideToggle();
    $(this).toggleClass("active");
  });
  $("#title06 button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#content06").slideToggle();
    $(this).toggleClass("active");
  });
});
