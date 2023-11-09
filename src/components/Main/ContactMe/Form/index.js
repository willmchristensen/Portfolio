import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';
import Message from './Message';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false)
  const [error, setError] = useState({});
  const [response,setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: 'willmchristensen@gmail.com', 
      project: project,
      message: message,
    };

    emailjs.send('service_03z0osl', 'template_x5buahi', templateParams, 'XCEn5_xJQjCHAZonq')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSent(true);
        setResponse('Email sent successfully')
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setError({ email: 'Email send failed.' })
        setSent(true)
      });
  };

  return (
    <form className="contact-me-form" onSubmit={handleSubmit}>
      <div className="response-container">
        {sent && <Message message={response} error={error.email}/>}
      </div>
      <div className="form-row-container">
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="project">Project</label>
        <input type="text" id="project" name="project" value={project} onChange={(e) => setProject(e.target.value)} required />
      </div>
      <div className="form-row-large">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <div className="submit-button-container">
        <button 
          className="submit-button" 
          type="submit"
        >Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
