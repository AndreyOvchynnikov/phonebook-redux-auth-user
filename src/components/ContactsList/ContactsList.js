import { useSelector, useDispatch } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import s from './ContactsList.module.css'


const ContactsList = ({filterValue}) => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectAllContacts);

    const filteredConcacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))


    const handleClick = (event) => {
        const removeId = event.target.id;
        dispatch(deleteContact(removeId));
    }

    return (

        <ul className={s.list}>
            {filteredConcacts.map(contact => {
                const { name, number, id } = contact;
               return (<li key={id} className={s.listItem}>
                   <p className={s.name}>{name}</p>
                   <span className={s.number}>{number}</span>
                   <button className={s.button} id={id} onClick={handleClick} type="button">Delete</button>
                </li>)
                
            }
         
            )}
        </ul>
    )
}

export default ContactsList;