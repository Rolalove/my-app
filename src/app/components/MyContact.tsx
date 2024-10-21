"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Icon } from "@iconify/react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | "";
  message: string;
}

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="bg-first_Bc mx-auto container px-4">
      <div className="mt-32 lg:w-1/2 lg:mx-auto">
        <h2 className="text-3xl font-bold text-text_one mb-2 text-center">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-text_one mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-3 pb-2 bg-transparent border-b-2 border-text_one focus:outline-none focus:border-second_Bc transition-colors peer"
              required
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-text_one text-sm transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                         peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-second_Bc"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 pb-2 bg-transparent border-b-2 border-text_one focus:outline-none focus:border-second_Bc transition-colors peer"
              required
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-text_one text-sm transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                         peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-second_Bc"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-3 pb-2 bg-transparent border-b-2 border-text_one focus:outline-none focus:border-second_Bc transition-colors peer resize-none"
              required
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-text_one text-sm transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                         peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-second_Bc"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-second_Bc text-white hover:bg-opacity-90 font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 ${
                formStatus.type === "success"
                  ? "border-second_Bc"
                  : "border-red-500"
              } border-t-4`}
            >
              <div className="flex items-center mb-4">
                <Icon
                  icon={
                    formStatus.type === "success"
                      ? "mdi:check-circle"
                      : "mdi:alert-circle"
                  }
                  className={`w-6 h-6 mr-2 ${
                    formStatus.type === "success"
                      ? "text-second_Bc"
                      : "text-red-500"
                  }`}
                />
                <h3 className="text-lg font-semibold">
                  {formStatus.type === "success" ? "Success" : "Error"}
                </h3>
              </div>
              <p className="mb-4">{formStatus.message}</p>
              <button
                onClick={closePopup}
                className="w-full bg-second_Bc text-white hover:bg-opacity-90 font-bold py-2 px-4 rounded transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
