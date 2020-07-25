import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./askme.module.css";

// export const AskMe = () => {
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [massage, setMassage] = useState("");
//   const [accept, setAccept] = useState(false);

//   const handleSubmit = () => {};

//   return (
//     <div className={style.useful}>
//       <form
//         type="submit"
//         onSubmit={handleSubmit}
//         className={style.useful__Form}
//       >
//         <h1 className={style.useful__title}>
//           Чем я могу быть полезна для Вас&nbsp;?
//         </h1>
//         <input
//           type="text"
//           value={name}
//           name="name"
//           onChange={(ev) => setName(ev.target.value)}
//           className={style.useful__input}
//           autoComplete="off"
//           placeholder="Имя"
//         ></input>
//         <div className={style.line}></div>
//         <input
//           type="text"
//           name="mail"
//           value={mail}
//           onChange={(ev) => setMail(ev.target.value)}
//           className={style.useful__input}
//           autoComplete="off"
//           placeholder="Email"
//         ></input>
//         <div className={style.line}></div>
//         <input
//           type="text"
//           name="phone"
//           value={phone}
//           onChange={(ev) => setPhone(ev.target.value)}
//           className={style.useful__input}
//           autoComplete="off"
//           placeholder="Телефон"
//         ></input>
//         <div className={style.line}></div>
//         <input
//           type="text"
//           name="massage"
//           value={massage}
//           onChange={(ev) => setMassage(ev.target.value)}
//           className={style.useful__input}
//           autoComplete="off"
//           placeholder="Сообщение"
//         ></input>
//         <div className={style.line}></div>
//         <div className={style.useful__acceptBlock}>
//           <div className={style.useful__acceptCheckBox}>
//             <input
//               type="radio"
//               id="radioButton"
//               checked={accept}
//               onClick={() => setAccept(!accept)}
//               readOnly
//               className={style.useful__acceptInput}
//             ></input>
//             <p
//               className={
//                 accept
//                   ? style.useful__acceptTextIsActive
//                   : style.useful__acceptText
//               }
//             >
//               <a
//                 href="/"
//                 target="blank"
//                 rel="noopener noreferrer"
//                 className={style.useful__acceptLink}
//               >
//                 I accept the terms as laid out in the privacy policy
//               </a>
//             </p>
//           </div>
//           <div className={style.useful__acceptSubmit}>
//             <p className={style.useful__acceptSubmitText}>SUBMIT</p>
//             <span>&#10230;</span>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
export const AskMe = () => {
  const [accept, setAccept] = useState(false);
  return (
    <div className={style.container}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", text: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string().max(20, "Must be 20 characters or less"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          text: Yup.string()
            .max(200, "Must be 200 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          setSubmitting(false);
          console.log("ddd");
        }}
      >
        <Form className={style.form}>
          <Field
            name="firstName"
            type="text"
            className={style.input}
            placeholder="First name"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className={style.errorStyle}
          />

          <div className={style.line}></div>
          <Field
            name="lastName"
            type="text"
            className={style.input}
            placeholder="Last name"
          />
          <ErrorMessage
            name="lastName"
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
            placeholder="Text"
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
