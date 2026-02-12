import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(2, "Name too short").required("Name is required"),

      email: Yup.string().email("Invalid email").required("Email is required"),

      message: Yup.string()
        .min(10, "Message too short")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <FormField
        label="Name"
        name="name"
        formik={formik}
        placeholder={"Enter name here"}
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        formik={formik}
        placeholder="example@gmail.com"
      />

      <div>
        <label className="text-sm text-slate-600">Message</label>
        <textarea
          name="message"
          rows={4}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Message here"
          value={formik.values.message}
          className={`
            w-full mt-1 px-4 py-3 rounded-lg border transition
            ${
              formik.touched.message && formik.errors.message
                ? "border-red-400"
                : "border-slate-200"
            }
            focus:outline-none focus:ring-2 focus:ring-black/80
          `}
        />

        {formik.touched.message && formik.errors.message && (
          <p className="text-xs text-red-500 mt-1">{formik.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="
          w-full py-3 bg-black text-white rounded-lg
          hover:scale-[1.02] active:scale-[0.98]
          transition duration-300 shadow-lg
        "
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;

/* Reusable Field */
const FormField = ({ label, name, type = "text", formik }: any) => (
  <div>
    <label className="text-sm text-slate-600">{label}</label>

    <input
      name={name}
      type={type}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      className={`
        w-full mt-1 px-4 py-3 rounded-lg border transition
        ${
          formik.touched[name] && formik.errors[name]
            ? "border-red-400"
            : "border-slate-200"
        }
        focus:outline-none focus:ring-2 focus:ring-black/80
      `}
    />

    {formik.touched[name] && formik.errors[name] && (
      <p className="text-xs text-red-500 mt-1">{formik.errors[name]}</p>
    )}
  </div>
);
