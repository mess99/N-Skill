import React from "react";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./resetPassword.css";
import Label from "../Label";
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
    // width: "90%",
    maxWidth: "400px",
    borderRadius: "10px",
    maxWidth: "400px",
  },
}));

const ResetPassword = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
    resetPassword,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="reset">
      <p className="reset__password" onClick={handleOpen}>
        {resetPassword}
      </p>
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
            <h2 className="login__header">Reset your password</h2>
            <div className="login__content">
              <h4>Enter your email</h4>
              <form onSubmit={handleSubmit}>
                <Label
                  name="Email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  displayPWD="none"
                />
                <ErrorMessage name="email">
                  {(errMsg) => <span className="errorMessage">{errMsg}</span>}
                </ErrorMessage>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="form__button form__reset"
                >
                  Reset Password
                </button>
                <div
                  onClick={handleClose}
                  className="form__google form__cancel"
                >
                  Cancel
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Adresse mail non pas valide")
      .required("Required"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(false);
    props.handleLogin(values);
  },
})(ResetPassword);
