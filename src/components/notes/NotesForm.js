import styles from './NotesForm.module.css';
import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import { useEffect, useState } from 'react';


function NotesForm({handleSubmit, btnText, noteData}){ //colocamos esse parametro para dizer que vai vir do elemento pai que é do NovasAnotacoes.js
    const [categories, setCategories] = useState([])
    const[note, setNote] = useState(noteData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
          .catch((err) => console.log(err))
      }, [])

    const submit = (e) => {
      e.preventDefault()
      handleSubmit(note)
    }

    function handleChange(e){
      setNote({...note, [e.target.name]: e.target.value})
      console.log(note)
    }

    function handleCategories(e){
      setNote({
        ...note, 
        categories: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
              type="text" 
              text="Nome do projeto" 
              name="name" 
              placeholder="Insira o nome da anotação"
              handleOnChange={handleChange}
              value={note.name ? note.name : ''}
            />
            <Select 
              name="category_id" 
              text="Selecione a categoria" 
              options={categories}
              handleOnChange={handleCategories} 
              value={note.categories ? note.categories.id : ''}
            />
            <Input 
              type="text" 
              text="Detalhes" 
              name="details" 
              placeholder="Insira o nome da anotação"
              handleOnChange={handleChange}
              value={note.details ? note.details : ''}
            />
            <SubmitButton text={btnText}/> 
        </form>
    )
}

export default NotesForm;