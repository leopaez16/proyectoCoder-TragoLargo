const categoriaDeProductos = [
    {nombre: "coca cola", precio: 500},
    {nombre: "fanta", precio: 450},
    {nombre: "sprite", precio: 450},
    {nombre: "budweiser", precio: 650},
    {nombre: "quilmes", precio: 600},
    {nombre: "patagonia", precio: 800},
];

const Gaseosas = [
    {nombre: "coca cola", precio: 500},
    {nombre: "fanta", precio: 450},
    {nombre: "sprite", precio: 450},
];


let nombreUsuario = prompt ("Ingrese su nombre")
let edad = prompt ("Ingrese su edad")

alert (`Hola ${nombreUsuario}, Bienvenido a Trago Largo`);
alert ("Prohibida la venta de bebidas alcoholicas a menores de 18 años");


let carrito = []

let seleccion = prompt ("¿Desea comprar algun producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresar si o no")
    seleccion = prompt ("¿Desea comprar algun producto?")
}

if(seleccion == "si" && edad < 18){
    alert("A continuacion se le mostrara los productos de acuerdo a su edad")
    let todoGaseosa = Gaseosas.map (
        (Gaseosas) => Gaseosas.nombre + " " + Gaseosas.precio + "$"
    );
    alert(todoGaseosa.join(" - "))
}   else if (seleccion == "si" && edad >= 18){
    alert("A continuacion se le mostrara los productos de acuerdo a su edad")
    let todosLosProductos = categoriaDeProductos.map (
        (todosLosProductos) => todosLosProductos.nombre + " " + todosLosProductos.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
}
    else{
        alert("Gracias por visitar nuestro sitio, Hasta pronto")
}

while(seleccion != "no"){
    let producto = prompt ("Agrega un producto")
    let precio = 0

    if (producto == "coca cola" || producto == "fanta" ||producto == "sprite" || producto == "budweiser" || producto == "quilmes" || producto == "patagonia"){
        switch (producto) {
            case "coca cola":
                precio = 500;
                break;
            case "fanta":
                precio = 450;
                break;
            case "sprite":
                precio = 450;
                break;
            case "budweiser":
                    precio = 650;
                    break;
            case "quilmes":
                    precio = 600;
                    break;
            case "patagonia":
                    precio = 800;
                    break;
        }
        let unidades = parseInt (prompt ("¿Cuantas unidades quiere?"))
    
        carrito.push ({producto, unidades, precio})
        console.log (carrito)
    
    }else{
        alert("Por el momento no disponemos de ese producto")
    }
    seleccion = prompt ("¿Necesita otro producto?")

    while(seleccion === "no"){
        alert ("Muchas gracias por su compra")
        carrito.forEach((carritoTotal) => {
            console.log (`producto: ${carritoTotal.producto}, unidades: ${carritoTotal.unidades}, total a pagar por producto ${carritoTotal.unidades * carritoTotal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, ag) => acc + ag.precio * ag.unidades, 0)
console.log (`El total a pagar por su compra es de: ${total}`)

alert (`El total a pagar por su compra es de:$ ${total}`)

