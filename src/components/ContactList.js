import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 13px;
`;
const Span = styled.span`
  text-transform: capitalize;
`;
const Button = styled.button`
  /* display: block; */
  margin-left: 13px;
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

const ContactList = ({ contacts, filter, delContact }) => {
  return (
    <>
      <ul>
        {contacts.map(
          ({ id, name, number }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
              <Li key={id}>
                <Span>{name}</Span>: {number}
                <Button type="button" onClick={delContact} title={name}>
                  Delete
                </Button>
              </Li>
            )
        )}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactList;
