import { connect } from "react-redux";

import Account from "../../components/Account";
import { changeUrEmail, changeUrUsername } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    avatars: state.avatars.avatars,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeEmail: (id, email) => {
    dispatch(changeUrEmail(id, email));
  },
  changeUsername: (id, username) => {
    dispatch(changeUrUsername(id, username));
  },
  loadAvatar: () => {
    dispatch({ type: "LOAD_AVATAR" });
  },
  handleChoose: (id, avatarId) => {
    dispatch({ type: "CHOOSE_AVATAR", id, avatarId });
  },
  loadAvatarWithId: (id) => {
    dispatch({ type: "LOAD_AVATAR_WITH_ID", id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
