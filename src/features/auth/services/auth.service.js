const API_URL = import.meta.env.VITE_API_URL;

export async function register(userInfo) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Registration failed');
    }

    return data;
}

export async function login(credentials) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Login failed');
    }

    return data;
}

export async function validateToken(token) {
    const res = await fetch(`${API_URL}/auth/validate-token`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Token validation failed');
    }

    return data;
}