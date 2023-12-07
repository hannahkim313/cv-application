import { useState } from 'react';
import toCamelCase from '../utilities/helpers';
import Preview from './Preview';
import Form from './Form';

const Page = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [inputData, setInputData] = useState({
    currId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    summary: '',
    employer1: '',
    jobTitle1: '',
    startData1: '',
    endDate1: '',
    responsibility1a: '',
    responsibility2a: '',
    responsibility3a: '',
    school1: '',
    fieldOfStudy1: '',
    gradDate1: '',
    employer2: '',
    jobTitle2: '',
    startData2: '',
    endDate2: '',
    responsibility1b: '',
    responsibility2b: '',
    responsibility3b: '',
    school2: '',
    fieldOfStudy2: '',
    gradDate2: '',
  });

  const handleChange = (e) => {
    const key = toCamelCase(e.target.id);
    const newInputData = {
      ...inputData,
      currId: key,
      [key]: e.target.value,
    };
    setInputData(newInputData);
  };

  const handleUpdateValue = (key) => inputData[key];

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <Form
          isPageActive={activePageIndex === 0}
          setActivePageIndex={setActivePageIndex}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          handleChange={handleChange}
        />
        <Preview
          isPageActive={activePageIndex === 1}
          setActivePageIndex={setActivePageIndex}
          setActiveTabIndex={setActiveTabIndex}
          inputId={inputData.currId}
          inputValue={inputData[inputData.currId]}
          handleUpdateValue={handleUpdateValue}
        />
      </main>
      <footer>
        <a href="https://github.com/hannahkim313">Created by Hannah Kim</a>
      </footer>
    </>
  );
};

export default Page;
