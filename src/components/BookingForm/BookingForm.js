import React, { useState } from 'react';

const BookingForm = ({ show }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission
    // Reset form data
    setFormData({
      name: '',
      date: '',
      email: '',
      mobile: '',
    });
  };

  return (
    <div className="form-holder">
      <div className="form-content">
        <h3 className="form-title">Book Ticket</h3>
        <p>Movie: {show.name}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="btn-primary" type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;


