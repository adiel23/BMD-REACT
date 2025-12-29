import { useEffect, useState } from "react";
import { getMeetups } from "../services/meetups.service";

export function useMeetups() {
    const [meetups, setMeetups] = useState([]);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        async function fetchMeetups() {
            try {
                const filters = {};
                const data = await getMeetups(filters);
                setMeetups(data);
            } catch (error) {
                console.error('Error fetching meetups:', error);
            }
        }

        fetchMeetups();
        
    }, [])

    return {meetups, zoom, setZoom};

}