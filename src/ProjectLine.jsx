import React from 'react'

const ProjectLine = ( {title, location} ) => {
  return (
    <div className="projectLine">
        <h2>{title}</h2>
        <p>{location}</p>
    </div>
  )
}

export default ProjectLine