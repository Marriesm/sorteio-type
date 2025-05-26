import { useState } from "react"
import Card from "../componentes/Card"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"
import './Sorteio.css'
import aviao from '../assets/aviao.png'

const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoScreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (<Card>
        <section className="sorteio">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDavez"
                    id="participanteDavez"
                    value={participanteDaVez}
                    onChange={(evento) => setParticipanteDaVez(evento.target.value)}
                >
                   <option value="" disabled hidden>Selecione o seu nome</option>
                    {participantes.map(participante => (
                   <option key={participante} value={participante}>
                    {participante}
                    </option>
                  ))}
                </select>
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button className="botao-sortear">Sortear</button>
            </form>
            {amigoScreto && <p className="resultado" role="alert">{amigoScreto}</p>}
            <footer className="sorteio">
                <img src={aviao} className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}

export default Sorteio