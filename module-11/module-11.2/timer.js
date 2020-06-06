'use strict';

const CountdownTimer = function ({selector, targetDate}) {
  let index = document.querySelector(selector);
  let innerDays = index.querySelector(`[data-value="days"]`);
  let innerHours = index.querySelector(`[data-value="hours"]`);
  let innerMins = index.querySelector(`[data-value="mins"]`);
  let innerSecs = index.querySelector(`[data-value="secs"]`);

  setInterval(() => {
    const time = targetDate - Date.now();
    if (time < 0) {
      document.querySelector(`${selector}`).innerHTML = 'EXPIRED';
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    innerDays.textContent = days;
    innerHours.textContent = hours;
    innerMins.textContent = mins;
    innerSecs.textContent = secs;
  }, 1000);
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 06, 2020'),
});
