
import { about } from "../vistas/about";
import { home } from "../vistas/home";

import { router } from "./Router";


export const header = {
    
    template: `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id="home">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="admin">Admin</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
    script:()=>{
        //Home
        document.querySelector("#home").addEventListener("click", ()=>{
            router.home()
        })
        
        
        
        //Admin
        document.querySelector("#about").addEventListener("click", ()=>{
            router.about()
        })

        //About
        document.querySelector("#admin").addEventListener("click", ()=>{
            router.admin()
        })
    }

}