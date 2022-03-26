import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import style from '../stylesComponents/formContact.module.css'
init("-dVO_7sZI7JMYNHYW");

export default function FormContact(){
    const[enviado, setEnviado] = useState(false)
    

    function enviar(e){
        e.preventDefault();
        emailjs.sendForm('service_z6r1mqt', 'template_wwi5i71', e.target)
        .then(function(response) { 
                setEnviado(true) 
                document.getElementById("miForm").reset();
            }, function(error) {
            console.log('FAILED...', error);
            });
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Mandar mensaje directo
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Contactame</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEnviado(false)}></button>
                </div>
                <div className="modal-body">
                <form onSubmit={enviar} id="miForm" >
                    <div claclassNamess="form-floating mb-3">
                        <input type="text" className="form-control" name="from_name" id="floatingInput" placeholder='Nombre'/>
                        <label for="floatingInput">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" class="form-control" name="mail" id="floatingInput" placeholder='Mail'/>
                        <label for="floatingInput">Mail</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" class="form-control" name="message" id="floatingInput" placeholder='Mensaje'/>
                        <label for="floatingInput">Mensaje</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>

                    {enviado ? 
                        <div className="alert alert-success d-flex align-items-center" role="alert" style={{margin: 10}}>
                            <div>
                            Su mensaje ha sido enviado correctamente!
                        </div></div> : null}
                </form>
                </div>
                
            </div>
            </div>
            </div>
            
        </div>
    )
}