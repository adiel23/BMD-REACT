import styles from './MeetupsMapPage.module.css'
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useUserLocation } from "../hooks/useUserLocation";
import { useMeetups } from "../hooks/useMeetups";
import SearchMeetups from "../components/SearchMeetups";
import MeetupsMap from "../components/MeetupsMap";
import MeetupDetailsDrawer from "../components/MeetupDetailsDrawer";
import { useSearchMeetups } from "../hooks/useSearchMeetups";

function MeetupsMapPage() {
    const {position, setPosition} = useUserLocation();

    const {meetups, zoom, setZoom} = useMeetups();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedMeetup, setSelectedMeetup] = useState(null);

    const {
        isSearchOpen,
        inputValue,
        hasSearched,
        searchResults,
        setInputValue,
        setIsSearchOpen
    } = useSearchMeetups();

    function handleMeetupSelection(meetup) {
        const {latitude, longitude} = meetup;
        setPosition([latitude, longitude]);
        setZoom(20);
        setIsSearchOpen(false);
        handleMarkerClick(meetup);
    }

    function handleMarkerClick(meetup) {
        setSelectedMeetup(meetup);
        setIsDrawerOpen(true);
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
                        setInputValue,
                        onCloseSearch: () => setIsSearchOpen(false),
                        onSelectMeetup: handleMeetupSelection
                    }}
                />
            }

            {isDrawerOpen && selectedMeetup && (
                <MeetupDetailsDrawer
                    title={selectedMeetup.title}
                    description={selectedMeetup.description}
                    date={selectedMeetup.date}
                    startTime={selectedMeetup.startTime}
                    endTime={selectedMeetup.endTime}
                    onClose={() => setIsDrawerOpen(false)}
                />
            )}

            <div className={styles['map-wrapper']}>
                <MeetupsMap 
                    position={position} 
                    zoom={zoom} 
                    meetups={meetups} 
                    onOpenSearch={() => setIsSearchOpen(true)}
                    onMarkerClick={handleMarkerClick}
                />
            </div>
        </>
    )
}

export default MeetupsMapPage;