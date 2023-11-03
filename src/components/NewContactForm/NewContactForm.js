import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './NewContactForm.module.css';
import Section from 'components/Section';

const NewContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectAllContacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        const { name, number } = form.elements
        const newContact = {
            name: name.value ,
            number: number.value,
        }
        
        if (contacts.find(contact => contact.name === name.value)) {
        alert(`${name.value} is already in contacts`)
        return
        }

        dispatch(addContact(newContact))
        form.reset();
    }

    return (
        <Section>
            <form className={css.form} onSubmit={handleSubmit}>
                <label htmlFor="name" className={css.label}>Name:
                    <input
                        className={css.input}    
                        type="text"
                        name="name"
                        placeholder="Contact name"
                        required
                        autoComplete="off"
                    />
                </label>
                <label htmlFor="number" className={css.label}>Number:
                    <input
                        className={css.input}        
                        type="tel"
                        name="number"
                        placeholder="Phone number"
                        required
                        autoComplete="off"
                    />
                </label>
                <button className={css.button} type="submit">Add contact</button>
            </form>
        </Section>
            
        )
    
}

export default NewContactForm;