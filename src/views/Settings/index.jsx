import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const Settings = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      mob: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      age: Yup.number().required("Age is required"),
      mob: Yup.string().required("Field is required")
    }),
    onSubmit: (values) => handleSubmit(values)
  })

  const handleSubmit = () => {
    console.log("form submitted");
  }

  console.log("formik.error: ", formik.errors);

  return (


    <>
    <div>Settings</div>
      <div>
        <form onSubmit={formik.handleSubmit} >
          <input type="text" />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Settings