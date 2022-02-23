import style from '../stylesComponents/inicio.module.css';
import yo from '../img/yo.PNG'

export default function BurbujaChat({str}){
    return (
        <div className={style.conteinerBurbujas}>

            <img src={yo} alt='yo'className={style.img}></img>
            <div className={style.burbujas}>
               <h5 className='text-dark'>{str}</h5>
            </div>

        </div>
    )
}