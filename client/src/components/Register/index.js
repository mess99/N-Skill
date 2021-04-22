import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./register.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%",
    height: " 50%",
  },
}));

export default function Register({ register }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFocus = () => {
    const classDivHide = document.querySelector(".label-hide");
    classDivHide.style.opacity = "1";

    const classLabel = document.querySelector(".header__label-name");
    classLabel.style.transform = "translateY(-10px) scale(0.70)";
  };
  const handleBlur = () => {
    const classDivHide = document.querySelector(".label-hide");
    classDivHide.style.opacity = "0";
    // classDivHide.style.backgroundColor = "white";

    const classLabel = document.querySelector(".header__label-name");
    classLabel.style.transform = "translateY(0) scale(1)";
    classLabel.style.color = "black";
  };

  const handleChange = () => {
    // TODO: pour la gestion des erreurs
    const classLabel = document.querySelector(".header__label-name");
    classLabel.style.color = "red";

    const classDivHide = document.querySelector(".form__div");
    classDivHide.style.boxShadow = "rgb(193 53 21) 0px 0px 0px 1px inset";
    classDivHide.style.backgroundColor = "rgb(255 47 0 / 19%)";
  };

  // TODO: voir airbnb, mettre juste mail puis valider puis mdp
  return (
    <div className="register">
      <button className="register__open" type="button" onClick={handleOpen}>
        {register}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className="register__header">Sign up</h2>
            <div className="register__content">
              <h3>Welcome</h3>
              <form>
                <div className="form__div">
                  <label className="header__email-label" htmlFor="email">
                    <div className="header__label-name">Email</div>
                    <div className="label-hide">
                      <input
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="header__email"
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
