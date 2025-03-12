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
  "meme-11.jpg",
  "meme-12.jpg",
  "meme-13.jpg",
  "meme-14.jpg",
  "meme-15.jpg",
  "meme-16.jpg",
  "meme-17.jpg",
  "meme-18.jpg",
  "meme-19.jpg",
  "meme-20.jpg",
  "meme-21.jpg",
  "meme-22.jpg",
  "meme-23.jpg",
  "meme-24.jpg",
  "meme-25.jpg",
];

// Get the meme container
let memeBox = document.getElementById("meme-container");

// display random meme
function getMeme() {
  let randomMeme = Math.floor(Math.random() * memes.length);
  memeBox.innerHTML = `<img style="height: 100%; object-fit: contain" src="./images/memes/${memes[randomMeme]}" alt="meme" />`;
}
