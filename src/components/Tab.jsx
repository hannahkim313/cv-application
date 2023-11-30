const Tab = ({ title, className, children }) => (
  <article className={`tab ${className}`}>
    <h2>{title}</h2>
    {children}
  </article>
);

export default Tab;
