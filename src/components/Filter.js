import { PropTypes } from 'prop-types';
import styled from 'styled-components';

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

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></Input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
