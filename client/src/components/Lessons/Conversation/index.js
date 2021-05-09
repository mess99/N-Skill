import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConvUrlByTitle } from "../../../utils/slugUrl";

import "./conversation.css";

import SvgConv from "./Svg/SvgConv";
import SvgConv2 from "./Svg/SvgConv2";
import SvgConv3 from "./Svg/SvgConv3";

const Conversation = ({ dialogues }) => {
  const [svg, setSvg] = useState(false);
  const [svg2, setSvg2] = useState(false);
  const [svg3, setSvg3] = useState(false);

  // useEffect(() => {
  //   let isSubscribed = true;
  //   const timer = setTimeout(() => {
  //     if (isSubscribed) {
  //       first();
  //     }
  //   }, 500);
  //   return () => (isSubscribed = false);
  // }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      first();
    }
    return () => (isSubscribed = false);
  }, []);

  const first = () => {
    setSvg(true);
    setSvg2(false);
    setSvg3(false);

    setTimeout(second, 9000);
  };

  const second = () => {
    setSvg(false);
    setSvg2(true);
    setTimeout(three, 9000);
  };

  const three = () => {
    setSvg(false);
    setSvg2(false);
    setSvg3(true);
    setTimeout(first, 9000);
  };

  return (
    <div className="conversation">
      <div className="conv__left">
        <h1>Conversations</h1>
        <p>Comment communiquer en anglais ?</p>
        <p>
          Vous apprendrez comment communiquer pour venir a bout d'une situation
          précise.
        </p>
        <ul>
          {dialogues?.map((dialogue, index) => {
            return (
              <Link key={dialogue.id} to={getConvUrlByTitle(dialogue.title)}>
                <li>
                  Chapitre {dialogue.chapter}: {dialogue.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {svg && <SvgConv />}
      {svg2 && <SvgConv2 />}
      {svg3 && <SvgConv3 />}
    </div>
  );
};

export default Conversation;
