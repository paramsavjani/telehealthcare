"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  degree: string;
  experience: number;
  specialization: string;
}

const specializations = [
  'General Physician',
  'Mental Wellness',
  'Coughing Specialist',
  'Irregular Periods',
  'Kidney Specialist',
  'Pediatric Specialist',
  'Sexology Specialist',
  'Stomach Specialist',
  'Gynaecology Specialist',
  'Dermatologic Specialist',
];

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    degree: '',
    experience: 0,
    specialization: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate an API call for signup
    console.log('Signup successful:', formData);
    // Redirect to the login page after successful signup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Doctor Signup</h2>
        <form onSubmit={handleSignup}>
          {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
          <div className="mb-3">
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="degree" className="block mb-1 text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Enter your degree (e.g., MD, MBBS)"
              value={formData.degree}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="experience" className="block mb-1 text-sm font-medium text-gray-700">Years of Experience</label>
            <input
              type="number"
              name="experience"
              id="experience"
              placeholder="Enter years of experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="specialization" className="block mb-1 text-sm font-medium text-gray-700">Specialization</label>
            <select
              name="specialization"
              id="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              <option value="" disabled>Select your specialization</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <button type="submit" className="w-full py-2 mt-4 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-semibold text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
