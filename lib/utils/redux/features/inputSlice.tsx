import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { inputModel } from 'lib/utils/Models/inputModel'

const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{5,15}/
const emailRegex = /^[a-zA-Z](?=.*[@])(?=.*\.com).{8,20}/
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,15}/

const initialState: inputModel = {
    user: '',
    validName: false,
    userFocus: false,
    email: '',
    validEmail: false,
    emailFocus: false,
    password: '',
    validPassword: false,
    passwordFocus: false,
    confirmPwd: '',
    validConfirmPwd: false,
    confirmPwdFocus: false,
    passwordVisible: false,
    errorMsg: '',
    guideMsg: '',
    successMsg: '',
    signInMode: true
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        inputUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload
        },
        userTest: (state) => {
            if(userRegex.test(state.user)) {
                state.validName = true
            } else {
                state.validName = false
            }
        },
        userFocusSwitch: (state, action: PayloadAction<boolean>) => {
            state.userFocus = action.payload
        },
        inputEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        emailTest: (state) => {
            if(emailRegex.test(state.email)) {
                state.validEmail = true
            } else {
                state.validEmail = false
            }
        },
        emailFocusSwitch: (state, action: PayloadAction<boolean>) => {
            state.emailFocus = action.payload
        },
        inputPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        passwordTest: (state) => {
            if(passwordRegex.test(state.password)) {
                state.validPassword = true
            } else {
                state.validPassword = false
            }
        },
        passwordFocusSwitch: (state, action: PayloadAction<boolean> ) => {
            state.passwordFocus = action.payload
        },
        inputConfirmPassword: (state, action: PayloadAction<string>) => {
            state.confirmPwd = action.payload
        },
        confirmPasswordTest: (state) => {
            if(state.password && state.confirmPwd === state.password) {
                state.validConfirmPwd = true
            } else {
                state.validConfirmPwd = false
            }
        },
        confirmPasswordFocusSwitch: (state, action: PayloadAction<boolean> ) => {
            state.confirmPwdFocus = action.payload
        },
        setErrorMsg: (state, action: PayloadAction<string>) => {
            state.errorMsg = action.payload
        },
        setGuideMsg: (state, action: PayloadAction<string>) => {
            state.guideMsg = action.payload
        },
        setSuccessMsg: (state, action: PayloadAction<string>) => {
            state.successMsg = action.payload
        },
        passwordVisibility: (state) => {
            state.passwordVisible = !state.passwordVisible
        },
        signInMode: (state, action: PayloadAction<boolean>) => {
            state.signInMode = action.payload
            state.user = ""
            state.email = ""
            state.password = ""
            state.confirmPwd = ""
        }
    }
})

export const {inputUser, inputEmail, inputPassword, inputConfirmPassword, userTest, emailTest, passwordTest, confirmPasswordTest, userFocusSwitch, emailFocusSwitch, passwordFocusSwitch, confirmPasswordFocusSwitch, passwordVisibility, setErrorMsg, setGuideMsg, setSuccessMsg, signInMode} = inputSlice.actions
export default inputSlice.reducer