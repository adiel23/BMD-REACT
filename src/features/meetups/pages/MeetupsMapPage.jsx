import styles from './MeetupsMapPage.module.css'
import "leaflet/dist/leaflet.css";
import { useUserLocation } from "../hooks/useUserLocation";
import { useMeetups } from "../hooks/useMeetups";
import SearchMeetups from "../components/SearchMeetups";
import MeetupsMap from "../components/MeetupsMap";
import { useSearchMeetups } from "../hooks/useSearchMeetups";

function MeetupsMapPage() {
    const {position, setPosition} = useUserLocation();

    const {meetups, zoom, setZoom} = useMeetups();

    const {
        isSearchOpen,
        inputValue,
        hasSearched,
        searchResults,
        search,
        setInputValue,
        setIsSearchOpen
    } = useSearchMeetups();

    function handleMeetupSelection(meetup) {
        const {latitude, longitude} = meetup;
        setPosition([latitude, longitude]);
        setZoom(20);
        setIsSearchOpen(false);
    }
    
    return (
        <>
            {
                isSearchOpen 
                    && 
                <SearchMeetups 
                    ui={{
                        inputValue,
                        hasSearched,
                        searchResults
                    }}
                    actions={{
                        search,
                        setInputValue,
                        onCloseSearch: () => setIsSearchOpen(false),
                        onSelectMeetup: handleMeetupSelection
                    }}
                />
            }

            <div className={styles['map-wrapper']}>
                <MeetupsMap position={position} zoom={zoom} meetups={meetups} onOpenSearch={() => setIsSearchOpen(true)} />
            </div>
        </>
    )
}

export default MeetupsMapPage;