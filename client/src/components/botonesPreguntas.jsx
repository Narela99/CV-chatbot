import p from '../variables/preguntas.json'

export default function BotonesPreguntas(){

    function tocar(str){
        console.log(str)
    }
    return(
        <div className=''>
            {p.preguntas.map(pr => {
                if(pr.estado){
                    return <input type="button" className="btn btn-outline-secondary" value={pr.preg} onClick={() =>tocar(pr.preg)} style={{margin:10}}/>
                }
            })}
            {/* <button type="button" class="btn btn-outline-secondary" style={{margin:10}}>{estudios2}</button> */}
            
        </div>
    )
}