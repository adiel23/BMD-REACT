import RegisterForm from "../components/RegisterForm";
import { useRegister } from "../hooks/useRegister";
import { FaHome } from "react-icons/fa";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
    const {navigate, registerUser, updateFormField, errorMessage} = useRegister();

    function handleHomeIconClick() {
        navigate('/')
    }

    return (
        <>
            <FaHome className={styles["home-icon"]} onClick={handleHomeIconClick} />
            <RegisterForm onSubmit={registerUser} onInputChange={updateFormField} errorMessage={errorMessage} />
        </>
    );       
}

export default RegisterPage;