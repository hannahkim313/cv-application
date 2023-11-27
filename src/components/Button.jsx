const Button = ({ imgProps, text = '', hasImg = false }) => (
  <button type="button">
    {hasImg && <img src={imgProps.src} alt={imgProps.alt} />}
    {text}
  </button>
);

export default Button;
