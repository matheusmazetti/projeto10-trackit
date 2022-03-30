import * as S from './HeaderStyles';

export default function Header({ image }){
    return(
        <S.Header>
            <img className="logo" src='assets/TrackIt.svg' alt='logo' />
            <img className="userImg" src={image} alt='userImg' />
        </S.Header>
    )
}