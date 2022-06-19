import { useMapEvents } from "react-leaflet";

export function GetCoordinate({ handleLatLng }) {
  const map = useMapEvents({
    click: (e) => {
      handleLatLng(e.latlng);
      map.locate();
    },
  });
}
