import {useState} from 'react';
import { presentacion } from '../variables/respuestas';
import style from '../stylesComponents/inicio.module.css';
import BurbujaEscribiedo from './burbujaEscribiendo';
import BotonesPreguntas from './botonesPreguntas';
import BurbujaChat from './burbujaChat';


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
         return <BurbujaChat str={presentacion}/>
      }
   }


   return (
      <div className={style.conteiner}>
         
         {cargando()}
         {inicioo()}
         {empezar ? <input type="button" className="btn btn-outline-secondary" value="Empecemos!" key="1" onClick={() => empezarr()} style={{margin:10}}/> : null}
         {preg ? <BotonesPreguntas/> : null }

      </div>
   )
}