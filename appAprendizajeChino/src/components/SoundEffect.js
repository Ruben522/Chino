// src/components/SoundEffect.js
export async function playSound(url) {
  try {
    const audio = new Audio(url);
    audio.volume = 0.28;
    // Return the play promise so quien llame pueda encadenar / capturar errores si quiere
    const p = audio.play();
    if (p && typeof p.then === "function") {
      await p.catch((err) => {
        // puede fallar por autoplay policy si no hubo interacción - lo logueamos
        console.warn("playSound: reproducción fallida", err);
      });
    }
  } catch (err) {
    console.error("Error al reproducir sonido:", err);
  }
}
