import { useState } from 'react'

import * as validate from './services/formValuesService'

import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Register = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [validateFormValues, setValidateFormValues] = useState({
        fullName: false,
        email: false,
        password: false,
        repeatPassword: false,
    });

    const formValuesValidate = {
        fullName: validate.fullName,
        email: validate.email,
        password: validate.password,
        repeatPassword: validate.repeatPassword,
    }

    const onChangeHandler = (e) => 
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));

    const onBlurHandler = (e) => {
        const doesPass = formValuesValidate[e.target.name](e.target.value, formValues.password);

        return setValidateFormValues(state => ({...state, [e.target.name]: doesPass}))
    }

    return (
        <>
            <form className={styles['form']}>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="fullName" className={styles['input-item-label']}>Full Name</label>
                    <input
                        className={styles['input-item']}
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formValues.fullName}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    <div className={styles['validate']}>
                        {
                            validateFormValues.fullName
                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                        }
                    </div>
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="email" className={styles['input-item-label']}>Email</label>
                    <input
                        className={styles['input-item']}
                        type="text"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    <div className={styles['validate']}>
                        {
                            validateFormValues.email
                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />                            
                        }
                    </div>
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="password" className={styles['input-item-label']}>Password</label>
                    <input
                        className={styles['input-item']}
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    <div className={styles['validate']}>
                        {
                            validateFormValues.password
                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />                           
                        }
                    </div>
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="repeatPassword" className={styles['input-item-label']}>Repeat Password</label>
                    <input
                        className={styles['input-item']}
                        type="password"
                        name="repeatPassword"
                        id="repeatPassword"
                        value={formValues.repeatPassword}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    <div className={styles['validate']}>
                        {
                            validateFormValues.repeatPassword
                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />                            
                        }
                    </div>
                </div>
            </form>
        </>
    );
}