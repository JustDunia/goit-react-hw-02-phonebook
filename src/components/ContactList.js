import { Component } from 'react';
import { ContactItem } from './ContactItem';
import styles from './ContactList.module.css';
import { PropTypes } from 'prop-types';

export class ContactList extends Component {
  deleteContact = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { contacts, filter } = this.props;
    return (
      <ul className={styles['contacts-list']}>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={this.deleteContact}
            />
          ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
