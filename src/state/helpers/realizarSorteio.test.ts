import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('que cada participante não sorteie o próprio nome', () => {

    const participantes = [
        'Ana',
        'Catarina',
        'Juliana',
        'João',
        'Vinicius',
        'Nathalia'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
        const amigoSecreto = sorteio.get(participante)
        expect(amigoSecreto).not.toEqual(participante)
    })

    })
}) 