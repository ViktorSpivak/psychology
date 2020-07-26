import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Axios from "axios";
import * as Yup from "yup";
import style from "./askme.module.css";

export const AskMe = () => {
  const [accept, setAccept] = useState(false);
  const phoneRegExp = /^[0-9]+$/;
  return (
    <div className={style.container}>
      <Formik
        initialValues={{ name: "", phone: "", email: "", text: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
          phone: Yup.string()
            .matches(phoneRegExp, "только цифры")
            .min(10, "мин 10 символов ")
            .max(10, "макс 10 символов")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          text: Yup.string()
            .max(200, "Must be 200 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          Axios({
            method: "post",
            url: "https://psychology-server.herokuapp.com/request",
            data: values,
          })
            .then((res) => console.log(res.config.data))
            .catch((err) => console.log(err));
        }}
      >
        <Form className={style.form}>
          <Field
            name="name"
            type="text"
            className={style.input}
            placeholder="Имя"
          />
          <ErrorMessage
            name="name"
            component="div"
            className={style.errorStyle}
          />

          <div className={style.line}></div>
          <Field
            name="phone"
            type="text"
            className={style.input}
            placeholder="Телефон"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className={style.errorStyle}
          />

          <div className={style.line}></div>
          <Field
            name="email"
            type="text"
            className={style.input}
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className={style.errorStyle}
          />

          <div className={style.line}></div>
          <Field
            name="text"
            type="text"
            className={style.input}
            placeholder="Текст"
          />
          <ErrorMessage
            name="text"
            component="div"
            className={style.errorStyle}
          />
          <div className={style.line}></div>
          <div className={style.acceptBlock}>
            <div className={style.acceptCheckBox}>
              <input
                type="radio"
                checked={accept}
                onClick={() => setAccept(!accept)}
                readOnly
                className={style.acceptInput}
              ></input>
              <p className={accept ? style.acceptTextActive : style.acceptText}>
                <a
                  href="/"
                  target="blank"
                  rel="noopener noreferrer"
                  className={style.acceptLink}
                >
                  I accept the terms as laid out in the privacy policy
                </a>
              </p>
            </div>
            <button
              type="submit"
              className={accept ? style.submitBtnActive : style.submitBtn}
            >
              Submit<span>&#10230;</span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
