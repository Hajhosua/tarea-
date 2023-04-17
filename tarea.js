const suma = (a,b) =>{

  return a+b;
  /**
   * a y b son los parámetros de entrada.
   * La función debe devolver la suma de los parámetros de entrada
   * Debes generar el código para que la función haga lo solicitado.
   */ 
}
let resultado = suma(2, 3);
console.log(resultado);



//-------------------------------------------------------------------------------
const sonIguales = (x, y)=>{
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Debes generar el código para que la función haga lo solicitado.

  if (x === y) {
      return true;
    } else {
      return false;
    }
}

let resultado1 = sonIguales(2, 2); 
let resultado2 = sonIguales(2, 3); 
console.log(resultado1);
console.log(resultado2);
//------------------------------------------------------------------------------
// Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:    
  
function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
      return console.log(true);
    } else {
      return console.log(false);
    }
}
let resultado3 = tienenMismaLongitud("hola", "hola"); 
let resultado4  = tienenMismaLongitud("ajammpp", "adios"); 

console.log(resultado3);
console.log(resultado4);

//------------------------------------------------------------------------------------

function esPositivo(numero) {
  /**
   * la función recibe como parámetro de entrada un número entero.
   * Devuelve como resultado una cadena de texto que indica si el 
   * número es positivo o negativo. 
   * Si el número es positivo, devolver ---> "Es positivo"
   * Si el número es negativo, devolver ---> "Es negativo"
   * Si el número es 0, devuelve false
   * Tu código:
   */

  if (numero > 0) {
      return "Es positivo";
    } else if (numero < 0) {
      return "Es negativo";
    } else {
      return false;
    }

}
let resultado5 = esPositivo(5); 
let resultado6 = esPositivo(-2); 
let resultado7 = esPositivo(0); 
console.log(resultado6);

//--------------------------------------------------------------------------------------------------

const colors = (color)=>{
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
      case "blue":
        return "This is blue";
      case "red":
        return "This is red";
      case "green":
        return "This is green";
      case "orange":
        return "This is orange";
      default:
        return "Color not found";
    }
  
}

let resultado8 = colors("blue"); 
let resultado9 = colors("red"); 
let resultado10 = colors("green"); 
let resultad11 = colors("orange"); 
let resultad12 = colors("purple"); 

console.log(resultad12);

//-------------------------------------------------------------------------------------------------------------

const fizzBuzz = (numero)  => {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
      return "fizzbuzz";
    } else if (numero % 3 === 0) {
      return "fizz";
    } else if (numero % 5 === 0) {
      return "buzz";
    } else {
      return numero;
    }
  
}
let resultado13 = fizzBuzz(3); 
let resultado14 = fizzBuzz(5); 
let resultado15 = fizzBuzz(15); 
let resultado16 = fizzBuzz(7); 
 
console.log(resultado16);

//------------------------------------------------------------------------------------------------------------------


const devolverPrimerElemento = (array) => {
  /**
   * La función recibe como parámetro de entrada un arreglo.
   * La función debe regresar el primer elemento del arreglo
   */
  // Tu código:

  return array[0]
 
}

let arreglo1 = [1, 2, 3];
let primerElemento1 = devolverPrimerElemento(arreglo1); 

let arreglo2 = ['a', 'b', 'c'];
let primerElemento2 = devolverPrimerElemento(arreglo2); 

console.log(primerElemento2);

//----------------------------------------------------------------------------------------------------------------------

const agregarItemAlFinalDelArray = (array, elemento) =>{
  /**
   * La función recibe dos parámetros de entrada, un arreglo y un elemento
   * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
   */
  // Tu código:

  array.push(elemento);
return array;
}

let arregloone = [1, 2, 3];
let arregloModificado1 = agregarItemAlFinalDelArray(arregloone, 4); // [1, 2, 3, 4]

let arregrtree = ['a', 'b', 'c'];
let arregloModificado2 = agregarItemAlFinalDelArray(arregrtree, 'd'); // ['a', 'b', 'c', 'd']
console.log(arregloModificado2);
console.log(arregloModificado1);

//--------------------------------------------------------------------------------------------------------------


