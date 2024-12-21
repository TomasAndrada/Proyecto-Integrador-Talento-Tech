productos = [
  {
    "id": 1,
    "image": "img/99120101243_MarneusCalgar01.jpg",
    "title": "Marneus Calgar",
    "description": "El indomable Maestro de Capítulo de los Ultramarines, Marneus Calgar, es un guerrero y estratega legendario. Con su poderosa armadura Gravis de la marca X, lidera a sus fuerzas con una brillantez táctica inigualable y un poder destructor.",
    "price": 60.99
  },
  {
    "id": 2,
    "image": "img/60010199067_WH40kUltimateStarterSet2.jpg",
    "title": "Patrulla de Combate - Marines Espaciales",
    "description": "Un punto de partida perfecto para cualquier colección de Marines Espaciales. Este set de Patrulla de Combate incluye una variedad de unidades que permiten crear una fuerza bien equilibrada, ideal tanto para jugadores principiantes como veteranos.",
    "price": 150.00
  },
  {
    "id": 3,
    "image": "img/99120101177_TriumvirateofthePrimarch02.jpg",
    "title": "Roboute Guilliman",
    "description": "El Primarca de los Ultramarines, Roboute Guilliman, es un genio estratégico y líder incomparable. Como Comandante Supremo del Imperio, Guilliman es uno de los campeones más grandes de la humanidad.",
    "price": 85.00
  },
  {
    "id": 4,
    "image": "img/60010199057_LeviathanEXTRA3.jpg",
    "title": "Librarius en Armadura Gravis",
    "description": "Este poderoso psyker en armadura Gravis combina la fuerza de los Marines Espaciales con los poderes místicos del Warp. Las habilidades psíquicas del Librarius pueden devastar a los enemigos y proteger a las fuerzas del Imperio.",
    "price": 40.99
  },
  {
    "id": 5,
    "image": "img/99120101190_PrimarisIntercessors01.jpg",
    "title": "Intercesores Primaris",
    "description": "Los Intercesores Primaris son la columna vertebral de los Capítulos de Marines Espaciales, equipados con rifles de asalto y armaduras avanzadas. Son guerreros versátiles y firmes, capaces de mantener la línea o de atacar con precisión mortal.",
    "price": 55.00
  },
  {
    "id": 6,
    "image": "img/99070101048_SMCaptainMasterCraftedBoltRifleLead.jpg",
    "title": "Capitán Marine Espacial",
    "description": "El Capitán de los Marines Espaciales es un líder experimentado, conocido por su maestría en combate y tácticas. Armado con un rifle de asalto de calidad artesanal y capaz de inspirar a su escuadra hacia la grandeza, es una presencia temible en el campo de batalla.",
    "price": 45.00
  },
  {
    "id": 7,
    "image": "img/99120101254_UMChiefLibrarian01.jpg",
    "title": "Librarius",
    "description": "Los Librarius son psykers de los Adeptus Astartes, que emplean poderes psíquicos para defender al Imperio de amenazas tanto físicas como psíquicas. Esta poderosa figura utiliza su poder mental para cambiar el curso de la batalla.",
    "price": 38.99
  },
  {
    "id": 8,
    "image": "img/99120101289_UMCptVentrisLead.jpg",
    "title": "Uriel Ventris",
    "description": "El Capitán Uriel Ventris de los Ultramarines es un héroe del Imperio, conocido por su lealtad inquebrantable y su aguda táctica. Su liderazgo lo ha llevado a enfrentarse a algunas de las mayores amenazas de la humanidad.",
    "price": 49.99
  },
  {
    "id": 9,
    "image": "img/99120101260_SMPrimarisEliminators01.jpg",
    "title": "Eliminadores Primaris",
    "description": "Los Eliminadores Primaris son especialistas en francotiradores de élite, entrenados para eliminar objetivos de alto valor con mortal precisión. Armados con avanzadas armas de largo alcance, son los maestros del sigilo y la precisión letal.",
    "price": 42.50
  }
];

function logProdcutos() {
  productos.find(producto => {
    console.log(producto);
  })
}

function renderProductos() {
  const grid_body = document.querySelector(".grid-body");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('item-grid-body');

    const image = document.createElement('img');
    image.classList.add('grid-image');
    image.src = producto.image;

    const title = document.createElement('h3');
    title.classList.add('grid-title');
    title.innerText = producto.title;

    const description = document.createElement('p');
    description.classList.add('grid-description');
    description.textContent = producto.description;

    const price = document.createElement('p');
    price.classList.add('grid-price');
    price.textContent = `$${producto.price.toFixed(2)}`;

    // "More Information" button
    const button = document.createElement('button');
    button.textContent = "Más información";

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalTitle = document.createElement('h3');
    modalTitle.innerText = producto.title;

    const modalDescription = document.createElement('p');
    modalDescription.innerText = producto.description;

    const closeModalBtn = document.createElement('button');
    closeModalBtn.textContent = "Cerrar";
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(closeModalBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    button.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    // "Add to Cart" button
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = "Agregar al carrito";
    addToCartButton.addEventListener('click', () => {
      addToCart(producto);
    });

    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    div.appendChild(addToCartButton);
    grid_body.appendChild(div);
  });
}

