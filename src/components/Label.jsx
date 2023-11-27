const Label = ({ id, text, formatText = '' }) => (
  <>
    {formatText === '' && <label htmlFor={id}>{text}</label>}
    {formatText !== '' && (
      <div>
        <label htmlFor={id}>{text}</label>
        <p>{formatText}</p>
      </div>
    )}
  </>
);

export default Label;
