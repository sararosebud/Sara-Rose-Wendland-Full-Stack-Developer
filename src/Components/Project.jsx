import React from 'react';

const Project = ({ name, imageURL }) => (
  <div className="project-container">
    <div className="image-container">
      <img src={imageURL} alt={name} />
    </div>
    <h1 className="project-name">{name}</h1>
  </div>
);

export default Project;
