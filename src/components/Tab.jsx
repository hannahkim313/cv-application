const Tab = ({ title, className, isActive, children }) => (
  <article
    className={isActive ? `tab ${className} active` : `tab ${className}`}
  >
    <h2>{title}</h2>
    {children}
  </article>
);

export default Tab;
