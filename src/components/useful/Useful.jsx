import React, { Component } from "react";
import style from "./useful.module.css";

export class Useful extends Component {
  state = {
    name: "",
    mail: "",
    phone: "",
    massage: "",
    isAccept: false,
  };
  handleChange = (ev) => {
    ev.preventDefault();
    let { name, value } = ev.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = () => {};
  handleAccept = () => {
    this.setState({ isAccept: !this.state.isAccept });
  };
  render() {
    const { name, phone, mail, massage } = this.state;
    const acceptText = this.state.isAccept
      ? style.useful__acceptTextIsActive
      : style.useful__acceptText;
    return (
      <div className={style.useful}>
        <form
          type="submit"
          onSubmit={this.handleSubmit}
          className={style.useful__Form}
        >
          <h1 className={style.useful__title}>
            Есть вопросы? Напиши мне сейчас !
          </h1>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            className={style.useful__input}
            autoComplete="off"
            placeholder="Имя"
          ></input>
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={this.handleChange}
            className={style.useful__input}
            autoComplete="off"
            placeholder="Email"
          ></input>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            className={style.useful__input}
            autoComplete="off"
            placeholder="Телефон"
          ></input>
          <input
            type="text"
            name="massage"
            value={massage}
            onChange={this.handleChange}
            className={style.useful__input}
            autoComplete="off"
            placeholder="Сообщение"
          ></input>
          <div className={style.useful__acceptBlock}>
            <div className={style.useful__acceptCheckBox}>
              <input
                type="radio"
                id="radioButton"
                checked={this.state.isAccept}
                onClick={this.handleAccept}
                readOnly
                className={style.useful__acceptInput}
              ></input>
              <p className={acceptText}>
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
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjkzNTUgMS4zNjA0OUMyNi4zOTA2IDAuNzk2NTAzIDI1LjQ4MzYgMC43OTY1MDMgMjQuOTE5NyAxLjM2MDQ5QzI0LjM3NDcgMS45MDU0MyAyNC4zNzQ3IDIuODEyMzggMjQuOTE5NyAzLjM1NjA1TDM1LjE0MTMgMTMuNTc3N0wxLjQxMTI0IDEzLjU3NzdDMC42MjQ5NiAxMy41NzkgMCAxNC4yMDM5IDAgMTQuOTkwMkMwIDE1Ljc3NjUgMC42MjQ5NiAxNi40MjE4IDEuNDExMjQgMTYuNDIxOEwzNS4xNDEzIDE2LjQyMThMMjQuOTE5NyAyNi42MjQ0QzI0LjM3NDcgMjcuMTg4NCAyNC4zNzQ3IDI4LjA5NjYgMjQuOTE5NyAyOC42NDAzQzI1LjQ4MzYgMjkuMjA0MyAyNi4zOTE5IDI5LjIwNDMgMjYuOTM1NSAyOC42NDAzTDM5LjU3NyAxNS45OTg4QzQwLjE0MSAxNS40NTM5IDQwLjE0MSAxNC41NDY5IDM5LjU3NyAxNC4wMDMyTDI2LjkzNTUgMS4zNjA0OVoiIGZpbGw9IiMxRTIwMUQiLz4KPC9zdmc+Cg=="
                alt="arrow"
              ></img>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Useful;
