$(window).scroll(function () {
  if ($(this).scrollTop() > 230) {
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

// const handleScroll = () => {
//   const thresold = 230;
//   const scrollPosition = window.scrollY;
//   const elementOne = document.getElementById("face-placeholder");
//   const elementTwo = document.getElementById("face-placeholder-two");
//   if (scrollPosition > thresold) {
//     elementOne.classList.add("newClass");
//     elementTwo.classList.add("newClassTwo");
//   } else {
//     elementOne.classList.remove("newClass");
//     elementTwo.classList.remove("newClassTwo");
//   }
// };

// window.addEventListener("scroll", handleScroll);
