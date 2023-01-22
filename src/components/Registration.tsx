'use client'

import { FormEvent } from "react";
import { NextPage } from "next";
import InputComp from "./InputComp";
import { useAppDispatch, useAppSelector } from "lib/utils/redux/store";
import axios from "axios";
import styles from '../styles/registration.module.css'
import ButtonComp from "./ButtonComp";
import { inputConfirmPassword, inputEmail, inputPassword, inputUser, setErrorMsg, setGuideMsg, setSuccessMsg, signInMode } from "lib/utils/redux/features/inputSlice";
import GuideComp from "./GuideComp";
import ErrorComp from "./ErrorComp";


const Registration:NextPage = () => {

    const dispatch = useAppDispatch()
    const username = useAppSelector((state) => state.input.user) // Access Username
    const email = useAppSelector((state) => state.input.email) // Access user email
    const password = useAppSelector((state) => state.input.password) // Access User password
    const validUsername = useAppSelector((state) => state.input.validName)
    const validPassword = useAppSelector((state) => state.input.validPassword)
    const validEmail = useAppSelector((state) => state.input.validEmail)
    const validConfirm = useAppSelector((state) => state.input.validConfirmPwd)
    const successMsg = useAppSelector((state) => state.input.successMsg)

    const registerHandler = async (e: FormEvent) => {
        e.preventDefault()

        await axios.post('api/register', {
            username: username,
            name: username,
            email,
            password
        }).then(response => {
            dispatch(inputUser(""))
            dispatch(inputEmail(""))
            dispatch(inputPassword(""))
            dispatch(inputConfirmPassword(""))
            dispatch(setSuccessMsg("Registration Success, You can Login Now"))
            console.log(successMsg)
            return response.data
        }).catch(error => {
            dispatch(setErrorMsg(error.response.data.Error))
            console.log(error.response.data.Error)
        })
    }

    const switchMode = () => {
        dispatch(signInMode(true))
        dispatch(setSuccessMsg(""))
    }

    return (
        <div className={styles.registration}>
            <form onSubmit={registerHandler}>
                <ErrorComp />
                <GuideComp />
                <div className={styles.inputs}>
                    <InputComp text="Username" name="usernameInput" id="usernameRegist" />
                    <InputComp text="Email" name="emailInput" id="emailInput" />
                    <InputComp text="Password" name="passwordInput" id="passwordRegist" />
                    <InputComp text="Confirm Password" name="passwordConfirm" id="passwordConfirm" />    
                </div>
                <ButtonComp text="Sign Up" size="medium" color="main" type="submit" disabled={validPassword && validUsername && validConfirm && validEmail? false : true} />
                <p>Already have an account? <span onClick={switchMode}> &nbsp; Sign In</span></p>
            </form>

        </div>
    )
}

export default Registration