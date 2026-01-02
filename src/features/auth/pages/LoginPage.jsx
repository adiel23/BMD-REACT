import { useLogin } from "../hooks/useLogin";
import Form from "../components/Form";
import HomeIcon from "../components/HomeIcon";

function LoginPage() {
    const {navigate, setForm, submit, errorMessage} = useLogin();

    return (
        <>
            <HomeIcon onClick={() => navigate('/')} />
            <Form 
                setForm={setForm}
                onSubmit={submit}
                name="Login"
                groups={[
                    {label: "Email", type: "email", id: "email-input", name: "email"},
                    {label: "Password", type: "password", id: "password-input", name: "password"}
                ]}
                errorMessage={errorMessage}
                footerLink={{
                    text: "Don't have an account?",
                    linkText: "Register here",
                    to: "/register"
                }}
            />
        </>
    );
}

export default LoginPage;