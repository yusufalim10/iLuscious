import ButtonComp from "@/components/ButtonComp";
import { NextPage } from "next";
import Link from "next/link";
import { AiOutlineMail, AiFillYoutube } from 'react-icons/ai'
import { ImWhatsapp } from 'react-icons/im'
import styles from './contact.module.css'

const ContactPage: NextPage = () => {
    return (
        <div>

            <div className={styles.contactList}>
                <div className={styles.contact}>
                    <i><ImWhatsapp /></i>
                    <p>+62852xxxxxxxx</p>
                </div>
                <div className={styles.contact}>
                    <i><AiOutlineMail /></i>
                    <p>phrymehouse@gmail.com</p>
                </div>
                <Link href="https://www.youtube.com/@iLusciousFood" className={styles.contact}>
                    <i><AiFillYoutube /></i>
                    <p>@iLusciousFood</p>
                </Link>
            </div>

            <h1>What do you think of us?</h1>
            <p>Leave us a message</p>

            <form>

                <textarea name="reviewInput" id="reviewInput" />
                <ButtonComp type="submit" color="main" size="medium" text="Submit" />

            </form>

        </div>
    )
}

export default ContactPage