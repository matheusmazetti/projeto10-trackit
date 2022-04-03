import * as S from './HeaderStyles';
import React from 'react';
import Context from '../../Context';

export default function Header(){
    const obj = React.useContext(Context);  
    return(
        <S.Header>
            <img className="logo" src='assets/TrackIt.svg' alt='logo' />
            <img className="userImg" src={obj.userObj.image} alt='userImg' />
        </S.Header>
    )
}