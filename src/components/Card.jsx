import ExpandMoreButton from './ExpandMoreButton';

const Card = ({ title, children }) => (
  <div className="card">
    <div>
      <h3>{title}</h3>
      <ExpandMoreButton />
    </div>
    {children}
  </div>
);

export default Card;
