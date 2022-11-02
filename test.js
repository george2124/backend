const fs = require('fs');

function grabar(){

}
fs.promises.writeFile('./data.txt', 'INICIO!\n').then(()=>{
    console.log('salio bien')
})
.catch((e)=>{
    console.log('salio mal')
})
grabarYAgregar()


// console.log(first)
// fs.writeFileSync('./data.txt', 'INICIO!\n', ()=> {
//     console.log('termine de grabar el archivo')
// });

// console.log('2')



// try{
    
//     const date = new Date()
    
//     fs.writeFileSync('./fyh.txt',date.toString())
    
//     const file = await fs.readFileSync('./fyh.txt','utf-8')
    
//     console.log(file)
// } catch(err) {
//     console.log(err)
// }


//De froma asincrona

//ejemplo de clase forma sincronica
//creo data
 fs.writeFileSync("./data.txt", "Inicio!\n");
 //Agrego data
 fs.oppendFileSync("./data.txt", "Otra cosa1\n");
 fs.oppendFileSync("./data.txt", "Otra cosa2\n");
 const dataRecuperadaDelArchivo = fs.readFileSync("./data.txt", "utf-8");


 console.log(dataRecuperadaDelArchivo);
 
 //forma asincronica
 //no lleva el async directamente no lo ponen, como no se en que momento se va a ejecutar o me va a mostrar la segunda parte lo que hago es aplicar callback;
//agrega if y else porque yo no se si esta terminando de gtrabar bien entonces tengo que poner if si sale mal y else si sale bien
// si en la ruta de ./data.txt, le pongo cualquier cosa me sale erro y me pone la linea de error
  
//Con promesas, esto es normar que este dentro de una funcion


function grabar(){

    fs.promises.writeFile("./data.txt", "Inicio!\n")
    .then(()=>{
       console.log('salio bien')
    })
    .catch(()=>{
       console.log('salio mal')
    })
}

grabar()