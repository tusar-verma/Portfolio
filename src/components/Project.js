function Project({imgRef, pageRef}) {
  return (
    <>
      <a href={pageRef} target="_blank" rel="noreferrer">
        <img src={imgRef} alt="Screenshot of scketchpad site" className="projectImg"/>
      </a>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
    </>
  )
}

export default Project
