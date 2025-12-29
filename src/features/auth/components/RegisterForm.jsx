import styles from './RegisterForm.module.css';
import { Link } from 'react-router-dom';

function RegisterForm({onSubmit, onInputChange, errorMessage}) {

    function handleInputChange(e) {
        const { name, value } = e.target;
        onInputChange(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.form__title}>Register</h2>
            <div className={styles.form__group}>
                <label htmlFor="name" className={styles.form__label}>Name:</label>
                <input type="text" id="name" name="name" className={styles.form__input} required onChange={handleInputChange} />
            </div>
            <div className={styles.form__group}>
                <label htmlFor="email" className={styles.form__label}>Email:</label>
                <input type="email" id="email" name="email" className={styles.form__input} required onChange={handleInputChange} />
            </div>
            <div className={styles.form__group}>
                <label htmlFor="password" className={styles.form__label}>Password:</label>
                <input type="password" id="password" name="password" className={styles.form__input} required onChange={handleInputChange} />
            </div>
            {errorMessage
                && 
                <p className={styles['form__error-message']}>{errorMessage}</p>
            }
            <p className={styles.form__message}>Already have an account? <Link to="/login">Login here</Link></p>
            <button type="submit" className={styles.form__button}>Register</button>
        </form>
    );
}

export default RegisterForm;

