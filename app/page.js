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
    return (
    <div className="container mt-4">
      <h1>My Contacts</h1>
    </div>
  );
}