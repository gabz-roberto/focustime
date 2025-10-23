let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;

  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();
  let secondsCounter = Math.ceil((endDate - now) / 1000);

  const timeCounter = () => {
    self.postMessage(secondsCounter);

    const now = Date.now();
    secondsCounter = Math.floor((endDate - now) / 1000);
    setTimeout(timeCounter, 1000);
  };

  timeCounter();
};
