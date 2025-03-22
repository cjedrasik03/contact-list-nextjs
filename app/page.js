'use client';
import Link from 'next/link';
import { useState } from 'react';

const initialContacts = [
  {
    id: 123456,
    name: 'Albert Einstein',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
    email: 'aeinstein@example.com',
    phone_number: '15555555555',
  }
];

export default function HomePage() {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <>
      <div className="container text-center mt-4">
      <h1 className='fw-bold'>All Contacts</h1>

      <Link href="/contacts/new" className="btn btn-primary fw-bold mb-3">
        ADD CONTACT
      </Link>

      <div className='container fw-bold text-start'>
      {contacts.map(contact => (
        <div key={contact.id} className="card mb-3">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <img
                src={contact.image_url}
                alt={contact.name}
                width="80"
                height="80"
                className="rounded-circle object-fit-cover"
              />
              <div>
                <h5 className="mb-1">
                  <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
                </h5>
                <p className="mb-0">Email: {contact.email}</p>
                <p className="mb-0">Phone: {contact.phone_number}</p>
              </div>
            </div>
            <Link href={`/contacts/${contact.id}`} className="btn btn-outline-primary">
              View Contact
            </Link>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}