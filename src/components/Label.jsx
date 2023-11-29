const Label = ({ id, text, subText = '' }) => (
  <>
    {subText === '' && <label htmlFor={id}>{text}</label>}
    {subText !== '' && (
      <div>
        <label htmlFor={id}>{text}</label>
        <p>{subText}</p>
      </div>
    )}
  </>
);

export default Label;
