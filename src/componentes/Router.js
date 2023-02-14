import { about } from "../vistas/about";
import { admin } from "../vistas/admin";
import { home } from "../vistas/home";
import { adminUsuarios } from "./adminUsuarios";
import { Registro } from "./Registro";



export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template
        home.script()
    },
    about: ()=>{
        document.querySelector('main').innerHTML = about.template
    },
    admin: ()=>{
         document.querySelector('main').innerHTML = admin.template 
         adminUsuarios.detectarEventos()
         Registro.multiAvatar()
         document.querySelector("#enviar").addEventListener("click", (e)=>{

            Registro.crearUsuario(e)
            Registro.detectarBoton()
         })
    }
}