
console.log(barraca);

const containerCartas = document.querySelector(`#containerCartas`)
const coliseo = document.querySelector(`#coliseo`)

barraca.forEach(heroe => {
    const div = document.createElement (`div`)
    div.classList.add(`card`)
    /* div.setAttribute(onclick="aLaArena(${heroe.id})"); */

    div.innerHTML = ` 
                <img class="imagenCarta" src=${heroe.img} alt=${heroe.alt}>
                <h2>${heroe.nombre}</h2>
                <p>${heroe.info}</p>
                    <div class="barraEstado">
                    <span class=atributo id="vida"><img src="./assets/img/heart-solid.svg" alt="vida"> ${heroe.vida}</span>
                    <span class=atributo id="atk"><img src="./assets/img/hand-fist-solid.svg" alt="atk"> ${heroe.fuerza}</span>
                    <span class=atributo id="dfs"><img src="./assets/img/shield-halved-solid.svg" alt="dfs"> ${heroe.defensa}</span>
                    </div>
                    <img src="./assets/img/dungeon-solid.svg" alt="arena" onclick="aLaArena (${heroe.id})" class="btnDungeon"></img>
                       
             `
    
             containerCartas.append(div)   
});

const arena= [];

const aLaArena = (id) => {
    const pnj= barraca.find( (heroe) => heroe.id === id)
    if (arena.length<2){
        arena.push(pnj)
    }else{
        arena.pop();
        arena.push(pnj) 
    }
    renderArena();
   /*  eliminarPersonajeBarraca(); */    
    console.log(arena)

}


const eliminarPersonaje = (id) => {
    const pnj= arena.find( (heroe) => heroe.id === id)
    const index= arena.indexOf(pnj)
    arena.splice(index,1)

    console.log(arena)
    renderArena()

}

/* const eliminarPersonajeBarraca = (id) => {
    const pnj= barraca.find( (heroe) => heroe.id === id)
    const index= barraca.indexOf(pnj)
    barraca.splice(index,1)

    console.log(barraca)
} */


const renderArena = () =>{
    coliseo.innerHTML = ""
    arena.forEach((heroe) => {
        const div= document.createElement(`div`)
        div.classList.add(`heroeColiseo`)
        div.innerHTML= `<img src="${heroe.img}" alt="${heroe.alt}"> 
            <h2>${heroe.nombre}</h2>
            <button alt="equis" onclick="eliminarPersonaje (${heroe.id})" class="eliminar"><img src="./assets/img/circle-xmark-solid.svg" alt="equis"></button>
        ` 
        coliseo.append(div)      
    });
}



