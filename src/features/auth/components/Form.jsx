import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import FormGroup from "./FormGroup";

function Form ({setForm, onSubmit, name, groups, errorMessage}) {

    function handleInputChange(event) {
        const {name, value} = event.target;

        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.form__title}>{name}</h2>
            {groups.map((group) => {
                const {label, type, id, name} = group;

                return <FormGroup 
                    key={id}
                    label={label}
                    type={type}
                    id={id}
                    name={name}
                    onInputChange={handleInputChange}
                />;
            })}

            {errorMessage
                && 
                <p className={styles['form__error-message']}>{errorMessage}</p>
            }
            {name === "Login" ? (
                <p className={styles.form__message}>Don't have an account? <Link to="/register">Register here</Link></p>
            ) : (
                <p className={styles.form__message}>Already have an account? <Link to="/login">Login here</Link></p>
            )}
            <button type="submit" className={styles.form__button}>{name}</button>
        </form>
    )
    
}

export default Form;