export const fullName = (fullName) => {
    // TODO: Add validation for numbers and symbols

    if (fullName.includes(' ') && (fullName.length >= 2 && fullName.length <= 50)) {
        return true;
    }

    return false;
}

export const email = (email) => {
    // TODO: Add better validation

    if (email.includes('@')) {
        return true;
    }

    return false;
}

export const password = (password) => {
    // TODO: Add validation for 1 number, 1 capital letter, 1 symbol

    if (!(password.length < 6)) {
        return true;
    }

    return false;
}

export const repeatPassword = (repeatPassword, password) => 
    repeatPassword === password ? true : false;