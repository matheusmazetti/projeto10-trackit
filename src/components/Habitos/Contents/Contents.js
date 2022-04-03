import * as S from './ContentsStyle';
import NovoHabito from './NovoHabito/NovoHabito';

export default function Content(){
    return(
        <S.Contents>
            <NovoHabito />
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
        </S.Contents>
    )
}