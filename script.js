const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const elementOne = document.getElementById("face-placeholder");
  const elementTwo = document.getElementById("face-placeholder-two");
  const elementThree = document.getElementById("face-placeholder-three");
  if (scrollPosition === 233.60000610351562) {
    console.log(scrollPosition);
    elementThree.style.transform = "translate(-150px, 200px) scale(1)";
    elementTwo.style.transform = "translate(120px, 361px) scale(1)";
    elementOne.style.transform = "translate(0, -300px) scale(1)";
  } else if (scrollPosition > 300) {
    elementThree.style.transform = "translate(-350px, 350px) scale(2)";
    elementTwo.style.transform = "translate(100px, 1000px) scale(2)";
    elementOne.style.transform = "translate(0, -100px) scale(1)";
  } else {
    elementThree.style.transform = "translate(0px, 0px) scale(1)";
    elementTwo.style.transform = "translate(0px, 0px) scale(1)";
    elementOne.style.transform = "translate(0px, 0px) scale(1)";
  }
};

window.addEventListener("scroll", handleScroll);
