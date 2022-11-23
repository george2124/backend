const fs = require("fs")

class Contenedor{
    constructor(name){
        this.filename = name;
    }

async save(product){
    try{
        if(fs.existsSync(this.filename)){
            const productos = await this.getAll();
            if(productos.length>0){

                const lastId = productos[productos.length-1].id+1;
                product.id = lastId;
                productos.push(product);
                await fs.promises.writeFile(this.filename,JSON.stringify(productos,null,2));

            }else{
                product.id = 1;
                await fs.promises.writeFile(this.filename,JSON.stringify([product],null,2));
            }
        }else{
            product.id = 1;
            await fs.promises.writeFile(this.filename,JSON.stringify([product],null,2)); 
        }
    } catch (error){
        return "El producto no pudo ser agregado";
    }
}

async getAll(id){
    try{
        const contenido = await fs.promises.readFile(this.file, "utf-8");
        if(contenido.length>0){
            const productos = JSON.parse(contenido);
            return productos;
        }else{
            return [];
        }
    }catch(error){
        return "El archivo no se puee ser leido";
    }
   
 }

 async getById(id){
    try{
        const productos = await this.getAll();

        const producto = productos.find(elemento=> elemento.id ===i);
        return productos; 
    } catch(error){
        return "El producto no se encuentra"
    }
 }

 async deleteById(id){
    try{
        const productos = await this.getAll();
        const newProduct = productos.filter(elemento=>elemento.id !== id);
        await fs.promises.writeFile(this.filename,JSON.stringify(newProduct,null,2));
        return `El producto con el id ${id} fue eliminado`; 
    }catch(error) {
        return "El elemento no pudo ser eliminado"
    }
 }
   
 getName(){
    return this.filename;
 }
}

const producto1 = {
    title: " Supermila ",
    price: 1200,
    thumbnail:"https://i.ibb.co/hLQ8jvV/mila-promo.jpg"
}
 const producto2 = {
    title:"Super Lomito",
    price: 900,
    thumbnail:"https://i.ibb.co/D42Jg51/LOMITO-OK-promo.jpg"
 }

 const manejadorProductos = new Contenedor("productos.txt");
 console.log(manejadorProductos);

 const getData = async()=>{
    await manejadorProductos.save(producto1);
    await manejadorProductos.save(producto2);
    const productos = await manejadorProductos.getAll();
    console.log('productos', productos);
    const productoEncontardo = await manejadorProductos.getById(1);
    console.log("productoEncontardo>", productoEncontardo);
    await manejadorProductos.deleteById(1);
 }
getData();