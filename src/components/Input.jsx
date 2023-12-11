const Input = ({ type, id, className, onChange }) => (
  <input
    type={type}
    name={id}
    id={id}
    className={className}
    autoComplete="off"
    onChange={onChange}
  />
);

export default Input;
