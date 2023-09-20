import React from 'react';
import styles from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <input className={styles.input}
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search contacts by name"
  />
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
