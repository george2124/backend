const { FILE } = require('dns');
const fs = require('fs');

module.exports = class Container {
    constructor() {}
    getAll = async () => {
        try{
           const archive = await fs.promises.readFile("./producto.json", "utf-8");
           const productos = JSON.parse(archive);
           return productos;  
        }catch (e) {
            console.log(e);
        }
    };
    save = async (producto) => {
        try {
            const productos = await this.getAll();
            const id = productos.length + 1;
            producto.id = id;
            productos.push(producto);

            const productoString = JSON.stringify(productos);

            await fs.promises.writeFile("./producto.json",productoString);
        } catch (e) {
            console.log(e);
        }
    };
    getById = async(id) => {
        try {
            const readData = await fs.promises.readFile("./producto.json");
            const newData = JSON.parse(readData);
            const name  = newData.find((name) => name.id == id);
            if (name){
                return name;
            }else {
                console.log('Producto no encontrado');
            }
        } catch ( error) {
            console.log(error);
        }
    };

    deleteById = async (id) => {
        try {
            const readData = await fs.promises.readFile("./producto.json");
            const newData = JSON.parse(readData);
            const name = newData.find((name) => name.id == id);
            if (!name) {
                console.log('id no existe');
            } else {
              const filtereadData = newData.filter((e) => e.id != id);
              const dataJSON = JSON.stringify(filtereadData);
              await fs.promises.writeFile("./producto.json", dataJSON);
              console.log('producto eliminado')  
            }
        }catch (e) {
             console.log(e);
        }
    };
    updataById = async ( id, name, price) => {
        try {
            const productos = await this.getAll();
            const item = productos.find((prod) => prod.id === Number(id));
            if ( item) {
                item.name = name;
                item.price = price;
                const dataJSON = JSON.stringify(productos)

                await fs.promises.writeFile("./producto.json",dataJSON)
                return item;
            }else {
                return { error: "producto no encontrado"};
            }
        }catch ( error) {
            throw new Error(error);
        }
    };

    deleteAll = async () => {
        try {
            await fs.promises.writeFile("./producto.json", JSON.stringify([]));
            console.log('producto no encontrado');
        } catch (e) {
            console.log(e);
        }
    };
}