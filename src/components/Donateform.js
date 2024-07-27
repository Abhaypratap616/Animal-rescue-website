// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Mainmailfunction.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ammount: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',  // Replace with your EmailJS Service ID
      'your_template_id', // Replace with your EmailJS Template ID
      formData,
      'your_user_id'      // Replace with your EmailJS User ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send email.');
    });
  };

  return (
    <div className="contact-form">
      <h4>
        DONATE NOW
      </h4>
      <h6>
      THE FOLLOWING INFO IS REQUIRED
      </h6>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '200px', height: '29px' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '200px', height: '29px' }}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '200px', height: '29px' }}
          />
        </div>
        <div>
          <label>PAN:</label>
          <br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '200px', height: '29px' }}
          />
        </div>
        <div>
          <label>AMOUNT:</label>
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '200px', height: '29px' }}
          />
        </div>
        <button type="submit">
          PROCCED TO PAY
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
