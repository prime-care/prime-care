import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";

// Firebase
import { auth, db } from "../../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Components
import { Button, TextInput } from "flowbite-react";

// link
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Signup handler
  const handleSignUp = async (values, { setSubmitting, setFieldError }) => {
    const { name, email, password } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        userId: user.uid,
        name,
        email,
        phone: "",
        address: "",
        role: "user",
      });

      dispatch(
        setUser({ uid: user.uid, email: user.email, name, role: "user" })
      );
      toast.success("Sign up successful");
      navigate("/", { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setFieldError("email", "This email is already in use.");
      } else {
        toast.error("Error signing up");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-[100px] flex container">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-8">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-600 mb-6">
            Sign up to easily access trusted medical products and services.
          </p>

          {/* Formik form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}>
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block mb-1 text-gray-700">
                    Name
                  </label>
                  <Field
                    as={TextInput}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-sm font-medium text-red-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-1 text-gray-700">
                    Email
                  </label>
                  <Field
                    as={TextInput}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm font-medium text-red-500"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-gray-700">
                    Password
                  </label>
                  <Field
                    as={TextInput}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm font-medium text-red-500"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                </Button>
              </Form>
            )}
          </Formik>

          <div className="mt-4 flex justify-between items-center gap-4">
            <Link to="/" className="text-primary hover:underline">
              Back To Home
            </Link>

            <div className="text-center">
              <span className="text-gray-500">Already have an account? </span>
              <Link to="/auth/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center lg:w-1/2 text-center">
        <div>
          <img
            src="/images/signup-image.svg"
            alt=""
            className="max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
