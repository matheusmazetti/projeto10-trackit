import * as S from './ContentsStyle';
import ListaHabitos from './ListaHabitos/ListaHabitos';
import NovoHabito from './NovoHabito/NovoHabito';

export default function Content(){
    return(
        <S.Contents>
            <NovoHabito />
            <ListaHabitos />
        </S.Contents>
    )
}