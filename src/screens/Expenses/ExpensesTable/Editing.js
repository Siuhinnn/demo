import { useState } from "react";
import { Button, TextField, IconButton } from "@mui/material";

import MapModal from "components/MapModal";

import MapIcon from "@mui/icons-material/Map";

export default function Editing({ expense, cancelHandler, deleteHandler, passLatLng }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlerModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleLatLng = (e) => {
    passLatLng(e);
  };

  return (
    <>
      <td>
        <TextField
          name="date"
          type="date"
          InputProps={{
            inputProps: { max: "2022-12-31", min: "2019-01-01" },
          }}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={expense.date.toLocaleDateString("en-CA")}
        />
      </td>
      <td>
        <TextField name="title" type="text" defaultValue={expense.title} />
      </td>
      <td>
        <TextField
          name="amount"
          type="number"
          InputProps={{ inputProps: { min: 0.01, step: 0.01 } }}
          defaultValue={expense.amount}
        />
      </td>
      <td>
        <IconButton onClick={handlerModalOpen}>
          <MapIcon />
        </IconButton>
        <MapModal
          modalOpen={modalOpen}
          handleClose={handleModalClose}
          passLatLng={handleLatLng}
          defaultValue={expense.latlng}
        />
      </td>
      <td width="10%">
        <div>
          <Button type="button" name={expense.id} onClick={cancelHandler}>
            Cancel
          </Button>
          <Button type="submit" name={expense.id} variant="contained">
            Submit
          </Button>
        </div>
      </td>
      <td>
        <Button
          type="button"
          name={expense.id}
          onClick={deleteHandler}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </td>
    </>
  );
}
