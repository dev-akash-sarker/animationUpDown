$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $("#face-placeholder").addClass("newClass");
    $("#face-placeholder-two").addClass("newClassTwo");
  } else {
    $("#face-placeholder").removeClass("newClass");
    $("#face-placeholder-two").removeClass("newClassTwo");
  }
});
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 10) {
//     $("#face-placeholder").addClass("newClass");
//   } else {
//     $("#face-placeholder").removeClass("newClass");
//   }
// });
