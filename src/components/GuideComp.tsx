'use client'

import { setGuideMsg } from "lib/utils/redux/features/inputSlice";
import { useAppDispatch, useAppSelector } from "lib/utils/redux/store";
import { NextPage } from "next";
import { useEffect } from "react";
import { FcIdea } from 'react-icons/fc'
import styles from '../styles/guidecomp.module.css'

const GuideComp: NextPage = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.input.user)
    const validUser = useAppSelector((state) => state.input.validName)
    const email = useAppSelector((state) => state.input.email)
    const validEmail = useAppSelector((state) => state.input.validEmail)
    const password = useAppSelector((state) => state.input.password)
    const validPassword = useAppSelector((state) => state.input.validPassword)
    const confirmPassword = useAppSelector((state) => state.input.confirmPwd)
    const validConfirm = useAppSelector((state) => state.input.validConfirmPwd)
    const guideMsg = useAppSelector((state) => state.input.guideMsg)
    const successMsg = useAppSelector((state) => state.input.successMsg)

    const userGuide = `5 to 15 characters, 
    must begin with a letter. 
    Letters, numbers, underscores and hyphens are allowed`

    const emailGuide = `8 to 20 characters
    Must contain @ symbol
    and ended with .com`

    const passwordGuide = `6 to 20 characters
    Must contain at least 1 lowercase,
    1 uppercase, 1 number and 1 of these symbols
    !@#$%`

    const confirmGuide = `Must match with your password field`

    useEffect(() => {
        if(user !== "" && !validUser) {
            dispatch(setGuideMsg(userGuide))
        } else if(email !== "" && !validEmail) {
            dispatch(setGuideMsg(emailGuide))
        } else if(password !== "" && !validPassword) {
            dispatch(setGuideMsg(passwordGuide))
        } else if(confirmPassword !== "" && !validConfirm) {
            dispatch(setGuideMsg(confirmGuide))
        } else {
            dispatch(setGuideMsg(""))
        }

    }, [user, email, password, confirmPassword, validUser, validPassword, validEmail, validConfirm])

    return (
        <p className={
            user !== "" && !validUser? styles.guide :
            email !== "" && !validEmail? styles.guide :
            password !== "" && !validPassword? styles.guide :
            confirmPassword !== "" && !validConfirm? styles.guide :
            successMsg? [styles.guide, styles.success].join(' ') :
            [styles.guide, styles.hidden].join(' ')
        }>
            <i><FcIdea /></i> 
            &nbsp;
            {guideMsg || successMsg}
        </p>
    )
}

export default GuideComp