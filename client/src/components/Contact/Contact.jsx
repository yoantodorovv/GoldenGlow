import { useState } from 'react'

import { ContactForm } from "./ContactForm/ContactForm";
import { Map } from "./Map/Map";

import styles from "./Contact.module.scss"
import contact from '../../../public/images/Contact/contact.png'

export const Contact = () => {
    const [isLocate, setIsLocate] = useState(false);

    // Set cookie to keep map open
    const onLocateClick = () => setIsLocate(state => !state);

    return (
        <>
            <div className={styles['title-wrapper']}>
                <h1 className={styles['title']}>Contact Us</h1>
            </div>

            <div className={styles['main-content-wrapper']}>
                <div className={styles['image-wrapper']}>
                    <img src={contact} alt="Image of clothes" />
                </div>


                {
                    !isLocate 
                    ?   <ContactForm onLocateClick={onLocateClick} formStyle="form-wrapper"/>
                    :   <>
                            <ContactForm onLocateClick={onLocateClick} formStyle="form-map-wrapper"/>
                            <Map onLocateClick={onLocateClick} />
                        </>
                }
            </div>

        </>
    );
}