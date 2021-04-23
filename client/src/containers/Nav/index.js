import { connect } from "react-redux";

import Nav from "../../components/Nav";
import { tryToLogout } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(tryToLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
