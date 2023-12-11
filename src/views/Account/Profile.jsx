import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

import FileUploader from "../../components/FileUploader"

import "./styles.scss";

const Profile = () => {
  const updateProfile = async () => {
    try {
      // const {data} = await () => {};
    } catch (err) {
      console.log(err);
    }
  };

    const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      mob: "",
      email: "",
      country: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Field is required"),
      age: Yup.number("Must be a valid number").required("Field is required"),
      email: Yup.string().required("Field is required"),
      country: Yup.string().required("Field is required"),
    }),
    onSubmit: (values) => updateProfile(values),
  });
  return (
    <div className="profile">
      <h3 className="mt-1">Profile</h3>
      <FileUploader />
      <form onSubmit={updateProfile}>
      </form>
    </div>
  );
};

export default Profile;
