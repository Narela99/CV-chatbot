import p from '../variables/preguntas.json'
import {estudios, fortalezas} from '../variables/respuestas'
import { useState } from 'react';
import BurbujaEscribiedo from './burbujaEscribiendo';
import BurbujaChat from './burbujaChat';

export default function BotonesPreguntas(){
    const [resp, setResp]= useState(false)
    const [texto, setTexto] = useState('')
    const [preg, setPreg] =useState(true)
    const [fetching, setFetching] = useState(false);


    function tocar(str){
        setFetching(true)
        setPreg(false)
        setTimeout(() => {
            respuesta(str)
        }, 2000)
    }

    function cargando(str){
        if(fetching){
            setTimeout(() => {
                respuesta(str)
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
            setTexto(estudios)
            
        }
        else if(str === "3 fortalezas"){
            setResp(true)
            setTexto(fortalezas)
            
        }
        
    }

    function preguntass(){
        if(preg){
            p.preguntas.map((pr, i) => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary" value={pr.preg} key={i} onClick={() =>tocar(pr.preg)} style={{margin:10}}/>
                }
            })
            
        } 
    }

    return(
        <div className=''>
            {preg && p.preguntas.map((pr, i) => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary" value={pr.preg} key={i} onClick={() =>tocar(pr.preg)} style={{margin:10}}/>
                }
            })}
            {cargando()}
            {resp ? <BurbujaChat str={texto}/>: null}
        </div>
    )
}