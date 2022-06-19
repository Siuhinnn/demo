import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import styled from "@emotion/styled";

import { GetCoordinate } from "screens/Map/GetCoordinate";

export default function MapModal({
  modalOpen,
  handleClose,
  passLatLng,
  defaultValue,
}) {
  const [selected, setSelected] = useState(null);

  const handleLatLng = (e) => {
    passLatLng(e);
    setSelected(e);
  };

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <MapWrapper>
        <MapContainer
          center={
            defaultValue
              ? [defaultValue.lat, defaultValue.lng]
              : [22.308, 113.9185]
          }
          zoom={12}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {selected && <Marker position={[selected.lat, selected.lng]} />}
          <GetCoordinate handleLatLng={handleLatLng} />
        </MapContainer>
      </MapWrapper>
    </Modal>
  );
}

const MapWrapper = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
