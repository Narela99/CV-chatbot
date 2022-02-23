import {useState} from 'react';
import { presentacion } from '../variables/respuestas';
import style from '../stylesComponents/inicio.module.css';
import yo from '../img/yo.PNG'
import BurbujaEscribiedo from './burbujaEscribiendo';
import BotonesPreguntas from './botonesPreguntas';

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
         
         <div className={style.conteinerBurbujas}>

            <img src={yo} alt='yo'className={style.img}></img>
            <div className={style.burbujas}>
               <h5 className='text-dark'>{presentacion}</h5>
            </div>

         </div>
         {cargando()}
         {preguntas()}
         
      </div>
   )
}