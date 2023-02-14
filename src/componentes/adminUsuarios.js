import { Registro } from "./Registro"

import multiavatar from '@multiavatar/multiavatar/esm'
import { editarPerfil } from "./EditarPerfil"


export const adminUsuarios= {
    array:[
        {   
           id:"1",
          nick:"Sergiocotto19",
          email:"sergiopereirahidalgo@gmail.com",
          Password:"Holamundo19",
        },
        {   
             id:"2",
             nick:"HorseLuis19",
             email:"Horseluis@gmail.com",
             Password:"klk27343!",
         },
         {   
             id:"3",
             nick:"Alex25",
             email:"alexperez25@gmail.com",
             Password:"klkpapichuilo27!",
         },
    ],

    script: ()=>{
        
        
        let tabla= `
        
        <table class="table text-center rounded-1 table striped bg-light text-dark mt-5 ms-5 col-10">
        <thead>
                <tr>
                        <th scope="col" class="border-botom">id</th>
                        <th scope="col" class="border-botom">email</th>
                        <th scope="col" class="border-bottom">Nick</th>
                        <th scope="col" class="border-botom">Password</th>
                        <th scope="col" class="border-botom">Editar</th>
                        <th scope="col" class="border-botom" >Borrar</th>
                </tr>
        </thead>
        <tbody>
        `
        for(let index=0;index<adminUsuarios.array.length;index++){
            
            tabla +=`
            
                <tr class="filas ${adminUsuarios.array[index].nick}" id="${adminUsuarios.array[index].id}">
                   <td class="border-bottom">${adminUsuarios.array[index].id}</td>
                   <td class="border-bottom">${adminUsuarios.array[index].email}</td>
                   <td class="border-bottom">${adminUsuarios.array[index].nick}</td>
                   <td class="border-bottom">${adminUsuarios.array[index].Password}</td>
                   <td class="border-bottom "><button class="btn btn-danger editar" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${adminUsuarios.array[index].id}" data-email="${adminUsuarios.array[index].email}" data-password="${adminUsuarios.array[index].Password}" data-nick="${adminUsuarios.array[index].nick}" >Editar</button></td>
                   <td class="border-bottom"><button class="btn btn-danger borrar" data-id="${adminUsuarios.array[index].id}"  ">Borrar</button></td> 
                </tr>
            
            `

        }
        tabla+=`
        </tbody>
        `
        return(tabla)
        
    },

    
    detectarEventos:()=>{
        document.querySelector("main").addEventListener("click", (event)=>{
            
      
            
            if(event.target.classList.contains("editar")){
                adminUsuarios.editar(event)
            }
            if(event.target.classList.contains("borrar")){
                let id= event.target.dataset.id
                const columnaId = document.getElementById(id)
                Swal.fire({
                    title: 'Seguro que deseas eliminar el usuario?',
                    text: "No podras revertir los cambios",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Borrar Usuario!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Usuario borrado',
                        'El usuario a sido borrado correctamente',
                        'success',
                        
                      )
                      console.log("Elemento borrado");
                      columnaId.classList.add('fila-oculta')
                    }
                  })
                
                
            }
            
        })
        
    },
    editar:(event)=>{

        let id = event.target.dataset.id
        let email = event.target.dataset.email
        let password = event.target.dataset.password
        let nick = event.target.dataset.nick

        
        //Coger los datos
        document.querySelector('#editarPerfil').innerHTML = editarPerfil.template
        document.querySelector("#inyeccion").innerHTML = multiavatar(nick)

        document.querySelector("#nickForm").setAttribute("value", nick)
        document.querySelector("#passwordForm").setAttribute("value",password)
        document.querySelector("#email2").setAttribute("value",email)
        

        document.querySelector("#enviar2").addEventListener("click", ()=>{

            var nick2 = document.querySelector('#nickForm').value
            var password2 = document.querySelector('#passwordForm').value
            var email2 = document.querySelector('#email2').value
            const tabla =
            `        

                <td class="border-bottom">${id}</td>
                <td class="border-bottom">${email2}</td>
                <td class="border-bottom">${nick2}</td>
                <td class="border-bottom">${password2}</td>
            
                <td class="border-bottom "><button class="btn btn-danger editar" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${id}" data-email="${email2}" data-password="${password2}" data-nick="${nick2}" >Editar</button></td>
                <td class="border-bottom"><button class="btn btn-danger borrar" data-id="${id}">Borrar</button></td> 
          
            `
          
            console.log(tabla)
            let indice = adminUsuarios.array.findIndex(usuario=>usuario.id == id)

            
    
            adminUsuarios.array[indice].nick = nick2
            
            adminUsuarios.array[indice].Password = password2
            
            adminUsuarios.array[indice].email = email2
            
            document.querySelector(`.${nick}`).innerHTML = tabla
            


        })
        
    },

}
/*
document.querySelector('#enviar2').addEventListener("click",(event)=>{
  event.preventDefault()
  var nick2 = document.querySelector('#nickForm').value
  var password2 = document.querySelector('#passwordForm').value
  var email2 = document.querySelector('#email2').value


  
  

  
  
})
*/