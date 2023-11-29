const Form = ({ title, className, children }) => (
  <form action="" method="post" className={className}>
    <h2>{title}</h2>
    {children}
  </form>
);

export default Form;
