const buscandoAWally = ["carlos","roberto","wally","juan augusto"];
function buscandoAWallyy(buscandoAWally){
    let encontrado;
    encontrado=buscandoAWally.find("wally")
    return(`Wally se encuentra en la posicion ${encontrado}`)
}
module.exports = buscandoAWallyy