import styles from './FormGroup.module.css';

function FormGroup ({label, type, id, name, onInputChange}) {
    return (
        <div className={styles.form__group}>
            <label htmlFor={id} className={styles.form__label}>{label}: </label>
            <input type={type} id={id} name={name} className={styles.form__input} required onChange={onInputChange} />
        </div>
    )
}

export default FormGroup;