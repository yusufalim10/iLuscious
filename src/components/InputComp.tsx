'use client'
import { confirmPasswordFocusSwitch, confirmPasswordTest, emailFocusSwitch, emailTest, inputConfirmPassword, inputEmail, inputPassword, inputUser, passwordFocusSwitch, passwordTest, passwordVisibility, userFocusSwitch, userTest } from "lib/utils/redux/features/inputSlice";
import { useAppDispatch, useAppSelector } from "lib/utils/redux/store";
import { NextPage } from "next";
import { useEffect } from "react";
import { BsPatchCheckFill, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa'
import styles from '../styles/input.module.css'

type nameModel = 'usernameInput' | 'emailInput' | 'passwordInput' | 'passwordConfirm'

interface InputProps <T> {
    text: string,
    name: T,
    id: T | string
}

const InputComp: NextPage<InputProps<nameModel>> = ({text, name, id}) => {

    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.input.user) // Access the User Name
    const email = useAppSelector((state) => state.input.email) // Access user Email
    const password = useAppSelector((state) => state.input.password) // Access user password
    const confirmPassword = useAppSelector((state) => state.input.confirmPwd) // Access user confirmation
    const passwordVisible = useAppSelector((state) => state.input.passwordVisible) // Access Password Visibility
    const validUser = useAppSelector((state) => state.input.validName) // Access user validation
    const validEmail = useAppSelector((state) => state.input.validEmail) // Access email validation
    const validPassword = useAppSelector((state) => state.input.validPassword) // Access password validation
    const validConfirmPwd = useAppSelector((state) => state.input.validConfirmPwd) // Access password confirmation validation
    const userFocus = useAppSelector((state) => state.input.userFocus) // Access user input state
    const emailFocus = useAppSelector((state) => state.input.emailFocus) // Access email input state
    const passwordFocus = useAppSelector((state) => state.input.passwordFocus) // Access password input state
    const confirmFocus = useAppSelector((state) => state.input.confirmPwdFocus) // Access confirm password input state

    useEffect(() => {
        if(name === 'usernameInput') {
            dispatch(userTest())
        } else if (name === 'emailInput') {
            dispatch(emailTest())
        } else if (name === 'passwordInput') {
            dispatch(passwordTest())
        } else if (name === 'passwordConfirm') {
            dispatch(confirmPasswordTest())
        }
    }, [user, email, password, confirmPassword, dispatch])

    return (
        <div className={
            userFocus && name === 'usernameInput' ? styles.userInput : user !== "" && name === 'usernameInput' ? styles.userInput :
            emailFocus && name === 'emailInput' ? styles.emailInput : email !== "" && name === 'emailInput' ? styles.emailInput :
            passwordFocus && name === 'passwordInput' ? styles.passwordInput : password !== "" && name === 'passwordInput' ? styles.passwordInput :
            confirmFocus && name === 'passwordConfirm' ? styles.confirmInput : confirmPassword !== "" && name === 'passwordConfirm' ? styles.confirmInput :
            styles.input
        }>
            <label htmlFor={id} 
                className={
                    userFocus && name === 'usernameInput' ? styles.labelFocusedUser : user !== "" && name === 'usernameInput' ? styles.labelFocusedUser :
                    emailFocus && name === 'emailInput' ? styles.labelFocusedEmail : email !== "" && name === 'emailInput' ? styles.labelFocusedEmail :
                    passwordFocus && name === 'passwordInput' ? styles.labelFocusedPassword : password !== "" && name === 'passwordInput' ? styles.labelFocusedPassword :
                    confirmFocus && name === 'passwordConfirm' ? styles.labelFocusedConfirm : confirmPassword !== "" && name === 'passwordConfirm' ? styles.labelFocusedConfirm :
                    styles.labelBlurred
                }>
                <span>{text}</span>
                <span className={name === 'usernameInput' && validUser ? styles.checked : name === 'emailInput' && validEmail ? styles.checked : name === 'passwordInput' && validPassword ? styles.checked : name === 'passwordConfirm' && validConfirmPwd ? styles.checked : styles.iconHide}>
                    <i><BsPatchCheckFill/></i>
                </span>
                <span className={
                        validUser && name === 'usernameInput' ? styles.iconHide : user === "" && name === 'usernameInput' ? styles.iconHide :
                        validEmail && name === 'emailInput' ? styles.iconHide : email === "" && name === 'emailInput' ? styles.iconHide :
                        validPassword && name === 'passwordInput' ? styles.iconHide : password === "" && name === 'passwordInput' ? styles.iconHide :
                        validConfirmPwd && name === 'passwordConfirm' ? styles.iconHide : confirmPassword === "" && name === 'passwordConfirm' ? styles.iconHide :
                        styles.invalid
                    }>
                    <i><FaTimesCircle/></i>
                </span>
            </label>
            <input 
                id={id}
                name={name}
                type={
                    name === 'emailInput' ? 'email' :
                    name === 'passwordInput' && !passwordVisible ? 'password' :
                    name === 'passwordConfirm' && !passwordVisible ? 'password' :
                    passwordVisible ? 'text' :
                    'text'
                }
                value={
                    name === 'emailInput' ? email :
                    name === 'passwordInput' ? password :
                    name === 'passwordConfirm' ? confirmPassword :
                    user
                }
                onChange={
                    name === 'emailInput' ? (e) => dispatch(inputEmail(e.target.value)) :
                    name === 'passwordInput' ? (e) => dispatch(inputPassword(e.target.value)) :
                    name === 'passwordConfirm' ? (e) => dispatch(inputConfirmPassword(e.target.value)) :
                    (e) => dispatch(inputUser(e.target.value))
                }
                onFocus={
                    name === 'emailInput' ? () => dispatch(emailFocusSwitch(true)) :
                    name === 'passwordInput' ? () => dispatch(passwordFocusSwitch(true)) :
                    name === 'passwordConfirm' ? () => dispatch(confirmPasswordFocusSwitch(true)) :
                    () => dispatch(userFocusSwitch(true))
                }
                onBlur={
                    name === 'emailInput' ? () => dispatch(emailFocusSwitch(false)) :
                    name === 'passwordInput' ? () => dispatch(passwordFocusSwitch(false)) :
                    name === 'passwordConfirm' ? () => dispatch(confirmPasswordFocusSwitch(false)) :
                    () => dispatch(userFocusSwitch(false))
                }
                required
                autoComplete="off"
            />

            <i className={name === 'passwordInput' ? styles.eye : styles.hidden} onClick={() => dispatch(passwordVisibility())}>{passwordVisible? <BsEyeSlashFill /> : <BsEyeFill />}</i>
        </div>
        

    )
}

export default InputComp