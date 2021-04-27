import { connect } from "react-redux";

import Account from "../../components/Account";
import { changeUrEmail, changeUrUsername } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeEmail: (id, email) => {
    dispatch(changeUrEmail(id, email));
  },
  changeUsername: (id, username) => {
    dispatch(changeUrUsername(id, username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
