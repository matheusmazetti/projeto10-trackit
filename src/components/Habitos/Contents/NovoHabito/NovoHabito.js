import * as S from './NovoHabitoStyle';
import React from 'react';

export default function NovoHabito(){

    return(
        <S.Content>
            <input placeholder='nome do hábito' />
            <S.Buttons>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </S.Buttons>
            <S.LowerButtons>
                <button className='cancelar'>Cancelar</button>
                <button className='salvar'>Salvar</button>
            </S.LowerButtons>
        </S.Content>
    )
}