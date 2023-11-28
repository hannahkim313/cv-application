import Wrapper from './Wrapper';

const Label = ({ id, text, formatText = '' }) => (
  <>
    {formatText === '' && <label htmlFor={id}>{text}</label>}
    {formatText !== '' && (
      <Wrapper>
        <label htmlFor={id}>{text}</label>
        <p>{formatText}</p>
      </Wrapper>
    )}
  </>
);

export default Label;
