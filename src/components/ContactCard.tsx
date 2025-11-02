import React from 'react';
import type { Contact } from '../types/Contact';
import './ContactCard.css';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="contact-card">
      <figure>
        <img 
          src={contact.image || 'https://via.placeholder.com/150'} 
          alt={contact.name} 
          draggable="false" 
        />
        
        <div className="info">
          <h2 className="profile-name">{contact.name}</h2>
          <p className="profile-designation">{contact.title}</p>
        </div>

        <div className="icons">
          <a href={`mailto:${contact.email}`} target="_blank" className="circle" aria-label="Mail">
            <i className="fas fa-envelope"></i>
          </a>
          <a href={`https://wa.me/${contact.contact}`} target="_blank" className="circle" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" className="circle" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
        </div>
      </figure>
    </div>
  );
};

export default ContactCard;