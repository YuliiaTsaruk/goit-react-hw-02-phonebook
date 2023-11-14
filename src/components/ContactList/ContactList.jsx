import { ContactElement } from 'components/ContactElement/ContactElement';

export const ContactList = ({ contacts, deleteContact, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
};
