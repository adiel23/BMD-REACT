import { FaX } from "react-icons/fa6";
import styles from "./MeetupDetailsDrawer.module.css";
import { FaClock, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function MeetupDetailsDrawer({title, description, date, startTime, endTime, onClose}) {
    
    return (
        <div className={styles['meetup-drawer']}>
            <h2 className={styles['meetup-drawer__title']}>{title}</h2>
            <p className={styles['meetup-drawer__description']}>{description}</p>
            <div className={styles['meetup-drawer__date']}>
                <FaClock className={styles['meetup-drawer__date-icon']} />
                <div className={styles['meetup-drawer__date-info']}>
                    <p className={styles['meetup-drawer__date-text']}>{new Date(date).toLocaleDateString()}</p>
                    <p className={styles['meetup-drawer__date-time']}>{startTime} - {endTime}</p>
                </div>
            </div>
            <FaX className={styles['meetup-drawer__close-icon']} onClick={onClose} />
        </div>
    );
}

export default MeetupDetailsDrawer;