$(window).scroll(function () {
  if ($(this).scrollTop() > 230) {
    $("#face-placeholder").addClass("newClass");
    $("#face-placeholder-two").addClass("newClassTwo");
  } else {
    $("#face-placeholder").removeClass("newClass");
    $("#face-placeholder-two").removeClass("newClassTwo");
  }
  if ($(this).scrollTop() > 250) {
    $(".newClassTwo").addClass("newClassTwoMax");
  } else {
    $(".newClassTwo").removeClass("newClassTwoMax");
  }
});
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 10) {
//     $("#face-placeholder").addClass("newClass");
//   } else {
//     $("#face-placeholder").removeClass("newClass");
//   }
// });
