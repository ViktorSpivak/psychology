import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
const SocialLinks = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "50px" }}>
        <AiOutlineFacebook />
        <AiOutlineLinkedin />
        <AiOutlineInstagram />
      </IconContext.Provider>
    </div>
  );
};

export default SocialLinks;
