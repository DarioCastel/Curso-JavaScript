/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguesaMenu from "./menu_hamburguesa.js";
import {relojDigital,alarma} from "./dom/reloj.js";
import { shortcuts,moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import buttontopscroll from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
const d=document;

d.addEventListener("DOMContentLoaded",e =>{
    hamburguesaMenu(".panel-btn",".panel",".menu a")
    relojDigital("#reloj","#inireloj","#detreloj")
    alarma("./assets/alarm.mp3","#inialarm","#detalarm")
    countdown(
        "countdown",
        "January 30, 2023 00:00:00",
        "Feliz cumple  pe"
    );
    buttontopscroll(".scroll-top-btn");
    darkTheme(".dark-theme-btn","dark-mode");
})

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})