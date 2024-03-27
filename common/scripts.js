const PERFORMANCE_DELTA = 2;
const COMPLETEMENT_RATIO_INTERVAL = 100;
const COUNTER_INTERVAL = 1000;
const INITIAL_LVL = 80;
const START_DELAY = 30;
const CHECKPOINT_COMPLETEMENT_RATIO = 100;

const start = new Date().getTime();

const slowDownProccess = () => {
  const e = performance.now() + PERFORMANCE_DELTA;
  while (performance.now() < e) {}
};

const getCompletementRatio = () => {
  const t = (new Date().getTime() - start) / 50 - START_DELAY;
  const delayedT = t > 0 ? t : 0;

  return delayedT > CHECKPOINT_COMPLETEMENT_RATIO
    ? CHECKPOINT_COMPLETEMENT_RATIO
    : delayedT;
};
