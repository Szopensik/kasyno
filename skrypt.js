document.addEventListener('click', playSound);

function playSound() {
  const sound = new Audio('strzal.mp3');
  sound.play();
  console.log("dupa ")
}