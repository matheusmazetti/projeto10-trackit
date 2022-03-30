import * as S from './LoginStyle';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <S.Content>
            <img src='assets/Group 8.svg' alt='logo' />
            <input placeholder='  email' type='text' />
            <input placeholder='  senha' type='password' />
            <button>Entrar</button>
            <Link to='/cadastro' >Não tem uma conta? Cadastre-se!</Link>
        </S.Content>
    )
}