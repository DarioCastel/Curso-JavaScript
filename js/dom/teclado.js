/* **********     Curso JavaScript: 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */
const d= document;
let x= 0,y=0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitBall=$ball.getBoundingClientRect(),
        limitStage=$stage.getBoundingClientRect();
   // console.log(e.keyCode)

switch(e.keyCode){
        case 37: 
        //("left")
        if(limitBall.left>limitStage.left) {x--;
        e.preventDefault();}
        break;
        case 38: 
        //("up")
        if(limitBall.top>limitStage.top){y--;
        e.preventDefault();}
        break;
        case 39: 
        //("right")
        if(limitBall.right<limitStage.right){x++;
        e.preventDefault();}
        break;
        case 40: 
        //("down")
        if(limitBall.bottom<limitStage.bottom){y++;
        e.preventDefault();}
        break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`
}

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
