import React from "react";
import FlexiableModal from "./FlexiableModal";
import TextField from "../common/input/TextField";
import CountryNumberForm from "../CountryNumberForm";
import Button from "../common/Button";

const AddUser = ({ setIsShowModal, userAddLoading }) => {
  const handleCancel = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <FlexiableModal
      content={
        <>
          <div>
            <TextField type="text" placeholder="Name" />
            <TextField type="text" placeholder="Arabic Name" />
            <TextField type="text" placeholder="Possition" />
            <TextField type="text" placeholder="Arabic Possition" />
            <TextField type="text" placeholder="Email" />
            <TextField type="text" placeholder="LinkedIn" />
            <CountryNumberForm />
            <CountryNumberForm />
            <CountryNumberForm />
          </div>
        </>
      }
      heading="Create New User"
      actionBtnText={userAddLoading ? "Processing" : "Save"}
      size="normal"
      cancelOperation={handleCancel}
    ></FlexiableModal>
  );
};

export default AddUser;
