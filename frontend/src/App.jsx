import React, { useState, useEffect, useCallback } from 'react';
import api from './api';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchContacts = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const response = await api.get(`/contacts?page=${page}&limit=5`);
            setContacts(response.data.contacts);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            setError('Failed to fetch contacts. Please make sure the backend is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const handleContactAdded = () => {
        // Reset to the first page to see the new contact if not already there
        if (page !== 1) {
            setPage(1);
        } else {
            fetchContacts();
        }
    };

    const handleContactDeleted = () => {
        // If the last item on a page is deleted, go to the previous page
        if (contacts.length === 1 && page > 1) {
            setPage(page - 1);
        } else {
            fetchContacts();
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact Book</h1>
            </header>
            <main>
                <ContactForm onContactAdded={handleContactAdded} />
                {error && <p className="error-message">{error}</p>}
                {loading ? (
                    <p>Loading contacts...</p>
                ) : (
                    <>
                        <ContactList
                            contacts={contacts}
                            onContactDeleted={handleContactDeleted}
                        />
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;