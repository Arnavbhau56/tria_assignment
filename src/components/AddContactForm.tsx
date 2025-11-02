import React, { useState } from 'react';
import { BASE_URL } from '../config/environment';
import Swal from 'sweetalert2';
import './AddContactForm.css';

interface AddContactFormProps {
  onClose: () => void;
  onContactAdded: () => void;
}

const AddContactForm: React.FC<AddContactFormProps> = ({ onClose, onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    department: '',
    email: '',
    contact: '',
    linkedin: '',
    image: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.title || !formData.department || !formData.email || !formData.contact) {
      Swal.fire({
        title: 'Missing Fields',
        text: 'Please fill in all required fields',
        icon: 'error',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          content: 'swal-content'
        }
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        icon: 'error',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          content: 'swal-content'
        }
      });
      return;
    }
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('contact', formData.contact);
    formDataToSend.append('linkedin', formData.linkedin);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await fetch(`${BASE_URL}/add/`, {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: result.message || 'Contact added successfully',
          icon: 'success',
          customClass: {
            popup: 'swal-popup',
            title: 'swal-title',
            content: 'swal-content'
          }
        });
        onContactAdded();
        onClose();
      } else {
        Swal.fire({
          title: 'Error',
          text: result.message || 'Failed to add contact',
          icon: 'error',
          customClass: {
            popup: 'swal-popup',
            title: 'swal-title',
            content: 'swal-content'
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Network error occurred',
        icon: 'error',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          content: 'swal-content'
        }
      });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="input" />
            <label className="user-label">Name</label>
          </div>
          
          <div className="input-group">
            <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="input" />
            <label className="user-label">Title</label>
          </div>
          
          <div className="input-group">
            <input required type="text" name="department" value={formData.department} onChange={handleInputChange} className="input" />
            <label className="user-label">Department</label>
          </div>
          
          <div className="input-group">
            <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="input" />
            <label className="user-label">Email</label>
          </div>
          
          <div className="input-group">
            <input required type="text" name="contact" value={formData.contact} onChange={handleInputChange} className="input" />
            <label className="user-label">Contact</label>
          </div>
          
          <div className="input-group">
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="input" />
            <label className="user-label">LinkedIn</label>
          </div>
          
          <div className="file-input-group">
            <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
            <label>Profile Photo</label>
          </div>
          
          <div className="form-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;