export async function createMeetup(meetupData) {
    const response = await fetch('http://localhost:3000/meetups', {
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