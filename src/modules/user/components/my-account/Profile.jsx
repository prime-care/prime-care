import { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { HiMail, HiUser, HiPhone, HiHome } from "react-icons/hi";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../../../services/firebase";

const Profile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const userId = useSelector((state) => state.user.uid);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          setInitialValues(userDoc.data());
        } else {
          console.error("No user data found!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{11}$/, "Phone number must be 10 digits"),
    address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters"),
  });

  const updateProfile = async (values, { setSubmitting }) => {
    setIsUpdating(true);

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].ref;
        await updateDoc(userDoc, values);
        toast.success("User information updated successfully");
      } else {
        console.error("No user data found!");
        toast.error("No user data found!");
      }
    } catch (error) {
      toast.error("Error updating user data:", error);
    }

    setIsUpdating(false);
    setSubmitting(false);
  };

  return (
    <div className="max-w-md">
      <div className="head">
        <h1 className="mb-6 text-2xl font-medium text-gray-700">
          Profile Details
        </h1>
      </div>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={updateProfile}
        validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <Form>
            {/* Name Field */}
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="name">Name</label>
              <Field
                as={TextInput}
                icon={HiUser}
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm font-medium text-red-500"
              />
            </div>

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
                disabled
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm font-medium text-red-500"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="phone">Phone Number</label>
              <Field
                as={TextInput}
                icon={HiPhone}
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="Enter your phone number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-sm font-medium text-red-500"
              />
            </div>

            {/* Address Field */}
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="address">Address</label>
              <Field
                as={TextInput}
                icon={HiHome}
                id="address"
                name="address"
                autoComplete="address"
                placeholder="Enter your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-sm font-medium text-red-500"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting || isUpdating}>
              {isSubmitting || isUpdating ? "Updating..." : "Update Profile"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
