import {useState} from 'react';
import { presentacion } from '../variables/respuestas';
import style from '../stylesComponents/inicio.module.css';
import yo from '../img/yo.PNG'
import BurbujaEscribiedo from './burbujaEscribiendo';
import BotonesPreguntas from './botonesPreguntas';
import BurbujaChat from './burbujaChat';
import { respuestas } from '../variables/respuestas';
import BurbujaPreg from './burbujaPreg';

export default function Inicio(){
   const [fetching, setFetching] = useState(true);
   const [empezar, setEmpezar] = useState(false);
   const [preg, setPreg] = useState(false);
   
   function cargando(){
      if(fetching){
         setTimeout(() => {
            setFetching(false)
         }, 2000)
      return (
         <BurbujaEscribiedo/>
      )
      }
   }

   function preguntas(){
      if(!fetching){
         return <BotonesPreguntas/>
      }
   }

   function empezarr(){
         setPreg(true)
   }

   function inicioo(){
      if(!fetching){
         setTimeout(() => {
            setEmpezar(true)
         }, 1000)
         // setEmpezar(true)
         return <BurbujaChat str={presentacion}/>
      }
   }


   return (
      <div className={style.conteiner}>
         
         {/* {respuestas.map (r => {
            return <BurbujaChat str={r}></BurbujaChat>
         })} */}
         {cargando()}
         {inicioo()}
         {empezar ? <input type="button" className="btn btn-outline-secondary" value="Empecemos!" key="1" onClick={() => empezarr()} style={{margin:10}}/> : null}
         {/* {empezarr()} */}
         {preg ? <BotonesPreguntas/> : null }
         {/* {preguntas()} */}
         
      </div>
   )
}