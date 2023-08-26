const text = "acoin7.com";
const textContainer = document.querySelector(".animated-text");

function animateText() {
  let index = 0;
  const interval = setInterval(() => {
    textContainer.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
    }
  }, 100);
}

animateText();
