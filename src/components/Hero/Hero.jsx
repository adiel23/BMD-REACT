import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import Button from '../Button/Button';

function Hero() {

    const navigate = useNavigate();

    const handleCreateMeetup = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            const res = await fetch("http://localhost:3000/auth/validate-token", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                navigate('/create-meetup');
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error("error validating token: ", error);
        }
    }

    return (
        <section className={styles.hero}>
            <h2 className={styles.hero__title}>Find Bitcoin Meetups in El Salvador</h2>
            <Button text="Open Map"/>
            <Button text="Create Meetup" onClick={handleCreateMeetup} />
        </section>
    )
}

export default Hero;