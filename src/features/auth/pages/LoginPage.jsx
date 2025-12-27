import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/useLogin";

function LoginPage() {
    const {errorMessage, submit} = useLogin();

    return <LoginForm onSubmit={submit} errorMessage={errorMessage} />;
}

export default LoginPage;