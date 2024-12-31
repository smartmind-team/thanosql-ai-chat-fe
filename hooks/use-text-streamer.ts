import { useState, useEffect, useCallback } from 'react';

interface UseTextStreamerProps {
  items: string[];
  delay?: number;
  charInterval?: number;
}

export function useTextStreamer({ items, delay = 1250, charInterval = 18 }: UseTextStreamerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const streamText = useCallback(() => {
    const targetText = items[currentIndex];
    if (!targetText) return;

    let charIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentText(targetText.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex >= targetText.length) {
        clearInterval(intervalId);

        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
        }, delay);
      }
    }, charInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, items, delay, charInterval]);

  useEffect(() => {
    const cleanup = streamText();
    return () => cleanup && cleanup();
  }, [streamText]);

  return currentText;
}
