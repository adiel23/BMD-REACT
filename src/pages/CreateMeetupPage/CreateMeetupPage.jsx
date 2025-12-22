import { useState, useEffect} from 'react';
import Map from '../../components/Map/Map';
import './CreateMeetupPage.css';
import Button from '../../components/Button/Button';

function CreateMeetupPage() {
    const [position, setPosition] = useState(null);
    const [form, setForm] = useState({
        title: '',
        description: '',
        date: '',
        startTime: '',
        endTime: '',
        locationName: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    setPosition([lat, lon]);
                    console.log(lat, lon);
                } ,
                (error) => console.error(error)
            );
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        setLoading(true);
        try {
            const payload = {
                title: form.title,
                description: form.description,
                date: form.date,
                startTime: form.startTime,
                endTime: form.endTime,
                locationName: form.locationName,
                latitude: position[0],
                longitude: position[1]
            };

            console.log('payload: ', payload);

            // Cambia la URL por la de tu API
            const res = await fetch('http://localhost:3000/meetups', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                const errTxt = data?.message || 'Error creating meetup';
                throw new Error(errTxt);
            }

            setMessage({ type: 'success', text: data.message || 'Meetup created successfully!' });
            setForm({ title: '', description: '', date: '', startTime: '', endTime: '', locationName: '' });
            setPosition(null);
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: error.message || 'Error creating meetup' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Create a New Meetup</h2>

            <div className="form__group">
                <label htmlFor="title">Title</label>
                <input name="title" value={form.title} onChange={handleChange} type="text" id="title" className='form__input' />
            </div>

            <div className="form__group">
                <label htmlFor="description">Description</label>
                <input name="description" value={form.description} onChange={handleChange} type="text" id="description" className='form__input' />
            </div>

            <div className="form__group form__group--map">
                <label htmlFor="">Select location</label>
                <Map position={position || [0, 0]} setPosition={setPosition} />
            </div>

            <div className="form__group">
                <label htmlFor="date">Date</label>
                <input name="date" value={form.date} onChange={handleChange} type="date" id="date" className='form__input' />
            </div>

            <div className="form__group">
                <label htmlFor="startTime">Start Time</label>
                <input name="startTime" value={form.startTime} onChange={handleChange} type="time" id="startTime" className='form__input' />
            </div>

            <div className="form__group">
                <label htmlFor="endTime">End Time</label>
                <input name="endTime" value={form.endTime} onChange={handleChange} type="time" id="endTime" className='form__input' />
            </div>

            <div className="form__group">
                <label htmlFor="locationName">Location Name</label>
                <input name="locationName" value={form.locationName} onChange={handleChange} type="text" id="locationName" className='form__input' />
            </div>

            {message && (
                <p className={message.type === 'error' ? 'form__message form__message--error' : 'form__message form__message--success'}>
                    {message.text}
                </p>
            )}

            <Button text={loading ? 'Enviando...' : 'Create Meetup'} type="submit" disabled={loading} />
        </form>
    )
}

export default CreateMeetupPage;