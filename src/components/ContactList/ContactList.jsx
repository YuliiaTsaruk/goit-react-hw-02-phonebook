import { ContactElement } from 'components/ContactElement/ContactElement';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
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
