// /ejercicios:

//Crear un sistema de Categorías y Productos donde una categoría puede tener múltiples productos. 
// Implementar relaciones uno a muchos con Sequelize, asegurando que al eliminar una categoría se eliminen todos sus productos.
// Define los modelos Categoria y Producto.
// Configura la relación uno a muchos entre las tablas.
// Inserta una categoría con dos productos asociados.
// Elimina la categoría y verifica que los productos también hayan sido eliminados.


// npx sequelize-cli model:generate --name Categoria --attributes nombre:string
// npx sequelize-cli model:generate --name Productos --attributes nombre:string,precio:number,CategoriaId:integer


const {
        crearCategoria,
        CrearProducto,
        obtenerCategoriasConProductos,
        eliminarCategoria
} = require('./controllers/categoriaController')

const main = async () => {
        try {
                const tecnologia = await crearCategoria('Tecnologia');
                const mascotas = await crearCategoria('Mascotas');

                await CrearProducto(tecnologia.id, 'Notebook', 15000);
                await CrearProducto(mascotas.id, 'Churu', 1500);

                const categoria = await obtenerCategoriasConProductos();
                console.log('Categorias con productos:', JSON.stringify(categoria, null, 2));

                await eliminarCategoria(2);
                const categoriaeliminadas = await obtenerCategoriasConProductos();
                console.log('Categorias despues de eliminacion:', JSON.stringify(categoriaeliminadas))
        } catch (error) {
                console.error('Error:', error)
        }
}

main()