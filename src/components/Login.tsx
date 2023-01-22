"use client"

import { useAppDispatch, useAppSelector } from "lib/utils/redux/store";
import { NextPage } from "next";
import { FormEvent, useEffect } from "react";
import InputComp from "./InputComp";
import { signIn } from 'next-auth/react'
import styles from '../styles/login.module.css'
import ButtonComp from "./ButtonComp";
import { inputPassword, inputUser, setErrorMsg, signInMode } from "lib/utils/redux/features/inputSlice";
import GuideComp from "./GuideComp";
import ErrorComp from "./ErrorComp";
import { useRouter } from "next/navigation";

const Login: NextPage = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const username = useAppSelector((state) => state.input.user)
    const password = useAppSelector((state) => state.input.password)
    const validUsername = useAppSelector((state) => state.input.validName)
    const validPassword = useAppSelector((state) => state.input.validPassword)

    const loginHandler = async (e: FormEvent) => {
        e.preventDefault()

        await signIn('credentials', {
            redirect: false,
            callbackUrl: '/iluscious',
            username,
            password,
        }).then(res => {
            if(res) {
                const data = {
                    error: res.error,
                    ok: res.ok,
                    status: res.status,
                }
                if(data.error) {
                    dispatch(setErrorMsg(data.error))
                }
                router.push('/iluscious')
                dispatch(inputUser(""))
                dispatch(inputPassword(""))
                return data
            }
        }).catch(error => {
            dispatch(setErrorMsg(error.response.data.error))
            console.log(error)
        })
    }


    return (

        <div className={styles.login}>
            <form onSubmit={loginHandler}>
                <ErrorComp />
                <GuideComp />
                <div className={styles.inputs}>
                    <InputComp text="Username" name="usernameInput" id="usernameLogin" />
                    <InputComp text="Password" name="passwordInput" id="passwordLogin" />
                </div>
                <ButtonComp text="Login" size="medium" type="submit" color="main" disabled={validPassword && validUsername? false : true} />
                <p>No Account? <span onClick={() => dispatch(signInMode(false))}>&nbsp; Sign Up</span></p>

            </form>
        </div>

    )
}

export default Login