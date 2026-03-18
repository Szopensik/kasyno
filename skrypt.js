let div1 = document.querySelector(".s1")
let div2 = document.querySelector(".s2")
let div3 = document.querySelector(".s3")
let przycisk = document.querySelector(".play")
let konto = document.querySelector(".stan")
let wiecej = document.querySelector(".doladuj")
wiecej.addEventListener("click", doladowanie)
przycisk.addEventListener("click", gra)
 const divy = [div1, div2, div3];
 const muzyka = new Audio("music.mp3");
 muzyka.volume = 0.3;
muzyka.loop = true;
muzyka.play();
let kasa=1000
let pitty = 0
function sleep(ms) {                 
  return new Promise(resolve => setTimeout(resolve, ms));
}
function wingif() {
  const gif = document.getElementById("winGif");

  gif.style.display = "block";

  setTimeout(() => {
    gif.style.display = "none";
  }, 9000);
}

function wingifcoin() {
  const coin = document.getElementById("wingifcoin");

  coin.style.display = "block";

  setTimeout(() => {
    coin.style.display = "none";
  }, 9000);
}

function playSound() {
  const audio = new Audio("dzwiek.mp3"); 
  audio.play().catch(err => console.error("Nie udało się odtworzyć dźwięku:", err));
}

function winsound() {
  const audio = new Audio("bigwin.mp3"); 
  audio.play().catch(err => console.error("Nie udało się odtworzyć dźwięku:", err));
}

function littlewin() {
  const audio = new Audio("winnita-casino.mp3"); 
  audio.play().catch(err => console.error("Nie udało się odtworzyć dźwięku:", err));
}

async function gra() {
    kasa=kasa-50
     konto.textContent="Stan konta: " + kasa + "$"
  if (pitty<5) {
    przycisk.disabled = true;
 
  for (let i = 0; i < divy.length; i++) {
    divy[i].classList.add("spin");
    
    playSound();
    await sleep(1200);

    let l = Math.floor(Math.random() * 5) + 1;
    switch (l) {
      case 1: divy[i].style.backgroundImage = "url(bell.png)"; break;
      case 2: divy[i].style.backgroundImage = "url(casino.png)"; break;
      case 3: divy[i].style.backgroundImage = "url(gambling.png)"; break;
      case 4: divy[i].style.backgroundImage = "url(orange.png)"; break;
      case 5: divy[i].style.backgroundImage = "url(slot-machine.png)"; break;
    }
    
    divy[i].classList.remove("spin");
    pitty=pitty+1
  }
  przycisk.disabled = false;
  }

  else{
    przycisk.disabled = true;

  for (let i = 0; i < divy.length; i++) {
    divy[i].classList.add("spin");
    
    playSound();
    await sleep(1200);

    let l = 2
    switch (l) {
      case 1: divy[i].style.backgroundImage = "url(bell.png)"; break;
      case 2: divy[i].style.backgroundImage = "url(casino.png)"; break;
      case 3: divy[i].style.backgroundImage = "url(gambling.png)"; break;
      case 4: divy[i].style.backgroundImage = "url(orange.png)"; break;
      case 5: divy[i].style.backgroundImage = "url(slot-machine.png)"; break;
    }
    
    divy[i].classList.remove("spin");
    pitty=0
  }
  przycisk.disabled = false;
  }
  




let wynik = divy.every(val =>
  val.style.backgroundImage.includes(
    divy[0].style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)[1]
  )
);

if (wynik) {
  if (div1.style.backgroundImage.includes("casino.png")) {
    console.log("big win");
    winsound();
    kasa += 5000;
    wingif()
    wingifcoin()
  } else {
    console.log("lekki win");
    littlewin();
    kasa += 100;
  }
  konto.textContent="Stan konta: " + kasa + "$"
}










}



konto.textContent="Stan konta: " + kasa + "$"
function doladowanie() {
 let blik = 0
 blik = prompt("podaj kwotę doładowania")
 blik=Number(blik);
 if (isNaN(blik) || blik <= 0) {
        alert("Nieprawidłowa kwota!");
        return;
 }
kasa = kasa + blik
konto.textContent="Stan konta: " + kasa + "$"


}



