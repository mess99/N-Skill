import { connect } from "react-redux";
import formikForm from "../../components/ResetPassword";

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (values) => {
    dispatch({
      type: "RESET_PASSWORD_CHECK_MAIL",
      data: values.email,
    });
  },
});

export default connect(null, mapDispatchToProps)(formikForm);
