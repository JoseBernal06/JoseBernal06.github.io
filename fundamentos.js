
// variables

// let y const

//const algo fijo que no cambia

// tipos de datos
let data1=42; 
let data2= 2.5;
let data3="Mateo" ;
let data4=false;
let data5; 
let data6 ='@' ;//char
let data7 = null; //null

//console.log(data2);


//tipos de datos

//Array
let data8=["Mateo", "Juan", "Marcelo", 4]; 

// objeto
let datos={
    name:"Mateo",
    city:"Quito",
    age:20
}

//console.log(datos.age);

//------------------------------------------------------------------------------

// ?strings (propiedades y metodos)

let password="password";

//Metodos
console.log(password.length);
console.log(password.trim()); //remueve los espacios en blancos de las cadenas de texto
console.log(password.includes('6')); //compara si hay un elemento en la cadena de texto (valor booleano)
console.log(password.toLocaleUpperCase()); //convierte todo en mayusculas
console.log(password.toLocaleLowerCase()); //convierte todo en minusculas


//ES6 - nuevas caracteristicas
console.log(`El password es: ${password}`);

//-----------------------------------------------------------------------------

// ?Casting - ES6
let number_uno="100.15"
let number_dos=100

console.log(+number_uno+number_dos);

//jerarquia de operadores (* / + - ** ())

//-----------------------------------------------------------------------------

// ?Condiciones
let moneda_uno=12;
let moneda_dos=15;

if (moneda_uno<=moneda_dos) {
    console.log("uno")

}else{
    console.log("dos");
}

// ES6 - operador ternario
moneda_uno<=moneda_dos ? console.log("uno") : console.log("dos");

let nombre;
!nombre ? console.log("Sin nombre") : console.log("Hola");

//----------------------------------------------------------------------------

// ?Valores falso y verdaderos

//comparacion estricta
let vidas='6';
vidas === 6 ? console.log("Pasa nivel") : console.log("Sigue");
vidas == 6 ? console.log("Pasa nivel") : console.log("Sigue");

//---------------------------------------------------------------------------

// ?Loops

const goals=["Mateo", "Juan", "Marcelo", "Maria"]

goals.forEach(x => {
    console.log(x);
});



for (let i = 0; i < goals.length; i++) {
    const element = goals[i];
    console.log(element);
}

newGoals = goals.map((x)=>x.toLocaleUpperCase());
console.log(newGoals);

//-----------------------------------------------------------------------------

// ?Funciones
// funciones autoejecutadas y anonimas
(function() {
    console.log("Hola mundo")
})
()

//Funciones declaradas
function getGokuAvatar() {
    console.log("photo/avatar/goku.png")
}
getGokuAvatar();


//Funciones expresadas
const gokuBatalla = function() {
    console.log("Listo para pelear")
}
gokuBatalla()


//Funcion flecha
const batalla=()=>{
    console.log("..........Adios")
    //nfn
}
batalla()

const poder = (x) => { console.log("Golllllll") }
poder()

//------------------------------------------------------------------------------

// ?Argumentos

const email=function(mail, token) {
    console.log(`El token ${token} del email`)
}
email("mateo@gmail.com", 1546)



// Argumetos opcionales
const email_dos=function(token, mail="Mateo@gmail.com"){
    console.log(`El token ${token} del email ${mail}`)
}
email_dos(1546)

//Retorno
function retornoCapitulo() {
    //return "Nuevo Capitulo";
    //return 5;
    //return {nombre: "Hola", episodio: 74}
    return function() {
        return 5
    }
}
console.log(retornoCapitulo()())


//----------------------------------------------------------------------------

//Objetos

const orense = {
    name:"Orense",
    age:20,
    address:{city:"Machala", telephone:123456},
    friends:["cocodrilo","leon"],
    status:true
}

console.log(orense)
console.log(orense.name)
console.log(orense.age)
console.log(orense.address.city)
orense.friends.forEach(x=>console.log(x));


//Desestructuracion

//let name=orense.name
//let age=orense.age

let {name:nombre_equipo, age:edad, friends:amigos}=orense
console.log("-------------------------------------------------------------------")
console.log(nombre_equipo)
console.log(edad)
console.log(amigos)


//Metodos

const datosBB = {
    name:"Bunny",
    age:10,
    address:{city:"Orlando", telephone:9999},
    friends:["a","b"],
    status:false
}

//agregar datos a objetos
datosBB.photo = "bunny.jpg"
console.log(datosBB)

//borrar dato
delete datosBB.age
console.log(datosBB)


//----------------------------------------------------------------------------------------

//verifica si las claves tienen valores
Object.keys(datosBB).includes("") ? console.log("Falta clave"):console.log("Tiene clave");


//verifica si los valores no tienen valores
Object.values(datosBB).includes("") ? console.log("Falta valor"):console.log("Tiene valor");

//----------------------------------------------------------------------------------------

const datosBB_2= {
    nameN:"Naruto",
    ageN:17,
    addressN:{city:"konoha", telephone:9999},
    friendsN:["a","b"],
    statusN:false
}

const union = {...datosBB, ...datosBB_2}
console.log(union)
