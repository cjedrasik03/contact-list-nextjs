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


  // Handles form change
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handles form submition & prevents the page referesh
  const handleSubmit = e => {
    e.preventDefault();

    // Basic form validation to ensure some input was made
    if (!formData.name || !formData.image_url || !formData.email || !formData.phone_number) {
      setError('ALL FIELDS ARE REQUIRED!');
      return;
    }

      // Generates the random contact ID num per new contact
    const newContact = {
      ...formData,
      id: Math.floor(Math.random() * 100000000) 
    };

    // posts the new contact in console.log (probably unnecessary)
    console.log('New Contact:', newContact);

    // On successful submit it sends them back to home contacts page
    router.push('/');
  };

  // I know I didnt validate the inputs like Phone# (999)999-9999 or email like sample@domain.com - Realisitcally I would

  // Very basic but also put a cancel button instead of Home incase someone someone doesnt want to proceed with adding a contact

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