import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link href='/iluscious'>Home</Link>
            <Link href='/iluscious/menu'>Menu</Link>
            <Link href='/iluscious/reservation'>Reservation</Link>
            <Link href='/iluscious/contact'>Contact Us</Link>
        </nav>
    )
}

export default Navbar