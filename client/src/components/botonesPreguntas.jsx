import p from '../variables/preguntas.json'
import {estudios, fortalezas} from '../variables/respuestas'
import { useState } from 'react';
import BurbujaEscribiedo from './burbujaEscribiendo';
import BurbujaChat from './burbujaChat';
import { respuestas } from '../variables/respuestas';

export default function BotonesPreguntas(){
    const [resp, setResp]= useState(false)
    const [texto, setTexto] = useState('')
    const [preg, setPreg] =useState(true)
    const [fetching, setFetching] = useState(false);


    function tocar(str){
        setFetching(true)
        setPreg(false)
        cargando(str)
        setTimeout(() => {
            respuesta(str)
        }, 2000)
        
    }

    function cargando(str){
        if(fetching){
            setTimeout(() => {
                
                setFetching(false)
            }, 2000)
        return (
            <BurbujaEscribiedo/>
        ) 
        }
    }

    function respuesta(str){
        console.log(str)
        if(str === "¿Que hay de tus estudios?"){
            setResp(true)
            
            respuestas.push(estudios)
            console.log(respuestas)
            setPreg(true)
        }
        else if(str === "3 fortalezas"){
            setResp(true)
            respuestas.push(fortalezas)
            setPreg(true)
            
        }
        
    }

    function preguntass(){
        if(preg){
            return p.preguntas.map((pr, i) => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary" value={pr.preg} key={i} onClick={() =>tocar(pr.preg)} style={{margin:10}}/>
                }
            })
            
        } 
    }

    return(
        <div className=''>
            {respuestas.map(r =>{
                return <BurbujaChat str={r}/>
            })}
            {cargando()}
            {/* {resp ? <BurbujaChat str={texto}/>: null} */}
            {preg && p.preguntas.map((pr, i) => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary" value={pr.preg} key={i} onClick={() =>tocar(pr.preg)} style={{margin:10}}/>
                }
            })}

        </div>
    )
}