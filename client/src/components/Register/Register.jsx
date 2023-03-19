import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as validate from './services/validatationService'

import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Register = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [validateFormValues, setValidateFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [isTouched, setIsTouched] = useState({
        fullName: false,
        email: false,
        password: false,
        repeatPassword: false,
    });

    const isTouchedHandler = (e) =>
        setIsTouched(state => ({ ...state, [e.target.name]: true }));

    useEffect(() => {
        const validationArr = Array.from(Object.values(validateFormValues)).filter(x => x !== 'true');

        if (validationArr.length > 0) {
            return setIsBtnDisabled(true)
        }

        return setIsBtnDisabled(false);
    }, [validateFormValues.fullName,
    validateFormValues.email,
    validateFormValues.password,
    validateFormValues.repeatPassword,
    ]);

    const formValuesValidate = {
        fullName: validate.fullName,
        email: validate.email,
        password: validate.password,
        repeatPassword: validate.repeatPassword,
    }

    const onChangeHandler = (e) => {
        isTouchedHandler(e);

        return setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }


    const onBlurHandler = (e) => {
        const validationError = formValuesValidate[e.target.name](e.target.value, formValues.password);

        return setValidateFormValues(state => ({ ...state, [e.target.name]: validationError }))
    }

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['image-wrapper']}>
                <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />
            </div>
            <form className={styles['form']}>
                <div className={styles['title-wrapper']}>
                    <h1 className={styles['title']}>Sign Up</h1>
                </div>
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
                    {
                        isTouched.fullName
                        ? (
                            <>
                                <div className={styles['validate']}>
                                    {
                                        validateFormValues.fullName == 'true'
                                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                                    }
                                </div>
                                {
                                    validateFormValues.fullName !== 'true'
                                        ? <p className={styles['error']}>{validateFormValues.fullName}</p>
                                        : null
                                }
                            </>
                        )
                        : null
                    }

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
                    {
                        isTouched.email
                        ? (
                            <>
                                <div className={styles['validate']}>
                                    {
                                        validateFormValues.email == 'true'
                                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                                    }
                                </div>
                                {
                                    validateFormValues.email !== 'true'
                                        ? <div className={styles['error']}>
                                            <p>{validateFormValues.email}</p>
                                        </div>
                                        : null
                                }
                            </>
                        )
                        : null
                    }
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
                    {
                        isTouched.password
                        ? (
                            <>
                                <div className={styles['validate']}>
                                    {
                                        validateFormValues.password == 'true'
                                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                                    }
                                </div>
                                {
                                    validateFormValues.password !== 'true'
                                        ? <div className={styles['error']}>
                                            <p>{validateFormValues.password}</p>
                                        </div>
                                        : null
                                }
                            </>
                        )
                        : null
                    }
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
                    {
                        isTouched.repeatPassword
                        ? (
                            <>
                                <div className={styles['validate']}>
                                    {
                                        validateFormValues.repeatPassword == 'true'
                                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                                    }
                                </div>
                                {
                                    validateFormValues.repeatPassword !== 'true'
                                        ? <div className={styles['error']}>
                                            <p>{validateFormValues.repeatPassword}</p>
                                        </div>
                                        : null
                                }
                            </>
                        )
                        : null
                    }
                </div>

                <p className={styles['login-btn-p']}>Already have an account? <Link to="/login" className={styles['login-btn']}>Sign In</Link></p>

                <button type='button' className={styles['google-btn']}>
                    <FontAwesomeIcon icon={faGoogle} className={styles['google-icon']} size="lg" />
                    Continue with Google
                </button>
                <button type='submit' className={isBtnDisabled ? styles['submit-btn-disabled'] : styles['submit-btn']} disabled={isBtnDisabled}>Sign Up</button>

                <Link to="/" className={styles['back-btn']}>
                    <FontAwesomeIcon className={styles['back-btn-icon']} icon={faArrowLeftLong} />
                    Home
                </Link>
            </form>
        </div>
    );
}