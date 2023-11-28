import Button from './Button';
import Wrapper from './Wrapper';
import Input from './Input';
import Label from './Label';
import Form from './Form';
import Page from './Page';
import '../styles/reset.css';
import '../styles/main.css';

const App = () => (
  <Page>
    <Form title="Personal Details">
      <Wrapper className="fields">
        <Wrapper className="field-wrapper">
          <Label id="first-name" text="First name" />
          <Input type="text" id="first-name" />
        </Wrapper>
        <Wrapper className="field-wrapper">
          <Label id="last-name" text="Last name" />
          <Input type="text" id="last-name" />
        </Wrapper>
      </Wrapper>
      <Wrapper className="fields">
        <Wrapper className="field-wrapper">
          <Label
            id="phone-number"
            text="Phone number"
            formatText="Format: 123-456-7890"
          />
          <Input
            type="tel"
            id="phone-number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </Wrapper>
        <Wrapper className="field-wrapper">
          <Label
            id="user-email"
            text="Email address"
            formatText="Format: johndoe@gmail.com"
          />
          <Input type="email" id="user-email" pattern=".+@example\.com" />
        </Wrapper>
      </Wrapper>
      <Wrapper className="field-wrapper">
        <Label id="summary" text="Summary" />
        <textarea id="summary" name="summary" rows="5" cols="30" required />
      </Wrapper>
      <Wrapper className="nav-buttons">
        <Button text="Next" />
      </Wrapper>
    </Form>
  </Page>
);

export default App;
