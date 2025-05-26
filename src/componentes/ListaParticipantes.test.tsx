
import { RecoilRoot } from 'recoil';
import {render, screen } from '@testing-library/react';
import ListaParticipantes from './ListaParticipantes';
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('um alista vazia de participante', () => {
    beforeEach(()=> {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes/>
        </RecoilRoot>)

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0)

    })
     
})

describe('um alista preenchida de participantes', () => {
    const participantes = ['Ana', 'Catarina']
    beforeEach(()=> {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes/>
        </RecoilRoot>)

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length)

    })
     
})