/* 
// Simulador Rpg
class heroe{
    constructor(id,nombre,fuerza,defensa,vida){
        this.id=id;
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.defensa= defensa;
        this.vida= vida;

    }
    
    bloqueo(){
        return Math.round(Math.random()* this.defensa + this.defensa)
    };
    
    
    ataque(){
        return Math.round(Math.random()* this.fuerza + this.fuerza)
    };
    

    pnjInfo(){
        return`
        Id: <b>  ${this.id} </b></br>
        Nombre: <b>  ${this.nombre} </b></br>
        Fuerza: <b>  ${this.fuerza} </b></br>
        Defensa: <b> ${this.defensa} </b></br>
        Vida: <b> ${this.vida} </b></br>`
    }

    }

aquiles = new heroe(1,"Aquiles",20,10,100);
hector = new heroe(2,"Hector",10,15,120);
ajax = new heroe(3,"Ajax",10,10,150);
bruto = new heroe(4,"Bruto",25,5,80);
hercules = new heroe(5,"Hercules",30,10,50);
maximo = new heroe(6,"Maximo Decimo",15,15,90);
jabrony = new heroe(7,"Jabrony",90,40,200);

let barraca = [aquiles,hector,ajax,bruto,hercules,maximo,jabrony]
let arena = []


const containerCartas = document.querySelector(`#containerCartas`);
const div= document.createElement(`div`);
div.classList.add(`card`)
div.innerHTML = `  <img class="imagenCarta" src=${barraca.img} alt=${barraca.alt}>
                    <p> Aquiles dios de los mortales y gran patriarca de grecia <hr></p>
                    <div class="barraEstado">
                    <span class=atributo id="vida"><img src="./assets/img/heart-solid.svg" alt="vida"> 100</span>
                    <span class=atributo id="atk"><img src="./assets/img/hand-fist-solid.svg" alt="atk"> 20</span>
                    <span class=atributo id="dfs"><img src="./assets/img/shield-halved-solid.svg" alt="dfs"> 10</span>
                    </div> 
`


document.write(`
    ${aquiles.pnjInfo()}<br>
    ${hector.pnjInfo()}<br>
    ${ajax.pnjInfo()}<br>
    ${bruto.pnjInfo()}<br>
    ${hercules.pnjInfo()}<br>
    ${maximo.pnjInfo()}<br>
    ${jabrony.pnjInfo()}<br>
    `);

//BUSCADOR
function aLaArena(id) {
    let pnjId= barraca.find(heroe=>heroe.id==id);
  if(arena.length<2){
    arena.push(pnjId) }
    else{
        arena.pop();
        arena.push(pnjId);
    }
}

//FUNCION ELEGIR PERSONAJE
  aLaArena(3);
  aLaArena(2);;
  console.log(arena);

//FILTRO  
let personajesFuertes = barraca.filter((heroe) => heroe.fuerza > 10)
console.log(personajesFuertes)

  let round= 0;  
  let pnj1 = arena[0];
  let pnj2 = arena[1];
  let vidaPnj1 = pnj1.vida;
  let vidaPnj2 = pnj2.vida;
  
console.log(pnj1.ataque());
console.log(pnj1.bloqueo());

function pelea(){
    return vidaPnj1 > 0 && vidaPnj2 > 0
};


function atk(){
    if(pnj1.ataque()>pnj2.bloqueo()){
        vidaPnj2= vidaPnj2 - (pnj1.ataque() - pnj2.bloqueo()); 
        console.log(`${pnj1.nombre} ataca ${pnj1.ataque()}`);    
    }
    else{
        console.log(`${pnj2.nombre} bloquea a ${pnj1.nombre}`);
    }


    if(pnj2.ataque()>pnj1.bloqueo()){
        vidaPnj1= vidaPnj1 - (pnj2.ataque() - pnj1.bloqueo()); 
        console.log(`${pnj2.nombre} ataca ${pnj2.ataque()}`);    
    }
    else{
        console.log(`${pnj1.nombre} bloquea a ${pnj2.nombre}`);
    }

};




while(pelea()){
    round++;
    console.log("Round: " + round);
    atk();
    console.log (`vida ${pnj1.nombre}:` + vidaPnj1);
    console.log (`vida ${pnj2.nombre}:` + vidaPnj2);
};



function ganador(){
    return vidaPnj1<0
};



if(ganador()){
    console.log(`Gano ${pnj2.nombre}`);
    document.write(`Felicitaciones ${pnj2.nombre}`);
}else{
    console.log(`Gano ${pnj1.nombre}`);
    document.write(`Felicitaciones ${pnj1.nombre}`);
}


/*  
let round= 0;





while(pelea()){
round+=1;
console.log("Round:" + round);


if(atkPnj1>dfsPnj2){
vidaPnj2= vidaPnj2 - (atkPnj1 - dfsPnj2);
console.log(`${Pnj1} ataca ${atkPnj1}`);

}else{
    console.log(`${Pnj2} bloquea a ${Pnj1}`);
}

if(atkPnj2>dfsPnj1){
    vidaPnj1= vidaPnj1 - (atkPnj2 - dfsPnj1);
    console.log(`${Pnj2} ataca ${atkPnj2}`);
    
    }else{
        console.log(`${Pnj1} bloquea a ${Pnj2}`);
    }

console.log(`vida ${Pnj1}: ${vidaPnj1}`);
console.log(`vida ${Pnj2}: ${vidaPnj2}`);

}

if(ganador()){
    console.log(`Gano ${Pnj2}`);
    document.write(`Felicitaciones ${Pnj2}`);
}else{
    console.log(`Gano ${Pnj1}`);
    document.write(`Felicitaciones ${Pnj1}`);
}

 */