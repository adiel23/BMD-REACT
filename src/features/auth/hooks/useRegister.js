import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";
import { useState } from "react";

export function useRegister() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState("");

    function updateFormField(name, value) {
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    async function registerUser() {
        try {
            const data = await register(form);

            localStorage.setItem('token', data.token);

            navigate('/');
        } catch (error) {
            console.error("Registration error: ", error);
            setErrorMessage(error.message || "An error occurred during registration. Please try again.");
        }
    }

    return {navigate, registerUser, form, updateFormField, errorMessage};
}