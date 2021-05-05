import React, { useEffect, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import "./account.css";
import svgProfile from "../../assets/images/svg/profile.svg";
import { Link } from "react-router-dom";

import { avatarFilter } from "../../utils";

const Account = ({
  user,
  changeEmail,
  changeUsername,
  loadAvatar,
  avatars,
  handleChoose,
  loadAvatarWithId,
  loadMyPosts,
  myPosts,
}) => {
  const [disable, setDisable] = useState({ email: true, username: true });
  const [validate, setValidate] = useState({ email: false, username: false });
  const [profile, setProfile] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editAvatars, setEditAvatars] = useState(false);
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    loadMyPosts();
  }, [loadMyPosts]);

  useEffect(() => {
    if (editAvatars) {
      loadAvatar();
    }
  }, [editAvatars]);

  useEffect(() => {
    if (user.Avatar !== null) {
      loadAvatarWithId(user.Avatar.id);
    }
  }, [user.AvatarId]);

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const editEmailMode = () => {
    setValidate({ email: true, username: false });
    setDisable({ email: false, username: true });
  };

  const editUsernameMode = () => {
    setValidate({ email: false, username: true });
    setDisable({ username: false, email: true });
  };

  const valideEmail = () => {
    if (email === user.email) {
      setValidate({ email: false, username: false });
      setDisable({ username: true, email: true });
    } else {
      changeEmail(user.id, email);
      setValidate({ email: false, username: false });
      setDisable({ username: true, email: true });
    }
  };

  const valideUsername = () => {
    if (username === user.username) {
      setValidate({ email: false, username: false });
      setDisable({ username: true, email: true });
    } else {
      changeUsername(user.id, username);
      setValidate({ email: false, username: false });
      setDisable({ username: true, email: true });
    }
  };

  const handleEdit = () => {
    setEdit(!edit);
    setEditAvatars(false);
    setPosts(false);
    setProfile(!profile);
  };

  const editAvatar = () => {
    setEdit(false);
    setPosts(false);
    setEditAvatars(!editAvatars);
    setProfile(!profile);
  };

  const showMyPosts = () => {
    setEdit(false);
    setEditAvatars(false);
    setPosts(!posts);
  };

  const avatarFilted = avatarFilter(avatars);

  const date = new Date(user.createdAt);

  return (
    <div className="account">
      <div className="account__contain">
        <div className="account__profil">
          <div className="profil__content">
            <div className="profil__image">
              <div className="profil__image__content">
                <img src={user.Avatar.image} alt="random-user" />
              </div>
            </div>
            <p className="account__edit__avatar" onClick={editAvatar}>
              Update avatar
            </p>
          </div>
          <div className="profil__info__posts" onClick={showMyPosts}>
            {" "}
            My posts
          </div>
        </div>

        <div className="account__edit">
          <div className="account__content">
            <div className="account__content__box">
              <h1 className="account__title">HELLO {username}</h1>
              <span className="account__date">
                Joined in {date.getUTCFullYear()}
              </span>
              <div className="account__editbtn" onClick={handleEdit}>
                Edit profile
              </div>
            </div>
            {/* {profile && (
              <div className="account__avatars">
                <img src={svgProfile} alt="" />{" "}
              </div>
            )} */}
            {editAvatars && (
              <div className="account__avatars">
                <div className="avatars__box">
                  {avatarFilted?.map((avatar) => (
                    <div key={avatar.id} className="avatar">
                      <img
                        onClick={() => {
                          handleChoose(user.id, avatar.id);
                        }}
                        src={avatar.image}
                        alt="avatar"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {posts && myPosts?.length == 0 && <p>No posts</p>}
            {posts && (
              <div className="account__posts">
                <div className="posts__box">
                  {myPosts?.map((post) => {
                    const truncTitle = post?.title.substr(0, 20) + "\u2026";
                    return (
                      <div
                        key={post?.id}
                        className="forum__questions account__post"
                      >
                        <Link
                          to={{
                            pathname: "/forum/" + post?.id,
                            state: {
                              props: post,
                            },
                          }}
                        >
                          <h2 className="forum__questions__title account__post__title">
                            {truncTitle}
                          </h2>
                        </Link>
                        <div className="forum__plus">
                          <span className="forum__vote">
                            <small className="account__post__answer">
                              {post?.answers}
                            </small>
                            {post?.answers === 0 ? (
                              <small className="account__post__answers">
                                answer
                              </small>
                            ) : post?.answers === 1 ? (
                              <small className="account__post__answers">
                                answer
                              </small>
                            ) : (
                              <small className="account__post__answers">
                                answers
                              </small>
                            )}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {edit && (
              <div className="account__inputs">
                <div className="account__input">
                  <label htmlFor="email">Email</label>
                  <div className="account__input__submit">
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      disabled={disable.email}
                      type="email"
                      id="email"
                    />
                    {!validate.email && (
                      <button
                        className="account__editMode"
                        onClick={editEmailMode}
                        type="button"
                      >
                        <EditIcon />
                      </button>
                    )}

                    {validate.email && (
                      <button
                        onClick={valideEmail}
                        className="account__validate"
                        type="submit"
                      >
                        <CheckIcon />
                      </button>
                    )}
                  </div>
                  {user && user.errors && (
                    <p className="account__errors">{user.errors}</p>
                  )}
                </div>

                <div className="account__input">
                  <label htmlFor="username">Username</label>
                  <div className="account__input__submit">
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      disabled={disable.username}
                      type="text"
                      id="username"
                    />
                    {!validate.username && (
                      <button
                        className="account__editMode"
                        onClick={editUsernameMode}
                        type="button"
                      >
                        <EditIcon />
                      </button>
                    )}

                    {validate.username && (
                      <button
                        onClick={valideUsername}
                        className="account__validate"
                        type="submit"
                      >
                        <CheckIcon />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
