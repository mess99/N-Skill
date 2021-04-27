import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import random from "../../assets/images/profile/random-user.png";
import "./account.css";
const Account = ({ user, changeEmail, changeUsername }) => {
  const [disable, setDisable] = useState({ email: true, username: true });
  const [validate, setValidate] = useState({ email: false, username: false });
  // const [error, setError] = useState(user.errors);

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
  return (
    <div className="account">
      <div className="account__contain">
        <div className="account__profil">
          <div className="profil__content">
            <div className="profil__image">
              <div className="profil__image__content">
                <img src={random} alt="random-user" />
              </div>
            </div>
            <p>Update avatar</p>
          </div>
        </div>
        <div className="account__edit">
          <div className="account__content">
            <h1 className="account__title">HELLO NAME</h1>
            <span className="account__date">Joined in {user.createdAt}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
