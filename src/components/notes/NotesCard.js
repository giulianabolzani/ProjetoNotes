import styles from './NotesCard.module.css';
import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function NotesCard({id, name, budget, categories, details, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.note_card}>
            <h4>{name}</h4>
            <p className={styles.categories_text}>Categoria:
                <span className={`${styles[categories?.toLowerCase() || '']}`}></span> {categories}
            </p>
            <p className={styles.details_text}>
                <span>Detalhes:</span>
                <p>{details}</p>
            </p>
            <div className={styles.note_card_actions}>
                <Link to={`/note/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default NotesCard;