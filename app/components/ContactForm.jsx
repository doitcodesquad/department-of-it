"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { toast } from "sonner";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z ]{3,20}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) newErrors.name = "Name is required";
    else if (!nameRegex.test(name))
      newErrors.name =
        "Invalid name. Only alphabets and spaces are allowed. Minimum length is 3 characters and maximum is 20 characters.";

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Invalid email address.";

    if (!message) newErrors.message = "Message is required";
    else if (message.length > 100)
      newErrors.message = "Message should not exceed 100 characters.";

    if (image && !["image/jpeg", "image/png"].includes(image.type))
      newErrors.image = "Only .jpg and .png files are allowed";

    return newErrors;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please correct the errors in the form.", {
        title: "Error",
        description: "Please correct the errors in the form.",
      });
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            image: image ? image : "",
          }),
        });
        const data = await response.json();
        console.log(data);
        toast.success("Form submitted successfully!", {
          title: "Success",
          description: "Form has been submitted successfully!",
        });
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setImage(null);
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while submitting the form.", {
          title: "Error",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    clearError("name");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearError("email");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    clearError("message");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    clearError("image");
  };

  const clearError = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  return (
    <div className="px-3 md:px-11 py-3 mb-3">
      <div className="items-center p-4  border-2 border-black rounded-sm lg:p-0 bg-orange-50">
        <div className="text-center">
          <h1 className="my-8 text-3xl font-semibold text-primary-100">
            Contact Us
          </h1>
          <p className="text-secondary-200">{`Let's get in touch`}</p>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center w-full md:p-4">
            <div className="w-full max-w-xl rounded-sm">
              <div className="m-3 pb-[2.1rem] md:border-0 border-b border-black">
                <h1 className="my-4 text-2xl font-medium text-secondary-200">
                  Write to us
                </h1>
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                  <div className="relative mb-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      value={name}
                      onChange={handleNameChange}
                      className="w-full h-12 px-3 py-2 text-sm placeholder-transparent border border-black rounded-sm text-secondary-100 bg-emerald-50 focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                      disabled={isLoading}
                    />
                    <label htmlFor="name" className="floating-placeholder">
                      Full Name
                    </label>
                    {errors.name && (
                      <span className="text-sm text-red-500">{errors.name}</span>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full h-12 px-3 py-2 text-sm placeholder-transparent border border-black rounded-sm text-secondary-100 bg-emerald-50 focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                      disabled={isLoading}
                    />
                    <label htmlFor="email" className="floating-placeholder">
                      Email
                    </label>
                    {errors.email && (
                      <span className="text-sm text-red-500">{errors.email}</span>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      value={message}
                      onChange={handleMessageChange}
                      className="w-full px-3 py-2 text-sm placeholder-transparent border border-black rounded-sm text-secondary-100 bg-emerald-50 focus:outline-none focus:border-2 focus:border-secondary-100 peer"
                      disabled={isLoading}
                    ></textarea>
                    <label htmlFor="message" className="floating-placeholder">
                      Your Message
                    </label>
                    {errors.message && (
                      <span className="text-sm text-red-500">
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <div className="relative p-3 mb-4 border border-black bg-emerald-50">
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={handleImageChange}
                      className="hidden"
                      disabled={isLoading}
                    />
                    <label
                      htmlFor="image"
                      className={`bg-orange-50 cursor-pointer border border-black text-black py-2 px-2 md:px-4 rounded-sm font-medium hover:bg-black hover:text-white transition-all inline-block ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Choose File
                    </label>
                    <span className="ml-3 text-sm">
                      {image ? image.name : "No file selected"}
                    </span>
                    {errors.image && (
                      <span className="block mt-1 text-xs text-red-500">
                        {errors.image}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className={`w-full border-2 text-xl border-black hover:text-white bg-primary inline-block text-black no-underline hover:bg-black py-3 px-4 rounded-sm font-medium focus:outline-none transition-all ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Spinner />
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="self-start w-full max-w-xl my-8 rounded-sm ms-3">
              <div className="m-4">
                <h1 className="my-4 text-2xl font-medium text-secondary-200">
                  Contact Information
                </h1>
                <div className="flex flex-col items-start justify-start p-3 md:p-11 mt-8 border-l border-black">
                  <div className="flex items-center mb-8 text-secondary-200">
                    <Icon icon="ic:round-email" className="text-xl md:text-4xl" />
                    <div>
                      <span className="ml-3 text-lg font-medium">Email</span>
                      <br />
                      <Link
                        href="mailto:doitcodesquad@gmail.com?subject=Contact Form CodeSquad"
                        className="ml-3 text-sm text-secondary-100 md:text-base"
                      >
                        DoitCodeSquad@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center mb-8 text-secondary-200">
                    <Icon icon="ic:round-phone" className="text-xl md:text-4xl" />
                    <div>
                      <span className="ml-3 text-lg font-medium">
                        Phone Number
                      </span>
                      <br />
                      <Link
                        href="tel:7006771144"
                        className="ml-3 text-sm text-secondary-100 md:text-base"
                      >
                        +91 7006771144
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center mb-8 text-secondary-200">
                    <Icon
                      icon="ic:baseline-location-on"
                      className="text-xl md:text-4xl"
                    />
                    <div>
                      <span className="ml-3 text-lg font-medium">Location</span>
                      <br />
                      <span className="ml-3 text-sm text-secondary-100 md:text-base">
                        Tulmullah, Ganderbal - 191201
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
