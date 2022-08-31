/* **********     Curso JavaScript: 82. DOM: Ejercicios Prácticos | Reloj Digital - #jonmircha     ********** */
const d= document
export function relojDigital(reloj, inireloj,detreloj){
    let clockTempo;

    d.addEventListener("click", (e)=> {
       if (e.target.matches(inireloj)){
       clockTempo = setInterval(()=> {
            let clockHour = new Date().toLocaleTimeString();
            d.querySelector(reloj).innerHTML = `</h3>${clockHour} </h3>`;
        },1000)
        e.target.disabled = true;
    }
        if(e.target.matches(detreloj)){
            clearInterval(clockTempo);
            d.querySelector(reloj).innerHTML = null;
            d.querySelector(inireloj).disabled = false;
        }
});
}

export function alarma(alarma, inialarma,detalarma){
    let soundTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = alarma;
    d.addEventListener("click", e=> {
        if(e.target.matches(inialarma)){
            soundTempo=setTimeout(()=>{
                $alarm.play();
            },2000);
            e.target.disabled= true;
        }
        if(e.target.matches(detalarma)){
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(inialarma).disabled = false;
        }


    })


}