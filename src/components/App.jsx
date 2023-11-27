import Wrapper from './Wrapper';
import Input from './Input';
import Label from './Label';
import Form from './Form';
import Main from './Main';
import Page from './Page';

const App = () => (
  <Page>
    <Main>
      <Form title="Personal Details">
        <Wrapper>
          <Wrapper>
            <Label id="first-name" text="First name" />
            <Input type="text" id="first-name" />
          </Wrapper>
          <Wrapper>
            <Label id="last-name" text="Last name" />
            <Input type="text" id="last-name" />
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper>
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
          <Wrapper>
            <Label
              id="user-email"
              text="Email address"
              formatText="Format: johndoe@gmail.com"
            />
            <Input type="email" id="user-email" pattern=".+@example\.com" />
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Label id="summary" text="Summary" />
          <textarea id="summary" name="summary" rows="5" cols="30" required />
        </Wrapper>
      </Form>
    </Main>
  </Page>
);

export default App;
