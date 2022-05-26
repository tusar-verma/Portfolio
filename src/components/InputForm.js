function InputForm({label, inputId, inputPlaceholder, type}) {
  return (
    <div className="input">    
      <label htmlFor={label}>{label}</label>
      <input className="inputText" type={type} name="name" id={inputId} required={true} />
    </div>
  )
}

export default InputForm