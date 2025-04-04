'use client';
import { useEffect, useState } from 'react';

export default function ContactDetailPage({ params }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    // Include default contact
    const defaultContact = {
      id: 123456,
      name: 'Albert Einstein',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
      email: 'aeinstein@example.com',
      phone_number: '15555555555',
    };

    const allContacts = [defaultContact, ...savedContacts];

    const found = allContacts.find(c => c.id.toString() === params.id);
    setContact(found);
  }, [params.id]);

  if (!contact) return <div className="container mt-4">Contact not found.</div>;

  return (
    <div className="container mt-4">
      <h1>Contact Details</h1>
      <div className="card p-4 d-flex flex-row align-items-center gap-4">
        <img
          src={contact.image_url}
          alt={contact.name}
          width="120"
          height="120"
          style={{ objectFit: 'cover', borderRadius: '50%' }}
        />
        <div>
          <h3>{contact.name}</h3>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone_number}</p>
        </div>
      </div>
      <a href="/" className='btn mt-2 py-2 px-4 mx-2 btn-danger'>
        Return to Home
      </a>
    </div>
  );
}