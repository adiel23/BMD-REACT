import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import FormGroup from "./FormGroup";

function Form ({setForm, onSubmit, name, groups, errorMessage, footerLink}) {

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
            {footerLink && (
                <p className={styles.form__message}>
                    {footerLink.text} <Link to={footerLink.to}>{footerLink.linkText}</Link>
                </p>
            )}
            <button type="submit" className={styles.form__button}>{name}</button>
        </form>
    )
    
}

export default Form;