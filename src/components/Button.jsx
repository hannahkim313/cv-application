const Button = ({ src = '', alt = '', text, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {src !== '' && <img src={src} alt={alt} />}
    {text}
  </button>
);

export default Button;
