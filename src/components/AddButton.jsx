import addIcon from '../assets/images/add.svg';
import Button from './Button';

const AddButton = ({ text }) => (
  <Button src={addIcon} text={text} className="add-button" />
);

export default AddButton;
