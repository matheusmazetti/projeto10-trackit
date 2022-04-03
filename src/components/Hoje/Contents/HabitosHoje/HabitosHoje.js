import axios from 'axios';
import React from 'react';
import Context from '../../../Context';
import * as S from './HabitosHojeStyles';

export default function HabitosHoje(){
    const [obj, setObj] = React.useState([]);
    const context = React.useContext(Context);
    const [reload, setReload] = React.useState(0);

    React.useEffect(() => {
        let token = context.userObj.token;
        let config = {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        let promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promisse.then((response) => {
            setObj(response.data)
            setReload(0);
        });
    },[context, reload]);

    function setDone(id){
        let token = context.userObj.token;
        let config = {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        let promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);
        promisse.then(() => setReload(1))
    }

    function setUndone(id){
        let token = context.userObj.token;
        let config = {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        let promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
        promisse.then(() => setReload(1))
    }

    function Habito({ name, current, highest, done, id }){
        return(
            <S.Habito>
                <div>
                    <h1>{name}</h1>
                    <h2>{`Sequencia atual: ${current}`}</h2>
                    <h2>{`Seu recorde: ${highest}`}</h2>
                </div>
                <button className={(done)?'selecionado':''} onClick={() => {
                    if(done){
                        setUndone(id)
                    } else {
                        setDone(id)
                    }
                }}>marcar</button>
            </S.Habito>
        )
    }

    function Today(){
        return(
            <S.Habitos>
                {obj.map((habito) => 
                    <Habito name={habito.name} current={habito.currentSequence} highest={habito.highestSequence} done={habito.done} id={habito.id} />
                )}
            </S.Habitos>
        )
    }

    if (obj.length === 0){
        return(
            <h1>Sem hábitos para hoje</h1>
        )
    } else {
        return(
            <S.Content>
                <Today />
            </S.Content>
        )
    }
}