const Input = ({ type, id, pattern, onChange }) => (
  <input
    type={type}
    name={id}
    id={id}
    pattern={pattern}
    autoComplete="off"
    onChange={onChange}
    required
  />
);

export default Input;
