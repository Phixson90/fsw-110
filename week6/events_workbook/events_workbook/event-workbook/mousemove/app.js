
let screenLog = document.querySelector('.red-box');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    X: ${e.screenX}, Y: ${e.screenY}`;
}