/* **********     Curso JavaScript: 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */
const d= document;

export function shortcuts(e){
    console.log(e);
    console.log(e.type);
    console.log(e.keyCode);
    console.log(`ctrl:${e.ctrlKey}`);
    console.log(`alt:${e.altKey}`);
    console.log(`shift:${e.shiftKey}`);
    console.log(e.key);

    if(e.key==="a" && e.altKey){
        alert("haz lanzado una alerta de teclado")
    }
    if (e.key==="c" && e.altKey){
        alert("haz lanzado una alerta pe cauro")
    } 
    if (e.key==="p" && e.altKey){
        prompt("haz lanzado un aviso")
    } 
}
