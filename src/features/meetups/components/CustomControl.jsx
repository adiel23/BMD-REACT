import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import styles from './CustomControl.module.css';

function CustomControl({onSearchClick}) {
  const map = useMap();

  useEffect(() => {
    const control = L.control({ position: "topleft" });

    control.onAdd = () => {
      const div = L.DomUtil.create("div", styles['custom-control']);

      const button = L.DomUtil.create(
        "button",
        styles["custom-control__btn"],
        div
      );

      button.innerHTML = "🔍";

      // avoid map interactions when clicking the control
      L.DomEvent.disableClickPropagation(div);

      // Click handler
      L.DomEvent.on(button, "click", () => {
        onSearchClick?.(); // invoke callback
      });

      return div;
    };

    control.addTo(map);

    return () => {
      control.remove();
    };
  }, [map]);

  return null;
}

export default CustomControl;
