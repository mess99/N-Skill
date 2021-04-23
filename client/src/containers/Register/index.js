import { connect } from "react-redux";
import formikForm from "../../components/Register";
import { register } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    // getPostsInfo: state.forum,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleRegister: (values) => {
    dispatch(register(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(formikForm);
