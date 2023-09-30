import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@material-ui/core";
import axios from "axios";

const ContactUsForm = () => {
  const [userContactUs, setUserContactUs] = useState({
    firstname: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({
    firstname: false,
    lastName: false,
    email: false,
    message: false,
  });

  const handleContactUsForm = (e) => {
    e.preventDefault();

    setErrors({
      firstname: false,
      lastName: false,
      email: false,
      message: false,
    });
  };

  const resetForm = () => {
    setUserContactUs({});
    setErrors({});
  };
  const handleChange = (e) => {
   /*  setSubmit(true); */
    const { name, value } = e.target;
    setUserContactUs({
      ...userContactUs,
      [name]: value,
    });
    if(submit){
        resetForm();
    }
    /*  */
    /*     axios.post();
     */
  };

  return (
    <form className="sectionContactUsForm" onSubmit={handleContactUsForm}>
      <div
        style={{
          display: "flex",
          width: "80%",
          alignItems: "center",
          gap: "19px",
          justifyContent: "center",
        }}
      >
        <TextField
          name="firstname"
          label="Full Name"
          variant="standard"
          value={userContactUs.firstname}
          onChange={handleChange}
          required
          error={!userContactUs.firstname && userContactUs.firstname !== ""}
          helpertext={!userContactUs.firstname ? "firstname is required" : ""}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="standard"
          value={userContactUs.lastName}
          onChange={handleChange}
          required
          error={!userContactUs.lastName && userContactUs.lastName !== ""}
          helpertext={!userContactUs.lastName ? "lastName is required" : ""}
        />
      </div>
      <TextField
        name="email"
        label="Email"
        variant="standard"
        value={userContactUs.email}
        onChange={handleChange}
        style={{ width: "40%" }}
        required
        error={!userContactUs.email && userContactUs.email !== ""}
        helpertext={!userContactUs.email ? "email is required" : ""}
      />
      <textarea
        name="message"
        placeholder="Message"
        type="text"
        className="sectionContactUsTextArea"
        value={userContactUs.message}
        onChange={handleChange}
        /* error={!userContactUs.message}
        helpertext={!userContactUs.message ? "message is required" : ""} */
      />
      {submit && !userContactUs.message && (
        <span style={{ color: "black" }}>message is required</span>
      )}

      <Button
        type="submit"
        style={{ color: "black", borderColor: "red" }}
        className="contactus_submit_button"
        variant="outlined"
        size="medium"
      >
        Envoyer
      </Button>
    </form>
  );
};

export default ContactUsForm;
