
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = products.find(product => product.id === id);
            resolve(producto);
        }, 2000);
    });
}


export const getProductsByCategory = (categoria) => {
    categoria = categoria.toLowerCase();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productos = products.filter(product => product.categoria === categoria);
            console.log(productos);
            resolve(productos);
        }, 2000);
    });
}
