import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import bgUrl from "@/assets/img/background/background-main-pages.png";
import TitleH2 from "@/shared/title/title-h2";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_FORM: ContactForm = { name: "", email: "", message: "" };

const CONTACT_INFO = [
  { icon: FaLocationDot, label: "221B Speed Avenue, Kyiv, Ukraine" },
  { icon: FaPhone, label: "+380 44 123 4567" },
  { icon: FaEnvelope, label: "hello@gravitywheels.com" },
];

const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = "Enter a valid email";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSent(true);
    setForm(INITIAL_FORM);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <h1 className="text-5xl text-[#cccbcb]">Contact Us</h1>
      </div>

      <div className="px-4 mt-16 mb-20 max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
        <div>
          <TitleH2>GET IN TOUCH</TitleH2>

          <ul className="mt-10 space-y-6">
            {CONTACT_INFO.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 text-[#3b3b3b]"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-green-500">
                  <Icon />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-gray-800 p-6 rounded-2xl"
          noValidate
        >
          {isSent && (
            <p className="text-green-400 text-sm text-center">
              Thanks! Your message has been sent.
            </p>
          )}

          <label className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              maxLength={40}
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 text-white bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-green-500"
            />
            {errors.name && (
              <span className="text-xs text-red-400">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              maxLength={40}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 text-white bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-green-500"
            />
            {errors.email && (
              <span className="text-xs text-red-400">{errors.email}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <textarea
              name="message"
              rows={4}
              maxLength={500}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="p-3 text-white bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-green-500 resize-none"
            />
            {errors.message && (
              <span className="text-xs text-red-400">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
