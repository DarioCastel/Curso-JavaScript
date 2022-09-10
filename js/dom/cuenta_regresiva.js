/* **********     Curso JavaScript: 86. DOM: Ejercicios Prácticos | Cuenta Regresiva(countdown) - #jonmircha     ********** */
const d = document
export default function countdown(cuentaregre,fecha,mensaje){
    const $countdown = d.getElementById(cuentaregre),
    fecha_limite= new Date(fecha).getTime();

    let regreso = setInterval(()=>{
     let fecha_actual = new Date().getTime(),
        falta = fecha_limite - fecha_actual,
        dia =Math.floor(falta/(1000 * 60 * 60 * 24)),
        hora= Math.floor(falta % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)),
        minutos= Math.floor(falta % (1000 * 60 * 60)/(1000 * 60)),
        segundos= Math.floor(falta % (1000 * 60)/(1000));

        $countdown.innerHTML = `<h3>Faltan ${dia} dias ${hora} horas ${minutos} minutos y ${segundos}segundos</h3>`;


        if(fecha_limite<0){
        clearInterval(regreso);
        $countdown.innerHTML = `<h3>${mensaje}</h3>`;
     }


    },1000)
} 

