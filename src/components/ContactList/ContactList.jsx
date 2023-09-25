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
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        {...contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
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
