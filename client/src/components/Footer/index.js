import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import swal from "sweetalert";

import svgSend from "../../assets/images/svg/send.svg";
import Contact from "../Contact";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Label from "../Label";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    maxWidth: "400px",
    // height: "50%",
    borderRadius: "10px",
    maxWidth: "400px",
  },
}));
const Footer = ({ sendMail }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contain, setContain] = useState("");

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // TODO: gerer les cas champs vide
    e.preventDefault();
    dispatch({ type: "SEND_MAIL", email, subject, contain });
    swal(
      "Mail envoyée!",
      "Nous vous répondrons des que possible!",
      "success"
    ).then(() => {
      setEmail("");
      setSubject("");
      setContain("");
      setOpen(false);
    });
  };

  return (
    <div className="footer">
      <button
        className="login__open"
        type="button"
        onClick={handleOpen}
      ></button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className="login__header">Contact us</h2>
            <div className="login__content">
              <h3>Contact N'skills</h3>
              <form onSubmit={handleSubmit}>
                <Label
                  // keyDown={emptyError}
                  name="Email"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  displayPWD="none"
                />
                <Label
                  name="Subject"
                  type="subject"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  displayPWD="none"
                />
                <textarea
                  className="inputContact"
                  name="Contain"
                  id="contain"
                  cols="30"
                  rows="10"
                  onChange={(e) => setContain(e.target.value)}
                  value={contain}
                ></textarea>

                <button type="submit" className="form__button">
                  Contact us
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
      <div className="footer__links">
        <div className="footer__left"></div>

        <div className="footer__rigth">
          <svg
            className="svg"
            width="825"
            height="545"
            viewBox="0 0 825 545"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="undraw_Subscriber_re_om92 1">
              <g id="mail">
                <path
                  id="Vector"
                  d="M435.206 370.59L472.366 341.419C472.399 341.393 472.434 341.37 472.471 341.35C472.623 341.268 472.8 341.24 472.971 341.27C473.142 341.3 473.297 341.387 473.409 341.515C473.521 341.644 473.582 341.805 473.583 341.973C473.584 342.14 473.524 342.302 473.413 342.432L445.445 375.799L444.952 376.389L444.373 375.939L444.448 375.846L444.451 375.846L472.831 341.981L435.699 371.127L435.699 371.13L435.537 371.255L435.065 370.7L435.206 370.59Z"
                  fill="#E5E5E5"
                />
                <g id="haut">
                  <path
                    id="Vector_2"
                    d="M406.607 119.835L558.887 11.3447L712.323 127.555L566.733 210.522L487.691 193.202L406.607 119.835Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_3"
                    d="M721.461 116.021C721.343 116.021 721.227 115.986 721.13 115.92L560.395 8.31238C559.906 7.98643 559.324 7.81223 558.729 7.81321C558.134 7.81418 557.553 7.99027 557.065 8.31782L397.489 115.919C397.362 116.004 397.206 116.037 397.055 116.011C396.904 115.985 396.769 115.903 396.681 115.782C396.592 115.661 396.557 115.511 396.584 115.365C396.61 115.219 396.695 115.09 396.821 115.004L556.398 7.40288C557.081 6.94439 557.894 6.69792 558.727 6.6966C559.561 6.69528 560.374 6.93918 561.059 7.39552L721.794 115.003C721.895 115.071 721.972 115.169 722.012 115.281C722.052 115.394 722.053 115.516 722.016 115.629C721.979 115.743 721.905 115.842 721.805 115.912C721.706 115.983 721.585 116.021 721.461 116.021H721.461Z"
                    fill="#3F3D56"
                  />
                </g>
                <g onClick={handleOpen} id="contenu">
                  <path
                    id="Vector_4"
                    d="M560.653 287.517C560.081 287.518 559.515 287.411 558.985 287.203L465.07 249.743V132.486C465.071 131.449 465.5 130.455 466.263 129.722C467.025 128.989 468.059 128.576 469.138 128.575H649.309C650.387 128.576 651.421 128.989 652.184 129.722C652.947 130.455 653.376 131.449 653.377 132.486V249.825L653.2 249.897L562.371 287.185C561.827 287.405 561.243 287.518 560.653 287.517V287.517Z"
                    fill="white"
                  />
                  <path
                    id="Vector_5"
                    d="M560.653 287.796C560.043 287.797 559.439 287.684 558.875 287.462L464.779 249.93V132.486C464.78 131.375 465.24 130.31 466.057 129.524C466.874 128.739 467.982 128.297 469.138 128.296H649.309C650.464 128.297 651.572 128.739 652.389 129.524C653.207 130.31 653.666 131.375 653.668 132.486V250.009L562.485 287.442C561.905 287.676 561.282 287.797 560.653 287.796V287.796ZM465.941 249.183L559.318 286.429C560.189 286.769 561.164 286.763 562.031 286.413L652.505 249.272V132.486C652.504 131.671 652.167 130.89 651.568 130.314C650.969 129.738 650.156 129.414 649.309 129.413H469.138C468.291 129.414 467.478 129.738 466.879 130.314C466.28 130.89 465.943 131.671 465.942 132.486L465.941 249.183Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_6"
                    d="M546.032 172.406H482.101C480.869 172.404 479.688 171.933 478.817 171.095C477.947 170.257 477.458 169.121 477.458 167.936C477.458 166.752 477.947 165.616 478.817 164.778C479.688 163.94 480.869 163.469 482.101 163.467H546.032C547.264 163.469 548.445 163.94 549.315 164.778C550.186 165.616 550.675 166.752 550.675 167.936C550.675 169.121 550.186 170.257 549.315 171.095C548.445 171.933 547.264 172.404 546.032 172.406V172.406Z"
                    fill="#FF6363"
                  />
                  <path
                    id="Vector_7"
                    d="M607.039 217.102H509.398C508.166 217.101 506.985 216.629 506.115 215.791C505.244 214.953 504.755 213.817 504.755 212.633C504.755 211.448 505.244 210.312 506.115 209.474C506.985 208.636 508.166 208.165 509.398 208.163H607.039C608.271 208.165 609.452 208.636 610.323 209.474C611.193 210.312 611.682 211.448 611.682 212.633C611.682 213.817 611.193 214.953 610.323 215.791C609.452 216.629 608.271 217.101 607.039 217.102V217.102Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_8"
                    d="M607.039 237.774H509.398C508.165 237.774 506.983 237.303 506.111 236.465C505.239 235.627 504.749 234.49 504.749 233.305C504.749 232.119 505.239 230.982 506.111 230.144C506.983 229.306 508.165 228.835 509.398 228.835H607.039C608.272 228.835 609.455 229.306 610.327 230.144C611.199 230.982 611.689 232.119 611.689 233.305C611.689 234.49 611.199 235.627 610.327 236.465C609.455 237.303 608.272 237.774 607.039 237.774V237.774Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="To: N&#226;&#128;&#153;Skills"
                    d="M484.016 145.563H482.417V150H481.764V145.563H480.167V145.023H484.016V145.563ZM484.146 148.117C484.146 147.754 484.217 147.429 484.358 147.139C484.501 146.85 484.7 146.626 484.953 146.469C485.208 146.312 485.498 146.233 485.824 146.233C486.328 146.233 486.735 146.408 487.044 146.756C487.357 147.105 487.513 147.569 487.513 148.147V148.192C487.513 148.552 487.443 148.875 487.304 149.163C487.167 149.447 486.97 149.67 486.713 149.829C486.458 149.989 486.164 150.068 485.831 150.068C485.33 150.068 484.923 149.894 484.611 149.545C484.301 149.197 484.146 148.735 484.146 148.161V148.117ZM484.782 148.192C484.782 148.602 484.876 148.931 485.065 149.18C485.257 149.428 485.512 149.552 485.831 149.552C486.152 149.552 486.408 149.427 486.597 149.176C486.786 148.923 486.88 148.57 486.88 148.117C486.88 147.711 486.784 147.383 486.59 147.132C486.398 146.879 486.143 146.753 485.824 146.753C485.512 146.753 485.26 146.877 485.069 147.125C484.877 147.374 484.782 147.729 484.782 148.192ZM488.285 149.668C488.285 149.559 488.317 149.468 488.381 149.395C488.447 149.322 488.545 149.286 488.675 149.286C488.805 149.286 488.903 149.322 488.969 149.395C489.037 149.468 489.071 149.559 489.071 149.668C489.071 149.773 489.037 149.861 488.969 149.932C488.903 150.002 488.805 150.038 488.675 150.038C488.545 150.038 488.447 150.002 488.381 149.932C488.317 149.861 488.285 149.773 488.285 149.668ZM488.289 146.65C488.289 146.541 488.32 146.45 488.384 146.377C488.45 146.304 488.548 146.268 488.678 146.268C488.808 146.268 488.906 146.304 488.972 146.377C489.041 146.45 489.075 146.541 489.075 146.65C489.075 146.755 489.041 146.843 488.972 146.914C488.906 146.984 488.808 147.02 488.678 147.02C488.548 147.02 488.45 146.984 488.384 146.914C488.32 146.843 488.289 146.755 488.289 146.65ZM495.661 150H495.001L492.496 146.165V150H491.836V145.023H492.496L495.008 148.875V145.023H495.661V150ZM496.772 146.425L496.413 146.179C496.625 145.882 496.734 145.57 496.741 145.242V144.75H497.367V145.194C497.364 145.422 497.307 145.65 497.196 145.878C497.086 146.104 496.945 146.286 496.772 146.425ZM499.694 147.782C499.132 147.62 498.721 147.422 498.464 147.187C498.209 146.95 498.081 146.658 498.081 146.312C498.081 145.92 498.237 145.597 498.549 145.341C498.864 145.084 499.272 144.955 499.773 144.955C500.115 144.955 500.419 145.021 500.686 145.153C500.954 145.285 501.162 145.468 501.308 145.7C501.456 145.933 501.53 146.187 501.53 146.462H500.87C500.87 146.162 500.774 145.926 500.583 145.755C500.392 145.582 500.122 145.495 499.773 145.495C499.449 145.495 499.196 145.567 499.014 145.71C498.834 145.852 498.744 146.049 498.744 146.302C498.744 146.505 498.83 146.677 499 146.818C499.174 146.957 499.466 147.084 499.879 147.201C500.294 147.317 500.617 147.446 500.85 147.587C501.084 147.726 501.257 147.889 501.369 148.076C501.483 148.263 501.54 148.482 501.54 148.735C501.54 149.139 501.383 149.462 501.068 149.706C500.754 149.948 500.333 150.068 499.807 150.068C499.465 150.068 499.146 150.003 498.85 149.874C498.554 149.741 498.325 149.561 498.163 149.333C498.004 149.106 497.924 148.847 497.924 148.558H498.583C498.583 148.858 498.694 149.097 498.915 149.272C499.138 149.445 499.436 149.532 499.807 149.532C500.153 149.532 500.419 149.461 500.604 149.32C500.788 149.179 500.88 148.986 500.88 148.742C500.88 148.498 500.795 148.31 500.624 148.178C500.453 148.044 500.143 147.912 499.694 147.782ZM503.317 148.288L502.921 148.701V150H502.289V144.75H502.921V147.925L503.259 147.519L504.411 146.302H505.18L503.741 147.847L505.348 150H504.606L503.317 148.288ZM506.52 150H505.888V146.302H506.52V150ZM505.836 145.321C505.836 145.218 505.867 145.132 505.929 145.061C505.993 144.99 506.086 144.955 506.209 144.955C506.332 144.955 506.425 144.99 506.489 145.061C506.553 145.132 506.585 145.218 506.585 145.321C506.585 145.423 506.553 145.509 506.489 145.577C506.425 145.646 506.332 145.68 506.209 145.68C506.086 145.68 505.993 145.646 505.929 145.577C505.867 145.509 505.836 145.423 505.836 145.321ZM508.222 150H507.59V144.75H508.222V150ZM509.924 150H509.292V144.75H509.924V150ZM513.093 149.019C513.093 148.848 513.028 148.716 512.898 148.623C512.77 148.527 512.546 148.445 512.225 148.376C511.906 148.308 511.652 148.226 511.462 148.13C511.276 148.035 511.137 147.921 511.045 147.789C510.957 147.656 510.912 147.499 510.912 147.317C510.912 147.014 511.04 146.757 511.295 146.548C511.552 146.338 511.881 146.233 512.279 146.233C512.699 146.233 513.038 146.342 513.298 146.558C513.56 146.775 513.691 147.051 513.691 147.389H513.055C513.055 147.215 512.981 147.066 512.833 146.941C512.687 146.816 512.503 146.753 512.279 146.753C512.049 146.753 511.869 146.803 511.739 146.903C511.609 147.004 511.544 147.135 511.544 147.296C511.544 147.449 511.605 147.564 511.726 147.642C511.846 147.719 512.064 147.793 512.378 147.864C512.695 147.934 512.951 148.019 513.147 148.117C513.343 148.215 513.488 148.333 513.582 148.472C513.677 148.609 513.725 148.776 513.725 148.975C513.725 149.305 513.593 149.57 513.329 149.771C513.064 149.969 512.721 150.068 512.3 150.068C512.004 150.068 511.742 150.016 511.514 149.911C511.286 149.806 511.107 149.66 510.977 149.474C510.849 149.285 510.786 149.081 510.786 148.862H511.418C511.429 149.074 511.514 149.242 511.671 149.368C511.83 149.491 512.04 149.552 512.3 149.552C512.539 149.552 512.73 149.504 512.874 149.409C513.02 149.311 513.093 149.181 513.093 149.019Z"
                    fill="black"
                  />
                </g>
                <path
                  id="Vector_9"
                  d="M721.171 114.903H721.055L654.334 142.291L563.046 179.763C562.689 179.907 562.306 179.982 561.919 179.984C561.532 179.986 561.149 179.915 560.79 179.774L466.608 142.213L398.247 114.948L398.143 114.903H398.027C396.948 114.904 395.914 115.317 395.151 116.05C394.389 116.783 393.96 117.777 393.958 118.814V288.66C393.96 289.696 394.389 290.691 395.151 291.424C395.914 292.157 396.948 292.569 398.027 292.571H721.171C722.25 292.569 723.284 292.157 724.047 291.424C724.809 290.691 725.238 289.696 725.24 288.66V118.814C725.238 117.777 724.809 116.783 724.047 116.05C723.284 115.317 722.25 114.904 721.171 114.903V114.903Z"
                  fill="white"
                />
                <path
                  id="Vector_10"
                  d="M494.363 261.767H419.133C418.201 261.769 417.306 261.414 416.646 260.781C415.986 260.148 415.614 259.29 415.613 258.394C415.612 257.497 415.981 256.638 416.639 256.003C417.297 255.368 418.19 255.011 419.122 255.01H494.363C495.295 255.009 496.19 255.363 496.85 255.996C497.51 256.629 497.881 257.487 497.883 258.384C497.884 259.28 497.515 260.14 496.857 260.774C496.199 261.409 495.306 261.766 494.373 261.767H494.363Z"
                  fill="#FF6363"
                />
                <path
                  id="Vector_11"
                  d="M473.508 247.757H446.517C445.586 247.758 444.692 247.403 444.032 246.77C443.373 246.138 443.001 245.279 443 244.384C442.999 243.488 443.367 242.628 444.025 241.994C444.683 241.359 445.575 241.002 446.507 241H473.508C473.97 240.999 474.428 241.086 474.855 241.255C475.281 241.424 475.67 241.672 475.997 241.985C476.324 242.299 476.584 242.671 476.761 243.081C476.938 243.49 477.03 243.93 477.031 244.374C477.031 244.818 476.941 245.257 476.765 245.668C476.589 246.078 476.33 246.451 476.004 246.765C475.678 247.079 475.291 247.329 474.864 247.499C474.438 247.669 473.981 247.757 473.519 247.757H473.508Z"
                  fill="#FF6363"
                />
                <path
                  id="Vector_12"
                  d="M720.299 114.903H720.183L653.462 142.291L562.174 179.763C561.817 179.907 561.434 179.982 561.047 179.984C560.66 179.986 560.277 179.915 559.918 179.774L465.736 142.213L397.376 114.948L397.271 114.903H397.155C396.076 114.904 395.042 115.317 394.279 116.05C393.517 116.783 393.088 117.777 393.086 118.814V288.66C393.088 289.696 393.517 290.691 394.279 291.424C395.042 292.157 396.076 292.569 397.155 292.571H720.299C721.378 292.569 722.412 292.157 723.175 291.424C723.937 290.691 724.366 289.696 724.368 288.66V118.814C724.366 117.777 723.937 116.783 723.175 116.05C722.412 115.317 721.378 114.904 720.299 114.903V114.903ZM723.205 288.66C723.205 289.4 722.899 290.111 722.354 290.635C721.809 291.158 721.07 291.453 720.299 291.453H397.155C396.384 291.453 395.645 291.158 395.1 290.635C394.555 290.111 394.249 289.4 394.249 288.66V118.814C394.25 118.092 394.541 117.398 395.062 116.877C395.583 116.356 396.294 116.05 397.044 116.021L465.736 143.419L559.471 180.808C560.486 181.205 561.623 181.199 562.633 180.791L653.462 143.503L720.416 116.021C721.165 116.052 721.874 116.359 722.393 116.88C722.913 117.4 723.204 118.093 723.205 118.814V288.66Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_13"
                  d="M718.497 159.023C742.914 159.023 762.709 139.995 762.709 116.523C762.709 93.0506 742.914 74.0225 718.497 74.0225C694.08 74.0225 674.286 93.0506 674.286 116.523C674.286 139.995 694.08 159.023 718.497 159.023Z"
                  fill="#FF6363"
                />
                <path
                  id="Vector_14"
                  d="M714.284 138.95L701.052 122.593L708.747 116.84L715.012 124.584L736.178 103.105L743.257 109.551L714.284 138.95Z"
                  fill="white"
                />
                <path
                  id="Vector_15"
                  d="M424.765 364.554C424.453 364.707 424.193 364.942 424.013 365.232C423.834 365.521 423.742 365.853 423.75 366.19C423.758 366.527 423.865 366.855 424.057 367.137C424.25 367.418 424.522 367.641 424.841 367.781L434.543 372.04C434.685 372.104 434.813 372.194 434.92 372.305C435.022 372.418 435.099 372.551 435.145 372.694L438.913 384.162C439.029 384.539 439.274 384.868 439.608 385.095C439.941 385.323 440.345 385.436 440.754 385.416L440.769 385.415C441.175 385.405 441.566 385.265 441.88 385.017C442.194 384.768 442.412 384.426 442.5 384.045L443.943 378.293C443.992 378.104 444.094 377.93 444.238 377.792C444.382 377.653 444.562 377.555 444.76 377.508C444.904 377.471 445.055 377.463 445.203 377.485C445.351 377.507 445.493 377.558 445.619 377.635L463.292 388.118C463.547 388.27 463.837 388.361 464.137 388.381C464.437 388.402 464.737 388.352 465.013 388.236C465.287 388.12 465.529 387.943 465.717 387.719C465.905 387.495 466.035 387.231 466.095 386.949L475.281 343.06C475.351 342.729 475.322 342.386 475.198 342.071C475.074 341.755 474.86 341.479 474.581 341.276C474.301 341.072 473.967 340.948 473.618 340.918C473.268 340.888 472.917 340.954 472.605 341.108L471.991 341.408L424.765 364.554V364.554ZM425.148 367.131C424.957 367.047 424.794 366.912 424.679 366.743C424.564 366.574 424.5 366.377 424.496 366.175C424.491 365.972 424.546 365.773 424.654 365.599C424.762 365.426 424.919 365.285 425.106 365.193L472.317 342.055L472.945 341.747C473.133 341.656 473.343 341.617 473.552 341.635C473.761 341.654 473.961 341.728 474.128 341.85C474.295 341.972 474.424 342.136 474.499 342.325C474.573 342.514 474.591 342.719 474.551 342.917L465.365 386.805C465.329 386.975 465.251 387.134 465.138 387.268C465.025 387.403 464.879 387.509 464.714 387.578C464.549 387.646 464.369 387.676 464.19 387.664C464.01 387.651 463.836 387.598 463.683 387.507L446.011 377.024C445.837 376.919 445.646 376.843 445.445 376.799C445.158 376.735 444.858 376.74 444.573 376.812C444.532 376.821 444.492 376.834 444.451 376.846L444.448 376.846C444.147 376.941 443.876 377.108 443.661 377.332C443.446 377.556 443.294 377.829 443.219 378.125L441.777 383.88C441.725 384.109 441.593 384.315 441.404 384.464C441.215 384.613 440.979 384.696 440.734 384.699L440.727 384.7C440.481 384.713 440.238 384.646 440.038 384.509C439.838 384.373 439.691 384.175 439.624 383.947L435.856 372.479C435.818 372.357 435.765 372.24 435.699 372.13L435.699 372.127C435.636 372.021 435.562 371.921 435.478 371.831C435.396 371.741 435.305 371.661 435.206 371.59C435.096 371.511 434.977 371.443 434.851 371.389L425.148 367.131V367.131Z"
                  fill="#E5E5E5"
                />
                <path
                  id="Vector_16"
                  d="M307.367 42.417C307.065 42.2455 306.719 42.1592 306.369 42.168C306.018 42.1768 305.677 42.2804 305.385 42.4668C305.093 42.6533 304.862 42.915 304.717 43.2221C304.573 43.5292 304.522 43.8692 304.569 44.2031L306.01 54.3621C306.03 54.5119 306.019 54.6639 305.978 54.8098C305.933 54.9534 305.858 55.0866 305.757 55.2011L297.687 64.3914C297.417 64.6872 297.259 65.0615 297.238 65.4543C297.216 65.847 297.333 66.2353 297.568 66.5567L297.577 66.5685C297.803 66.8934 298.135 67.1363 298.521 67.2585C298.907 67.3808 299.325 67.3754 299.707 67.2432L305.535 65.3416C305.728 65.2802 305.935 65.2704 306.134 65.3133C306.332 65.3563 306.515 65.4503 306.662 65.5854C306.772 65.6831 306.86 65.8017 306.919 65.9336C306.979 66.0656 307.01 66.2079 307.01 66.3518L307.238 86.313C307.24 86.6019 307.315 86.886 307.458 87.1406C307.6 87.3952 307.804 87.6128 308.053 87.7744C308.302 87.9357 308.587 88.0372 308.884 88.0706C309.182 88.1039 309.483 88.068 309.764 87.9659L353.262 71.9742C353.59 71.8542 353.876 71.6477 354.087 71.3784C354.298 71.1091 354.426 70.7879 354.456 70.4518C354.486 70.1156 354.417 69.7782 354.256 69.4783C354.095 69.1785 353.85 68.9283 353.548 68.7566L352.955 68.4184L307.367 42.4169V42.417ZM305.305 44.1055C305.277 43.905 305.309 43.701 305.396 43.5168C305.483 43.3326 305.622 43.1757 305.797 43.064C305.973 42.9524 306.178 42.8905 306.388 42.8854C306.598 42.8804 306.806 42.9324 306.987 43.0355L352.561 69.0292L353.168 69.3749C353.348 69.4785 353.494 69.6287 353.59 69.8083C353.686 69.988 353.727 70.1899 353.71 70.391C353.692 70.5921 353.616 70.7844 353.49 70.946C353.364 71.1076 353.193 71.2319 352.997 71.3048L309.499 87.2964C309.331 87.358 309.15 87.3795 308.971 87.3593C308.793 87.3391 308.621 87.2777 308.473 87.1803C308.324 87.0829 308.202 86.9525 308.117 86.8C308.031 86.6476 307.986 86.4776 307.984 86.3046L307.756 66.3436C307.756 66.1461 307.721 65.9501 307.652 65.7641L351.937 70.6554C352.109 70.6761 352.284 70.6382 352.431 70.5482C352.578 70.4582 352.687 70.3217 352.74 70.1624C352.793 70.003 352.787 69.8309 352.722 69.6757C352.657 69.5205 352.537 69.392 352.384 69.3124C352.347 69.2925 352.308 69.2761 352.268 69.2636L306.76 54.6608C306.771 54.5286 306.766 54.3957 306.746 54.2645L305.305 44.1055L305.305 44.1055Z"
                  fill="#F1F1F1"
                />
                <path
                  id="Vector_17"
                  d="M307.367 42.417C307.065 42.2455 306.719 42.1592 306.369 42.168C306.018 42.1768 305.677 42.2804 305.385 42.4668C305.093 42.6533 304.862 42.915 304.717 43.2221C304.573 43.5292 304.522 43.8692 304.569 44.2031L306.01 54.3621C306.03 54.5119 306.019 54.6639 305.978 54.8098C305.933 54.9534 305.858 55.0866 305.757 55.2011L297.687 64.3914C297.417 64.6872 297.259 65.0615 297.238 65.4543C297.216 65.847 297.333 66.2353 297.568 66.5567L297.577 66.5685C297.803 66.8934 298.135 67.1363 298.521 67.2585C298.907 67.3808 299.325 67.3754 299.707 67.2432L305.535 65.3416C305.728 65.2802 305.935 65.2704 306.134 65.3133C306.332 65.3563 306.515 65.4503 306.662 65.5854C306.772 65.6831 306.86 65.8017 306.919 65.9336C306.979 66.0656 307.01 66.2079 307.01 66.3518L307.238 86.313C307.24 86.6019 307.315 86.886 307.458 87.1406C307.6 87.3952 307.804 87.6128 308.053 87.7744C308.302 87.9357 308.587 88.0372 308.884 88.0706C309.182 88.1039 309.483 88.068 309.764 87.9659L353.262 71.9742C353.59 71.8542 353.876 71.6477 354.087 71.3784C354.298 71.1091 354.426 70.7879 354.456 70.4518C354.486 70.1156 354.417 69.7782 354.256 69.4783C354.095 69.1785 353.85 68.9283 353.548 68.7566L352.955 68.4184L307.367 42.4169V42.417ZM305.305 44.1055C305.277 43.905 305.309 43.701 305.396 43.5168C305.483 43.3326 305.622 43.1757 305.797 43.064C305.973 42.9524 306.178 42.8905 306.388 42.8854C306.598 42.8804 306.806 42.9324 306.987 43.0355L352.561 69.0292L353.168 69.3749C353.348 69.4785 353.494 69.6287 353.59 69.8083C353.686 69.988 353.727 70.1899 353.71 70.391C353.692 70.5921 353.616 70.7844 353.49 70.946C353.364 71.1076 353.193 71.2319 352.997 71.3048L309.499 87.2964C309.331 87.3579 309.15 87.3795 308.971 87.3593C308.793 87.3391 308.621 87.2777 308.473 87.1803C308.324 87.0829 308.202 86.9525 308.117 86.8C308.032 86.6475 307.986 86.4776 307.984 86.3046L307.756 66.3436C307.756 66.1461 307.721 65.95 307.652 65.764C307.554 65.4962 307.39 65.2553 307.174 65.0622C307.144 65.0339 307.112 65.0076 307.079 64.9812L307.077 64.9784C306.833 64.7844 306.541 64.6537 306.23 64.5987C305.918 64.5436 305.597 64.566 305.297 64.6638L299.466 66.5674C299.236 66.6476 298.985 66.6507 298.753 66.5764C298.521 66.5021 298.322 66.3547 298.188 66.158L298.184 66.1521C298.04 65.96 297.97 65.7268 297.983 65.4909C297.996 65.255 298.092 65.0304 298.256 64.854L306.326 55.6638C306.412 55.5676 306.487 55.4623 306.548 55.35L306.551 55.3479C306.611 55.2404 306.659 55.1271 306.693 55.0099C306.728 54.8961 306.75 54.7791 306.76 54.6609C306.771 54.5287 306.766 54.3957 306.746 54.2645L305.305 44.1055V44.1055Z"
                  fill="#E5E5E5"
                />
                <path
                  id="Vector_18"
                  d="M306.76 54.6608L352.268 69.2635C352.308 69.2761 352.347 69.2924 352.384 69.3123C352.537 69.3919 352.657 69.5204 352.722 69.6756C352.787 69.8308 352.793 70.003 352.74 70.1623C352.687 70.3216 352.578 70.4581 352.431 70.5481C352.284 70.6382 352.109 70.6761 351.937 70.6553L307.652 65.7639L306.87 65.6783L306.956 64.9674L307.077 64.9783L307.079 64.9811L352.021 69.9414L306.552 55.3479L306.548 55.3499L306.352 55.2847L306.588 54.6049L306.76 54.6608Z"
                  fill="#E5E5E5"
                />
                <path
                  id="Vector_19"
                  d="M814.868 0.249834L769.28 26.2513L768.687 26.5894C768.385 26.7611 768.14 27.0113 767.979 27.3112C767.818 27.6111 767.749 27.9485 767.779 28.2846C767.809 28.6208 767.937 28.942 768.148 29.2113C768.359 29.4806 768.645 29.6871 768.973 29.8071L812.472 45.7987C812.752 45.9008 813.053 45.9368 813.351 45.9034C813.649 45.8701 813.933 45.7685 814.182 45.6073C814.431 45.4456 814.635 45.2281 814.778 44.9735C814.92 44.7189 814.995 44.4348 814.998 44.1458L815.225 24.1847C815.225 24.0408 815.256 23.8984 815.316 23.7665C815.376 23.6346 815.463 23.516 815.573 23.4182C815.72 23.2832 815.903 23.1891 816.101 23.1462C816.3 23.1033 816.507 23.113 816.7 23.1745L822.528 25.076C822.91 25.2082 823.328 25.2137 823.714 25.0914C824.1 24.9691 824.432 24.7262 824.658 24.4013L824.667 24.3896C824.902 24.0681 825.019 23.6799 824.997 23.2871C824.976 22.8944 824.818 22.52 824.548 22.2242L816.478 13.0339C816.377 12.9195 816.302 12.7863 816.257 12.6427C816.216 12.4968 816.205 12.3447 816.225 12.1949L817.666 2.03597C817.714 1.70205 817.662 1.36208 817.518 1.05498C817.373 0.747893 817.142 0.486131 816.85 0.299692C816.558 0.113253 816.217 0.00967852 815.867 0.000858577C815.516 -0.00796136 815.17 0.0783266 814.868 0.249821V0.249834ZM816.93 1.9384L815.489 12.0973C815.469 12.2286 815.465 12.3615 815.476 12.4937L769.968 27.0964C769.927 27.109 769.888 27.1253 769.851 27.1452C769.698 27.2248 769.578 27.3533 769.513 27.5085C769.449 27.6637 769.442 27.8359 769.495 27.9952C769.548 28.1545 769.658 28.291 769.804 28.381C769.951 28.4711 770.126 28.509 770.298 28.4882L814.583 23.5969C814.514 23.7829 814.479 23.979 814.479 24.1765L814.251 44.1374C814.249 44.3104 814.204 44.4804 814.119 44.6329C814.033 44.7853 813.911 44.9158 813.762 45.0131C813.614 45.1105 813.443 45.1719 813.264 45.1921C813.085 45.2123 812.904 45.1908 812.736 45.1293L769.238 29.1376C769.042 29.0647 768.871 28.9404 768.745 28.7788C768.619 28.6173 768.543 28.425 768.525 28.2238C768.508 28.0227 768.549 27.8208 768.645 27.6412C768.741 27.4615 768.887 27.3114 769.067 27.2078L769.674 26.862L815.248 0.868297C815.429 0.7652 815.637 0.713205 815.847 0.718257C816.057 0.723309 816.262 0.785208 816.438 0.896867C816.613 1.00853 816.752 1.16543 816.839 1.34962C816.926 1.5338 816.958 1.73784 816.93 1.93834V1.9384Z"
                  fill="#F1F1F1"
                />
                <path
                  id="Vector_20"
                  d="M814.868 0.249834L769.28 26.2513L768.687 26.5894C768.385 26.7611 768.14 27.0113 767.979 27.3112C767.818 27.6111 767.749 27.9485 767.779 28.2846C767.809 28.6208 767.937 28.942 768.148 29.2113C768.359 29.4806 768.645 29.6871 768.973 29.8071L812.472 45.7987C812.752 45.9008 813.053 45.9368 813.351 45.9034C813.649 45.8701 813.933 45.7685 814.182 45.6073C814.431 45.4456 814.635 45.2281 814.778 44.9735C814.92 44.7189 814.995 44.4348 814.998 44.1458L815.225 24.1847C815.225 24.0408 815.256 23.8984 815.316 23.7665C815.376 23.6346 815.463 23.516 815.573 23.4182C815.72 23.2832 815.903 23.1891 816.101 23.1462C816.3 23.1033 816.507 23.113 816.7 23.1745L822.528 25.076C822.91 25.2082 823.328 25.2137 823.714 25.0914C824.1 24.9691 824.432 24.7262 824.658 24.4013L824.667 24.3896C824.902 24.0681 825.019 23.6799 824.997 23.2871C824.976 22.8944 824.818 22.52 824.548 22.2242L816.478 13.0339C816.377 12.9195 816.302 12.7863 816.257 12.6427C816.216 12.4968 816.205 12.3447 816.225 12.1949L817.666 2.03597C817.714 1.70205 817.662 1.36208 817.518 1.05498C817.373 0.747893 817.142 0.486131 816.85 0.299692C816.558 0.113253 816.217 0.00967852 815.867 0.000858577C815.516 -0.00796136 815.17 0.0783266 814.868 0.249821V0.249834ZM816.93 1.9384L815.489 12.0974C815.469 12.2286 815.465 12.3615 815.476 12.4937C815.485 12.612 815.507 12.729 815.542 12.8427C815.576 12.9599 815.624 13.0733 815.684 13.1808L815.687 13.1828C815.748 13.2951 815.823 13.4004 815.909 13.4967L823.98 22.6868C824.143 22.8632 824.239 23.0878 824.252 23.3238C824.265 23.5597 824.195 23.7929 824.052 23.985L824.047 23.9909C823.913 24.1875 823.714 24.335 823.482 24.4093C823.251 24.4836 822.999 24.4804 822.769 24.4002L816.938 22.4966C816.638 22.3989 816.317 22.3765 816.006 22.4315C815.694 22.4866 815.402 22.6173 815.158 22.8112L815.156 22.8141C815.123 22.8405 815.091 22.8667 815.061 22.895C814.845 23.0881 814.681 23.329 814.583 23.5969C814.514 23.7829 814.479 23.9789 814.479 24.1764L814.251 44.1374C814.249 44.3104 814.204 44.4804 814.118 44.6328C814.033 44.7853 813.911 44.9158 813.762 45.0131C813.614 45.1105 813.443 45.1719 813.264 45.1921C813.085 45.2123 812.904 45.1908 812.736 45.1293L769.238 29.1376C769.042 29.0647 768.871 28.9404 768.745 28.7788C768.619 28.6173 768.543 28.425 768.525 28.2239C768.508 28.0227 768.549 27.8208 768.645 27.6412C768.741 27.4615 768.887 27.3114 769.067 27.2078L769.674 26.862L815.248 0.86831C815.429 0.765214 815.637 0.713219 815.847 0.718271C816.057 0.723323 816.262 0.785222 816.438 0.896881C816.613 1.00854 816.752 1.16544 816.839 1.34963C816.926 1.53382 816.958 1.73785 816.93 1.93836V1.9384Z"
                  fill="#E5E5E5"
                />
                <path
                  id="Vector_21"
                  d="M815.647 12.4378L815.883 13.1176L815.687 13.1828L815.684 13.1808L770.214 27.7744L815.156 22.8141L815.158 22.8112L815.279 22.8003L815.366 23.5113L814.584 23.5969L770.298 28.4882C770.126 28.509 769.951 28.4711 769.804 28.381C769.658 28.291 769.548 28.1545 769.495 27.9952C769.442 27.8359 769.449 27.6637 769.514 27.5085C769.579 27.3533 769.698 27.2248 769.851 27.1452C769.888 27.1253 769.927 27.109 769.968 27.0965L815.476 12.4937L815.647 12.4378Z"
                  fill="#E5E5E5"
                />
                <path
                  id="Vector_22"
                  d="M424.765 363.554C424.453 363.707 424.193 363.942 424.013 364.232C423.834 364.521 423.742 364.853 423.75 365.19C423.758 365.527 423.865 365.855 424.057 366.137C424.25 366.418 424.522 366.641 424.841 366.781L434.543 371.04C434.685 371.104 434.813 371.194 434.92 371.305C435.022 371.418 435.099 371.551 435.145 371.694L438.913 383.162C439.029 383.539 439.274 383.868 439.608 384.095C439.941 384.323 440.345 384.436 440.754 384.416L440.769 384.415C441.175 384.405 441.566 384.265 441.88 384.017C442.194 383.768 442.412 383.426 442.5 383.045L443.943 377.293C443.992 377.104 444.094 376.93 444.238 376.792C444.382 376.653 444.562 376.555 444.76 376.508C444.904 376.471 445.055 376.463 445.203 376.485C445.351 376.507 445.493 376.558 445.619 376.635L463.292 387.118C463.547 387.27 463.837 387.361 464.137 387.381C464.437 387.402 464.737 387.352 465.013 387.236C465.287 387.12 465.529 386.943 465.717 386.719C465.905 386.495 466.035 386.231 466.095 385.949L475.281 342.06C475.351 341.729 475.322 341.386 475.198 341.071C475.074 340.755 474.86 340.479 474.581 340.276C474.301 340.072 473.967 339.948 473.618 339.918C473.268 339.888 472.917 339.954 472.605 340.108L471.991 340.408L424.765 363.554V363.554ZM425.148 366.131C424.957 366.047 424.794 365.912 424.679 365.743C424.564 365.574 424.5 365.377 424.496 365.175C424.491 364.972 424.546 364.773 424.654 364.599C424.762 364.426 424.919 364.285 425.106 364.193L472.317 341.055L472.945 340.747C473.133 340.656 473.343 340.617 473.552 340.635C473.761 340.654 473.961 340.728 474.128 340.85C474.295 340.972 474.424 341.136 474.499 341.325C474.573 341.514 474.591 341.719 474.551 341.917L465.365 385.805C465.329 385.975 465.251 386.134 465.138 386.268C465.025 386.403 464.879 386.509 464.714 386.578C464.549 386.646 464.369 386.676 464.19 386.664C464.01 386.651 463.836 386.598 463.683 386.507L446.011 376.024C445.837 375.919 445.646 375.843 445.445 375.799L473.413 342.432C473.524 342.302 473.584 342.14 473.583 341.973C473.582 341.805 473.521 341.644 473.409 341.515C473.297 341.387 473.142 341.3 472.971 341.27C472.8 341.24 472.623 341.268 472.471 341.35C472.434 341.37 472.399 341.393 472.366 341.419L435.206 370.59C435.096 370.511 434.977 370.443 434.851 370.389L425.148 366.131V366.131Z"
                  fill="#F1F1F1"
                />
                <path
                  id="FROM"
                  d="M419.322 244.802H417.234V247H416.578V242.023H419.661V242.563H417.234V244.266H419.322V244.802ZM422.272 244.987H421.103V247H420.443V242.023H422.091C422.651 242.023 423.082 242.151 423.383 242.406C423.686 242.661 423.837 243.033 423.837 243.521C423.837 243.83 423.753 244.1 423.584 244.331C423.418 244.561 423.186 244.733 422.887 244.847L424.056 246.959V247H423.352L422.272 244.987ZM421.103 244.45H422.111C422.437 244.45 422.696 244.366 422.887 244.197C423.081 244.029 423.178 243.803 423.178 243.521C423.178 243.213 423.085 242.977 422.901 242.813C422.719 242.649 422.454 242.566 422.108 242.563H421.103V244.45ZM428.588 244.672C428.588 245.16 428.506 245.586 428.342 245.951C428.178 246.313 427.946 246.59 427.645 246.781C427.344 246.973 426.993 247.068 426.592 247.068C426.2 247.068 425.853 246.973 425.55 246.781C425.247 246.588 425.011 246.313 424.842 245.958C424.676 245.6 424.59 245.186 424.586 244.717V244.358C424.586 243.879 424.669 243.457 424.835 243.09C425.002 242.723 425.236 242.443 425.54 242.249C425.845 242.053 426.194 241.955 426.585 241.955C426.984 241.955 427.335 242.052 427.638 242.246C427.944 242.437 428.178 242.716 428.342 243.083C428.506 243.448 428.588 243.873 428.588 244.358V244.672ZM427.936 244.351C427.936 243.761 427.817 243.309 427.58 242.994C427.343 242.677 427.012 242.519 426.585 242.519C426.171 242.519 425.844 242.677 425.604 242.994C425.368 243.309 425.246 243.746 425.239 244.307V244.672C425.239 245.244 425.358 245.694 425.598 246.022C425.839 246.348 426.171 246.511 426.592 246.511C427.016 246.511 427.344 246.357 427.577 246.05C427.809 245.74 427.929 245.297 427.936 244.72V244.351ZM430.42 242.023L432.047 246.084L433.674 242.023H434.525V247H433.869V245.062L433.931 242.97L432.297 247H431.794L430.164 242.98L430.229 245.062V247H429.573V242.023H430.42Z"
                  fill="black"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="footer__about">
        <ul>
          <li>© 2021 N'skills</li>
          <li>Privacy</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
