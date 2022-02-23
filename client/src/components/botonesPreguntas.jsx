import p from '../variables/preguntas.json'
import {estudios} from '../variables/respuestas'
import style from '../stylesComponents/inicio.module.css';
import yo from '../img/yo.PNG'

export default function BotonesPreguntas(){

    function tocar(str){
        console.log(str)
        if(str === "¿Que hay de tus estudios?"){
            console.log('estoy funcionando')
            return (
                <div>
                    <div className={style.conteinerBurbujas}>
                    
                        <img src={yo} alt='yo'className={style.img}></img>
                        <div className={style.burbujas}>
                            <h5 className='text-dark'>{estudios}</h5>
                        </div>

                    </div>
                </div>
            )
        }
        else if(str === "3 fortalezas"){
            return (
                <h1>Hola como esrtassssssssssssssssssssssssssssssssss</h1>
            )
        }
        
    }

    return(
        <div className=''>
            {p.preguntas.map((pr, i) => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary" value={pr.preg} key={i} onClick={() =>tocar(pr.preg)} style={{margin:10}}/>
                }
            })}
            {/* <button type="button" class="btn btn-outline-secondary" style={{margin:10}}>{estudios2}</button> */}
            
        </div>
    )
}