import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { useState } from "react";

export function useLogin() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState("");

    async function submit() {
        try {
            const data = await login({
                email: form.email,
                password: form.password
            });

            localStorage.setItem('token', data.token);

            navigate('/');
        } catch (error) {
            console.error("Login error: ", error);
            setErrorMessage("An error occurred during login. Please try again.");
        }
    }

    return {setForm, submit, errorMessage};
}