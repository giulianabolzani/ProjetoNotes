import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../layout/Message.js';
import styles from './Anotacoes.module.css';
import Container  from '../layout/Container.js';
import LinkButton from '../layout/LinkButton.js';
import NotesCard from '../notes/NotesCard.js';
import Loading from '../layout/Loading.js';

function Anotacoes(){

    const [notes, setNotes] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [noteMessage, setNoteMessage] = useState('')
    
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/notes',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(resp => resp.json())
            .then(data => {
                setNotes(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeNote(id){

        fetch(`http://localhost:5000/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setNotes(notes.filter((note) => note.id !== id))
            setNoteMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.notes_container}>
            <div className={styles.title_container}>
                <h1>Anotações criadas</h1>
                <LinkButton to="/anotacoes" text="Criar Anotações"/>
            </div>
            {message && <Message type="success" msg={message} />}
            {noteMessage && <Message type="success" msg={noteMessage} />}
            <Container customClass="start">
                {notes.length > 0 &&
                    notes.map((notes) => (
                        <NotesCard 
                            id={notes.id}
                            name={notes.name}
                            budget={notes.budget}
                            categories={notes.categories.name}
                            details={notes.details}
                            key={notes.id}
                            handleRemove={removeNote}
                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && notes.length === 0 && (
                    <p>Não há anotações cadastradas!</p>
                )}
            </Container>
        </div>
    )
}

export default Anotacoes;