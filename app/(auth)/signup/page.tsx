'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";

export default function SignUpPage() {
    return <section>
        <div className="bg-slate-800 px-8 py-12 rounded-lg text-white">
        <Formik
          initialValues={{
phone: '' , password: ''
          }}
          onSubmit={async (values, { setSubmitting , setErrors}) => {
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={"flex flex-col py-4 px-4 min-w-[300px] text-dimBlack"} >
              <label className={"mb-1 text-white text-center "}> ورود مشترکیت </label>
              <div className={"h-[1px] bg-secondary w-full mb-4"} />

              <Field
                type="text"
                name="phone"
                className={
                  "mb-4 py-1 px-2  border-orange-500 rounded-md"
                }
                placeholder={"شماره تلفن"}
              />
                <Field
                type="password"
                name="password"
                className={
                  "mb-4 py-1 px-2  border-orange-500 rounded-md"
                }
                placeholder={"رمز عبور"}
              />
              <ErrorMessage
                name="all"
                component="div"
              />
              
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
}