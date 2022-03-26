import p from '../variables/preguntas.json'
import {estudios, fortalezas, contacto, futuro, tecnologias} from '../variables/respuestas'
import { useState } from 'react';
import BurbujaEscribiedo from './burbujaEscribiendo';
import BurbujaChat from './burbujaChat';
import { respuestas } from '../variables/respuestas';
import BurbujaPreg from './burbujaPreg';
import styles from '../stylesComponents/inicio.module.css'


export default function BotonesPreguntas(){
    const [preg, setPreg] =useState(true)
    const [fetching, setFetching] = useState(false);
    const [contador, setContador] = useState(0);
    
    function tocar(str){
        setContador(contador +1)
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
        if(str === "¿Que hay de tus estudios?"){
            p.preguntas.forEach(obj => {
                if(obj.preg === "¿Que hay de tus estudios?"){
                    obj.estado = false
                }
            })
            respuestas.push(estudios)
            setPreg(true)
        }
        else if(str === "Fortalezas"){
            p.preguntas.forEach(obj => {
                if(obj.preg === "Fortalezas"){
                    obj.estado = false
                }
            })
            respuestas.push(fortalezas)
            setPreg(true)
            
        }
        else if(str === "Contacto"){
            p.preguntas.forEach(obj => {
                if(obj.preg === "Contacto"){
                    obj.estado = false
                }
            })
            respuestas.push(contacto)
            setPreg(true)
            
        }
        else if(str === "¿Como te ves en 5 años?"){
            p.preguntas.forEach(obj => {
                if(obj.preg === "¿Como te ves en 5 años?"){
                    obj.estado = false
                }
            })
            respuestas.push(futuro)
            setPreg(true)
            
        }
        else if(str === "Tecnologias"){
            p.preguntas.forEach(obj => {
                if(obj.preg === "Tecnologias"){
                    obj.estado = false
                }
            })
            respuestas.push(tecnologias)
            setPreg(true)
            
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

    function contact(){

        if(contador === 4 ){
            
            p.preguntas.forEach(obj => {
                if(obj.preg === "Contacto"){
                    obj.estado = true
                }
            })
            return (
                <BurbujaChat str="Si llegaste hasta aca y te gusto mi perfil, contactame!"/>
            )
        }
    }

    // function mensFinal(){

    //     if(final){
    //         return (
    //             <BurbujaChat str="Gracias por contactarme! A la brevedad estare respondiendo, saludos!"/>
    //         )
    //     }
    // }

    
        
        
    


    return(
        <div className={styles.conteiner2}>
            {respuestass()}
            {cargando()}
            {contact()}
            {preg && p.preguntas.map((pr, i) => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary m-2" value={pr.preg} key={i} onClick={() =>tocar(pr.preg)}/>
                }
            })}
        </div>
    )
}