const nuevoUsuario = (nombre, email, password) => {
  /**
   * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
   * que se pasan a la función.  Devuelve el objeto
   */
  // Tu código:

  return { 
      propiedad1: nombre,
      propiedad2: email,
      propiedad3: password
    };
}

const nuevoObjeto = nuevoUsuario("josue", "josue@gmail", "123");
console.log(nuevoObjeto); 

//-----------------------------------------------------------------------------------------
const verificarPassword = (usuario, password) => {
  // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  return usuario.password === password;
}

const miUsuario = {
  username: "user123",
  password: "secreto"
};

console.log(verificarPassword(miUsuario, "secreto")); 
console.log(verificarPassword(miUsuario, "clave")); 

//-------------------------------------------------------------------------------------------------------------
const actualizarPassword =(usuario, nuevaPassword) => {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

  usuario.password = nuevaPassword;
  return usuario;
  
}

const usuario = {
  nombre: 'Juan',
  apellido: 'Pérez',
  email: 'juanperez@gmail.com',
  password: '123456'
};

const nuevoUsua = actualizarPassword(usuario, 'abcdef');

console.log(nuevoUsua);


//-----------------------------------------------------------------------------------------------------------------
const agregarAmigo = (usuario, nuevoAmigo) => {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
 
}

let miUsuario_ = { nombre: "Juan", amigos: ["Pedro", "María"] };
miUsuario_ = agregarAmigo(miUsuario_, "Carlos");
console.log(miUsuario_);


//------------------------------------------------------------------------------------------------------------------
const pasarUsuarioAPremium = usuarios => {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  return usuarios.map(usuario => {
      usuario.esPremium = true;
      return usuario;
    });
}

const usuarios = [
  { nombre: 'Juan', esPremium: false },
  { nombre: 'María', esPremium: false },
  { nombre: 'Pedro', esPremium: false }
];

console.log(pasarUsuarioAPremium(usuarios));


//-------------------------------------------------------------------------------------------------

const sumarLikesDeUsuario = usuario => {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  let suma = 0;
usuario.posts.forEach(post => {
  suma += post.likes;
});
return suma;
  

}
const usuario_ = {
  posts: [
    { likes: 10 },
    { likes: 20 },
    { likes: 5 },
  ]
};

console.log(sumarLikesDeUsuario(usuario_)); 

//-----------------------------------------------------------------------
class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //un ejemplo del objeto es el siguiente
  
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
  
    detalle() {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio
      };
    }
  }
  const persona1 = new Persona("Juan", "Pérez", 30, "Calle  123");
  console.log(persona1.detalle()); 


  //-----------------------------------------------------------------------------------------
  const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
      //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
      //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
      //Devolver la nueva persona creada

       // Creamos una nueva instancia de la clase "Persona" utilizando el constructor que definimos anteriormente:
const nuevaPersona = new Persona(nombre, apellido, edad, dir);

// Devolvemos la nueva persona creada:
return nuevaPersona;


  }


  const nuevaPersona = crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123");
console.log(nuevaPersona.detalle());


//-------------------------------------------------------------------------------------------------------
  const sumarArray = (numeros, cb) =>{
      // Suma todos los números enteros (int/integers) de un array ("numeros")
      // Pasa el resultado a `cb`
      // No es necesario devolver nada

           
let suma = 0;

for (let i = 0; i < numeros.length; i++) {

  if (Number.isInteger(numeros[i])) {
   
    suma += numeros[i];
  }
}

cb(suma);
  }

  const numeros = [1, 2, 3, 4, 5, 6.7, "8", true, false, -9];
sumarArray(numeros, (resultado) => {
console.log("El resultado de la suma es:", resultado);
});

//-------------------------------------------------------------------------------------------------------

const copiarEach = (array, cb) =>{
  // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
  // no tienes que devolver nada

  for (let i = 0; i < array.length; i++) {
      cb(array[i]);
    };
  
};

//-------------------------------------------------------------------------------------------------------
const operacionMatematica =(n1, n2, cb) =>{
  //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
  //Devolver la función pasándole como argumentos los números recibidos.
  //Tu código:
  
  return () => {
      return cb(n1, n2);
      }
    
};


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  const filteredArray = array.filter(element => element.startsWith('a'));
  return filteredArray;
} 


module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

