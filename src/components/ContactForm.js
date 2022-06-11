// import { PropTypes } from 'prop-types';
import { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 333px;
  border: 1px solid;
  padding: 13px 11px;
`;
const Label = styled.label`
  font-size: 18px;
`;
const Input = styled.input`
  display: block;
  width: 222px;
  margin-top: 7px;
  margin-bottom: 33px;
  border: 1px solid #94959b;
  border-radius: 3px;
  &:focus {
    border: 1px solid #4985ff;
    outline: none;
    box-shadow: 0px 0px 10px rgb(111 111 111 / 55%);
  }
`;
const Button = styled.button`
  display: block;
  border-radius: 5px;
  padding: 3px 7px;
  border: 1px solid #d1cccc;
  &:hover,
  &:focus {
    background-color: #4985ff;
    color: #fff;
    border: 1px solid #4985ff;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    this.props.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="username">Name</Label>

        <Input
          type="text"
          name="name"
          id="username"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="usernumber">Number</Label>
        <Input
          type="tel"
          name="number"
          id="usernumber"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
