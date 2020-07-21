import React from "react";
import style from "./watch.module.css";

export const Watch = () => {
  return (
    <div className={style.container}>
      {/* <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4"></source>
        <source src="movie.ogg" type="video/ogg"></source>
        Your browser does not support the video tag.
      </video> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ds46EE-4DNs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <video
        width="320"
        height="240"
        tabindex="-1"
        // class="video-stream html5-main-video"
        src="blob:https://www.youtube.com/6aa1573b-b67d-431e-a798-12a76fd5d894"
        // style="width: 842px; height: 474px; left: 0px; top: 4.6875px;"
      ></video> */}
      {/* <iframe
        width="420"
        height="315"
        src="blob:https://www.youtube.com/6aa1573b-b67d-431e-a798-12a76fd5d894"
      ></iframe> */}
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      {/* <p className={style.text}>Watch</p> */}
    </div>
  );
};
