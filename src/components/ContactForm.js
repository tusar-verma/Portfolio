import { useEffect } from "react"
import InputForm from "./InputForm"

function ContactForm() {

  useEffect(() =>{
    
    const email = document.getElementById("email")   
    email.addEventListener('input', (e) => {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("Por favor, ingrese un correo valido")
      } else {
        email.setCustomValidity("")
      }
    })
    
    const inpNombre = document.getElementById("nombre")
    inpNombre.addEventListener('input', (e) => {
      const textNombre = e.target.value 
      if(textNombre.length <= 3 || textNombre.length >= 20) {
        inpNombre.setCustomValidity("Por favor ingrese un nombre valido")
      } else {
        inpNombre.setCustomValidity("")
      }
    })

    const textArea = document.getElementById("formTextArea")
    textArea.addEventListener('input', (e) => {
      const msgTextArea = e.target.value
      if(msgTextArea.length <= 5 || msgTextArea.length >= 500) {
        textArea.setCustomValidity("Por favor ingrese un mensaje valido")
      } else {
        textArea.setCustomValidity("")
      }
    })
  }, [] )

  return (
    <div id="formContainer">
      <p>Dejame tu mensaje</p>
      <form id="contactForm"  onSubmit={(e) =>{e.preventDefault()}} action="#">
        <textarea name="taxtArea" 
                  placeholder="Escriba su mensaje aquí" 
                  cols="50"
                  rows="15"
                  id="formTextArea"
                  required={true}
        >
        </textarea>
        <div id="inputsContainer">
          <InputForm inputId="nombre"
                     label="Nombre"
                     type={"text"}
          />
          <InputForm inputId="email"
                     label="Mail"
                     type={"email"}
          />
        </div>
      </form>      
      <input id="submitBtn" type="submit" value="Enviar" form="contactForm"/>
    </div>
  )
}


export default ContactForm