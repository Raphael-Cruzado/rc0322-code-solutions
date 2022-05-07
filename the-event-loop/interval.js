let currentCount = 3;
const houston = setInterval(blastOff, 1000);

function blastOff() {
  console.log(currentCount--);
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(houston);
  }
}
