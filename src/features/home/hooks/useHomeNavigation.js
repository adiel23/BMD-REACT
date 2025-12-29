import { useNavigate } from "react-router-dom";
import { validateToken } from "../../auth/services/auth.service";

export function useHomeNavigation() {
    const navigate = useNavigate();

    function goToMap() {
        navigate('/meetups-map');
    }

    async function goToCreateMeetup() {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            await validateToken(token);

            navigate('/create-meetup');

        } catch (error) {
            console.error("error validating token: ", error);
            navigate('/login');
        }
    }

    return {goToMap,goToCreateMeetup};
}