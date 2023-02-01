import LinkButton from '../layout/LinkButton';
import style from './Home.module.css';

function Home(){
    return(
        <section className={style.home_container}>
            <h1>Seja bem-vindo ao <span>NOTE</span></h1>
            <LinkButton to="/nova-anotacoes" text="Criar Anotações"/>
        </section>
    )
}

export default Home;