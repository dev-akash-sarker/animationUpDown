const handleScroll = () => {
  const targetNumber = 230;
  const scrollPosition = window.scrollY;
  const elementOne = document.getElementById("face-placeholder");
  const elementTwo = document.getElementById("face-placeholder-two");
  if (scrollPosition > targetNumber) {
    elementOne.style.transform = "translate(-350px, 350px) scale(2)";
    elementTwo.style.transform = "translate(100px, 1000px) scale(2)";
  } else {
    elementOne.style.transform = "translate(0px, 0px) scale(1)";
    elementTwo.style.transform = "translate(0px, 0px) scale(1)";
  }
};

window.addEventListener("scroll", handleScroll);
