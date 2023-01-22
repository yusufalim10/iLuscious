import { useAppSelector } from "lib/utils/redux/store";
import { NextPage } from "next";
import styles from '../styles/guidecomp.module.css'
import { FaTimesCircle } from 'react-icons/fa'

const ErrorComp:NextPage = () => {

    const errorMsg = useAppSelector((state) => state.input.errorMsg)

    return (
        <p className={errorMsg? styles.error : [styles.error, styles.hidden].join(' ')}>
            <i><FaTimesCircle /></i>
            {errorMsg}
        </p>
    )
}

export default ErrorComp