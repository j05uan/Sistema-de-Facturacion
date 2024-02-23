const listaProductos=[
];

function cargarProductos() {
    for (let i = 1; i <= 10; i++) {
        const nuevoProducto = {
            codigo: 'PROD${i}',
            descripcion: faker.commerce.productName(),
            precio: parseFloat(faker.commerce.price(10, 100, 2))
        };

        listaProductos.push(nuevoProducto);
    }
}

const cargarFormularioProductos=()=>{
        const productosforms= document.getElementById('productos-form');
        productosforms.innerHTML=`
        <form>
            <label for="codigoProducto">Codigo del Producto:</label>
            <input type="text" id="codigoProducto" required>
            <label for="nombreProducto">Nombre del Producto:</label>
            <input type="text" id="nombreProducto" required>
            <label for="precioProducto">Precio del Producto:</label>
            <input type="number" id="precioProducto" required>
            <button type="button" onclick="crearProducto()">Crear Producto</button>
            <button type="button" onclick="mostrarListado()">Ver Listado de Productos</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
        </form>
    `;

    const listadoProductos = document.getElementById('listado-productos');
    listadoProductos.style.display='none';
}

const crearProducto=()=>{
    const codigoProductoInput=document.getElementById('codigoProducto');
    const nombreProductoInput=document.getElementById('nombreProducto');
    const precioProductoInput=document.getElementById('precioProducto');

    const codigo=codigoProductoInput.value;
    const nombre=nombreProductoInput.value;
    const precio=precioProductoInput.value;

    const nuevoProducto ={
        id:listaProductos.length+1,
        codigo:codigo,
        nombre:nombre,
        precio:precio,
    }
    listaProductos.push(nuevoProducto);

    codigoProductoInput.value='';
    nombreProductoInput.value='';
    precioProductoInput.value='';

    alert ('Producto Creado Con exito!');
    console.log(listaProductos);
    actualizarProductosEnFacturas();

    return nuevoProducto;

}

const mostrarListado=()=>{
    const productosforms=document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');
    
    productosforms.style.display='none';
    listadoProductos.style.display='block';

    const ul= document.createElement('ul');

    for(const producto of listaProductos){
        const li=document.createElement('li')
        li.textContent= `ID: ${producto.id}, Codigo: ${producto.nombre}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
        ul.appendChild(li);
    }

    listadoProductos.innerHTML='';
    listadoProductos.appendChild(ul);

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario de Productos';
    volverButton.addEventListener('click',volverFormulario);
    listadoClientes.appendChild(volverButton);
    
}

const volverFormulario=()=>{
    const clientesForm=document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');

    listadoClientes.style.display='none';
    clientesForm.style.display='block';
    
}
console.log(listaProductos);