function addToCart(producto) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === producto.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({...producto, quantity: 1});
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  localStorage.removeItem('cart');
  displayCart();
}

function updateQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += delta;

  if (cart[index].quantity < 1) {
    cart[index].quantity = 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}


function displayCart() {
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";


  const cartTitle = document.createElement('h3');
  cartTitle.innerText = "Carrito de compras"
  cartContainer.appendChild(cartTitle);

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>El carrito está vacío.</p>";
    cartContainer.appendChild(cartTitle);
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const itemTitle = document.createElement('p');
    itemTitle.classList.add('cart-item-title');
    itemTitle.textContent = item.title;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('cart-item-price');
    itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    const cartQuantity = document.createElement('div');
    cartQuantity.classList.add('cart-item-quantity');

    const increaseButton = document.createElement('button');
    increaseButton.classList.add('cart-button');
    increaseButton.textContent = "+";
    increaseButton.addEventListener('click', () => {
      updateQuantity(index, 1);
    });

    const itemQuantity = document.createElement('span');
    itemQuantity.innerText = item.quantity;

    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('cart-button');
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener('click', () => {
      updateQuantity(index, -1);
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('cart-item-remove');
    removeButton.classList.add('cart-button');
    const removeButtonImage = document.createElement('svg');
    removeButtonImage.classList.add('cart-button');
    removeButtonImage.innerHTML = "<svg fill=\"currentColor\" height=\"1em\" stroke=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 448 512\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M135.2 17.7 128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45L416 128z\" stroke=\"none\"/></svg>"
    removeButton.appendChild(removeButtonImage);
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.classList.add('img-cart');

    const cartItemDetails = document.createElement('div');
    cartItemDetails.classList.add('cart-item-details');

    cartItem.appendChild(itemImage);
    cartItemDetails.appendChild(itemTitle);
    cartItemDetails.appendChild(itemPrice);
    cartItem.appendChild(cartItemDetails)
    cartQuantity.appendChild(decreaseButton);
    cartQuantity.appendChild(itemQuantity);
    cartQuantity.appendChild(increaseButton);
    cartItemDetails.appendChild(cartQuantity);
    cartQuantity.appendChild(removeButton);
    cartContainer.appendChild(cartItem);

    total += item.price * item.quantity;
  });

  const totalContainer = document.createElement('div');
  totalContainer.classList.add('cart-total');

  const totalLabel = document.createElement('p');
  totalLabel.textContent = "Total:";
  totalLabel.style.fontWeight = "bold";

  const totalAmount = document.createElement('p');
  totalAmount.textContent = `$${total.toFixed(2)}`;
  totalAmount.style.fontWeight = "bold";

  totalContainer.appendChild(totalLabel);
  totalContainer.appendChild(totalAmount);
  cartContainer.appendChild(totalContainer);

  const clearCartButton = document.createElement('button');
  clearCartButton.classList.add('cart-button');
  clearCartButton.textContent = "Vaciar carrito";
  clearCartButton.addEventListener('click', clearCart);

  const checkoutButton = document.createElement('button');
  checkoutButton.classList.add('cart-button');
  checkoutButton.textContent = "Finalizar compra";
  checkoutButton.addEventListener('click', () => {
    alert("Gracias por su compra");
    clearCart();
  });

  const endCartContainer = document.createElement('div');
  endCartContainer.classList.add('end-cart');
  endCartContainer.appendChild(clearCartButton);
  endCartContainer.appendChild(checkoutButton);
  cartContainer.appendChild(endCartContainer);
}


const cartContainer = document.querySelector(".cart-container");

function toggleCart() {
  const cartContainer = document.querySelector(".cart-container");
  if (cartContainer.classList.contains("open")) {
    cartContainer.classList.remove("open");
  } else {
    cartContainer.classList.add("open");
  }
}

const toggleCartButton = document.querySelector(".cart-button");
toggleCartButton.addEventListener('click', toggleCart);

document.addEventListener("click", (event) => {
  if (!cartContainer.contains(event.target) && !event.target.classList.contains("cart-button")) {
    cartContainer.classList.remove("open");
  }
});

logProdcutos();
renderProductos();
displayCart();
