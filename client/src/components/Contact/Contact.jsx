import { useState } from 'react'

import { ContactForm } from "./ContactForm/ContactForm";
import { Map } from "./Map/Map";

import styles from "./Contact.module.scss"

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
                    <img src="https://images.unsplash.com/photo-1531450664978-9be7f46cb497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
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