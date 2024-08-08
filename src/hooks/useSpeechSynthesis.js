import { useState, useCallback, useEffect } from 'react';


export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [error, setError] = useState(null); 

  const loadVoices = useCallback(() => {
    if ('speechSynthesis' in window) {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      
      const preferredVoice = availableVoices.find(voice => voice.lang.includes('es-'));
      setSelectedVoice(preferredVoice || availableVoices[0] || null);
      setError(null);
    } else {
      setError('La API de síntesis de voz no está soportada en este navegador.');
    }
  }, []);

  useEffect(() => {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [loadVoices]);

  const speakText = useCallback((text) => {
    if ('speechSynthesis' in window) {
      if (!isMuted) {
        if (selectedVoice) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = selectedVoice;
          utterance.rate = 2.5;
          utterance.onend = () => console.log('La síntesis de voz ha terminado.');
          utterance.onerror = (event) => console.error('Error en la síntesis de voz: ', event.error);

          window.speechSynthesis.speak(utterance);
          setError(null); 
        } else {
          setError('No se ha seleccionado una voz para la síntesis de voz.');
        }
      } else {
        setError('La aplicación está en mute.');
      }
    } else {
      setError('La API de síntesis de voz no está soportada en este navegador.');
    }
  }, [selectedVoice, isMuted]);

  const toggleMute = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    setIsMuted(!isMuted);
  };

  return { speakText, voices, selectedVoice, setSelectedVoice, isMuted, toggleMute, error };
};
