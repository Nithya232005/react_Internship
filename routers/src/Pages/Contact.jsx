function Contact() {
  return (
    <div className="contact-container">
      <style>{`
        .contact-container {
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f9fafb;
        }

        .contact-card {
          background: #ffffff;
          padding: 30px 40px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 360px;
        }

        .contact-card h2 {
          font-size: 26px;
          margin-bottom: 20px;
          color: #1f2933;
        }

        .contact-card p {
          font-size: 16px;
          color: #374151;
          margin: 10px 0;
        }

        .contact-card span {
          font-weight: 600;
          color: #2563eb;
        }
      `}</style>

      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>
           Email: <span>yourgmail@gmail.com</span>
        </p>
        <p>
          Phone: <span>+91 98765 43210</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
