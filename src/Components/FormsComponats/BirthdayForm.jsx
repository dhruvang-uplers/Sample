// Helper styles for dem
import firebase from "firebase";
import { ErrorMessage, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useHistory, Redirect } from "react-router-dom";
import * as Yup from "yup";

import { db } from "../../Firebase/Firebase";
import Wrap from "./../Common/wrap";
let FormData;
const Birthday = (props) => {
  let history = useHistory();
  const [Username, setUsername] = useState();
  const [massage, setMassage] = useState();
  useEffect(() => {
    db.collection("Invitation")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setMassage(snapshot.docs.map((doc) => ({ id: doc.id, doc: doc.data() })));
      });
  }, []);
  useEffect(() => {
    setUsername(props.displayName);
  }, [props.displayName]);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    Address: Yup.string().min(10, "Too Short!").max(250, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  if (true) {
    FormData = (
      <Wrap>
        <Formik
          validateOnChange
          initialValues={{ firstName: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(massage);
            const Date = values.startDate.format("DD-MM-YYYY");
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              db.collection("Invitation")
                .add({
                  Address: values.Address,
                  firstName: values.firstName,
                  email: values.email,
                  EventDate: Date,
                  timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(function (docRef) {
                  console.log("Document written with ID: ", docRef.id);
                  history.push(`/view/${docRef.id}`);
                })
                .catch(function (error) {
                  console.error("Error adding document: ", error);
                });
            }, 500);
          }}>
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              setFieldValue,
              changeDate,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center min-h-screen'>
                  <div className='p-5 shadow-md w-96'>
                    <h3 className='text-2xl text-center mb-5' style={{ textTransform: "capitalize" }}>
                      hello {Username}
                    </h3>
                    <div className='flex flex-col mb-4'>
                      <label className='mb-1' htmlFor='firstName'>
                        Name/From
                      </label>
                      <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        className='border px-4 py-2'
                      />
                      <ErrorMessage name='firstName' render={(msg) => <div>{msg}</div>} />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label className='mb-1' htmlFor='Address'>
                        Address
                      </label>
                      <Field
                        id='Address'
                        as='textarea'
                        name='Address'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Address}
                        className='border px-4 py-2'
                      />
                      <ErrorMessage name='Address' render={(msg) => <div>{msg}</div>} />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label className='mb-1' htmlFor='email'>
                        Email Address
                      </label>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className='border px-4 py-2'
                      />
                      <ErrorMessage name='email' render={(msg) => <div>{msg}</div>} />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='datepicker' className='mb-1'>
                        Select Date
                      </label>
                      <Datetime
                        id='datepicker'
                        name='datepicker'
                        name='datepicker'
                        type='date'
                        inputProps={false}
                        // input={false}
                        closeOnClickOutside={true}
                        style={{ padding: "50px 0" }}
                        dateFormat='YYYY-MM-DD'
                        timeFormat={false}
                        closeOnSelect={true}
                        className='border px-4 py-2'
                        onChange={(date) => setFieldValue("startDate", date)}
                        className='border px-4 py-2'
                      />
                    </div>
                    <button
                      type='button'
                      className='bg-indigo-700 text-white px-4 py-2 w-24 mr-4'
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting}>
                      Reset
                    </button>
                    <button type='submit' disabled={isSubmitting} className='bg-indigo-700 text-white px-4 py-2 w-24'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </Wrap>
    );
  } else {
  }
  return <>{FormData}</>;
};

export default Birthday;
