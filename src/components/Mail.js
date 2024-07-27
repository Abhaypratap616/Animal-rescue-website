// App.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Mail.css'


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      'service_avnbzsm', // Replace with your EmailJS service ID
      'template_me5fo7j', // Replace with your EmailJS template ID
      formData,
      'sabhaypratapsingh122@gmail.com' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send email.');
    });
  };

  return (
    <div className="App">
        <div className="container">
<div className="row">
       <div className="col-md-4">
    
        <h4>SHARE YOUR FEELINGS N SUPPORT</h4>
        <p>Your messages will keep PAWS energized</p>
        </div>
        
        <div className="col-md-8">
        
        <form onSubmit={handleSubmit}>
          <span>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
          </span>
          
          <span>
            
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </span>
          <span>
            <label>Message:</label>
            <input
              name="message"
              
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '200px', height: '29px' }}
            />
          </span>
            <span>
          <button type="submit">SUBMIT</button>

          </span>
        </form>
        </div>
     
      </div>
      </div>
      </div>

   

    
  );
}

export default App;
