const ContactDetailsPage = ({ params }) => {

  return (
    <div className="container mt-4">
      <h1>Contact Details</h1>
      <p>Contact ID: {params.id}</p>
      {/* ContactDetail component will go here */}
    </div>
  );
}

export default ContactDetailsPage;


