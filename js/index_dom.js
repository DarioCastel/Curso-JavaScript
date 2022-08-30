/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguesaMenu from "./menu_hamburguesa.js";
import {relojDigital,alarma} from "./dom/reloj.js";
const d=document

d.addEventListener("DOMContentLoaded",e =>{
    hamburguesaMenu(".panel-btn",".panel",".menu a")
    relojDigital("#reloj","#inireloj","#detreloj")
})
