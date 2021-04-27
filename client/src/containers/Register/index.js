import { connect } from "react-redux";
import formikForm from "../../components/Register";
import { register } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleRegister: (values) => {
    dispatch(register(values));
  },
  handleError: () => {
    dispatch({
      type: "EMPTY_ERROR",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(formikForm);
