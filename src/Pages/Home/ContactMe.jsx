import React, { useState } from 'react';

const ContactMe = () => {
  return (
    <section id="Contact" className="contact--section">
      <div className="contact--me--small">
        <div>
          <h2>Contact Me</h2>
          <br />
          <p className="text-lg">
            You can fill out the form below to get in touch with me.
          </p>
        </div>
        <form
          className="container"
          method="post"
          action="https://formkeep.com/f/a9ef9bcd17a8"
        >
          <div className="container">
            <label htmlFor="name" className="contact--label">
              <span className="text-md">Name</span>
              <input
                type="text"
                className="contact--input-text-md"
                name="name"
                id="name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input-text-md"
                name="email"
                id="email"
               
                required
              />
            </label>
            <label htmlFor="message" className="contact--label">
              <span className="text-md">Message</span>
              <textarea
                className="contact--input-text-md"
                id="message"
                name="message"
                rows={8}
                style={{ overflowY: 'auto', resize: 'none' }}
                placeholder="Type your message..."
      
              />
              <div className="contact--label">
                <button
                  type="submit"
                  className="btn btn-primary contact--form--btn"
                >
                  Submit
                </button>
              </div>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
