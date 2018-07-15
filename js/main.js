const appify = document.getElementById('appify');
const kidMath = document.getElementById('kid-math');
const pixelArt = document.getElementById('pixel-art');

appify.addEventListener('click', () => {
  // This code was gotten from StackOverflow --> https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
  const win = window.open('https://github.com/IyiKuyoro/My-Portfolio', '_blank');
  win.focus();
});

kidMath.addEventListener('click', () => {
  const win = window.open('https://github.com/IyiKuyoro/KidMath', '_blank');
  win.focus();
});

pixelArt.addEventListener('click', () => {
  const win = window.open('https://github.com/IyiKuyoro/ALC-3.0-Pixel-Art-Project', '_blank');
  win.focus();
});
