import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Alert,
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

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required "),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (values) => {
    try {
      let { data } = await api.post("/login", values);
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
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 8000);
  });
  return (
    <>
      <Row className="align-items-center justify-content-center h-100 m-0 p-0">
        <Col md={4}>
          <img src={CBLogo} className="brand-img" alt="" />
        </Col>
        <Col md={4}>
          <Card className="auth-card">
            <CardBody className="p-4">
              <div>
                <h3 className="">Sign In</h3>
              </div>
              {message && <Alert color="danger">{message}</Alert>}
              <Form
                onSubmit={formik.handleSubmit}
                className="h-100"
                autoComplete="off"
              >
                <FormGroup className="text-start">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formik.values.email}
                    autoComplete="off"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  )}
                </FormGroup>

                <FormGroup className="text-start">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    autoComplete="off"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  color="primary"
                  className="btn-primary mt-2"
                >
                  Sign In
                </Button>
              </Form>
              <p className="signup-link">
                Not registered yet?{" "}
                <span onClick={() => navigate("/register")}>Sign Up!</span>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Login;
