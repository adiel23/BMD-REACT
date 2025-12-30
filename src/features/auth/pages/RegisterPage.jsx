import Form from "../components/Form";
import HomeIcon from "../components/HomeIcon";
import { useRegister } from "../hooks/useRegister";

function RegisterPage() {
    const {navigate, setForm, registerUser, errorMessage} = useRegister();

    return (
        <>
            <HomeIcon onClick={() => navigate('/')} />
            <Form
                setForm={setForm}
                onSubmit={registerUser}
                name="Register"
                groups={[
                    {label: "Name", type: "text", id: "name-input", name: "name"},
                    {label: "Email", type: "email", id: "email-input", name: "email"},
                    {label: "Password", type: "password", id: "password-input", name: "password"}
                ]}
                errorMessage={errorMessage}
                footerLink={{
                    text: "Already have an account?",
                    linkText: "Login here",
                    to: "/login"
                }}
            />
        </>
    );       
}

export default RegisterPage;