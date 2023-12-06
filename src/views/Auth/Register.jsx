import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import * as Yup from "yup";

import CBLogo from "../../assets/images/cblogo.jpg";
import { api } from "../../utilities/axios";

const Register = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password required")
      .min(5, "Min 5 characters"),
    mob: Yup.string().required("Mobile no. is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      mob: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    try {
      const { data } = await api.post("/register", values);
      if (data.success) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("role", data.data.role);
        localStorage.setItem("userName", data.data.userName);
        localStorage.setItem("uID", data.data.uID);
        navigate("/app/chat");
        return;
      }
      if (!data.success) {
        return toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Row className="align-items-center justify-content-center h-100 m-0 p-0">
        <Col md={4}>
          <img src={CBLogo} className="brand-img" alt="" />
        </Col>
        <Col md={4}>
          <Card className="mx-auto auth-card">
            <CardBody className="p-5">
              <h3>Sign Up</h3>
              <Form onSubmit={formik.handleSubmit} className="h-100">
                <FormGroup className="" style={{ textAlign: "left" }}>
                  <Label htmlFor="name">User Name</Label>
                  <Input
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  )}
                </FormGroup>
                <FormGroup className="text-start">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  )}
                </FormGroup>
                <FormGroup className="text-start">
                  <Label htmlFor="mob">Contact</Label>
                  <Input
                    name="mob"
                    type="text"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.mob && (
                    <span style={{ color: "red" }}>{formik.errors.mob}</span>
                  )}
                </FormGroup>

                <FormGroup className="text-start">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && (
                    <span style={{ color: "red" }}>
                      {formik.errors.password}
                    </span>
                  )}
                </FormGroup>
                <Button type="submit" color="primary">
                  Sign Up
                </Button>
              </Form>
              <p className="signup-link">
                Already a member?{" "}
                <span onClick={() => navigate("/")}>Sign In!</span>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Register;
