import * as S from './HeaderStyles';

export default function Header(){
    return(
        <S.Header>
            <img className="logo" src='assets/TrackIt.svg' alt='logo' />
            <img className="userImg" src='assets/Group 8.svg' alt='userImg' />
        </S.Header>
    )
}