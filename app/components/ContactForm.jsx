import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z ]{3,20}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) newErrors.name = 'Name is required';
    else if (!nameRegex.test(name)) newErrors.name = 'Invalid name. Only alphabets and spaces are allowed. Minimum length is 3 characters and maximum is 20 characters.';

    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email address.';

    if (!message) newErrors.message = 'Message is required';
    else if (message.length > 100) newErrors.message = 'Message should not exceed 100 characters.';

    if (image &&!['image/jpeg', 'image/png'].includes(image.type)) newErrors.image = 'Only .jpg and .png files are allowed';

    return newErrors;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Send the form data to your server or API here
      console.log('Form submitted!');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('image', image);

      fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className="scale-90 p-4 lg:p-9 border-4 border-black rounded-sm items-center  bg-orange-50">
      <div className="text-center">
        <h1 className="my-8 text-3xl font-semibold text-primary-100">
          Contact Us
        </h1>
        <p className="text-secondary-200">
          {`Let's get in touch`}
        </p>
      </div>
      <div>
        <div className="md:p-4 flex flex-wrap justify-center items-center w-full">
          <div className="max-w-xl w-full my-8 rounded-sm">
            <div className="m-4">
              <h1 className="my-4 text-2xl font-medium text-secondary-200">
                Message me
              </h1>
              <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                  />
                  <label htmlFor="name" className="floating-placeholder">
                    Full Name
                  </label>
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                  />
                  <label htmlFor="email" className="floating-placeholder">
                    Email
                  </label>
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="relative mb-4">
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 focus:border-secondary-100 peer"
                  ></textarea>
                  <label htmlFor="message" className="floating-placeholder">
                    Your Message
                  </label>
                  {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>
                <div className="bg-emerald-50 border border-black p-3 relative mb-4">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    className="hidden"  // Hide the default input
                  />
                  <label
                    htmlFor="image"
                    className="bg-orange-50 cursor-pointer border border-black text-black py-2 px-2 md:px-4 rounded-sm font-medium hover:bg-black hover:text-white transition-all inline-block"
                  >
                    Choose File
                  </label>
                  <span className="ml-3">{image ? image.name : "No file selected"}</span>
                  {errors.image && <span className="text-red-500 text-xs block mt-1">{errors.image}</span>}
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full border-2 text-xl border-black hover:text-white bg-accent inline-block text-black no-underline hover:bg-black py-4 px-4 rounded-md font-medium focus:outline-none transition-all"
                  >
                    Send Message
                    {/* https://colorhunt.co/palettes/pastel-mint */}
                    {/* https://mycolor.space/?hex=%23FFF7ED&sub=1 */}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="ms-2 max-w-xl w-full my-8 self-start rounded-sm">
            <div className="m-4">
              <h1 className="my-4 text-2xl font-medium text-secondary-200">
                Contact Information
              </h1>
              <div className="mt-8 p-4 flex flex-col justify-start items-start border-l border-black">
                <div className="flex items-center mb-8 text-secondary-200">
                  <Icon icon="ic:round-email" className="text-xl md:text-4xl" />
                  <div>
                    <span className="ml-3 text-lg font-medium">Email</span><br />
                    <span className="ml-3 text-secondary-100 text-sm md:text-base">info@codesquad.com</span>
                  </div>
                </div>
                <div className="flex items-center mb-8 text-secondary-200">
                  <Icon icon="ic:round-phone" className="text-xl md:text-4xl" />
                  <div>
                    <span className="ml-3 text-lg font-medium">Phone Number</span><br />
                    <span className="ml-3 text-secondary-100 text-sm md:text-base">+91 123123123</span>
                  </div>
                </div>
                <div className="flex items-center mb-8 text-secondary-200">
                  <Icon icon="ic:baseline-location-on" className="text-xl md:text-4xl" />
                  <div>
                    <span className="ml-3 text-lg font-medium">Location</span><br />
                    <span className="ml-3 text-secondary-100 text-sm md:text-base">Tulmullah, Ganderbal - 191201</span>
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
