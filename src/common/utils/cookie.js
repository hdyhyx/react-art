import Cookies from 'js-cookie'
import Base64 from 'js-base64'

const expires = 7
export const setToken = (token) => {
    Cookies.set('token', token, {expires: expires || 7});
}

export const getToken = () => {
    const token = Cookies.get('token')
    if (token) {
        return _enCode(token)
    }
    return false
}

function _enCode(token) {
    const base64 = Base64.encode(token + ":")
    return 'Basic ' + base64
}