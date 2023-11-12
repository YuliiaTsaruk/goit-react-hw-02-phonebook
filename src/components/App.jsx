import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
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

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <button>Add contact</button>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul></ul>
        </div>
      </div>
    );
  }
}
