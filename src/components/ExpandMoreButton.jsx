import expandMoreIcon from '../assets/images/expand-more.svg';
import Button from './Button';

const ExpandMoreButton = () => (
  <Button
    src={expandMoreIcon}
    alt="Click to expand this work experience's details"
    className="expand-more"
  />
);

export default ExpandMoreButton;
