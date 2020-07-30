import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Axios from "axios";
import * as Yup from "yup";
import { Logo } from "../../svgcomponents/Logo";
import style from "./loginForm.module.css";

export const LoginForm = () => {
  const [accept, setAccept] = useState(false);
  return (
    <div className={style.container}>
      <main>
        <Formik
          initialValues={{ name: "", password: "", email: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            password: Yup.string()

              .min(10, "мин 10 символов ")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            Axios({
              method: "post",
              url: "https://psychology-server.herokuapp.com/request",
              data: values,
            })
              .then((res) =>
                console.log("Response from server:", res.config.data)
              )
              .catch((err) => console.log(err));
          }}
        >
          <Form className={style.form}>
            <Field
              name="name"
              type="text"
              className={style.input}
              placeholder="Логин"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={style.errorStyle}
            />
            <div className={style.line}></div>
            <Field
              name="password"
              type="text"
              className={style.input}
              placeholder="Пароль"
            />
            <ErrorMessage
              name="password"
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
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </main>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
};
