import { useState } from 'react';
import AddButton from './AddButton';
import SubmitButton from './SubmitButton';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import NavButtons from './NavButtons';
import Card from './Card';
import Input from './Input';
import Label from './Label';
import Fields from './Fields';
import Field from './Field';
import Tab from './Tab';

const Form = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <form action="" method="post" className="active">
      <Tab
        title="Personal Details"
        className="personal-details"
        isActive={activeIndex === 0}
      >
        <Fields>
          <Field>
            <Label id="first-name" text="First name" />
            <Input type="text" id="first-name" />
          </Field>
          <Field>
            <Label id="last-name" text="Last name" />
            <Input type="text" id="last-name" />
          </Field>
        </Fields>
        <Fields>
          <Field>
            <Label
              id="phone-number"
              text="Phone number"
              subText="Format: 123-456-7890"
            />
            <Input
              type="tel"
              id="phone-number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </Field>
          <Field>
            <Label
              id="user-email"
              text="Email address"
              subText="Format: johndoe@gmail.com"
            />
            <Input type="email" id="user-email" pattern=".+@example\.com" />
          </Field>
        </Fields>
        <Field>
          <Label id="summary" text="Summary" />
          <textarea id="summary" name="summary" rows="5" cols="30" required />
        </Field>
        <NavButtons>
          <NextButton onClick={() => setActiveIndex(1)} />
        </NavButtons>
      </Tab>
      <Tab
        title="Professional Experience"
        className="professional-experience"
        isActive={activeIndex === 1}
      >
        <Card title="Experience 1">
          <Fields>
            <Field>
              <Label id="employer" text="Employer" />
              <Input type="text" id="employer" />
            </Field>
            <Field>
              <Label id="job-title" text="Role or Job title" />
              <Input type="text" id="job-title" />
            </Field>
          </Fields>
          <Fields>
            <Field>
              <Label
                id="start-date"
                text="Start date"
                subText="Format: M/YYYY or MM/YYYY"
              />
              <Input
                type="text"
                id="start-date"
                pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              />
            </Field>
            <Field>
              <Label
                id="end-date"
                text="End date"
                subText="Format: M/YYYY or MM/YYYY"
              />
              <Input
                type="text"
                id="end-date"
                pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              />
            </Field>
          </Fields>
          <fieldset>
            <legend>
              What were your responsibilities and accomplishments?
            </legend>
            <Field>
              <Label id="responsibility1" text="Bullet point 1" />
              <Input type="text" id="responsibility1" />
            </Field>
            <Field>
              <Label id="responsibility2" text="Bullet point 2" />
              <Input type="text" id="responsibility2" />
            </Field>
            <Field>
              <Label id="responsibility3" text="Bullet point 3" />
              <Input type="text" id="responsibility3" />
            </Field>
          </fieldset>
        </Card>
        <AddButton text="Add experience" />
        <NavButtons>
          <PreviousButton onClick={() => setActiveIndex(0)} />
          <NextButton onClick={() => setActiveIndex(2)} />
        </NavButtons>
      </Tab>
      <Tab title="Education" className="education" isActive={activeIndex === 2}>
        <Card title="Education 1">
          <Fields>
            <Field>
              <Label id="school" text="School" />
              <Input type="text" id="school" />
            </Field>
            <Field>
              <Label id="field-of-study" text="Field of study" />
              <Input type="text" id="field-of-study" />
            </Field>
          </Fields>
          <Fields>
            <Field>
              <Label
                id="grad-date"
                text="Graduation date"
                subText="Format: M/YYYY or MM/YYYY"
              />
              <Input
                type="text"
                id="grad-date"
                pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              />
            </Field>
          </Fields>
        </Card>
        <AddButton text="Add education" />
        <NavButtons>
          <PreviousButton onClick={() => setActiveIndex(1)} />
          <SubmitButton />
        </NavButtons>
      </Tab>
    </form>
  );
};

export default Form;
