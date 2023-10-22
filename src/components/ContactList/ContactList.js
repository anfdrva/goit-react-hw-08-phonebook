import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts, requestDeleteContact } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(requestDeleteContact(id));
  };

  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts.isLoading && <Loader />}
      {contacts.error && <Error error={contacts.error} />}
      <ul>
        {isLoggedIn &&
          filteredContacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <li key={id}>
                {name}: {number}
                <div>
                  <button
                    type="button"
                    onClick={() => deleteContact(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;