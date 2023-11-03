import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewContactForm from 'components/NewContactForm';
import Filter from '../components/Filter';
import ContactsList from 'components/ContactsList';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors'
import Section from 'components/Section';
import Title from 'components/Title';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (event) => {
    setFilter(event.currentTarget.value);
  }

  return (
    <Section>
        <Title>Contacts</Title>
        <NewContactForm />
        <Filter filterValue={filter} onChange={handleChange} />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList filterValue={filter} />
      </Section>
  );
}
