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

function resizing() {
  const width = window.innerWidth;
  const body = document.querySelector("nav");
  if (width < 720) {
    body.classList.add("ss");
  } else {
    body.classList.remove("ss");
  }
  return;
}

window.addEventListener("resize", resizing);
