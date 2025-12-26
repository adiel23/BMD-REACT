import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ChangeView({ position, zoom}) {
  const map = useMap(); // get the map instance
  useEffect(() => {
    if (!position) return;
    map.setView(position, zoom, {
      animate: true
    });
  }, [position, zoom])
  return null;
}

export default ChangeView;