export interface inputModel {
    user: string,
    validName: boolean,
    userFocus: boolean,
    email: string,
    validEmail: boolean,
    emailFocus: boolean,
    password: string,
    validPassword: boolean,
    passwordFocus: boolean,
    confirmPwd: string,
    validConfirmPwd: boolean,
    confirmPwdFocus: boolean,
    passwordVisible: boolean,
    signInMode: boolean
    errorMsg: string,
    guideMsg: string,
    successMsg: string
}