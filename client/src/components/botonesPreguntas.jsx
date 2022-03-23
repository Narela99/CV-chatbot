import p from '../variables/preguntas.json'
import {estudios, fortalezas, contacto, futuro, tecnologias} from '../variables/respuestas'
import { useState } from 'react';
import BurbujaEscribiedo from './burbujaEscribiendo';
import BurbujaChat from './burbujaChat';
import { respuestas } from '../variables/respuestas';
import BurbujaPreg from './burbujaPreg';
import styles from '../stylesComponents/inicio.module.css'

export default function BotonesPreguntas(){
    const [resp, setResp]= useState(false)
    const [texto, setTexto] = useState('')
    const [preg, setPreg] =useState(true)
    const [fetching, setFetching] = useState(false);


    function tocar(str){
        respuestas.push(str)
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
            p.preguntas.forEach(obj => {
                if(obj.preg === "¿Que hay de tus estudios?"){
                    obj.estado = false
                }
            })
            respuestas.push(estudios)
            setPreg(true)
        }
        else if(str === "Fortalezas"){
            setResp(true)
            p.preguntas.forEach(obj => {
                if(obj.preg === "Fortalezas"){
                    obj.estado = false
                }
            })
            respuestas.push(fortalezas)
            setPreg(true)
            
        }
        else if(str === "Contacto"){
            setResp(true)
            setPreg(true)
            p.preguntas.forEach(obj => {
                if(obj.preg === "Contacto"){
                    obj.estado = false
                }
            })
            respuestas.push(contacto)
            
        }
        else if(str === "¿Como te ves en 5 años?"){
            setResp(true)
            setPreg(true)
            p.preguntas.forEach(obj => {
                if(obj.preg === "¿Como te ves en 5 años?"){
                    obj.estado = false
                }
            })
            respuestas.push(futuro)
            
        }
        else if(str === "Tecnologias"){
            setResp(true)
            setPreg(true)
            p.preguntas.forEach(obj => {
                if(obj.preg === "Tecnologias"){
                    obj.estado = false
                }
            })
            respuestas.push(tecnologias)
            
        }
        
    }

    function respuestass(){
        
        return respuestas.map((r, i) => {
            
            if(i % 2 === 0){
                return <BurbujaChat str={r}/>
            }
            else return <BurbujaPreg str = {r}/>
        })
            
        
    }

    return(
        <div className={styles.conteiner2}>
            {respuestass()}
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