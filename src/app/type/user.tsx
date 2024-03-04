class UserLoginData {
    account: String|null
    password: String|null

    constructor(account: String| null, password: String| null){
        this.account = account
        this.password = password
    }
}

export default UserLoginData