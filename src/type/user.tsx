class UserLoginData {
    account: String|null
    password: String|null

    constructor(account: String| null, password: String| null){
        this.account = account
        this.password = password
    }

    toString(){
        return String({account: this.account,password: this.password})
    }
}

class UserRegisterData {
    account: String
    password: String
    firstName: String
    lastName: String
    email: String

    constructor(account: String = '', password: String = '', 
                firstName: String = '', lastName: String = '', email: String = ''){
        this.account = account
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }
}

export interface PersonalInfo {
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: String;
}

export interface WorkInfo {
    applyDate: Date|null;
    startWorkingAt: Date|null;
    endWorkingAt: Date | null;
    overtimeWork: number;
    dayOff: number;
}

export interface UserData {
    personalInfo: PersonalInfo;
    workInfo: WorkInfo;
    role: String | null;
    status: String | null;
    department: String | null;
    permission: String;
    account: String,
}


export { UserLoginData, UserRegisterData }