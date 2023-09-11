import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './style.scss';
import resume from '../../assets/resume.pdf'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    description: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const downloadResume = () => {
    const resumeFilePath = resume;
    const anchor = document.createElement('a');
    anchor.href = resumeFilePath;
    anchor.download = 'resume.pdf';
    anchor.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Simulate a successful email sending
        // Replace this with your actual email sending logic
        //await sendEmail();

        // Show a success toast
        toast.success('Email sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });

        // Reset the form after successful submission
        setFormData(initialFormData);
        setErrors({});
      } catch (error) {
        toast.error('Error sending email. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me "
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact_content_header-text">Let's Talk</h3>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact_content_form">
              <form onSubmit={handleFormSubmit}>
                <div className="contact_content_form_controlswrapper">
                  <div>
                    <input
                      required
                      name="name"
                      className="inputName"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="name" className="nameLabel">Name</label>
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>
                  <div>
                    <input
                      required
                      name="email"
                      className="inputEmail"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="email" className="emailLabel">Email</label>
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div>
                    <textarea
                      required
                      name="description"
                      className="inputDescription"
                      rows="5"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="description" className="descriptionLabel">Your Message</label>
                    {errors.description && <span className="error">{errors.description}</span>}
                  </div>
                </div>
                <button type="submit" className="btn1">Submit</button>
                <button className="btn2" onClick={downloadResume}>Download Resume</button>
              </form>
            </div>
          </Animate>
        </Animate>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
