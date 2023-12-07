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

const Form = ({
  isPageActive,
  setActivePageIndex,
  activeTabIndex,
  setActiveTabIndex,
  handleChange,
}) => (
  <form action="" method="post" className={isPageActive ? 'active' : ''}>
    <Tab
      title="Personal Details"
      className="personal-details"
      isTabActive={activeTabIndex === 0}
    >
      <Fields>
        <Field>
          <Label id="first-name" text="First name" />
          <Input type="text" id="first-name" onChange={handleChange} />
        </Field>
        <Field>
          <Label id="last-name" text="Last name" />
          <Input type="text" id="last-name" onChange={handleChange} />
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
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label
            id="email"
            text="Email address"
            subText="Format: johndoe@gmail.com"
          />
          <Input
            type="email"
            id="email"
            pattern=".+@example\.com"
            onChange={handleChange}
          />
        </Field>
      </Fields>
      <Field>
        <Label id="summary" text="Summary" />
        <textarea
          id="summary"
          name="summary"
          rows="5"
          cols="30"
          onChange={handleChange}
          required
        />
      </Field>
      <NavButtons>
        <NextButton onClick={() => setActiveTabIndex(1)} />
      </NavButtons>
    </Tab>
    <Tab
      title="Professional Experience"
      className="professional-experience"
      isTabActive={activeTabIndex === 1}
    >
      <Card title="Experience 1">
        <Fields>
          <Field>
            <Label id="employer1" text="Employer" />
            <Input type="text" id="employer1" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="job-title1" text="Role or Job title" />
            <Input type="text" id="job-title1" onChange={handleChange} />
          </Field>
        </Fields>
        <Fields>
          <Field>
            <Label
              id="start-date1"
              text="Start date"
              subText="Format: M/YYYY or MM/YYYY"
            />
            <Input
              type="text"
              id="start-date1"
              pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              onChange={handleChange}
            />
          </Field>
          <Field>
            <Label
              id="end-date1"
              text="End date"
              subText="Format: M/YYYY or MM/YYYY"
            />
            <Input
              type="text"
              id="end-date1"
              pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              onChange={handleChange}
            />
          </Field>
        </Fields>
        <fieldset>
          <legend>What were your responsibilities and accomplishments?</legend>
          <Field>
            <Label id="responsibility1a" text="Bullet point 1" />
            <Input type="text" id="responsibility1a" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="responsibility2a" text="Bullet point 2" />
            <Input type="text" id="responsibility2a" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="responsibility3a" text="Bullet point 3" />
            <Input type="text" id="responsibility3a" onChange={handleChange} />
          </Field>
        </fieldset>
      </Card>
      <Card title="Experience 2">
        <Fields>
          <Field>
            <Label id="employer2" text="Employer" />
            <Input type="text" id="employer2" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="job-title2" text="Role or Job title" />
            <Input type="text" id="job-title2" onChange={handleChange} />
          </Field>
        </Fields>
        <Fields>
          <Field>
            <Label
              id="start-date2"
              text="Start date"
              subText="Format: M/YYYY or MM/YYYY"
            />
            <Input
              type="text"
              id="start-date2"
              pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              onChange={handleChange}
            />
          </Field>
          <Field>
            <Label
              id="end-date2"
              text="End date"
              subText="Format: M/YYYY or MM/YYYY"
            />
            <Input
              type="text"
              id="end-date2"
              pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              onChange={handleChange}
            />
          </Field>
        </Fields>
        <fieldset>
          <legend>What were your responsibilities and accomplishments?</legend>
          <Field>
            <Label id="responsibility1b" text="Bullet point 1" />
            <Input type="text" id="responsibility1b" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="responsibility2b" text="Bullet point 2" />
            <Input type="text" id="responsibility2b" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="responsibility3b" text="Bullet point 3" />
            <Input type="text" id="responsibility3b" onChange={handleChange} />
          </Field>
        </fieldset>
      </Card>
      <NavButtons>
        <PreviousButton onClick={() => setActiveTabIndex(0)} />
        <NextButton onClick={() => setActiveTabIndex(2)} />
      </NavButtons>
    </Tab>
    <Tab
      title="Education"
      className="education"
      isTabActive={activeTabIndex === 2}
    >
      <Card title="Education 1">
        <Fields>
          <Field>
            <Label id="school1" text="School" />
            <Input type="text" id="school1" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="field-of-study1" text="Field of study" />
            <Input type="text" id="field-of-study1" onChange={handleChange} />
          </Field>
        </Fields>
        <Fields>
          <Field>
            <Label
              id="grad-date1"
              text="Graduation date"
              subText="Format: M/YYYY or MM/YYYY"
            />
            <Input
              type="text"
              id="grad-date1"
              pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              onChange={handleChange}
            />
          </Field>
        </Fields>
      </Card>
      <Card title="Education 2">
        <Fields>
          <Field>
            <Label id="school2" text="School" />
            <Input type="text" id="school2" onChange={handleChange} />
          </Field>
          <Field>
            <Label id="field-of-study2" text="Field of study" />
            <Input type="text" id="field-of-study2" onChange={handleChange} />
          </Field>
        </Fields>
        <Fields>
          <Field>
            <Label
              id="grad-date2"
              text="Graduation date"
              subText="Format: M/YYYY or MM/YYYY"
            />
            <Input
              type="text"
              id="grad-date2"
              pattern="(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b"
              onChange={handleChange}
            />
          </Field>
        </Fields>
      </Card>
      <NavButtons>
        <PreviousButton onClick={() => setActiveTabIndex(1)} />
        <SubmitButton onClick={() => setActivePageIndex(1)} />
      </NavButtons>
    </Tab>
  </form>
);

export default Form;
