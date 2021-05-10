import React from "react";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router-dom";

import "./resetPassword.css";
import Label from "../Label";

import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // width: "90%",
    maxWidth: "400px",
    borderRadius: "10px",
    maxWidth: "400px",
  },
}));

const Div = styled.div`
  background: ${({ theme }) => theme.backgroundNav};
  }`;

const NewPassword = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClose = () => {
    history.push("/");
  };

  const showPwd = (e) => {
    const hidePwd = document.querySelector(".header__input");
    if (hidePwd.type === "password") {
      hidePwd.type = "text";
    } else {
      hidePwd.type = "password";
    }
  };
  return (
    <div className="new">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Div className={classes.paper}>
            <h2 className="login__header">Reset your password</h2>
            <div className="login__content">
              <h4>Enter your new password</h4>
              <form onSubmit={handleSubmit}>
                <Label
                  name="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  displayPWD="block"
                  showPwd={showPwd}
                />
                <ErrorMessage name="password">
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
          </Div>
        </Fade>
      </Modal>
    </div>
  );
};

function $_GET(param) {
  const vars = {};
  const location = window.location;
  location.href.replace(location.hash, "").replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    (m, key, value) => {
      // callback
      vars[key] = value !== undefined ? value : "";
    }
  );

  if (param) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}

const token = $_GET("token");
const email = $_GET("email");

const initialValues = {
  token,
  email,
  password: "",
};

export default withFormik({
  mapPropsToValues: () => ({ ...initialValues }),
  validationSchema: Yup.object().shape({
    password: "",
  }),
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .min(6, "Doit contenir au moins 6 charactères")
      .required("Required"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(false);
    props.handleSendNewPW(values);
  },
})(NewPassword);
