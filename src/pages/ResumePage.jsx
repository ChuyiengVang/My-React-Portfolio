import Resume from '../images/resume.pdf'

export default function ResumePage() {

  return (
    <div className="container">
      <div className='mt-4'>
          <h2>Resume</h2>
          <a 
            href={Resume}
            download="resume.pdf"
            target="_blank"
            rel="noreferrer"
            type="button"
          >
            Download Resume
          </a>
      </div>
      <div className='mt-4'>
        <h2>Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
