const baseURL: String = 'http://localhost:3000/'
const baseBackendURL: String = 'http://localhost:5000/api/'

const loginRoute = {
    loginPage: baseURL+'login/',
    registerPage: baseURL+'login/register',
    recoverPage: baseURL+'login/recover',
}

const apiRoute = {
    base: baseBackendURL,
    login: baseBackendURL+'login',
    register: baseBackendURL+'register',
}

export { loginRoute, apiRoute }