function InputForm({label, inputId, inputPlaceholder}) {
  return (
    <div className="input">    
      <label htmlFor={label}>{label}</label>
      <input className="inputText" type="text" name="name" placeholder={inputPlaceholder} id={inputId} />
    </div>
  )
}

export default InputForm