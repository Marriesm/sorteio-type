import './estilos.css';
import participante from '../../assets/participante.png';


const Cabecalho = () => {
    return (
        <header className="cabecalho">
            
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>    
            <img className='participante' src={participante} alt="Participante com um presente na mão" />
        </header>
    )
}

export default Cabecalho