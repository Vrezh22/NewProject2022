import React from "react";
import style from './contact.module.css'
import Button from "../../components/Button";

class ContactUs extends React.Component {
    state={
        value:''
    }
    render() {
        return (
            <div className={style.contactUs}>
                <h1>CONTACT US</h1>
                <p>
                    IF YOU WANT MORE DETAILS
                    WE ARE ALWAYS READY TO ANSWER YOUR QUESTIONS
                </p>
                <div className={style.contactsApp}>
                    <i className="fab fa-telegram"> Telegram</i>
                    <i className="fab fa-viber"> Viber</i>
                    <i className="fas fa-phone-square-alt"> WhatsApp</i>
                    <span> +37477150657</span>
                </div>
                <div className={style.contactsApp}>
                    <i className="fab fa-instagram-square"> Instagram</i>
                    <i className="fab fa-facebook"> Facebook`</i>
                    <span>Vrezh Hovhannisyan Official</span>
                </div>

                <address> Address` The center of Earth` LENNAGAN CITY</address>

                <form action="#" method="GET">
                    <textarea  name="info" id="myInfo" cols="30" rows="10" placeholder="Write your message to us"></textarea>
                </form>
                <Button/>
            </div >
        )
    }
}
export default ContactUs;