//import style from './Note.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import styles from './Note.module.css';
import NoteForm from '../notes/NotesForm.js';
import Message from '../layout/Message.js';

function Note(){
    const { id } = useParams()
    const [note, setNote] = useState([])
    const [showNoteForm, setShowNoteForm] = useState(false)
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/notes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then((data) => { setNote(data) })
        .catch(err => console.log(err))
        }, 300)
    }, [id])

    function editNote(note){

        fetch(`http://localhost:5000/notes/${note.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note),
        }) 
        .then(resp => resp.json())
        .then((data) => {
            setNote(data)
            setShowNoteForm(false)
            setMessage('Anotação atualizada!')
            setTypeMessage('success')
        })
        .catch(err => console.log(err))   
    }

    function toggleNoteForm(){
        setShowNoteForm(!showNoteForm)
    }

 
    return(
        <>
            {note.name ? (
                <div className={styles.note_details}>
                    <Container customClass="column">
                        {message && 
                            <Message type={typeMessage} msg={message}/>
                        }
                        <div className={styles.details_container}>
                            <h1>Anotação: {note.name}</h1>
                            <button className={styles.btn} onClick={toggleNoteForm}>
                                {!showNoteForm ? 'Editar Nota' : 'Fechar'}
                            </button>
                            {!showNoteForm ? (
                                <div className={styles.note_info}>
                                    <p>
                                        <span>Categoria:</span> {note.categories.name}
                                    </p>
                                    <p>
                                        <span>Descrição:</span> {note.details}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.note_info}>
                                    <NoteForm 
                                        handleSubmit={editNote} 
                                        btnText="Concluir edição" 
                                        noteData={note}
                                    />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ): (<Loading />)} 
        </>
    )
} 

export default Note;