import styles from './PopUp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const typeIcon = {
    error: faCircleExclamation,
    success: faCircleCheck,
    warning: faTriangleExclamation,
}

export const PopUp = ({
    type,
    text,
}) => {
    console.log(type);
    console.log(text);

    return (
        <div className={styles[`pop-up ${type}`]}>
            <FontAwesomeIcon className={styles['icon']} icon={typeIcon[type]}/>
            <h1 className={styles['text']}>{text}</h1>
        </div>
    );
}