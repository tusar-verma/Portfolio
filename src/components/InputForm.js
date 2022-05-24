function InputForm({label, inputId, inputPlaceholder}) {
  return (
    <div className="inputsForm">    
      <label htmlFor={label}>{label}</label>
      <input type="text" name="name" placeholder={inputPlaceholder} id={inputId} />
    </div>
  )
}

export default InputForm