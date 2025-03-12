// Meme Data
const memes = [
  "meme-1.png",
  "meme-2.png",
  "meme-3.png",
  "meme-4.png",
  "meme-5.png",
  "meme-6.png",
  "meme-7.png",
  "meme-8.png",
  "meme-9.png",
  "meme-10.png",
];

// Variables
let memeBox = document.getElementById("meme-container");
// let fCircle = document.getElementById("circle1");
// let sCircle = document.getElementById("circle2");
let oMeme = document.getElementById("memeContainer");
const hero = document.getElementById("hero");

function getMeme() {
  let randomMeme = Math.floor(Math.random() * memes.length);
  memeBox.innerHTML = `<img style="width: 100%; object-fit: contain" src="./images/memes/${memes[randomMeme]}" alt="meme" />`;

  // fCircle.classList.add("swing-circle1");
  // sCircle.classList.add("swing-circle2");

  // oMeme.classList.add("open-meme");
}
