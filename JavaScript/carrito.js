document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosCarrito();
});

function mostrarProductosCarrito() {
    const divProductos = document.getElementById("productos");
    divProductos.innerHTML = "";

    let row = document.createElement("div");
    row.className = "row";

    let productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let totalCompra = 0;

    productosCarrito.forEach((producto) => {
        const { imagen, nombre, categoria, precio } = producto;

        let card = document.createElement("div");
        card.className = "card col-xl-3 col-md-6 col-sm-12";
        card.innerHTML = `
            <img class="card-img-top" src="${imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">Categoria: ${categoria}</p>
                <p class="card-text">Precio: <b>$${precio}</b></p>
            </div>`;

        row.appendChild(card);
        totalCompra += precio;
    });

    divProductos.appendChild(row);

    const totalElement = document.createElement("div");
    totalElement.className = "total-compra";
    totalElement.style.textAlign = "center";
    totalElement.innerHTML = `<h4>Estos son los productos agregados al carrito, el total de su compra sera: <span style="font-weight: bold;">$${totalCompra}</span></h4>`;
    const footer = document.querySelector("footer");
    document.body.insertBefore(totalElement, footer);

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar elementos del carrito";
    botonEliminar.className = "btn btn-danger mt-3";
    botonEliminar.style.display = "block";
    botonEliminar.style.margin = "0 auto";
    document.body.insertBefore(botonEliminar, footer);

    botonEliminar.addEventListener("click", function() {
        localStorage.removeItem("carrito");
        location.reload();
    });
}
