import {useState} from 'react';
import { presentacion } from '../variables/respuestas';
import style from '../stylesComponents/inicio.module.css';
import yo from '../img/yo.PNG'
import BurbujaEscribiedo from './burbujaEscribiendo';
import BotonesPreguntas from './botonesPreguntas';
import BurbujaChat from './burbujaChat';
import { respuestas } from '../variables/respuestas';

export default function Inicio(){
   const [fetching, setFetching] = useState(true);

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


   return (
      <div className={style.conteiner}>
         
         {respuestas.map (r => {
            return <BurbujaChat str={r}></BurbujaChat>
         })}
         {cargando()}
         {preguntas()}
         
      </div>
   )
}