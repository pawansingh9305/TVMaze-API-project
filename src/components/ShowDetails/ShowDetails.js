import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';

const ShowDetails = ({ shows }) => {
  const location = useLocation();
  const { show } = location.state || {}; // Add null check

  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookTicket = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="show-details container">
      <h2>Show Details</h2>
      {show ? (
        <>
          <h3>{show.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          <button className='btn-primary' onClick={handleBookTicket}>Book Ticket</button>
          {showBookingForm && (
            <BookingForm show ={show} />
          )}
        </>
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
};

export default ShowDetails;