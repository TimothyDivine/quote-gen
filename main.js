//ARRAYS

const memes = [
  {
    meme: "Divine is denying that success is his girlfriend",
    author: "Kehleon",
  },

  {
    meme: "Isaac creates bug in his code we call him THE_BUGGER",
    author: "MrDee",
  },
  {
    meme: "Kehleon built a website to embezzle people's money🤣",
    author: "Isaac",
  },
  {
    meme: "Hacker trying know why he cant see my password, me that set my password to ******",
    author: "Boy Alone"
  }
];

function getMeme() {
  // VARIBLES
  let myMeme = document.getElementById("myMeme");
  let myAuthor = document.getElementById("myAuthor");
  let randomMeme = Math.floor(Math.random() * memes.length);
  let fCircle = document.getElementById("circle1");
  let sCircle = document.getElementById("circle2");
  let oMeme = document.getElementById("memeContainer");
  const hero = document.getElementById("hero");
  
  //ASSIGNMENTS
  myMeme.textContent = memes[randomMeme].meme;
  myAuthor.textContent = memes[randomMeme].author;

  fCircle.classList.add("swing-circle1");
  sCircle.classList.add("swing-circle2");

  oMeme.classList.add("open-meme");

  hero.style.display = "none";
}


