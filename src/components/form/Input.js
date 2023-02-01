import styles from './Input.module.css';

function Input({type, text, name, placeholder, handleOnChange, value}){ //para deixar o input dinamico e aproveitar em qlqr form que quisermos
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label> 
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value} 
            />
        </div>
    )
}

export default Input;