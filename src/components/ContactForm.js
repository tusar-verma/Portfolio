import InputForm from "./InputForm"

function ContactForm() {
  return (
    <div id="formContainer">
      <p>Dejame tu mensaje</p>
      <form id="contactForm" action="#">
        <textarea name="taxtArea" 
                  placeholder="Escriba su mensaje aquí" 
                  cols="50"
                  rows="15"
                  id="formTextArea"
        >
        </textarea>
        <div id="inputsContainer">
          <InputForm inputId="nombre"
                     inputPlaceholder=""
                     label="Nombre"
          />
          <InputForm inputId="mail"
                     inputPlaceholder=""
                     label="Mail"
          />
        </div>
      </form>      
      <input id="submitBtn" type="submit" value="Enviar" form="contactForm" onSubmit={validaciones}/>
    </div>
  )
}

function validaciones () {
  
}

export default ContactForm