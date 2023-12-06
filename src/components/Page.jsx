import { useState } from 'react';
import Preview from './Preview';
import Form from './Form';

const Page = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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
        />
        <Preview isPageActive={activePageIndex === 1} />
      </main>
      <footer>
        <a href="https://github.com/hannahkim313">Created by Hannah Kim</a>
      </footer>
    </>
  );
};

export default Page;
