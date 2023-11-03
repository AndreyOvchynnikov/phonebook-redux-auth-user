import s from './Filter.module.css'

const Filter = ({filterValue, onChange}) => {
    return (
        <label htmlFor="filter" className={s.label}>Find contacts by name:
            <input
                value={filterValue}
                className={s.input}
                onChange={onChange}  
                placeholder="Find contact"
                type="text"
                name="filter"
                autoComplete="off"
                />
            </label>
    )
}

export default Filter;

