import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const listaParticipantes = () => {
      const participantes: string[] = useListaDeParticipantes()
      return(
        <ul>
             {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
      
      )
}

export default listaParticipantes