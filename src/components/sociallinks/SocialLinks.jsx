import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
const SocialLinks = () => {
  const face = () => {
    const actualWindowHeight = window.innerHeight;
    window.open(
      "https://www.facebook.com/yulia.sokhach?viewas=100000686899395&privacy_source=timeline_gear_menu&entry_point=action_bar#_ ",
      "",
      `Toolbar=1,Location=0,Directories=0,Status=0,Menubar=0,Scrollbars=0,Width=550,Height=${actualWindowHeight}`
    );
  };

  return (
    <div>
      <IconContext.Provider value={{ size: "50px" }}>
        <AiOutlineFacebook onClick={face} />
        <AiOutlineLinkedin onClick={face} />
        <AiOutlineInstagram onClick={face} />
      </IconContext.Provider>
    </div>
  );
};

export default SocialLinks;
