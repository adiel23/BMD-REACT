import styles from './Hero.module.css';

function Hero() {

    return (
        <section className={styles.hero}>
            <h2 className={styles.hero__title}>Find Bitcoin Meetups in El Salvador</h2>
            <button className={styles.hero__btn}>OPEN MAP</button>
            <button 
                className={styles.hero__btn}
            >
                CREATE MEETUP
            </button>
        </section>
    )
}

export default Hero;