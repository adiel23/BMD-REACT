export async function login(credentials) {
    const res = await fetch("http://localhost:3000/auth/login", {
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
    const res = await fetch("http://localhost:3000/auth/validate-token", {
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