let div1 = document.querySelector(".s1")
let div2 = document.querySelector(".s2")
let div3 = document.querySelector(".s3")
let przycisk = document.querySelector(".play")
let konto = document.querySelector(".stan")
let wiecej = document.querySelector(".doladuj")
wiecej.addEventListener("click", doladowanie)
przycisk.addEventListener("click", gra)
let kasa=1000
function sleep(ms) {                 
  return new Promise(resolve => setTimeout(resolve, ms));
}

function playSound() {
  const audio = new Audio("dzwiek.mp3"); 
  audio.play().catch(err => console.error("Nie udało się odtworzyć dźwięku:", err));
}

async function gra() {
    przycisk.disabled = true;
  const divy = [div1, div2, div3];
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
  }
  przycisk.disabled = false;
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