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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Mandar mensaje directo
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Contactame</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEnviado(false)}></button>
                </div>
                <div class="modal-body">
                <form onSubmit={enviar} id="miForm" >
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="from_name" id="floatingInput" placeholder='Nombre'/>
                        <label for="floatingInput">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" name="mail" id="floatingInput" placeholder='Mail'/>
                        <label for="floatingInput">Mail</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="message" id="floatingInput" placeholder='Mensaje'/>
                        <label for="floatingInput">Mensaje</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>

                    {enviado ? 
                        <div class="alert alert-success d-flex align-items-center" role="alert" style={{margin: 10}}>
                            {/* <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> */}
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