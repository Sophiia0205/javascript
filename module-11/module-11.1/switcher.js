const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

timer = {
  isActive: false,
  startTime() {
    if (!this.isActive) {
      this.isActive = true;
      this.generateColor = setInterval(() => {
        let index = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = `${colors[index]}`;
      }, 1000);
    }
  },
  stopTime() {
    clearInterval(this.generateColor);
    this.isActive = false;
  },
};

stopBtn.addEventListener('click', timer.stopTime.bind(timer));
startBtn.addEventListener('click', timer.startTime.bind(timer));
