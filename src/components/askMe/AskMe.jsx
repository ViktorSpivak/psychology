import React, { useState } from "react";
import style from "./askme.module.css";

export const AskMe = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [massage, setMassage] = useState("");
  const [accept, setAccept] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className={style.useful}>
      <form
        type="submit"
        onSubmit={handleSubmit}
        className={style.useful__Form}
      >
        <h1 className={style.useful__title}>
          Чем я могу быть полезна для Вас&nbsp;?
        </h1>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(ev) => setName(ev.target.value)}
          className={style.useful__input}
          autoComplete="off"
          placeholder="Имя"
        ></input>
        <div className={style.line}></div>
        <input
          type="text"
          name="mail"
          value={mail}
          onChange={(ev) => setMail(ev.target.value)}
          className={style.useful__input}
          autoComplete="off"
          placeholder="Email"
        ></input>
        <div className={style.line}></div>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          className={style.useful__input}
          autoComplete="off"
          placeholder="Телефон"
        ></input>
        <div className={style.line}></div>
        <input
          type="text"
          name="massage"
          value={massage}
          onChange={(ev) => setMassage(ev.target.value)}
          className={style.useful__input}
          autoComplete="off"
          placeholder="Сообщение"
        ></input>
        <div className={style.line}></div>
        <div className={style.useful__acceptBlock}>
          <div className={style.useful__acceptCheckBox}>
            <input
              type="radio"
              id="radioButton"
              checked={accept}
              onClick={() => setAccept(!accept)}
              readOnly
              className={style.useful__acceptInput}
            ></input>
            <p
              className={
                accept
                  ? style.useful__acceptTextIsActive
                  : style.useful__acceptText
              }
            >
              <a
                href="/"
                target="blank"
                rel="noopener noreferrer"
                className={style.useful__acceptLink}
              >
                I accept the terms as laid out in the privacy policy
              </a>
            </p>
          </div>
          <div className={style.useful__acceptSubmit}>
            <p className={style.useful__acceptSubmitText}>SUBMIT</p>
            <span>&#10230;</span>
          </div>
        </div>
      </form>
    </div>
  );
};
