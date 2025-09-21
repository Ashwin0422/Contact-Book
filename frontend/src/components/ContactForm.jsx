import React, { useState } from 'react';
import api from '../api';

const ContactForm = ({ onContactAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        // Simple validation for 10-digit phone numbers
        return /^\d{10}$/.test(phone.replace(/\s/g, ''));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !phone) {
            setError('All fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!validatePhone(phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }

        try {
            await api.post('/contacts', { name, email, phone });
            setSuccess('Contact added successfully!');
            setName('');
            setEmail('');
            setPhone('');
            onContactAdded(); // Callback to refresh the list
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add contact.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>Add New Contact</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="tel"
                    placeholder="Phone (10 digits)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
