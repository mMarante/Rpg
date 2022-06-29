/* let barraca =[
    {id:1, nombre:"Aquiles", vida:100 , fuerza: 20, defensa:10, img:'./assets/img/Aquiles.webp', alt:`Aquiles`, info:`Heroe Semidios`},
    {id:2, nombre:"Hector", vida:150 , fuerza: 15, defensa:15, img:'./assets/img/Hector.webp', alt:`Hector`, info:`Principe de Troya`},
    {id:3, nombre:"Hercules", vida:90 , fuerza: 25, defensa:5, img:'./assets/img/Hercules.jpg', alt:`Hercules`, info:`Semidios hijo de Zeus`},
    {id:4, nombre:"Leonidas", vida:120 , fuerza: 10, defensa:20, img:'./assets/img/Leonidas.webp', alt:`Leonidas`, info:`Comandante Espartano`},
    {id:5, nombre:"Teseo", vida:80 , fuerza: 15, defensa:25, img:'./assets/img/Teseo.jpg', alt:`Teseo`, info:`Luchador del laberinto`},
    {id:6, nombre:"Maximo", vida:150 , fuerza: 15, defensa:10, img:'./assets/img/Maximo.jpg', alt:`Maximo`, info:`Comandante de las fuerzas del norte, general de las legiones fenix`}
];

class heroe{
    constructor(id,nombre,vida,fuerza,defensa,img,info){
        this.id = id;
        this.nombre = nombre;
        this.vida=vida;
        this.fuerza=fuerza;
        this.defensa=defensa;
        this.img=img;
        this.info=info;
    }
    
    atk(){
        return Math.round(Math.random()* this.fuerza + this.fuerza)
        }

    dfs(){
        return Math.round(Math.random()* this.defensa + this.defensa)
    }

    vivo(){
        return this.vida>0
    }

}


const Aquiles = new heroe(1,"Aquiles",100,15,10,'./assets/img/Aquiles.webp',`Heroe semidios`);
const Hector = new heroe(2,"Hector",120,10,10,'./assets/img/Hector.webp',`Principe Troyano`);

console.log= Aquiles;
console.log= Hector;
console.log= Aquiles.atk()
console.log= Aquiles.dfs() */