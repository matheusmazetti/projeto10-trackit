import * as S from './ContentsStyle';
import React from 'react';
import ListaHabitos from './ListaHabitos/ListaHabitos';
import NovoHabito from './NovoHabito/NovoHabito';

export default function Content(){
    const [reload, setReload] = React.useState(0);
    return(
        <S.Contents>
            <NovoHabito callback={() => setReload(1)} />
            <ListaHabitos reload={reload} />
        </S.Contents>
    )
}