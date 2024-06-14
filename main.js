import { countriesData } from "./countries_data";

console.log(countriesData);

// Ejercicios: Nivel 1
// const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Joseph", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];


// Utiliza forEach para mostrar con console.log cada país del array de países.

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
countries.forEach(country => {
    console.log(country);
});

// Utiliza forEach para mostrar con console.log cada nombre del array de nombres.

const names = ["Joseph", "Mathias", "Elias", "Brook"];
names.forEach(firstName => {
    console.log("Nombre:" firstName);
});

// Utiliza forEach para mostrar con console.log cada número del array de números.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {
    console.log(number);
});


// Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.


// Utilice map para crear un array de longitudes de países a partir del array de países.

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
const countriesLengths = countries.map(country => country.length);

console.log(countriesLengths);


// Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.

// Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.

const names = ["Joseph", "Mathias", "Elias", "Brook"];
names.map(firstName => {
    console.log(firstName);
});


// Utilice map para asignar el array de productos a sus correspondientes precios.


// Utilice filter para filtrar los países que contienen land.

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
const countriesLand = countries.filter((country) => 
    country.toLowerCase().includes("land")
);
console.log(countriesLand);
 
// Utilice filter para filtrar los países que tienen seis caracteres.

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
const countriesSixChar = countries.filter(country => country.length === 6);
console.log(countriesSixChar); 


// Utilice filter para filtrar los países que contengan seis letras o más en el array de países.

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
const countriesSixChar = countries.filter(country => country.length >= 6);
console.log(countriesSixChar); 

// Utilice filter para filtrar los países que empiezan por "E";

// Utilice filter para filtrar sólo los precios con valores.

// Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.

// Usa reduce para sumar todos los números del array de números.

// Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa

const concatenatedPhrase = countries.reduce(
    (accumulator, currentValue, index) =>
)

// Explique la diferencia entre some y every

// Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.

// Utilice every para comprobar si todos los países contienen la palabra land.

// Explique la diferencia entre find y findIndex.

// Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.

// Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.

// Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.

// Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.

// Encuentre la suma del precio de los productos usando sólo reduce(callback)).

// Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.

const getStartingLetter = (acc, currentValue) => newAcc;



// Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.

// Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.

// Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)

// Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población

// *** Encuentre las 10 lenguas más habladas:

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
// *** Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.
// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// // ```