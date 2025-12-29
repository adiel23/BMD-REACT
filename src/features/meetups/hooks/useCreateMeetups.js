import { useState } from "react";
import { createMeetup } from "../services/meetups.service";

export function useCreateMeetup() {
    const [message, setMessage] = useState(null);

    async function submit(meetupData) {
        try {
            const response = await createMeetup(meetupData);
            setMessage({
                type: 'success',
                text: response.message || 'Meetup created successfully!'
            });
            return true;
        } catch (error) {
            console.error("Create meetup error: ", error);
            setMessage({
                type: 'error',
                text: error.message || 'Failed to create meetup.'
            });
            return false;
        }
    }

    return { message, submit };
}