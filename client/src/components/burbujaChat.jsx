import style from '../stylesComponents/inicio.module.css';
import yo from '../img/yo.PNG'

export default function BurbujaChat({str}){
    return (
        <div className={style.conteinerBurbujas} data-aos="zoom-in-right" >

            <img src={yo} alt='yo'className={style.img}></img>
            <div className={style.burbujas}>
               <span>{str}</span>
            </div>

        </div>
    )
}