import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context"


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
            'service_d89b7om',
            'template_7aho4nl', 
            formRef.current, 
            'mqG2bkz00E9zVuLzJ'
            )
        .then(
            (result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
    <div className="c">
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                <h1 className="c-title">Parlons de votre projet</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone} 
                        alt="" 
                        className="c-icon" 
                        />
                        +33 6 52 48 39 56
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Email} 
                        alt="" 
                        className="c-icon" 
                        />
                        sale_allan@hotmail.fr
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Address} 
                        alt="" 
                        className="c-icon" 
                        />
                        33 rue de Montreuil 75011 Paris
                    </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
            <b>Quelle est votre histoire ?</b> Contactez moi. Je suis toujours disponible pour le bon projet.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nom" name="user_name" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Objet" name="user_subject" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                <button>Envoyer</button>
                {done && "Thank you..."}
            </form>
            </div>
        </div>
        </div>
  )
}

export default Contact