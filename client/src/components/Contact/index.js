import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Label from "../Label";
import "./contact.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    borderRadius: "10px",
    maxWidth: "500px!important",
  },
}));

const Contact = ({ contact }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contain, setContain] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <button className="login__open" type="button" onClick={handleOpen}>
        {contact}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modals}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.papers}>
            <h2 className="login__header">Sign in</h2>
            <div className="login__content">
              <h3>Welcome to N'skills</h3>
              <form onSubmit={handleSubmit}>
                <Label
                  // keyDown={emptyError}
                  name="Email"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  displayPWD="none"
                />

                <button type="submit" className="form__button">
                  Contact us
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Contact;
