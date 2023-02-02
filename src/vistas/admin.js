

import { adminUsuarios } from "../componentes/adminUsuarios";
import { Registro } from "../componentes/Registro";

export const admin = {
    //Aqui ira el codigo html
    template:`
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