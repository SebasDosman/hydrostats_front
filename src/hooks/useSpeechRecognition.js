import { useState, useCallback } from 'react';


export const useSpeechRecognition = (lang = 'es-ES') => {
  const [recognizedText, setRecognizedText] = useState('');

  const startRecognition = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = lang;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        let transcript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        setRecognizedText(transcript);
      };

      recognition.onerror = (event) => console.error('Error en el reconocimiento de voz:', event.error);
      recognition.onend = () => console.log('El reconocimiento de voz ha terminado.');
      recognition.start();
    } else {
      alert('El reconocimiento de voz no esta soportado en este navegador');
    }
  }, [lang]);

  return {
    recognizedText,
    startRecognition
  };
};

