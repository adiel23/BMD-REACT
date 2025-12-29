import { FaHome } from "react-icons/fa";
import styles from "./HomeIcon.module.css";

function HomeIcon ({onClick}) {
    return <FaHome className={styles['home-icon']} onClick={onClick} />
}

export default HomeIcon;