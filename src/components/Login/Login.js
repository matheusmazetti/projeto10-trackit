import * as S from './LoginStyle';

export default function Login(){
    return(
        <S.Content>
            <img src='assets/Group 8.svg' alt='logo' />
            <input placeholder='  usuário' type='text' />
            <input placeholder='  senha' type='password' />
            <button>Entrar</button>
            <a>Não tem uma conta? Cadastre-se!</a>
        </S.Content>
    )
}