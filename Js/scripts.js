
// Simulador Rpg

let Pnj1= prompt("Personaje 1:")
let Pnj2= prompt("Personaje 2:")

let vidaPnj1= 100;
let vidaPnj2= 100;

let dfsMin=10;
let dfsMax=40;

let atkMin=10;
let atkMax=40;

let round= 0;

function ataque(){
 return Math.round(Math.random()* (atkMax-atkMin))  
}


function defensa(){
    return Math.round(Math.random()* (dfsMax-dfsMin))
}

function pelea(){
   return vidaPnj1 > 0 && vidaPnj2 > 0
}

function ganador(){
    return vidaPnj1 < 0
}


while(pelea()){
round+=1;
console.log("Round:" + round);

let atkPnj1 = ataque();
let atkPnj2 = ataque();

let dfsPnj1 = defensa();
let dfsPnj2 = defensa();


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

