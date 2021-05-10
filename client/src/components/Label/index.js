import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";

import "./label.css";

import styled from "styled-components";

const Div = styled.div`
background: ${({ theme }) => theme.inputForm};
color: ${({ theme }) => theme.text};
}`;

const Input = styled.input`
background: ${({ theme }) => theme.inputForm};
color: ${({ theme }) => theme.text};
}`;

const Label = ({
  name,
  type,
  onChange,
  keyDown,
  value,
  displayPWD,
  showPwd,
}) => {
  // style in state
  const [hideType, setHideType] = useState({
    display: "flex",
    opacity: "0",
  });
  const [labelName, setLabelName] = useState({
    position: "absolute",
    top: "18px",
    left: "12px",
    right: "12px",
    transformOrigin: "0% 0%",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "400",
    transition: "0.3s",
  });
  const handleFocus = () => {
    setHideType({
      opacity: "1",
      overflow: "hidden",
    });

    setLabelName({ ...labelName, transform: "translateY(-10px) scale(0.70)" });
  };
  const handleBlur = () => {
    setHideType({
      opacity: "0",
    });

    setLabelName({
      ...labelName,
      transform: "translateY(0) scale(1)",
    });
  };

  //   const handleChange = () => {
  //     // TODO: pour la gestion des erreurs
  //     // const classLabel = document.querySelector(".header__label-name");
  //     // classLabel.style.color = "red";
  //     // const classDivHide = document.querySelector(".form__div");
  //     // classDivHide.style.boxShadow = "rgb(193 53 21) 0px 0px 0px 1px inset";
  //     // classDivHide.style.backgroundColor = "rgb(255 51 4 / 5%)";
  //   };
  return (
    <Div className="form__div">
      <label className="header__input-label" htmlFor={type}>
        <Div style={labelName}>{name}</Div>
        <div style={hideType}>
          <Input
            onKeyDown={keyDown}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="header__input"
            type={type}
            id={type}
            name={type}
            value={value}
            placeholder={name}
          />
        </div>
      </label>
      <VisibilityIcon
        onClick={showPwd}
        style={{
          display: displayPWD,
          alignSelf: "center",
          marginRight: "10px",
          cursor: "pointer",
          position: "absolute",
          right: "10px",
        }}
      />
    </Div>
  );
};

export default Label;
