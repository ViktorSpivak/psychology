import React, { Component } from "react";
import style from "./useful.module.css";

export class Useful extends Component {
  state = {
    name: "",
    mail: "",
    phone: "",
    massage: "",
  };
  handleChange = (ev) => {
    ev.preventDefault();
    let { name, value } = ev.target;
    console.log(name, value);
    // this.setState({ [name]: value });
    this.setState({ [name]: value });
  };
  handleSubmit = () => {};
  render() {
    const { name, phone, mail, massage } = this.state;
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
            className={style.inputStyle}
            autocomplete="off"
            placeholder="Имя"
          ></input>
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={this.handleChange}
            className={style.inputStyle}
            autocomplete="off"
            placeholder="Email"
          ></input>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            className={style.inputStyle}
            autocomplete="off"
            placeholder="Телефон"
          ></input>
          <input
            type="text"
            name="massage"
            value={massage}
            onChange={this.handleChange}
            className={style.inputStyle}
            autocomplete="off"
            placeholder="Сообщение"
          ></input>
        </form>
      </div>
    );
  }
}

export default Useful;
