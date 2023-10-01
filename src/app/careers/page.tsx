'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const Careers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [resume, setResume] = useState(null);

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      position: position,
      resume: await toBase64(resume),
    };
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log('Response:', response.status);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Form submitted with:', userData);
  };
  const handleChangeResume = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setResume(selectedFile);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="rounded bg-white p-8 shadow-md"
        >
          <h1 className="mb-4 text-2xl">Apply for a Position</h1>
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="mb-1 block font-medium">
              Position
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="resume" className="mb-1 block font-medium">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              onChange={handleChangeResume}
              className="w-full rounded border p-2"
              accept=".pdf"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
