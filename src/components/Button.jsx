const Button = ({ src = '', alt = '', text, className }) => (
  <button type="button" className={className}>
    {src !== '' && <img src={src} alt={alt} />}
    {text}
  </button>
);

export default Button;
