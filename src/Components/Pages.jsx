import React from 'react';
import '../Book/bookstyle.css'





const Page = React.forwardRef((props, ref) => {
  return (
    <div className="flip-book" ref={ref}>
      <div className="project-container">
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={props.imageSrc} alt={`Image for Page ${props.number}`} className="img-fluid " />
          </div>
        </div>
        <p className='project-text'>{props.children}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-secondary project-text">Visit</button>
        </a>
        <p className='project-text'> {props.number}</p>
      </div>
    </div>
  );
});

export default Page;
