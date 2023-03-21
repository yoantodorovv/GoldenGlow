import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './AuthValidationIcon.module.scss'

export const AuthValidationIcon = ({
    validation
}) => {
    return (
        <div className={styles['validate']}>
            {
                validation == 'true'
                    ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                    : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
            }
        </div>
    );
}