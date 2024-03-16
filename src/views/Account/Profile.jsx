import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

import { api } from "../../utilities/axios";

// import FileUploader from "../../components/FileUploader";

import "./styles.scss";

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      mob: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    validationSchema: Yup.object().shape({
      // name: Yup.string().required("Field is required"),
      // age: Yup.number("Must be a valid number").required("Field is required"),
      // email: Yup.string().required("Field is required"),
      // country: Yup.string().required("Field is required"),
    }),
    onSubmit: (values) => updateProfile(values),
  });

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("updateProfile", formik.values);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFile = async (payload) => {
    try {
      const { data } = await api.post("upload-media", payload, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleMedia = (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("profile", file);
    // console.log("file: ", file);
    console.log(Object.fromEntries(formData))
    uploadFile(formData);
  };

  return (
    <div className="profile">
      <h3 className="mt-1">Profile</h3>
      {/* <FileUploader /> */}
      <form onSubmit={updateProfile}>
        <Container
          sx={{
            backgroundColor: "#F4F4F4",
            // width: "50%",
            padding: "2rem",
          }}
        >
          <Box display="flex">
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Box
                display={"flex"}
                sx={{
                  my: 2,
                }}
                gap={1}
              >
                <TextField
                  fullWidth
                  type="file"
                  name="profile"
                  onChange={handleMedia}
                />
              </Box>
              <Box display="flex" gap={1}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="fName"
                  onChange={formik.handleChange}
                  value={formik.values.fName}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lName"
                  onChange={formik.handleChange}
                  value={formik.values.lName}
                />
              </Box>
              <Box marginTop={2}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Box>
              <Box marginTop={2}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="mob"
                  onChange={formik.handleChange}
                  value={formik.values.mob}
                />
              </Box>

              <Box marginTop={2}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              </Box>
              <Box marginTop={2}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                />
              </Box>
              <Box marginTop={2}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
              </Box>
              <Box marginTop={2}>
                <TextField
                  fullWidth
                  label="Zipcode"
                  name="zip"
                  onChange={formik.handleChange}
                  value={formik.values.zip}
                />
              </Box>
            </Box>

            {/* <Box padding={5}>
              <FileUploader />
            </Box> */}
          </Box>
          <Box display={"flex"} justifyContent={"start"} marginTop={1}>
            <Button type="submit" variant="outlined">
              Update
            </Button>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default Profile;
