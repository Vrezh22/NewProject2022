export const minLength = (length) => (value) => value.length >= length;
export const maxLength = (length) => (value) => value.length <= length;
export const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const isUrlValid = (url) => {
    var pattern = /(ftp|http|https):(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/;
    if (pattern.test(url)) return true;
    else return false;
}

export const isAllValid = (form) => {
    let isAccess = false
    for (let key in form) {
        if (form[key].isValid) {
            isAccess = true
        }
        else
            isAccess = false
    }
    return isAccess;
}

export const repeatEmail = (email) => {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        let candidate = users.find(user => user.email === email);
        if (candidate) {
            return candidate;
        }
        else return false
    }
    else return false
}
