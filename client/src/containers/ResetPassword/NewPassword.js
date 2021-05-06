import { connect } from "react-redux";
import formikForm from "../../components/ResetPassword/NewPassword";

const mapDispatchToProps = (dispatch) => ({
  handleSendNewPW: (values, token) => {
    dispatch({
      type: "RESET_PASSWORD_SEND_NEW_ONE",
      data: {
        password: values.password,
        token: values.token,
        email: values.email,
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(formikForm);
