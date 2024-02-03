const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.style.opacity = '1';
    video.play();
    playButton.style.opacity = '0';
  }
});
