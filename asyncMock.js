const products = [
    {
        id: 1,
        nombre: "iPhone 14 Pro",
        marca: "Apple",
        precio: 999.99,
        almacenamiento: "128GB",
        color: "Negro",
        stock: 50,
        categoria: "Teléfono",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 2,
        nombre: "Samsung Galaxy S23",
        marca: "Samsung",
        precio: 899.99,
        almacenamiento: "256GB",
        color: "Blanco",
        stock: 30,
        categoria: "Teléfono",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 3,
        nombre: "Google Pixel 7",
        marca: "Google",
        precio: 799.99,
        almacenamiento: "128GB",
        color: "Azul",
        stock: 0,
        categoria: "Teléfono",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 4,
        nombre: "OnePlus 11",
        marca: "OnePlus",
        precio: 699.99,
        almacenamiento: "256GB",
        color: "Rojo",
        stock: 20,
        categoria: "Teléfono",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 5,
        nombre: "Sony Xperia 1 IV",
        marca: "Sony",
        precio: 949.99,
        almacenamiento: "512GB",
        color: "Verde",
        stock: 15,
        categoria: "Teléfono",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 6,
        nombre: "MacBook Pro 14",
        marca: "Apple",
        precio: 1999.99,
        almacenamiento: "512GB",
        ram: "16GB",
        procesador: "Apple M1 Pro",
        color: "Gris Espacial",
        stock: 25,
        categoria: "Notebook",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 7,
        nombre: "Dell XPS 13",
        marca: "Dell",
        precio: 1499.99,
        almacenamiento: "512GB",
        ram: "16GB",
        procesador: "Intel Core i7",
        color: "Plata",
        stock: 40,
        categoria: "Notebook",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 8,
        nombre: "HP Spectre x360",
        marca: "HP",
        precio: 1399.99,
        almacenamiento: "1TB",
        ram: "16GB",
        procesador: "Intel Core i7",
        color: "Negro",
        stock: 15,
        categoria: "Notebook",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 9,
        nombre: "Lenovo ThinkPad X1 Carbon",
        marca: "Lenovo",
        precio: 1699.99,
        almacenamiento: "1TB",
        ram: "16GB",
        procesador: "Intel Core i7",
        color: "Negro",
        stock: 30,
        categoria: "Notebook",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    },
    {
        id: 10,
        nombre: "Asus ZenBook 14",
        marca: "Asus",
        precio: 1299.99,
        almacenamiento: "512GB",
        ram: "16GB",
        procesador: "AMD Ryzen 7",
        color: "Azul",
        stock: 20,
        categoria: "Notebook",
        imagen: "https://www.macstation.com.ar/img/productos/3211-3119-2.jpg"
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id));
        }, 2000);
    });
}


