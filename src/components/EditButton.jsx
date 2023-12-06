import editIcon from '../assets/images/edit.svg';
import Button from './Button';

const EditButton = ({ onClick }) => (
  <Button
    src={editIcon}
    alt=""
    text="Edit CV"
    className="edit"
    onClick={onClick}
  />
);

export default EditButton;
