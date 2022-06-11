import { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { nanoid } from 'nanoid';

const Div = styled.div`
  padding-top: 33px;
  padding-left: 33px;
`;

const H1 = styled.h1`
  margin-bottom: 13px;
`;

const H2 = styled.h2`
  margin-top: 13px;
  margin-bottom: 13px;
`;

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleAdd = (name, number) => {
    this.setState(prevState => {
      const prevContacts = prevState.contacts;
      const id = nanoid();
      const namesList = [];

      prevContacts.map(el => namesList.push(el.name.toLowerCase()));

      if (namesList.includes(name.toLowerCase())) {
        return alert(`${name} is already in contacts`);
      }
      return {
        contacts: [...prevContacts, { id: id, name: name, number: number }],
      };
    });
  };

  handleDelete = ({ target }) => {
    const { title } = target;

    this.setState(prevState => {
      const prevContacts = prevState.contacts;
      const newContactsList = [...prevContacts];
      const idx = newContactsList.findIndex(p => p.name === title);

      newContactsList.splice(idx, 1);
      console.log(newContactsList);

      return {
        contacts: newContactsList,
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Div>
        <GlobalStyle />
        <H1>Phonebook</H1>
        <ContactForm addContact={this.handleAdd} />

        <H2>Contacts</H2>
        <Filter filter={filter} onChange={this.handleChange} />
        {contacts.length !== 0 && (
          <ContactList
            contacts={contacts}
            filter={filter}
            delContact={this.handleDelete}
          />
        )}
      </Div>
    );
  }
}
