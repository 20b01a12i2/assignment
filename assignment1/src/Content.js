import Image from './image/lizardimage.png';
import './styles.css';
let cmd1 = 'SHARE'
let cmd2 = 'LEARN MORE'
function Content() {
    return (
        <>
           <img src={Image} />
            <h1>Lizard</h1>
            <p>Lizards are a widespread group of squamate reptiles,with over 6,000 species,ranging across all continents except Antartica</p>
            <h4>{cmd1}      {cmd2}</h4>
        </>
    );
}
export default Content;