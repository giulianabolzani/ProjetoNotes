import styles from './Select.module.css';

function Select({text, name, options, handleOnChange, value}){ //para deixar o input dinamico e aproveitar em qlqr form que quisermos
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label> 
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange}
                value={value || ''}>
                <option>Selecione uma opção</option>
                
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
                
            </select>
        </div>
    )
}

export default Select;