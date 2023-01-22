import { NextPage } from "next";
import styles from '../styles/button.module.css'

interface buttonModel {
    text: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset"
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    color?: "main" | "secondary" | "accent"
}

const ButtonComp: NextPage<buttonModel> = ({text, onClick, type, disabled, size, color}) => {

    const loginHandler = () => {

    }

    return (
        <button 
            className={
                size === "large" ? [styles.button, styles.large].join(' ') : 
                size === "small" ? [styles.button, styles.small].join(' ') : 
                styles.button}
            onClick={onClick} 
            type={type} 
            disabled={disabled}
        >
            <p className={
                color === 'secondary' ? [styles.bg, styles.secondary].join(' ') :
                color === 'accent' ? [styles.bg, styles.accent].join(' ') :
                color === 'main' ? [styles.bg, styles.main].join(' ') :
                styles.bg
            }>{text}</p>
        </button>
    )
}

export default ButtonComp