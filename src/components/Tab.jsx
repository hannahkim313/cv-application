const Tab = ({ title, className, isTabActive, children }) => (
  <article
    className={isTabActive ? `tab ${className} active` : `tab ${className}`}
  >
    <h2>{title}</h2>
    {children}
  </article>
);

export default Tab;
