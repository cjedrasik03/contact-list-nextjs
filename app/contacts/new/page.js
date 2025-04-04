'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewContact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    email: '',
    phone_number: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handles submit button
  const handleSubmit = e => {
    e.preventDefault();
  
    const { name, image_url, email, phone_number } = formData;
  
    if (!name || !image_url || !email || !phone_number) {
      setError('All fields are required.');
      return;
    }
  
    const phoneRegex = /^\d{3}\d{3}\d{4}$/;
    if (!phoneRegex.test(phone_number)) {
      setError('Phone number must be in format: 999-999-9999');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      new URL(image_url);
    } catch {
      setError('Please enter a valid image URL.');
      return;
    }
  
    const newContact = {
      ...formData,
      id: Math.floor(Math.random() * 100000000)
    };
  
    // Loads the existing contacts
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    // Add the new contact
    const updatedContacts = [...existingContacts, newContact];
  
    // Saves to localStorage
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  
    // Redirect to home contacts page
    router.push('/');
  };

  return (
    <div className="container card p-5 text-center mt-4">
      <h1>Add New Contact</h1>

      {error && <div className="alert fw-bold alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control my-3"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="image_url"
          className="form-control mb-3"
          placeholder="Image URL"
          value={formData.image_url}
          onChange={handleChange}
        />
        <input
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone_number"
          className="form-control my-3"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <button type="submit" className="btn mt-2 py-2 px-4 mx-2  btn-success">
          Submit
        </button>
        <a href="/" className='btn mt-2 py-2 px-4 mx-2 btn-danger'>
          Cancel
        </a>
      </form>
    </div>
  );
}