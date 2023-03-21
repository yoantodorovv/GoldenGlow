import { useState } from "react";

import { auth } from "../../../../services/firebaseService";

import { ProfilePopUp } from '../../../ProfilePopUp/ProiflePopUp'

import styles from './HeaderProfile.module.scss'
import userDummy from '../../../../../public/images/Profile/Header/userDummy.png'

export const HeaderProfile = () => {
    const [show, setShow] = useState(false);

    const showProfileHandler = () => 
        setShow(!show);

    return (
        <div className={styles['profile-wrapper']}>
            <button
                type="button"
                onClick={showProfileHandler}
                className={styles['btn']}
            >
                <img src={auth?.currentUser?.photoURL ? auth.currentUser.photoURL : userDummy} className={styles['image']} />
            </button>
            {
                show
                ? <ProfilePopUp />
                : null
            }
        </div>
    );
}