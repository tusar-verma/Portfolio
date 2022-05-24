import InputForm from "./InputForm"

function ContactForm() {
  return (
    <div id="formContainer">
      <p>Dejame tu mensaje</p>
      <form action="#">
        <textarea name="taxtArea" 
                  placeholder="Escriba su mensaje aquí" 
                  cols="50"
                  rows="15"
                  id="formTextArea"
        >
        </textarea>
        <div id="inputContainers">
          <InputForm inputId="nombre"
                     inputPlaceholder=""
                     label="Nombre"
          />
          <InputForm inputId="mail"
                     inputPlaceholder=""
                     label="Mail"
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default ContactForm