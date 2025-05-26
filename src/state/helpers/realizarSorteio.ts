import shuffle
 from "just-shuffle";
export function realizarSorteio (participantes: string[]) {
      const totalDeParticipantes = participantes.length
             const resultado = new Map<string, string>()
             const embaralhado = shuffle(participantes)
     
             for(let index = 0; index < totalDeParticipantes; index++){
                   const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;
                   resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
     
             }
      return resultado  
         
} 