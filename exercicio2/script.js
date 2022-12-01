/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/


let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();
let pais

switch(nacionalidade){
    case "brasileira":
        pais = "do Brasil"
        break
    case "argentina":
        pais = "da Argentina"
        break
    case "uruguaia":
        pais = "do Uruguai"
        break
    case "chilena":
        pais = "do Chile"
        break
    case "colombiana":
        pais = "da Colômbia"
        break
    default:
        console.log("Nacionalidade não encontrada")
        break
}

console.log("A pessoa é", pais)