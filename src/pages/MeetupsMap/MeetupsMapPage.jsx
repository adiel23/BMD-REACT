import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from './MeetupsMapPage.module.css'
import "leaflet/dist/leaflet.css";
import ChangeView from "../../components/Map/UpdateView";
import CustomControl from "../../components/Map/CustomControl";

function MeetupsMapPage() {
    const [position, setPosition] = useState([51.505, -0.09]); // Default position
    const [meetups, setMeetups] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    console.log(lat, lon);
                    setPosition([lat, lon]);
                },
                (error) => console.error(error)
            );
        }
    }, [])

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
    }, []);

    function handleOpenSearch() {
        setIsSearchOpen(true);
    }

    function handleCloseSearch() {
        setIsSearchOpen(false);
        setHasSearched(false);
    }

    async function handleSearchSubmit(e) {
        e.preventDefault();

        const query = searchQuery.trim();

        if (query === '') {
            return;
        }

        const filters = { title: query };

        setHasSearched(true);

        try {
            const meetups = await getMeetups(filters);
            setSearchResults(meetups);
        } catch (error) {
            console.error('Error searching meetups:', error);
        }
    }
    
    return (
        <>
            {isSearchOpen && (
                <div className={styles.search}>
                    <form 
                        className={styles.search__container}
                        onSubmit={handleSearchSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Search meetups..."
                            className={styles.search__input}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="button"
                            className={styles['search__close-btn']}
                            onClick={handleCloseSearch}
                        >
                            ✖️
                        </button>
                    </form>

                    <div className={styles.search__results}>
                        {
                            hasSearched &&searchResults.length === 0 ? (
                                <p>No meetups found.</p>
                            ) : (
                                searchResults.map((meetup) => (
                                    <div
                                        key={meetup.id} 
                                        className={styles['search__result-item']}
                                        onClick={() => {
                                            const lat = meetup.latitude;
                                            const lon = meetup.longitude
                                            setPosition([lat, lon]);
                                            setZoom(20);
                                            setSearchResults([]);
                                            setIsSearchOpen(false);
                                            setHasSearched(false);
                                        }}
                                    >
                                        <h3>{meetup.title}</h3>
                                        <p>{meetup.description}</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            )}

            <div className={styles['map-wrapper']}>
                <MapContainer center={position} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {meetups.map(meetup => (
                        <Marker key={meetup.id} position={[meetup.latitude, meetup.longitude]}>
                            <Popup>
                                <strong>{meetup.title}</strong><br />
                                {meetup.description}
                            </Popup>
                        </Marker>
                    ))}

                    <CustomControl onSearchClick={handleOpenSearch} />

                    <ChangeView position={position} zoom={zoom} />
                
                </MapContainer>
            </div>
        </>
    )
}

async function getMeetups(filters) {
    const response = await fetch('http://localhost:3000/meetups/filter', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filters)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch meetups.');
    }

    return data.meetups;
}

export default MeetupsMapPage;