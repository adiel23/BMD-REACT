import CreateMeetupForm from '../components/CreateMeetupForm';
import { useCreateMeetup } from '../hooks/useCreateMeetups';
import { useUserLocation } from '../hooks/useUserLocation';

function CreateMeetupPage() {
    const { position, setPosition } = useUserLocation();
    const {message, submit} = useCreateMeetup();

    return <CreateMeetupForm position={position} setPosition={setPosition} message={message} onSubmit={submit} />;
}

export default CreateMeetupPage;