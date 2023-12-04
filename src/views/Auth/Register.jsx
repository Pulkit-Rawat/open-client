import { useFormik } from "formik";
import EmsLogo from "../../assets/ems-brand.png";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { api } from "../../utilities/axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password required")
      .min(5, "Min 5 characters"),
    role: Yup.number().required("Please choose role"),
    mob: Yup.string().required("Mobile no. is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      role: "",
      mob: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
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
        setTimeout(() => navigate("/dashboard"), 1000);
        return;
      }
      if (!data.success) {
        return toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeRole = (role) => {
    if (role == 1) formik.setFieldValue("role", 1);
    else formik.setFieldValue("role", 2);
  };
  return (
    <>
      <Row className="align-items-center justify-content-center h-100 m-0 p-0">
        <Col md={4}>
          <img src={EmsLogo} className="brand-img" alt="" />
        </Col>
        <Col md={4}>
          <Card className="mx-auto auth-card">
            <CardBody className="p-5">
              <h3>Sign Up</h3>
              <Form onSubmit={formik.handleSubmit} className="h-100">
                <FormGroup className="" style={{ textAlign: "left" }}>
                  <Label htmlFor="userName">User Name</Label>
                  <Input
                    name="userName"
                    type="text"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.userName && (
                    <span style={{ color: "red" }}>
                      {formik.errors.userName}
                    </span>
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
                <FormGroup
                  className="d-flex justify-content-between"
                  style={{ textAlign: "left" }}
                >
                  <p>Role: </p>
                  <div className="d-flex gap-3">
                    <div>
                      <Input
                        name="role"
                        type="radio"
                        value="1"
                        onChange={() => handleChangeRole(1)}
                      />
                      <Label htmlFor="mob" className="ms-2">
                        Manager
                      </Label>
                    </div>
                    <div>
                      <Input
                        name="role"
                        type="radio"
                        value="2"
                        onChange={() => handleChangeRole(2)}
                      />
                      <Label htmlFor="mob" className="ms-2">
                        Employee
                      </Label>
                    </div>
                  </div>
                </FormGroup>
                {formik.errors.role && (
                  <span style={{ color: "red" }}>{formik.errors.role}</span>
                )}
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
                  Sign In
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
