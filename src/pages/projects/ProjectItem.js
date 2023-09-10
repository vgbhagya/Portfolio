import React from 'react'

function ProjectItem({ name, image, skills, children }) {
  return (
    <div className="projectItem">
        <div style={{backgroundImage:`url(${image})`}} className='bgImage' />
      <h2 className='texth2'>{name}</h2>
      <p>Skills: {skills.split(', ')}</p>
      <div className="projectLinks">{children}</div>
    </div>
  );
}

export default ProjectItem;