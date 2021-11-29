import styles from './Invitation.module.scss';
import Image from 'next';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaMap} from 'react-icons/fa';
function Invitation() {
    return (
        <div className={styles.container}>
            <img src="../../../images/background/invite.jpeg" />
            <div className={styles.brline}></div>
            <div className={styles.icons}>
                <a href="https://www.instagram.com/tikeshv/" target="_blank"><FaInstagram /></a>
                <a href="https://www.facebook.com/tikeshv/" target="_blank"><FaFacebook /></a>
                <a href="https://twitter.com/VermaTikesh" target="_blank"><FaTwitter /></a>
                <a href="mailto:tikeshverma2494@gmail.com" target="_blank"><FaMailBulk /></a>
            </div>
            
        </div>
    )
}

export default Invitation
