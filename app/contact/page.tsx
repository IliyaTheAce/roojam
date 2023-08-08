"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ContactUsInfoData from "@/lib/Actions/ContactUsInfoData";
import CompanyInfoCard from "@/Components/ContactUsPage/CompanyInfoCard";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const errorsClassnames = "mb-4 text-red-500";
  const [CompanyInfo, setCompanyInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await ContactUsInfoData();
    // @ts-ignore
    setCompanyInfo(data);
  };

  return (
    <section
      className={
        "flex flex-col md:flex-row justify-center py-10 px-6  md:space-x-14"
      }
    >
      <div
        className={
          "absolute z-[0] opacity-50 w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient"
        }
      />
      <div
        className={
          "absolute z-[0] opacity-20 w-[60%] h-[60%] right-[40%]  rounded-full blue__gradient"
        }
      />
      <div className={" max-w-[370px] z-[1]"}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              // @ts-ignore
              errors.email = "لطفا ایمیل را وارد کنید.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              // @ts-ignore
              errors.email = "لطفا ایمیل را به درستی وارد کنید";
            }

            if (!values.phoneNumber) {
              // @ts-ignore
              errors.phoneNumber = "لطفا شماره تلفن را وارد کنید.";
            } else if (!/^09\d{9}$/i.test(values.phoneNumber)) {
              // @ts-ignore
              errors.phoneNumber = "لطفا شماره تلفن را به درستی وارد کنید";
            }
            // @ts-ignore
            if (!values.composer) {
              // @ts-ignore
              errors.composer = "لطفا نام و نام خاوادگی را وارد کنید";
            }

            if (!values.subject) {
              // @ts-ignore
              errors.subject = "لطفا موضوع پیام را وارد کنید";
            }

            if (!values.message) {
              // @ts-ignore
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
            </Form>
          )}
        </Formik>
      </div>
      <div className={"flex flex-col py-14 px-4 max-w-[450px] z-[1]"}>
        {CompanyInfo &&
          CompanyInfo.map((item: any, index: number) => (
            <CompanyInfoCard
              title={item.title}
              content={item.content}
              key={index}
            />
          ))}
      </div>
      <div className={"object-contain z-[1] flex justify-center"}>
        <iframe
          src="https://api.neshan.org/v2/static?key=service.9af7c27f378b4af186fdd76b73079153&type=dreamy-gold&zoom=17&center=35.815064,50.986432&width=600&height=450&marker=red"
          width={"600"}
          height={"450"}
        ></iframe>
      </div>
    </section>
  );
}
