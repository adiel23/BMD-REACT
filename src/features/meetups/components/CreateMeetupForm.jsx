import { useState } from 'react';
import styles from './CreateMeetupForm.module.css';
import CreateMeetupFormMap from './CreateMeetupFormMap';

function CreateMeetupForm({position, setPosition, message, onSubmit}) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        date: '',
        startTime: '',
        endTime: '',
        locationName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!position) {
            alert('Please select a location on the map.');
            return;
        };

        const [lat, lon] = position;

        const success = await onSubmit({
            ...form,
            latitude: lat,
            longitude: lon
        });

        if (success) {
            setForm({
                title: '',
                description: '',
                date: '',
                startTime: '',
                endTime: '',
                locationName: ''
            });
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Create a New Meetup</h2>

            <div className={styles.form__group}>
                <label htmlFor="title">Title</label>
                <input name="title" value={form.title} onChange={handleChange} type="text" id="title" className={styles.form__input} required />
            </div>

            <div className={styles.form__group}>
                <label htmlFor="description">Description</label>
                <input name="description" value={form.description} onChange={handleChange} type="text" id="description" className={styles.form__input} required />
            </div>

            <div className={[styles.form__group, styles['form__group--map']].join(' ')}>
                <label htmlFor="">Select location</label>
                <CreateMeetupFormMap position={position} setPosition={setPosition} />
            </div>

            <div className={styles.form__group}>
                <label htmlFor="date">Date</label>
                <input name="date" value={form.date} onChange={handleChange} type="date" id="date" className={styles.form__input} required />
            </div>

            <div className={styles.form__group}>
                <label htmlFor="startTime">Start Time</label>
                <input name="startTime" value={form.startTime} onChange={handleChange} type="time" id="startTime" className={styles.form__input} required />
            </div>

            <div className={styles.form__group}>
                <label htmlFor="endTime">End Time</label>
                <input name="endTime" value={form.endTime} onChange={handleChange} type="time" id="endTime" className={styles.form__input} required />
            </div>

            <div className={styles.form__group}>
                <label htmlFor="locationName">Location Name</label>
                <input name="locationName" value={form.locationName} onChange={handleChange} type="text" id="locationName" className={styles.form__input} required />
            </div>

            {message && (
                <p className={styles.form__message + ' ' + (message.type === 'success' ? styles['form__message--success'] : styles['form__message--error'])}>
                    {message.text}
                </p>
            )}

            <button type="submit" className={styles.form__submit}>Create Meetup</button>
        </form>
    )
}

export default CreateMeetupForm;