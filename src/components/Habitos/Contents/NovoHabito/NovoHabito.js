import * as S from './NovoHabitoStyle';
import React from 'react';
import Context from '../../../Context';
import axios from 'axios';

export default function NovoHabito({ callback }){
    const [days, setDays] = React.useState([]);
    const [name, setName] = React.useState('');
    const context = React.useContext(Context);
    function selecionarDia(day){
        if(days.includes(day)){
            let index = days.indexOf(day);
            days.splice(index, 1);
            setDays([...days]);
        } else {
            setDays([...days, day]);
        }
    }

    function sendInfo(){
        let token = context.userObj.token;
        let config = {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
    
        let obj ={
            name:name,
            days:days
        }
        let promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', obj, config);
        promisse.then(callback);
    }

    return(
        <S.Content>
            <input placeholder='nome do hábito' value={name} onChange={e => setName(e.target.value)} />
            <S.Buttons>
                <button className={(days.includes(0))?'selecionado':''} onClick={() => selecionarDia(0)}>D</button>
                <button className={(days.includes(1))?'selecionado':''} onClick={() => selecionarDia(1)}>S</button>
                <button className={(days.includes(2))?'selecionado':''} onClick={() => selecionarDia(2)}>T</button>
                <button className={(days.includes(3))?'selecionado':''} onClick={() => selecionarDia(3)}>Q</button>
                <button className={(days.includes(4))?'selecionado':''} onClick={() => selecionarDia(4)}>Q</button>
                <button className={(days.includes(5))?'selecionado':''} onClick={() => selecionarDia(5)}>S</button>
                <button className={(days.includes(6))?'selecionado':''} onClick={() => selecionarDia(6)}>S</button>
            </S.Buttons>
            <S.LowerButtons>
                <button className='cancelar'>Cancelar</button>
                <button onClick={sendInfo} className='salvar'>Salvar</button>
            </S.LowerButtons>
        </S.Content>
    )
}