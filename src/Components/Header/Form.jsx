import { useFormik } from 'formik';
import React from 'react';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const InfoForm = (props) => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      Address: '',
      email: '',
      date:''
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  
  const changeDate = (event) => {
    console.log(event.toDate()) // Tue Nov 24 2020 00:00:00 GMT+0400 (Gulf Standard Time)
    console.log(event.format("DD-MM-YYYY")) //24-11-2020
    
}

  return (
    
      <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='p-5 shadow-md w-96'>
              <h3 className='text-2xl text-center mb-5' style={{ textTransform: 'capitalize'}}>hello {(props.displayName).toUpperCase()}</h3>
    <form onSubmit={formik.handleSubmit}>
    <div className='flex flex-col mb-4'>
      <label className='mb-1' htmlFor="firstName">Name/From</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className='border px-4 py-2'
      />
</div>
<div className='flex flex-col mb-4'>
      <label className='mb-1' htmlFor="Address">Address</label>
      <input
        id="Address"
        name="Address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Address}
        className='border px-4 py-2'
      />
</div>
<div className='flex flex-col mb-4'>
      <label className='mb-1' htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className='border px-4 py-2'
      />
      </div>
      <div className='flex flex-col mb-4'>
      <label for="datepicker" class="font-bold mb-1 text-gray-700 block">Select Date</label>
      <Datetime dateFormat="YYYY-MM-DD" timeFormat={false} onChange={(e)=>console.log(e)} className='border px-4 py-2'  onChange={changeDate} />
      </div>
  <button  type="submit" className='bg-indigo-700 text-white px-4 py-2 w-24'>Submit</button>
    </form>
    </div>
    </div>
  );
};
export default InfoForm