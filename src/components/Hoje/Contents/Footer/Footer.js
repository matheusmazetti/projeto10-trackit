import * as S from './FooterStyles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <S.Content>
            <Link to={'/habitos'}><h1>Hábitos</h1></Link>
            <Link to={'/hoje'}><div style={{ width: 91, height: 91 }}>
                <CircularProgressbar value={20} text={`Hoje`} />
            </div></Link>
            <h1>Histórico</h1>
        </S.Content>
    )
}