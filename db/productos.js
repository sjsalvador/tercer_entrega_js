export const productos = [
    {
        id: 1,
        nombre: "Aceite Marolio",
        precio: 1200,
        imagen: "..//img/AceiteGirasol900.jpg",
        categoria: "ACEITES"
    },
    {
        id: 2,
        nombre: "Arvejas Marolio",
        precio: 550,
        imagen: "..//img/Arvejas200g.jpg",
        categoria: "LATAS"
    },
    {
        id: 3,
        nombre: "Mayonesa Marolio",
        precio: 950,
        imagen: "./img/mayonesa.jpg",
        categoria: "MAYONESAS"
    },
    {
        id: 4,
        nombre: "Salsa Marolio",
        precio: 630,
        imagen: "./img/salsa-1.jpg",
        categoria: "SALSAS"
    },
    {
        id: 5,
        nombre: "Cacao Marolio",
        precio: 880,
        imagen: "./img/choco.png",
        categoria: "ALMACEN"
    },
    {
        id: 6,
        nombre: "Yerba Marolio",
        precio: 1800,
        imagen: "./img/yerba.jpg",
        categoria: "YERBAS"
    },
    {
        id: 7,
        nombre: "Palmitos Marolio",
        precio: 1800,
        imagen: "./img/palmi.png",
        categoria: "LATAS"
    },
    {
        id: 8,
        nombre: "Fideos Marolio",
        precio: 660,
        imagen: "./img/fideos.png",
        categoria: "PASTAS"
    },

];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));