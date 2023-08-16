"use client";

import { tokenContex } from "@/utils/TokenContex";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useContext } from "react";

export default function LoginPage() {
  const token = useContext(tokenContex);
  return (
    <section>
      <div className="bg-slate-800 px-8 py-10 rounded-lg text-white">
        <Formik
          initialValues={{
            phone: "",
            password: "",
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            setErrors({ password: "mame" });
            // console.log(token.SubmitToken('asdas'))
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form
              className={
                "flex flex-col py-4 px-4 gap-5 min-w-[300px] text-dimBlack"
              }
            >
              <label className={"mb-1 text-white text-center "}>
                {" "}
                ورود مشترکیت{" "}
              </label>
              <div className={"h-[1px] bg-secondary w-full mb-4"} />

              <Field
                type="text"
                name="phone"
                className={"py-1 px-2  border-orange-500 rounded-md"}
                placeholder={"شماره تلفن"}
              />
              <Field
                type="password"
                name="password"
                className={"py-1 px-2  border-orange-500 rounded-md"}
                placeholder={"رمز عبور"}
              />
              <ErrorMessage name="password" component="div" />
              <div className="flex flex-row justify-between items-center px-2">
                <Link
                  href={"./signup"}
                  className="text-sm font-light text-blue-600"
                >
                  ثبت نام
                </Link>
                <Link
                  href={"./forget-password"}
                  className="text-sm font-light text-blue-600"
                >
                  فراموشی رمز
                </Link>
              </div>
              <button
                type={"submit"}
                className={
                  "w-full h-[30px] bg-secondary  rounded hover:bg-dimWhite transition-all text-white"
                }
              >
                ورود
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
