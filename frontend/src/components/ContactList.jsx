import React from 'react';
import api from '../api';

const ContactList = ({ contacts, onContactDeleted }) => {
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                await api.delete(`/contacts/${id}`);
                onContactDeleted(); // Callback to refresh list
            } catch (error) {
                console.error('Failed to delete contact:', error);
                alert('Failed to delete contact.');
            }
        }
    };

    if (contacts.length === 0) {
        return <p>No contacts found. Add one using the form above!</p>;
    }

    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <div key={contact._id} className="contact-item">
                    <div className="contact-details">
                        <h3>{contact.name}</h3>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                    </div>
                    <button onClick={() => handleDelete(contact._id)} className="delete-btn">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
