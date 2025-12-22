import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useState } from "react";
import styles from './Login.module.css';

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(event) {
        const {name, value} = event.target;

        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                console.error(data.message || 'Login failed');
                setErrorMessage(data.message || 'Login failed');
            }
        } catch (error) {
            console.error("Login error: ", error);
            setErrorMessage("An error occurred during login. Please try again.");
        }
    }
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.form__title}>Login</h2>
            <div className={styles.form__group}>
                <label htmlFor="email" className={styles.form__label}>Email:</label>
                <input type="email" id="email" name="email" className={styles.form__input} required onChange={handleChange} />
            </div>
            <div className={styles.form__group}>
                <label htmlFor="password" className={styles.form__label}>Password:</label>
                <input type="password" id="password" name="password" className={styles.form__input} required onChange={handleChange} />
            </div>
            {errorMessage
                && 
                <p className={styles['form__error-message']}>{errorMessage}</p>
            }
            <Button text="Login" type="submit" />
        </form>
    )
}

export default Login;