import React from 'react';
import '../Book/bookstyle.css'





const Page = React.forwardRef((props, ref) => {
  return (
    <div className="flip-book" ref={ref}>
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={props.imageSrc} alt={`Image for Page ${props.number}`} className="img-fluid " />
          </div>
        </div>
        <p>{props.children}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-secondary">Visit</button>
        </a>
        <p> {props.number}</p>
      </div>
    </div>
  );
});

export default Page;
