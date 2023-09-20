import React, { Component } from 'react';
import styles from './ContactForm.module.css'
import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;

    if (
      this.props.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Contact with the name "${name}" already exists.`);
    } else {
      this.props.addContact(name, number);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className='input'
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input className='input'
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Number"
        />
        <button className={styles.button} type="submit">Add Contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
