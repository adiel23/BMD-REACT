const API_URL = import.meta.env.VITE_API_URL;

export async function createMeetup(meetupData) {
    const response = await fetch(`${API_URL}/meetups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(meetupData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to create meetup');
    }

    return data;
}

export async function getMeetups(filters) {
    const response = await fetch(`${API_URL}/meetups/filter`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filters)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch meetups.');
    }

    return data.meetups;
}