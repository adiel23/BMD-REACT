import { useState } from "react";
import styles from './LoginForm.module.css';

function LoginForm({onSubmit, errorMessage}) {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        onSubmit(form);
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
            <button type="submit" className={styles.form__button}>Login</button>
        </form>
    )
}

export default LoginForm;