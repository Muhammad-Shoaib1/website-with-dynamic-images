let prev = document.querySelector(".left-arrow");
let next = document.querySelector(".right-arrow");
let thumbnails = document.querySelectorAll(".thumbnail");
let hero = document.getElementById("hero");

let bgImages = [
  "./images/bg1.png",
  "./images/bg2.png",
  "./images/bg3.png",
  "./images/bg4.png",
  "./images/bg5.png"
];
let currentIndex = 0;

// Function to update background image and active thumbnail
function updateHero(index) {
  hero.style.backgroundImage = `url(${bgImages[index]})`;
  document.querySelector(".active").classList.remove("active");
  thumbnails[index].classList.add("active");
}

// Event listener for next button
next.onclick = function () {
  currentIndex = (currentIndex + 1) % bgImages.length;
  updateHero(currentIndex);
};

// Event listener for previous button
prev.onclick = function () {
  currentIndex = (currentIndex - 1 + bgImages.length) % bgImages.length;
  updateHero(currentIndex);
};

// Event listeners for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
  thumbnail.onclick = function () {
    currentIndex = index;
    updateHero(currentIndex);
  };
});

// Optional automatic slideshow
setInterval(() => {
  next.onclick();
}, 5000);
