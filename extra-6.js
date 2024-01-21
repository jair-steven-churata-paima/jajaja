/* Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) 
y al array `badProducts` los que tengan menos. */

const goodProducts = [];
const badProducts = [];
const movies = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for(let i = 0; i < movies.length; i++){
    if(movies[i].sellCount >20){
        goodProducts.push(movies[i]);
    }
    if(movies[i].sellCount < 20){
        badProducts.push(movies[i]);
    }
}
console.log(goodProducts);

console.log(badProducts);