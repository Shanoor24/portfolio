import React, {useState} from "react";
import Styles from "./ContactMe.module.css";
import { Heading } from "../CategoryHeading/Heading";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { useForm } from '@formspree/react'


const ContactMe = () => {
    const [state, handleSubmit] = useForm("xkndaakv")
    const intialData = {name: "", email: "", message: ""}
    const [formData, setFormData] = useState(intialData)

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setFormData({...formData, [name]: value})
    }


    const emptyForm = () => {
        if(formData.name !== "" && formData.email !== "" && formData.message !== "" ) {
            setTimeout(() => {
                setFormData(intialData)
            }, 2000)
            
        }
        
    }

    return (
        <div>
            <div className={Styles.container}>
                <Heading title="Contact Me"/>
            </div>
            

            <div >
                <div className={Styles.contactForm}>
                    <form onSubmit={handleSubmit} method="POST" className={Styles.contactInputs}>
                        <input type="text" name="name" value={formData.name} placeholder="Fullname" autoComplete="off" onChange={(e) => handleChange(e)} required/>
                        <input type="email" name="email" value={formData.email} placeholder="Email" autoComplete="off" onChange={(e) => handleChange(e)} required/>
                        <textarea name="message" cols="30" rows="6" value={formData.message} autoComplete="off" onChange={(e) => handleChange(e)} required></textarea>
                        {state.succeeded && <p className={Styles.text}>Thanks for contacting me!</p>}
                        <div className={Styles.buttonWrapper} onClick={emptyForm}>
                            <input type="submit" disabled={state.submitting} value="Send" placeholder="Enter Message" className={Styles.submit}/>
                        </div>
                    </form>
                </div>

                <div className={Styles.socialMedia}>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default ContactMe