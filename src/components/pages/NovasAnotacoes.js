import styles from './NovasAnotacoes.module.css';
import NotesForm from '../notes/NotesForm.js';
import { useNavigate } from 'react-router-dom';

function NovasAnotacoes(){
    const history = useNavigate()

    function createPost(notes){
        //initialize gb and services
        notes.notes = 0
        notes.services = []

        fetch('http://localhost:5000/notes',{
            method: 'POST',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(notes), 
        })        
        .then((resp => resp.json()))
        .then((data) => { 
            console.log(data)
            history('/anotacoes', { state: {message: 'Projeto criado com sucesso'}})
        }).catch(err => console.log(err))
    }

    return(
        <div className={styles.novasanotacoes_container}>
            <h1>Criar anotações</h1>
            <p>Deixe sua vida mais organizada com o 
                <span>Note</span>
            </p>
            <NotesForm handleSubmit={createPost} btnText="Criar nota"/>
        </div>
    )
}

export default NovasAnotacoes;