const Form = ({ title, children }) => (
  <form action="" method="post">
    <h2>{title}</h2>
    {children}
  </form>
);

export default Form;
