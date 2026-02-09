const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    💖 I had a feeling.<br><br>
    I wish I was there instead of doing this through a screen,<br>
    but this is me choosing you anyway.<br><br>
    Happy Valentine’s Day 🫶
  `;
});

// 💗 Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Create a heart every 800ms
setInterval(createHeart, 800);
