"use client";
import { BaseUrl } from "@/Constants/Config";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
export default function ContactForm() {
  const [result, setResult] = useState<Boolean>();
  const [submited, setSubmited] = useState<Boolean>(false);
  const errorsClassnames = "mb-4 text-red-500";

  return (
    <div className={" max-w-[370px] z-[1]"}>
      <Formik
        initialValues={{
          composer: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmited(true);
          const { subject, message, email, phoneNumber, composer } = values;
          const response = await fetch(new URL("/api/message/new", BaseUrl), {
            method: "Post",
            body: JSON.stringify({
              composer: composer,
              phone: phoneNumber,
              email,
              content: message,
              title: subject,
            }),
          });
          const data = await response.json();
          setResult(data.result);
          setSubmitting(false);
        }}
        validate={(values) => {
          const errors: {
            email?: string;
            phoneNumber?: string;
            composer?: string;
            subject?: string;
            message?: string;
          } = {};
          if (!values.email) {
            errors.email = "لطفا ایمیل را وارد کنید.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "لطفا ایمیل را به درستی وارد کنید";
          }

          if (!values.phoneNumber) {
            errors.phoneNumber = "لطفا شماره تلفن را وارد کنید.";
          } else if (!/^09\d{9}$/i.test(values.phoneNumber)) {
            errors.phoneNumber = "لطفا شماره تلفن را به درستی وارد کنید";
          }
          if (!values.composer) {
            errors.composer = "لطفا نام و نام خاوادگی را وارد کنید";
          }

          if (!values.subject) {
            errors.subject = "لطفا موضوع پیام را وارد کنید";
          }

          if (!values.message) {
            errors.message = "لطفا پیام را وارد کنید";
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form className={"flex flex-col py-4 px-4 min-w-[300px]"}>
            <label className={"mb-1 text-white "}> تماس با ما: </label>
            <div className={"h-[1px] bg-secondary w-full mb-4"} />

            <Field
              type="text"
              name="composer"
              className={
                "mb-4 py-1 px-2 border-b-[2px] border-orange-500 rounded-t-md"
              }
              placeholder={"نام و نام خانوادگی"}
            />
            <ErrorMessage
              name="composer"
              component="div"
              className={errorsClassnames}
            />
            <Field
              type="email"
              name="email"
              className={
                "mb-4 py-1 px-2 border-b-[2px] border-orange-500 rounded-t-md"
              }
              placeholder={"ایمیل"}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={errorsClassnames}
            />
            <Field
              type="tel"
              name="phoneNumber"
              className={
                "mb-4 py-1 px-2 border-b-[2px] border-orange-500 rounded-t-md"
              }
              placeholder={"تلفن"}
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className={errorsClassnames}
            />
            <Field
              type="text"
              name="subject"
              className={
                "mb-4 py-1 px-2 border-b-[2px] border-orange-500 rounded-t-md"
              }
              placeholder={"موضوع"}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className={errorsClassnames}
            />

            <Field
              component={"textarea"}
              name="message"
              className={
                "mb-4 py-1 px-2 border-b-[2px] border-orange-500 rounded-t-md"
              }
              placeholder={"متن پیام"}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={errorsClassnames}
            />

            <button
              type={"submit"}
              className={
                "w-full h-[30px] bg-secondary  rounded hover:bg-dimWhite transition-all"
              }
            >
              {isSubmitting ? "درحال ارسال" : "ارسال"}
            </button>
            {submited ? (
              result ? (
                <label className={"mt-4 text-green-400"}>ارسال شد</label>
              ) : (
                <label className={`${errorsClassnames} mt-4`}>
                  پیام ارسال نشد
                </label>
              )
            ) : (
              ""
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
