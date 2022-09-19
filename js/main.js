$(document).ready(function () {
  $(".allBtn").click(function () {
    $("nav").animate({ left: 0 }, 300, "swing");
  });

  $("nav button").click(function () {
    $("nav").animate({ left: -300 + "px" }, 200);
  });

  $(window).resize(function () {
    $("nav").removeAttr("style");
  });
});
