/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */
const d = document,
w = window;

export default function buttontopscroll(btn){
const $scrollBtn = d.querySelector(btn);

w.addEventListener("scroll", (e) =>{
    let scrollTop= w.pageYOffset || d.documentElement.scrollTop;
    
    if(scrollTop>600){
        $scrollBtn.classList.remove("hidden");
    } else 
    {
        console.log($scrollBtn)
        $scrollBtn.classList.add("hidden");
    }
});
d.addEventListener("click", e =>{
    if(e.target.matches(btn)){
        w.scrollTo({
            behavior:"smooth",
            top: 0,

        })
    }
});
}