import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CustomControl from "./CustomControl";
import UpdateMapView from "./UpdateMapView";

function MeetupsMap({position, zoom, meetups, onOpenSearch, onMarkerClick}) {
    return (
        <MapContainer center={position} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {meetups.map(meetup => (
                <Marker 
                    key={meetup.id} 
                    position={[meetup.latitude, meetup.longitude]}
                    eventHandlers={{
                        click: () => onMarkerClick && onMarkerClick(meetup)
                    }}
                >
                </Marker>
            ))}

            <CustomControl onSearchClick={onOpenSearch} />

            <UpdateMapView position={position} zoom={zoom} />
                
        </MapContainer>
    )
}

export default MeetupsMap;