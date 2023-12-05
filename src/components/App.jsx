import Preview from './Preview';
import EditButton from './EditButton';
import Form from './Form';
import Page from './Page';
import '../styles/reset.css';
import '../styles/main.css';

const App = () => (
  <Page>
    <Form />
    <div className="preview-wrapper">
      <Preview />
      <div className="options">
        <EditButton />
      </div>
    </div>
  </Page>
);

export default App;
