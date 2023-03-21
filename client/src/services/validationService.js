export const fullName = (fullName) => {
    if (fullName.length >= 2 && fullName.length <= 50) {
        return 'true';
    }

    return 'Name should be between 2 and 50 characters long!';
}

export const email = (email) => {
    const emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (email.match(emailValidation)) {
        return 'true';
    }

    return 'Email address is invalid!';
}

export const password = (password) => {
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;

    if (password.match(passwordValidation)) {
        return 'true';
    }

    return '6 - 20, one lower, one upper case, one digit and one symbol';
}

export const repeatPassword = (repeatPassword, beforePassword) => {
    const passwordValidation = password(beforePassword);
    
    if (passwordValidation !== 'true') {
        return passwordValidation;
    }

    if (repeatPassword !== beforePassword) {
        return 'Repeat Password should match Password!'
    }

    return 'true';
}