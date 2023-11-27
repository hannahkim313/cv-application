const Input = ({ type, id, pattern }) => (
  <input
    type={type}
    name={id}
    id={id}
    pattern={pattern}
    autoComplete="off"
    required
  />
);

export default Input;
