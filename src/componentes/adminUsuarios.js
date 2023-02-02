import { Registro } from "./Registro"



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
                        <th scope="col" class="border-botom">Password</th>
                        <th scope="col" class="border-botom">Editar</th>
                        <th scope="col" class="border-botom" >Borrar</th>
                </tr>
        </thead>
        <tbody>
        `
        for(let index=0;index<adminUsuarios.array.length;index++){
            
            tabla +=`
            
                <tr class="filas" id="${adminUsuarios.array[index].id}">
                   <td class="border-bottom">${adminUsuarios.array[index].id}</td>
                   <td class="border-bottom">${adminUsuarios.array[index].email}</td>
                   <td class="border-bottom">${adminUsuarios.array[index].Password}</td>
                   <td class="border-bottom "><button class="btn btn-primary editar" data-id="${adminUsuarios.array[index].id}">Editar</button></td>
                   <td class="border-bottom "><button class="btn btn-danger borrar" data-id="${adminUsuarios.array[index].id}">Borrar</button></td>
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
                Swal.fire({
                    title: 'Seguro que deseas editar el usuario?',
                    text: "Podras editar los datos mas tarde",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si deseo editar!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        document.querySelector(".filas").setAttribute("class", "d-none")
                      )
                    }
                  })
                alert("Estas editando el usuario con id" + " " + event.target.getAttribute("id_usuario"))
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
                      columnaId.classList.add('fila-oculta')
                    }
                  })
                
                
            }
        })
    }

}
