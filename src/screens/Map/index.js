import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

export default function Map(props) {
  const [map, setMap] = useState();
  const data = useSelector((state) => state.expenses);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <MapContainer center={[22.308, 113.9185]} zoom={12} whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((expense, index) => (
          <CustomMarker
            map={map}
            key={index}
            data={{ position: [expense.latlng.lat, expense.latlng.lng] }}
            isActive={props.popupId === index}
            message={expense.title + " $" + expense.amount}
          />
        ))}
      </MapContainer>
    </div>
  );
}

const CustomMarker = ({ isActive, data, map, message }) => {
  const [refReady, setRefReady] = useState(false);
  let popupRef = useRef();

  useEffect(() => {
    if (refReady && isActive) {
      popupRef.openOn(map);
    }
  }, [isActive, refReady, map]);

  return (
    <Marker position={data.position}>
      <Popup
        ref={(r) => {
          popupRef = r;
          setRefReady(true);
        }}
      >
        {message}
      </Popup>
    </Marker>
  );
};
