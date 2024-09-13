// redux
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";

// firebase
import { auth, db } from "../../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// components
import { Button, TextInput } from "flowbite-react";
import { HiMail, HiLockClosed } from "react-icons/hi";

// validation
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

// link
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const LoginPage = () => {
  const dispatch = useDispatch();

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          name: userData.name,
          role: userData.role,
        })
      );
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setSubmitting(false); // stop the submitting/loading state
    }
  };

  return (
    <div className="py-[100px] flex container">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-8">
        <div className="text-left">
          <h1 className="mb-2 text-3xl font-bold text-gray-700">Get started</h1>
          <p className="text-gray-500 mb-6">
            Log in to access a wide range of trusted medications and healthcare
            products, with reliable delivery and personalized health tracking.
          </p>

          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Email Field */}
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="email">Email</label>
                  <Field
                    as={TextInput}
                    icon={HiMail}
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm font-medium text-red-500"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2 mb-5">
                  <label htmlFor="password">Password</label>
                  <Field
                    as={TextInput}
                    type="password"
                    icon={HiLockClosed}
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>

          <div className="mt-4 flex justify-between items-center gap-4">
            <Link to="/" className="text-primary hover:underline">
              Back To Home
            </Link>

            <div className="text-center">
              <span className="text-gray-500">Don’t have an account? </span>
              <Link to="/auth/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center lg:w-1/2 text-center">
        <div>
          <img src="/images/login-image.svg" alt="" className="max-w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
