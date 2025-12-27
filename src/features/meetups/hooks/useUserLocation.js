import { useEffect, useState } from "react";

export function useUserLocation() {
    const [position, setPosition] = useState([13.698321602683563, -89.19111213215822]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    setPosition([lat, lon]);
                },
                (error) => console.error(error)
            );
        }
    }, []);

    return { position, setPosition };
}