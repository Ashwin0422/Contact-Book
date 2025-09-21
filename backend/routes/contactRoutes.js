const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /contacts -> Add a new contact
router.post('/', contactController.addContact);

// GET /contacts -> Fetch contacts with pagination
router.get('/', contactController.getContacts);

// DELETE /contacts/:id -> Delete a contact
router.delete('/:id', contactController.deleteContact);

module.exports = router;
