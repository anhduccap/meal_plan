
export function validateEmail(email){
    const validateEmail = new RegExp("[a-zA-Z0-9_.]+(@gmail.com)");
    return validateEmail.test(email)
}
export function validatePassword(password) {
    return password && password.length >= 6;
}

export const convertTimeToString = (time, format) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const mon = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hour = ("0" + date.getHours()).slice(-2);
    const min = ("0" + date.getMinutes()).slice(-2);
    const second = ("0" + date.getSeconds()).slice(-2);

    return format
        .replace("YYYY", year)
        .replace("yyyy", year)
        .replace("dd", day)
        .replace("DD", day)
        .replace("MM", mon)
        .replace("hh", hour)
        .replace("mm", min)
        .replace("ss", second);
}