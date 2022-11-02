const productos = [
    {id:1, nombres:'escuadra',precio:320},
    {id:2, nombres:'calculadora',precio:340},
    {id:3, nombres:' globo terraqueo',precio:50},
    {id:4, nombres:'paleta pintura',precio:460},
    {id:5, nombres:'relog',precio:70},
    {id:6, nombres:'agenda',precio:80}
]

const nombreProductos = productos.map((e) => e.nombres).join(',');
console.log(nombreProductos);

let total = 0;


// A) Los nombres de los productos en un string separados por comas. (reduce + foreach + for)
// B) El precio total (reduce + for + foreach)
// C) El precio promedio (reduce + for + foreach)
// D) El producto con menor precio (for (aux))
// E) El producto con mayor precio (for (aux))
// F) Con los datos de los puntos A al E crear un objeto y representarlo por consola
// Const resultado = {a: 100, b: res2, c:  res3….}
// (Math.trunc)
