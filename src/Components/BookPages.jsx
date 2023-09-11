import React from 'react';
import '../Book/bookstyle.css'

const Page = React.forwardRef((props, ref) => {
  const isCoverPage = props.number === 1; // Assuming 1 is the number of the cover page

  return (
    <div className="flip-book" ref={ref}>
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={props.imageSrc} alt={`Site reference for Page ${props.number}`} className="img-fluid " />
          </div>
        </div>
        <p className='project-text'>{props.children}</p>
        
        {/* Show the "Visit Site" button only if it's not the cover page */}
        {!isCoverPage && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary project-text">Visit Site</button>
          </a>
        )}
        
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-secondary project-text">Github</button>
        </a>
        
        <p className='project-text'> {props.number}</p>
      </div>
    </div>
  );
});

export default Page;
