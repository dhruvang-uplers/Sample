// Helper styles for dem
import { Formik } from "formik";
import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";


const fate = () => (
  <div className="app">
    <Formik
      initialValues={{ }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
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
          changeDate
        } = props;
        return (
          <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='p-5 shadow-md w-96'>
              <h3 className='text-2xl text-center mb-5' style={{ textTransform: 'capitalize'}}>hello</h3>

    <div className='flex flex-col mb-4'>
      <label className='mb-1' htmlFor="firstName">Name/From</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      value={values.firstName}
        className='border px-4 py-2'
      />
</div>
<div className='flex flex-col mb-4'>
      <label className='mb-1' htmlFor="Address">Address</label>
      <input
        id="Address"
        name="Address"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
  
        className='border px-4 py-2'
      />
</div>
<div className='flex flex-col mb-4'>
      <label className='mb-1' htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
     
        className='border px-4 py-2'
      />
      </div>
      <div className='flex flex-col mb-4'>
      <label for="datepicker" class="font-bold mb-1 text-gray-700 block">Select Date</label>
      <Datetime style={{padding:"50px 0"}} dateFormat="YYYY-MM-DD" timeFormat={false} onChange={(e)=>console.log(e)} className='border px-4 py-2'  onChange={date => setFieldValue('startDate', date)}  className='border px-4 py-2'/>
      
      </div>
      <button
              type="button"
              className='bg-indigo-700 text-white px-4 py-2 w-24'
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
  <button  type="submit" disabled={isSubmitting} className='bg-indigo-700 text-white px-4 py-2 w-24'>Submit</button>
    
    </div>
    </div>
          
         
          </form>
        );
      }}
    </Formik>
  </div>
);

export default fate
