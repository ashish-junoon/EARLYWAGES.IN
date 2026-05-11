import Icon from "../helper/Icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      Email: "",
      MobileNumber: "",
      Remarks: "",
      Product_Code: "EW",
      CompanyName: "EarlyWages",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      MobileNumber: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Invalid mobile number.")
        .required("Mobile number is required"),
      Email: Yup.string()
        .email("Email id must be valid")
        .required("Email id is required"),
      Remarks: Yup.string().required("Message is required"),
    }),

    onSubmit: async (Values, { resetForm, setSubmitting }) => {
      // if (!checkValue) {
      //   toast.info("Kindly check the declaration checkbox to proceed.");
      //   return;
      // }

      const req = {
        name: Values.name,
        Email: Values.Email,
        Mobile: Values.MobileNumber,
        Remarks: Values.Remarks,
        Product_Code: Values.Product_Code,
        CompanyName: Values.CompanyName
      }

      setSubmitting(true);
      try {
        const response = await axios.post(
          "https://lmsapi.earlywages.in/api/Common/ContactUs",
          // "http://10.0.0.20:8085/api/Common/ContactUs",
          req,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (response.status) {
          toast.success(
            response?.data?.Message || "Form Submitted Succesfully",
          );
        } else {
          toast.error(response?.data?.Message || "Something went wrong!");
        }

        setSubmitting(false);
      } catch (error) {
        console.error(error.response?.data || error.message);
        toast.error(response.message || "Something went wrong!");
        setSubmitting(false);
      }
      setSubmitting(false);

      console.log(Values);
      resetForm();
    },
  });
  

  return (
    <section id="contact" className="relative py-12 lg:py-28 overflow-hidden bg-white scroll-mt-16">
      <ToastContainer />
      {/* Floating Gradient Blob */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -top-32 -left-32"></div>
      <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl -bottom-32 -right-32"></div>

      <div className="relative w-[95%] max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Big Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Get in touch with <span className="text-primary">EarlyWages</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-lg">
              Have questions about loans or need assistance with your application? Our team is here to help you. Fill out the form below and we’ll get back to you shortly.
            </p>

            <div className="mt-10 space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <Icon color="#ed502e" size="18" name="IoCall" /> +91 9205750054
              </p>
              <p className="flex items-center gap-2">
                <Icon color="#ed502e" size="18" name="MdEmail" />{" "}
                info@earlywages.in
              </p>
              <p className="flex items-center gap-2">
                <Icon color="#ed502e" size="18" name="IoLocation" />
                Apex Tower -III, Property No. 6, 2nd Floor, Pocket-3, <br /> Block-B, Sector-17, Dwarka New Delhi-110078
              </p>
              {/* <p>📞 +91 98765 43210</p>
              <p>📧 support@Earlywages.com</p>
              <p>📍 New Delhi, India</p> */}
            </div>
          </div>

          {/* Right Side Floating Card Form */}
          <div className="bg-white shadow-lg rounded-lg p-10 max-md:p-5 border border-gray-100 transition duration-500">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
                {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
              </div>

              <div className="relative">
                <input
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
                {formik.touched.Email && formik.errors.Email && (
                  <p className="text-red-500 text-sm">{formik.errors.Email}</p>
                )}
              </div>

              <div className="relative">
                <input
                  value={formik.values.MobileNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="MobileNumber"
                  placeholder="Your Contact"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
                {formik.touched.MobileNumber && formik.errors.MobileNumber && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.MobileNumber}
                  </p>
                )}
              </div>

              <div className="relative">
                <textarea
                  value={formik.values.Remarks}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="4"
                  name="Remarks"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                ></textarea>
                {formik.touched.Remarks && formik.errors.Remarks && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.Remarks}
                  </p>
                )}
              </div>

              <button
                disabled={formik.isSubmitting}
                type="submit"
                className={`w-full flex items-center justify-center gap-2 ${formik.isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-primary"} text-white py-4 rounded-xl text-lg font-semibold hover:bg-primary/80 transition duration-300 shadow-lg cursor-pointer`}
              >
                {formik.isSubmitting ? "Sending Message..." : "Send Message"}{" "}
                <Icon name="FaPaperPlane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
