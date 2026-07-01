export default function ImageBox({ src, alt, className = '' }) {
  return (
    <div className={`image-box ${className}`}>
      <img src={src} alt={alt} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      <div className="image-placeholder">PETSTAY1455<br /><small>{alt}</small></div>
    </div>
  );
}
