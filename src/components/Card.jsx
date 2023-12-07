const Card = ({ title, children }) => (
  <div className="card" data-index={title.split(' ')[1]}>
    <div>
      <h3>{title}</h3>
    </div>
    {children}
  </div>
);

export default Card;
