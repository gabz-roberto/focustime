let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;
};
