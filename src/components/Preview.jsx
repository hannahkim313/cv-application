import EditButton from './EditButton';

const Preview = ({
  isPageActive,
  setActivePageIndex,
  setActiveTabIndex,
  handleUpdateValue,
}) => (
  <div className={isPageActive ? 'preview-wrapper active' : 'preview-wrapper'}>
    <article className="preview">
      <h2>Preview</h2>
      <div className="sections">
        <div className="section personal-details">
          <div className="full-name">
            <p>{handleUpdateValue('firstName')}</p>
            <p>{handleUpdateValue('lastName')}</p>
          </div>
          <div className="contact">
            <p>{handleUpdateValue('email')}</p>
            <p>{handleUpdateValue('phoneNumber')}</p>
          </div>
          <div className="divider" />
          <div className="summary">
            <p className="section-title">Summary</p>
            <p>{handleUpdateValue('summary')}</p>
          </div>
        </div>
        <div className="section experience">
          <p className="section-title">Professional Experience</p>
          <div className="divider" />
          <div>
            <div className="details">
              <p className="bold">{handleUpdateValue('employer1')}</p>
              <p className="bold">{`${handleUpdateValue(
                'startDate1'
              )} - ${handleUpdateValue('endDate1')}`}</p>
            </div>
            <p className="bold">{handleUpdateValue('jobTitle1')}</p>
            <ul>
              <li>{handleUpdateValue('responsibility1a')}</li>
              <li>{handleUpdateValue('responsibility2a')}</li>
              <li>{handleUpdateValue('responsibility3a')}</li>
            </ul>
          </div>
          <div>
            <div className="details">
              <p className="bold">{handleUpdateValue('employer2')}</p>
              <p className="bold">{`${handleUpdateValue(
                'startDate2'
              )} - ${handleUpdateValue('endDate2')}`}</p>
            </div>
            <p className="bold">{handleUpdateValue('jobTitle2')}</p>
            <ul>
              <li>{handleUpdateValue('responsibility1b')}</li>
              <li>{handleUpdateValue('responsibility2b')}</li>
              <li>{handleUpdateValue('responsibility3b')}</li>
            </ul>
          </div>
        </div>
        <div className="section education">
          <p className="section-title">Education</p>
          <div className="divider" />
          <div>
            <div className="details">
              <p>{handleUpdateValue('school1')}</p>
              <p>{handleUpdateValue('gradDate1')}</p>
            </div>
            <p className="bold">{handleUpdateValue('fieldOfStudy1')}</p>
          </div>
          <div>
            <div className="details">
              <p>{handleUpdateValue('school2')}</p>
              <p>{handleUpdateValue('gradDate2')}</p>
            </div>
            <p className="bold">{handleUpdateValue('fieldOfStudy2')}</p>
          </div>
        </div>
      </div>
    </article>
    <div className="options">
      <EditButton
        onClick={() => {
          setActivePageIndex(0);
          setActiveTabIndex(0);
        }}
      />
    </div>
  </div>
);

export default Preview;
