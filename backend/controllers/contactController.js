const Contact = require('../models/contactModel');

// Add a new contact
exports.addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Contact added successfully!', contact: newContact });
    } catch (error) {
        if (error.code === 11000) { // Handle duplicate email error
            return res.status(400).json({ message: 'Email already exists.' });
        }
        res.status(400).json({ message: 'Error adding contact.', error: error.message });
    }
};

// Get contacts with pagination
exports.getContacts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const contacts = await Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
        const totalContacts = await Contact.countDocuments();
        const totalPages = Math.ceil(totalContacts / limit);

        res.status(200).json({
            contacts,
            page,
            totalPages,
            totalContacts
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts.', error: error.message });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found.' });
        }

        res.status(200).json({ message: 'Contact deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact.', error: error.message });
    }
};
