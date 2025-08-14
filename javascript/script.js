'use strict';
document.addEventListener('DOMContentLoaded', () => {
function createHeart() {
  const container = document.querySelector('.card-container');
  const svg = document.querySelector('.heart-icon');
  const svgClone = svg.cloneNode(true);
  const personName = document.querySelector('.profile-name');
  const audio = document.querySelector('.audio-file');

  const containerWidth = container.offsetWidth;
  console.log(containerWidth);
  const heartWidth = Math.random() * 80 + 40;
  svgClone.style.width = heartWidth + 'px';
  const maxLeft = containerWidth - heartWidth;
  const left = Math.random() * maxLeft;
  svgClone.style.left = left + 'px';
  svgClone.style.animation = 'floatUp 8s';
  svgClone.style.cursor = "pointer";
  container.appendChild(svgClone);

  svgClone.addEventListener('click', () => {
    audio.play();
    svgClone.style.transition = "0.5s";
    svgClone.style.width = "150px";
    svgClone.querySelector('.heart-path').style.fill = "red";
    personName.style.color = '#c7365f';
    setTimeout(() => {
      personName.style.transition = 'color 0.5s'
      personName.style.color = 'rgba(255, 255, 255, 0.452)';
    }, 300);
  });

  svgClone.addEventListener('animationend', () => {
    svgClone.remove();
  });
}

setInterval(createHeart, 1000);
});