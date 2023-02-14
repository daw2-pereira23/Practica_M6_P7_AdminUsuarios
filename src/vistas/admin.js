

import { adminUsuarios } from "../componentes/adminUsuarios";
import { editarPerfil } from "../componentes/EditarPerfil";
import { Registro } from "../componentes/Registro";

export const admin = {
    //Aqui ira el codigo html
    template:`
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="editarPerfil">
      ${editarPerfil.template}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="container ">
    <div class="row">
        <div class="col-8 d-flex">
            ${adminUsuarios.script()}
        </div> 
        <div class="col-4">
            ${Registro.formulario}
        </div>
    </div>
</div> `,
script: ()=>{
        
        Registro.multiavatar()
       
}
}