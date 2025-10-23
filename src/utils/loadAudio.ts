import beep from "../assets/audios/beep.mp3";

export const loadAudio = () => {
  const audio = new Audio(beep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(err => console.error("Erro ao reproduzir audio", err));
  };
};
