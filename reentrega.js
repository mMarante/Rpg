
// Simulador Rpg
class heroe{
    constructor(id,nombre,fuerza,defensa,vida,img,alt,info){
        this.id=id;
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.defensa= defensa;
        this.vida= vida;
        this.img= img;
        this.alt= alt;
        this.info=info;

    }
    
    dfs(){
        return Math.round(Math.random()* this.defensa + this.defensa)
    };
    
    
    atk(){
        return Math.round(Math.random()* this.fuerza + this.fuerza)
    };
    
    vivo(){
        return this.vida>0
    }

    pnjInfo(){
        return`
        Id: <b>  ${this.id} </b></br>
        Nombre: <b>  ${this.nombre} </b></br>
        Fuerza: <b>  ${this.fuerza} </b></br>
        Defensa: <b> ${this.defensa} </b></br>
        Vida: <b> ${this.vida} </b></br>`
    }
    
    }

aquiles = new heroe(1,"Aquiles",20,10,100,"./assets/img/Aquiles.webp","Foto-Aquiles","Heroe Semidios");
hector = new heroe(2,"Hector",15,10,120,"./assets/img/Hector.webp","Foto-Hector","Principe Troyano");
ajax = new heroe(3,"Ajax",10,15,150,"./assets/img/Ajax.jpg","Foto-Ajax","Comandante Troyano");
leonidas = new heroe(4,"Leonidas",25,5,80,"./assets/img/Leonidas.webp","Foto-Leonidas","Heroes Espartano");
hercules = new heroe(5,"Hercules",30,10,50,"./assets/img/Hercules.jpg","Foto-Hercules","Semidios hijo de Zeus");
maximo = new heroe(6,"Maximo Decimo",15,15,90,"./assets/img/Maximo.jpg","Foto-Maximo","Comandante de las fuerzas del norte");
teseo = new heroe(7,"Teseo",90,40,200,"./assets/img/Teseo.jpg","Foto-Teseo","Luchador del laberinto");

let barraca = [aquiles,hector,ajax,leonidas,hercules,maximo,teseo]
let arena = []


function showInfo(){
document.write(`
    ${aquiles.pnjInfo()}<br>
    ${hector.pnjInfo()}<br>
    ${ajax.pnjInfo()}<br>
    ${leonidas.pnjInfo()}<br>
    ${hercules.pnjInfo()}<br>
    ${maximo.pnjInfo()}<br>
    ${teseo.pnjInfo()}<br>
    `)};


 // DOM
const containerCartas = document.querySelector(`#containerCartas`)
const coliseo = document.querySelector(`#coliseo`)
const vs= document.querySelector(`#fight`)
const roundom= document.querySelector(`#round`)    


//Funciones
function aLaArena(id) {
    let pnjId= barraca.find(heroe=>heroe.id==id);
  if(arena.length<2){
    arena.push(pnjId);
    barraca.splice(barraca.indexOf(pnjId),1);
}
    else{
        barraca.push(arena[1]);
        arena.pop(pnjId);
        arena.push(pnjId);
        barraca.splice(barraca.indexOf(pnjId),1);
    }

    console.log(arena);
    console.log(barraca);
};

function aLaBarraca(id) {

    roundom.innerHTML=""
    let pnjId= arena.find(heroe=>heroe.id==id);
        arena.splice(arena.indexOf(pnjId),1);
        barraca.push(pnjId);
};

function fight(pnj1,pnj2){
    const logdom= document.querySelector(`#raund`)
    let log= document.createElement(`div`);
    log.classList.add(`fightlog`)
    logdom.append(log);

    if(pnj1.atk()>pnj2.dfs()){
        let attackpnj1= (pnj1.atk()-pnj2.dfs());

        if(attackpnj1>0){
        pnj2.vida= pnj2.vida - attackpnj1; 
        console.log(`${pnj1.nombre} ataca ${attackpnj1}`);
        console.log (attackpnj1);
        log.innerHTML+=`<br>${pnj1.nombre} ataca ${attackpnj1}`}
        
    }
    else{
        log.innerHTML+=`<br>${pnj2.nombre} bloquea a ${pnj1.nombre}`;
    }

    if(pnj2.atk()>pnj1.dfs()){
        let attackpnj2= (pnj2.atk()-pnj1.dfs());
        if(attackpnj2>0){
        pnj1.vida= pnj1.vida - attackpnj2; 
        console.log(`${pnj2.nombre} ataca ${attackpnj2}`);
        log.innerHTML+=`<br>${pnj2.nombre} ataca ${attackpnj2}`   } 
    }
    else{
        console.log(`${pnj1.nombre} bloquea a ${pnj2.nombre}`);
        log.innerHTML+=`<br>${pnj1.nombre} bloquea a ${pnj2.nombre}`;

    }

};

