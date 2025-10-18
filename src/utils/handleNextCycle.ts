export const handleNextCycle = (currentCycle: number) => {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle++;
};
