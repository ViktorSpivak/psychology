import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";
import { actions } from "../../redux/sessionRedux";
import * as api from "../../services/api";
import { Logo } from "../../svgcomponents/Logo";
import style from "./loginForm.module.css";

export const LoginForm = () => {
  // const [accept, setAccept] = useState(false);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const submit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    const response = await api.loginRequest(values);
    dispatch(actions.loginRequest(response));
  };
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
            email: Yup.string(),
            // .email("Invalid email address")
            // .required("Required"),
          })}
          onSubmit={submit}
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
            <button type="button" onClick={api.logoutRequest}>
              Logout
            </button>
          </Form>
        </Formik>
      </main>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
};
