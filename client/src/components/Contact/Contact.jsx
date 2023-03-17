import styles from "./Contact.module.scss"
import { Map } from "./Map/Map";

export const Contact = () => {
    return (
        <>
            <div className={styles['title-wrapper']}>
                <h1 className={styles['title']}>Contact Us</h1>
            </div>

            <Map />
        </>
    );
}