export default function TextBlockAnimation({ lines, className = '' }) {
  return (
    <h1 className={`text-block-title ${className}`}>
      {lines.map((line, index) => (
        <span className="text-block-line" style={{ '--line-delay': `${index * 160}ms` }} key={line}>
          <span className="text-block-copy">{line}</span>
          <span className="text-block-cover" aria-hidden="true" />
        </span>
      ))}
    </h1>
  );
}
