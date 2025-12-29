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
            />
        </>
    );
}

export default LoginPage;