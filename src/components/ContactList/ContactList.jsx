import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.contactItem}>
    {name}: {number}
    <button className={styles.deleteButton} onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    {contacts.length > 0 ? (
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    ) : (
      <p>No contacts to display.</p>
    )}
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
