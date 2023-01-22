"use client"

import { useAppDispatch, useAppSelector } from "lib/utils/redux/store";
import { NextPage } from "next";
import Image from "next/image";
import Login from "./Login";
import Registration from "./Registration";
import logo from '../assets/iluscious-logo.png'
import styles from '../styles/authentication.module.css'
import { useEffect } from "react";
import { setErrorMsg } from "lib/utils/redux/features/inputSlice";

const Authentication: NextPage = () => {

    const dispatch = useAppDispatch()

    const signInMode = useAppSelector((state) => state.input.signInMode)
    const username = useAppSelector((state) => state.input.user) // Access Username
    const email = useAppSelector((state) => state.input.email) // Access user email
    const password = useAppSelector((state) => state.input.password) // Access User password
    const confirmPassword = useAppSelector((state) => state.input.confirmPwd)

    useEffect(() => {
        dispatch(setErrorMsg(""))
    }, [username, email, password, confirmPassword, dispatch])

    return (
        <div className={styles.auth}>
            
            <div className={styles.image}>
                <Image 
                    src={logo} 
                    alt="Iluscious Logo"
                    width={350}
                    height={350}
                />
                
                <p>Best culinary by your <span>request</span></p>
            </div>

            <div className={styles.inputContainer}>
                <div className={signInMode? styles.inputSlider : [styles.inputSlider, styles.slided].join(' ')}>
                    <Login />
                    <Registration />
                </div>
            </div>
        </div>
    )
}

export default Authentication