function round(pnj1,pnj2){
roundom.innerHTML="" 
let raund= document.createElement("div")
raund.classList.add(`raund`)
raund.setAttribute(`id`,`raund`)
roundom.append(raund);

    let round = 0;
    while(pnj1.vida>=0 && pnj2.vida>=0){
        console.log(`Round: ` + round);
        raund.innerHTML+=`<h2>Round: ${round}<h2>`
        fight(pnj1,pnj2);
        console.log(`Vida ${pnj1.nombre}: ${pnj1.vida}`)
        console.log(`Vida ${pnj2.nombre}: ${pnj2.vida}`)
        raund.innerHTML+=`<br> Vida ${pnj1.nombre}: ${pnj1.vida} <br> Vida ${pnj2.nombre}: ${pnj2.vida}` 

        if(pnj1.vida<0){
            raund.innerHTML+=`<div class=ganador><H1>Gano ${pnj2.nombre}</H1><img src=${pnj2.img}></div>`
        }else if (pnj2.vida<0){
            raund.innerHTML+=`<div class=ganador><H1>Gano ${pnj1.nombre}</H1><img src=${pnj1.img}></div>`
        }else{
            round++;
        }


    }
};

const renderBarraca = () =>{

containerCartas.innerHTML=""
barraca.forEach((heroe) => {
    const div = document.createElement("div");
    div.classList.add('card');
    div.setAttribute("onclick",`aLaArena(${(heroe.id)}),renderArena(),renderBarraca()`);
div.innerHTML = `
        
        <div class="img"><img src=${heroe.img} alt=${heroe.alt}></div>
    
        <div class="info"><p><H2>${heroe.nombre}</H2>${heroe.info}</p></div>
    
        <div class="stats">
        <span><img src="./assets/img/icons/heart-solid.svg"alt="vida"><p>${heroe.vida}</p></span>
        <span><img src="./assets/img/icons/hand-fist-solid.svg"alt="fuerza"><p>${heroe.fuerza}</p></span>
        <span><img src="./assets/img/icons/shield-halved-solid.svg"alt="defensa"><p>${heroe.defensa}</p></span>
        
        </div>
 `
containerCartas.append(div)
    });
};

const renderArena = () =>{
    coliseo.innerHTML = "";
    arena.forEach((heroe) => {
        const div= document.createElement(`div`)
        div.classList.add(`heroeColiseo`)
        div.setAttribute("onclick",`aLaBarraca(${(heroe.id)}),renderArena(),renderBarraca()`);
        div.innerHTML= `
        <img src="${heroe.img}" alt="${heroe.alt}">     
        <h2>${heroe.nombre}</h2> `
        coliseo.append(div)    
    });

    if(arena.length==2){

        const div= document.createElement(`div`)
        div.classList.add(`vs`)
        div.setAttribute("onclick",`round(arena[0],arena[1])`);
        div.innerHTML=`<h1>LUCHA</h1>`
        vs.innerHTML=''
        vs.append(div);
    }else{
        vs.innerHTML=""
    }
};

function capturarPersonaje(){
    event.preventDefault();

    let nombre= document.getElementById("name").value;
    let info = document.getElementById("info").value;
    let vida = document.getElementById("life").value;
    let fuerza = document.getElementById("strength").value;
    let defensa = document.getElementById("defense").value;

  let heroeCustom = { id: barraca.length + 1,
                        nombre: nombre,
                        vida: vida,
                        fuerza: fuerza,
                        defensa: defensa,
                        img: "./assets/img/isildur.jpg",
                        info: info }

   console.log(heroeCustom);
   localStorage.setItem("heroe",JSON.stringify(heroeCustom));
   
}

function crearPersonaje(){
    const storage = JSON.parse(localStorage.getItem("heroe"));
    console.log(storage)
    console.log(storage.nombre)
    const heroeCustom = storage.nombre = new heroe (storage.id,storage.nombre,storage.fuerza,storage.defensa,storage.vida,storage.img,"heroecustom",storage.info);
    barraca.push(heroeCustom);
    renderBarraca();
}



renderBarraca();


/* 

function empezar(){
    if((prompt("Empezamos? S/N (may)")) == "S"){
        alert("vamo a juga")
        return showInfo(), elegir();}else{alert("Para jugar ponele S mayuscula!!!")}    
}

empezar()
//FUNCION ELEGIR PERSONAJE

function elegir(){
    aLaArena(prompt("Id personaje 1"));
    aLaArena(prompt("Id personaje 2"));
}
  
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
 */



/* while(pelea()){
    round++;
    console.log("Round: " + round);
    atk();
    console.log (`vida ${pnj1.nombre}:` + vidaPnj1);
    console.log (`vida ${pnj2.nombre}:` + vidaPnj2);
};
 */


/* function ganador(){
    return vidaPnj1<0
};

 */

/* if(ganador()){
    console.log(`Gano ${pnj2.nombre}`);
    document.write(`Felicitaciones ${pnj2.nombre}`);
}else{
    console.log(`Gano ${pnj1.nombre}`);
    document.write(`Felicitaciones ${pnj1.nombre}`);
}

 */
