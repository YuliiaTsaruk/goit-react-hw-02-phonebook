import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
