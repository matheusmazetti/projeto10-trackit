import * as S from './LoginStyle';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import React from 'react';
import axios from 'axios';

export default function Login({ callback }){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [disable, setDisable] =React.useState(false);
    const navigate = useNavigate();
    function enviarDados(){
        if(email !== '' && password !== ''){
            setDisable(true);
            let obj = {
                email: email,
                password: password
            }
            let promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', obj);
            promisse.then((response) => {
                callback(response.data.token, response.data.image);
                navigate('/habitos');
            });
            promisse.catch(() => {
                alert('erro');
                setDisable(false);
            });
        } else {
            alert("Preencha todos os campos");
        }
    }

    return(
        <S.Content>
            <img src='assets/Group 8.svg' alt='logo' />
            <input placeholder='  email' type='text' value={email} onChange={e => setEmail(e.target.value)} disabled={disable} />
            <input placeholder='  senha' type='password' value={password} onChange={e => setPassword(e.target.value)} disabled={disable} />
            <button onClick={enviarDados} disabled={disable} >{(disable)? <ThreeDots color="white" height={90} width={90} />: "Entrar"}</button>
            <Link to='/cadastro' >Não tem uma conta? Cadastre-se!</Link>
        </S.Content>
    )
}