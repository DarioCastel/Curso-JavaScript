/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguesaMenu from "./menu_hamburguesa.js";
import {relojDigital,alarma} from "./dom/reloj.js";
import { shortcuts,moveBall } from "./dom/teclado.js";

const d=document

d.addEventListener("DOMContentLoaded",e =>{
    hamburguesaMenu(".panel-btn",".panel",".menu a")
    relojDigital("#reloj","#inireloj","#detreloj")
    alarma("./assets/alarm.mp3","#inialarm","#detalarm")
})

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})