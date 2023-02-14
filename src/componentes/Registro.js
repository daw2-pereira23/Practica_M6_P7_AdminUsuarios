//Importación UUID

import multiavatar from '@multiavatar/multiavatar/esm'

import { v4 as uuidv4 } from 'uuid';
import { adminUsuarios } from './adminUsuarios';

export const Registro = {
    formulario: `
    <div class="card" mt-5>
      <div id="inyecttion"></div>
      <h5 class="card-header">Formulario</h5>
        <div class="card-body">
          <form id="formularioRegistro" class="form" novalidate>
            <div class="mb-3">
              <label for="text" class="form-labels">Nick</label>
              <input type="text" class="form-control" id="nick">
            </div>
            
            <div class="mb-3">
              <label for="">Password</label>
              <input type="text" class="form-control" id="password">
            </div>
            <div class="mb-3">
              <label for="email">Email</label>
              <input type="text" class="form-control" id="email">
            </div>
            <button type="submit" class="btn btn-primary" id="enviar">Enviar datos</button>
          </form>
        </div>
      </div>
`,


    //Aqui generamos el uuid de los nuevos usuarios
    
    
    
    //Creamos el usuario
    crearUsuario:(e)=>{
      e.preventDefault();
      console.log("funcionando");
      var usuario = new Object()
      var id = uuidv4()
     

      usuario.Password = document.querySelector("#password").value
      usuario.nick = document.querySelector('#nick').value
      usuario.email = document.querySelector("#email").value
      usuario.id = id
      
      
      console.log(usuario); 
      //
      var tablaHtml=`
      <td class="border-bottom">${id}</td>
      <td class="border-bottom">${document.querySelector("#nick").value}</td>
      <td class="border-bottom">${document.querySelector("#email").value}</td>
      <td class="border-bottom">${usuario.password = document.querySelector("#password").value}</td>
      <td class="border-bottom "><button class="btn btn-danger editar" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${id}" data-email="${document.querySelector("#email").value}" data-password="${document.querySelector("#password").value}" data-nick="${document.querySelector("#nick").value}" >Editar</button></td>
      <td class="border-bottom"><button class="btn btn-danger borrar" data-id="${id}">Borrar</button></td> 
      `
      const tr = document.createElement("tr")
      tr.setAttribute("id",  id)
      tr.setAttribute("class", usuario.nick)

      document.querySelector('tbody').append(tr)
      tr.innerHTML = tablaHtml
      adminUsuarios.array.push(usuario)
    },

    //Seleccion avatar
    
    multiAvatar:()=>{
      console.log("Funcionando");
      document.querySelector("#nick").addEventListener("keydown", (event)=>{
        console.log("Funcionando");
          var variable = event.target.value
          var svgCode = multiavatar(variable)
          document.querySelector("#inyecttion").innerHTML = svgCode
      })
      
    },

    detectarBoton:()=>{
 
      document.querySelector('#enviar').addEventListener("click", (e)=>{
        e.preventDefault();
        console.log("detectando");
      })
    }
    
  }
