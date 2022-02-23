import style from '../stylesComponents/burbujaEscribiendo.module.css'
import yo from '../img/yo.PNG'

export default function burbujaEscribiedo(){
    return (
        <div className={style.conteinerBurbujas}>

            <img src={yo} alt='yo'className={style.img}></img>
            <div className={style.burbujasCargando}>
               {/* <h5 className='text-dark'>• • •</h5> */}
               <div className="spinner-grow spinner-grow-sm" role="status" style={{margin: 5, color: 'black', width: 10, height: 10}}>
                  <span className="visually-hidden">Loading...</span>
               </div>
               <div className="spinner-grow spinner-grow-sm" role="status"style={{margin: 5, color: 'black', width: 10, height: 10}}>
                  <span className="visually-hidden">Loading...</span>
               </div>
               <div className="spinner-grow spinner-grow-sm" role="status"style={{margin: 5, color: 'black', width: 10, height: 10}}>
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
         </div>
    )
}