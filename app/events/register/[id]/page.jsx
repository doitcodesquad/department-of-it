"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Sample list of events
const sampleEvents = [
  {
    id: '1', // Unique event ID
    name: 'Code Squad Inauguration',
    description: `Formal ceremony to mark the beginning of a major public leader's term of office, or official opening or beginning of an institution or structure. High-quality web applications, for example, a bridge.`,
    date: '2024-08-01',
    poster: '/Pic.png',
  },
  {
    slug: 'ai-workshop',
    name: 'AI Workshop',
    date: '2024-08-15',
    poster: '/images/event2.jpg',
    description: 'A hands-on workshop on the latest in AI technology.',
  },
  {
    slug: 'startup-pitch-night',
    name: 'Startup Pitch Night',
    date: '2024-09-05',
    poster: '/images/event3.jpg',
    description: 'Pitch your startup ideas to top investors and win funding.',
  },
];

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [errors, setErrors] = useState({});

  const semesters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  useEffect(() => {
    if (id) {
      // Simulate fetching event data based on the slug
      const data = sampleEvents.find((event) => event.id === id);
      setEvent(data);
    }
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z ]{3,20}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) newErrors.name = 'Name is required';
    else if (!nameRegex.test(name)) newErrors.name = 'Invalid name. Only alphabets and spaces are allowed. Minimum length is 3 characters and maximum is 20 characters.';

    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email address.';

    if (!phone) newErrors.phone = 'Phone number is required';

    if (!department) newErrors.department = 'Department is required';

    if (!semester) newErrors.semester = 'Semester is required';

    return newErrors;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Process form submission here
      console.log({ name, email, phone, department, semester });
      setName('');
      setEmail('');
      setPhone('');
      setDepartment('');
      setSemester('');
      setErrors({});
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="scale-90 p-4 lg:p-9 border-4 border-black rounded-sm items-center bg-orange-50">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 event-details">
          <div className="text-center">
            <h1 className="my-8 text-3xl font-semibold text-primary-100">{event.name}</h1>
            <img src={event.poster} alt={event.name} className="w-full h-64 object-cover mb-4" />
            <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-800 mb-6">{event.description}</p>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 registration-form">
          <form onSubmit={handleFormSubmit}>
            <div className="md:p-4 flex flex-wrap justify-center items-center w-full">
              <div className="max-w-xl w-full my-8 rounded-sm">
                <div className="m-4">
                  <h1 className="my-4 text-2xl font-medium text-secondary-200">Register for this event</h1>
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
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                    />
                    <label htmlFor="phone" className="floating-placeholder">
                      Phone
                    </label>
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      name="department"
                      id="department"
                      placeholder="Department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                    />
                    <label htmlFor="department" className="floating-placeholder">
                      Department
                    </label>
                    {errors.department && <span className="text-red-500 text-sm">{errors.department}</span>}
                  </div>
                  <div className="relative mb-4">
                    <select
                      name="semester"
                      id="semester"
                      placeholder="Semester"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                    >
                      <option value="">Select Semester</option>
                      {semesters.map((sem) => (
                        <option key={sem} value={sem}>{sem}</option>
                      ))}
                    </select>

                    {errors.semester && <span className="text-red-500 text-sm">{errors.semester}</span>}
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full border-2 text-xl border-black hover:text-white bg-primary inline-block text-black no-underline hover:bg-black py-4 px-4 rounded-md font-medium focus:outline-none transition-all"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
