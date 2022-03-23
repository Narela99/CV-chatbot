import style from '../stylesComponents/burbujasPreg.module.css'

export default function BurbujaPreg ({str}){
    return (
        <div className={style.burbujaPreg}>
            <div className={style.conteinerBurbujas}>

                <div className={style.burbujas}>
                    <span>{str}</span>
                </div>

            </div>
        </div>
        
        
    )
}