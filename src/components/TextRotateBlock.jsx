export default function TextRotateBlock({ text, className = '' }) {
  const words = text.split(' ');

  return (
    <p className={`text-rotate-block ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span
            className="text-rotate-word"
            style={{ '--word-delay': `${index * 42}ms` }}
            key={`${word}-${index}`}
          >
            {word}
            {index < words.length - 1 ? '\u00a0' : ''}
          </span>
        ))}
      </span>
    </p>
  );
}
