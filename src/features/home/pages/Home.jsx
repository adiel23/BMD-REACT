import { useHomeNavigation } from "../hooks/useHomeNavigation";
import styles from "./Home.module.css";

function Home() {
    const {goToMap, goToCreateMeetup} = useHomeNavigation();
    
    return (
        <div className={styles.home}>

            <header className={styles.header}>
                <h1 className={styles.header__title}>Bitcoin Meetups Directory</h1>
            </header>

            <section className={styles.hero}>
                <h2 className={styles.hero__title}>Find Bitcoin Meetups in El Salvador</h2>
                <button className={styles.hero__btn} onClick={goToMap}>Open Map</button>
                <button className={styles.hero__btn} onClick={goToCreateMeetup}>Create Meetup</button>
            </section>
        </div>
    )
}

export default Home;