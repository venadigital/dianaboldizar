import { useEffect, useState } from 'react';

export default function InfiniteTextMarquee({
  text,
  speed = 28,
  tooltipText = 'Ver propuesta',
  showTooltip = true,
  className = ''
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!showTooltip) return undefined;

    const handleMouseMove = event => {
      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(event.clientX - midpoint);
      const maxRotation = 8;

      setCursorPosition({ x: event.clientX, y: event.clientY });
      setRotation(event.clientX > midpoint ? (distanceFromMidpoint / midpoint) * maxRotation : -(distanceFromMidpoint / midpoint) * maxRotation);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [showTooltip]);

  const repeatedText = `${Array(4).fill(text).join(' - ')} - `;

  return (
    <div className={`marquee-wrap ${className}`}>
      <p className="marquee-fallback">{text}</p>

      {showTooltip && (
        <div
          className={`marquee-tooltip ${isHovered ? 'is-visible' : ''}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`
          }}
        >
          {tooltipText}
        </div>
      )}

      <div
        className="marquee-track"
        style={{ '--marquee-speed': `${speed}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{repeatedText}</span>
        <span aria-hidden="true">{repeatedText}</span>
      </div>
    </div>
  );
}
