let scrollPos = 0;
let scrollDir = 1;

function update() {
  const content = document.getElementById('root');
  scrollPos += scrollDir;
  content.style.top = `${scrollPos}px`;
  if (scrollPos >= 50 || scrollPos <= -50) {
    scrollDir *= -1;
  }
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);