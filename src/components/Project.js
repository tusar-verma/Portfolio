function Project({imgRef, pageRef, desc}) {
  return (
    <div className="projectContainer">
      <a href={pageRef} target="_blank" rel="noreferrer">
        <img src={imgRef} alt="Screenshot of scketchpad site" className="projectImg"/>
      </a>
      <p> {desc} </p>
    </div>
  )
}

export default Project
