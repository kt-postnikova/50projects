const buttonNext = document.querySelector('#next');
const buttonPrev = document.querySelector('#prev');
const progressLine = document.querySelector('.progress-line');
const progressPoints = document.querySelectorAll('.progress-point');

let activePoint = 1;

buttonNext.addEventListener('click', () => {
  activePoint += 1;
  setProgress();
})

buttonPrev.addEventListener('click', () => {
  activePoint -= 1;

  setProgress();
});

function setProgress() {
  progressPoints.forEach((point, index) => {
    if (index < activePoint) {
      point.classList.add('progress-point_active')
    } else {
      point.classList.remove('progress-point_active')
    }
  });

  const activePoints = document.querySelectorAll('.progress-point_active');

  progressLine.style.width = (activePoints.length - 1) / (progressPoints.length - 1) * 100 + '%';

  if (activePoint === 1) {
    buttonPrev.disabled = true
  } else if (activePoint === progressPoints.length) {
    buttonNext.disabled = true
  } else {
    buttonPrev.disabled = false
    buttonNext.disabled = false
  }
}

