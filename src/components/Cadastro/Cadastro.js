import * as S from './CadastroStyle';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function Cadastro(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [img, setImg] = React.useState('');
    const navigate = useNavigate()
    function envioCadastro(){
        if(email !== '' && password !== '' && name !== '' && img !== ''){
            let obj = {
                email: email,
                name: name,
                image: img,
                password: password
            }

            let promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', obj);
            promisse.then(() => navigate('/'));
            promisse.catch(() => alert("deu ruim"));
        } else {
            alert('Preencha todos os campos');
        }
    } 

    return(
        <S.Content>
            <img src='assets/Group 8.svg' alt='logo' />
            <input placeholder='  email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder='  senha' type='text' value={password} onChange={e => setPassword(e.target.value)} />
            <input placeholder='  nome' type='text' value={name} onChange={e => setName(e.target.value)} />
            <input placeholder='  foto' type='text' value={img} onChange={e => setImg(e.target.value)} />
            <button onClick={envioCadastro}>Cadastrar</button>
            <Link to='/' >Já tem uma conta? Faça login!</Link>
        </S.Content>
    )
}
