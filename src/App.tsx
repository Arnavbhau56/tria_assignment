import { useState, useEffect } from 'react';
import type { Contact } from './types/Contact';
import ContactCard from './components/ContactCard';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';
import { fetchContacts, groupContactsByDepartment } from './data/mockContacts';
import './App.css';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [groupedContacts, setGroupedContacts] = useState<{ [key: string]: Contact[] }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);



  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
    setGroupedContacts(groupContactsByDepartment(filtered));
  }, [contacts, searchTerm]);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await fetchContacts();
      setContacts(data);
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setLoading(false);
    }
  };



  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="heading">
        CONTACT LIST
      </div>

      <div className="search-add-container">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div className="add-contact-section">
          <button className="add-contact-btn" onClick={() => setShowAddForm(true)}>
            Add Contact
          </button>
        </div>
      </div>



      {Object.entries(groupedContacts).map(([department, departmentContacts]) => {
        if (departmentContacts.length === 0) return null;
        
        return (
          <div key={department} className="department-section">
            <div className="department-heading">
              <h2>{department}</h2>
            </div>
            <div className="contacts-grid">
              {departmentContacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          </div>
        );
      })}

      {filteredContacts.length === 0 && searchTerm && (
        <div className="no-results">
          <p>No contacts found matching "{searchTerm}"</p>
        </div>
      )}
      
      {showAddForm && (
        <AddContactForm 
          onClose={() => setShowAddForm(false)}
          onContactAdded={loadContacts}
        />
      )}


    </div>
  );
}

export default App;
