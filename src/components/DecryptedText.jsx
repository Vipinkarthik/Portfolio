import { useEffect, useState, useRef, useMemo, useCallback } from 'react';

export default function DecryptedText({
  text,
  speed = 45,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-accent opacity-80',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [isDecrypted, setIsDecrypted] = useState(true);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const availableChars = useMemo(() => characters.split(''), [characters]);

  const shuffleText = useCallback(
    (originalText, currentRevealed) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars]
  );

  const triggerDecrypt = useCallback(() => {
    if (isAnimating) return;
    setRevealedIndices(new Set());
    setIsDecrypted(false);
    setIsAnimating(true);
  }, [isAnimating]);

  const resetToPlainText = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(false);
    setRevealedIndices(new Set());
    setDisplayText(text);
    setIsDecrypted(true);
  }, [text]);

  useEffect(() => {
    if (!isAnimating) return;
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      iteration++;
      const currentRevealed = new Set();
      const progress = Math.min(iteration / maxIterations, 1);
      const charsToReveal = Math.floor(progress * text.length);

      for (let i = 0; i < charsToReveal; i++) {
        currentRevealed.add(i);
      }

      setRevealedIndices(currentRevealed);
      setDisplayText(shuffleText(text, currentRevealed));

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setDisplayText(text);
        setIsDecrypted(true);
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAnimating, text, speed, maxIterations, shuffleText]);

  return (
    <span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap cursor-default ${parentClassName}`}
      onMouseEnter={animateOn === 'hover' ? triggerDecrypt : undefined}
      onMouseLeave={animateOn === 'hover' ? resetToPlainText : undefined}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealed = revealedIndices.has(index) || (!isAnimating && isDecrypted);
          return (
            <span key={index} className={isRevealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
