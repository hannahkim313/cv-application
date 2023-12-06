import EditButton from './EditButton';

const Preview = ({ isPageActive }) => (
  <div className={isPageActive ? 'preview-wrapper active' : 'preview-wrapper'}>
    <article className="preview">
      <h2>Preview</h2>
      <div className="sections">
        <div className="section personal-details">
          <p className="name">John Doe</p>
          <div className="contact">
            <p>johndoe@gmail.com</p>
            <p>123-456-7890</p>
          </div>
          <div className="divider" />
          <div className="summary">
            <p className="section-title">Summary</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              laborum magnam unde corrupti, aliquid eius minus! Omnis commodi
              doloremque distinctio, sed veniam accusantium iusto voluptatibus
              atque, labore praesentium eum totam?
            </p>
          </div>
        </div>
        <div className="section experience">
          <p className="section-title">Professional Experience</p>
          <div className="divider" />
          <div>
            <div className="details">
              <p className="bold">Company name</p>
              <p className="bold">Start date - End date</p>
            </div>
            <p className="bold">Job title</p>
            <ul>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, similique.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, nulla.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                voluptatem.
              </li>
            </ul>
          </div>
          <div>
            <div className="details">
              <p className="bold">Company name</p>
              <p className="bold">Start date - End date</p>
            </div>
            <p className="bold">Job title</p>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                voluptatem?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates hic fugit laudantium illo temporibus sequi sapiente
                alias magnam officia officiis!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                suscipit?
              </li>
            </ul>
          </div>
        </div>
        <div className="section education">
          <p className="section-title">Education</p>
          <div className="divider" />
          <div>
            <div className="details">
              <p>School name</p>
              <p>Grad date</p>
            </div>
            <p className="bold">Title of study</p>
          </div>
          <div>
            <div className="details">
              <p>School name</p>
              <p>Grad date</p>
            </div>
            <p className="bold">Title of study</p>
          </div>
        </div>
      </div>
    </article>
    <div className="options">
      <EditButton />
    </div>
  </div>
);

export default Preview;
