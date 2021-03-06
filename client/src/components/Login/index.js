import React from "react";
import { Link } from "react-router-dom";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./login.css";
import Label from "../Label";
import ResetPassword from "../../containers/ResetPassword";

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
    width: "90%",
    maxWidth: "400px",
    borderRadius: "10px",
    maxWidth: "400px",
  },
}));

const Div = styled.div`
  background: ${({ theme }) => theme.backgroundNav};
  }`;

const Button = styled.button`
color: ${({ theme }) => theme.text};
}`;

const Login = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    removeError,
    user,
    login,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showPwd = (e) => {
    const hidePwd = document.querySelectorAll(".header__input")[1];
    if (hidePwd.type === "password") {
      hidePwd.type = "text";
    } else {
      hidePwd.type = "password";
    }
  };
  const emptyError = () => {
    removeError();
  };
  // const handleSubmit = () => {};
  // const handleChange = () => {
  //   console.log("change");
  // };
  return (
    <div className="login">
      <Button className="login__open" type="button" onClick={handleOpen}>
        {login}
      </Button>
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
          <Div className={classes.paper}>
            <h2 className="login__header">Sign in</h2>
            <div className="login__content">
              <h3>Welcome to N'skills</h3>
              <form onSubmit={handleSubmit}>
                <Label
                  keyDown={emptyError}
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

                <Label
                  keyDown={emptyError}
                  name="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  displayPWD="block"
                  showPwd={showPwd}
                />
                <p className="account__errors">{user.errorLogin} </p>

                <ErrorMessage name="password">
                  {(errMsg) => <span className="errorMessage">{errMsg}</span>}
                </ErrorMessage>

                <ResetPassword resetPassword={"Forgot password ?"} />

                <button type="submit" className="form__button">
                  Sign in
                </button>
                <div className="or">Or</div>
                <button disabled className="form__google">
                  Continuer avec google
                </button>
              </form>
            </div>
          </Div>
        </Fade>
      </Modal>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    // passwordConfirm: '',
  }),
  validationSchema: Yup.object().shape({
    // username: Yup.string()
    //     .required('Required'),
    email: Yup.string()
      .email("Adresse mail non pas valide")
      .required("Required"),
    password: Yup.string()
      .min(6, "Doit contenir au moins 6 charact??res")
      .required("Required"),
    // passwordConfirm: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Le mot de passe n\'est pas le m??me'),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(false);
    props.handleLogin(values.email, values.password);
  },
})(Login);
