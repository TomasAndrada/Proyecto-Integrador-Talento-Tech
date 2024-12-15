productos = [
  {
    "id": 1,
    "image": "img/99120101243_MarneusCalgar01.jpg",
    "title": "Marneus Calgar",
    "description": "El indomable Maestro de Capítulo de los Ultramarines, Marneus Calgar, es un guerrero y estratega legendario. Con su poderosa armadura Gravis de la marca X, lidera a sus fuerzas con una brillantez táctica inigualable y un poder destructor."
  },
  {
    "id": 2,
    "image": "img/60010199067_WH40kUltimateStarterSet2.jpg",
    "title": "Patrulla de Combate - Marines Espaciales",
    "description": "Un punto de partida perfecto para cualquier colección de Marines Espaciales. Este set de Patrulla de Combate incluye una variedad de unidades que permiten crear una fuerza bien equilibrada, ideal tanto para jugadores principiantes como veteranos."
  },
  {
    "id": 3,
    "image": "img/99120101177_TriumvirateofthePrimarch02.jpg",
    "title": "Roboute Guilliman",
    "description": "El Primarca de los Ultramarines, Roboute Guilliman, es un genio estratégico y líder incomparable. Como Comandante Supremo del Imperio, Guilliman es uno de los campeones más grandes de la humanidad."
  },
  {
    "id": 4,
    "image": "img/60010199057_LeviathanEXTRA3.jpg",
    "title": "Librarius en Armadura Gravis",
    "description": "Este poderoso psyker en armadura Gravis combina la fuerza de los Marines Espaciales con los poderes místicos del Warp. Las habilidades psíquicas del Librarius pueden devastar a los enemigos y proteger a las fuerzas del Imperio."
  },
  {
    "id": 5,
    "image": "img/99120101190_PrimarisIntercessors01.jpg",
    "title": "Intercesores Primaris",
    "description": "Los Intercesores Primaris son la columna vertebral de los Capítulos de Marines Espaciales, equipados con rifles de asalto y armaduras avanzadas. Son guerreros versátiles y firmes, capaces de mantener la línea o de atacar con precisión mortal."
  },
  {
    "id": 6,
    "image": "img/99070101048_SMCaptainMasterCraftedBoltRifleLead.jpg",
    "title": "Capitán Marine Espacial",
    "description": "El Capitán de los Marines Espaciales es un líder experimentado, conocido por su maestría en combate y tácticas. Armado con un rifle de asalto de calidad artesanal y capaz de inspirar a su escuadra hacia la grandeza, es una presencia temible en el campo de batalla."
  },
  {
    "id": 7,
    "image": "img/99120101254_UMChiefLibrarian01.jpg",
    "title": "Librarius",
    "description": "Los Librarius son psykers de los Adeptus Astartes, que emplean poderes psíquicos para defender al Imperio de amenazas tanto físicas como psíquicas. Esta poderosa figura utiliza su poder mental para cambiar el curso de la batalla."
  },
  {
    "id": 8,
    "image": "img/99120101289_UMCptVentrisLead.jpg",
    "title": "Uriel Ventris",
    "description": "El Capitán Uriel Ventris de los Ultramarines es un héroe del Imperio, conocido por su lealtad inquebrantable y su aguda táctica. Su liderazgo lo ha llevado a enfrentarse a algunas de las mayores amenazas de la humanidad."
  },
  {
    "id": 9,
    "image": "img/99120101260_SMPrimarisEliminators01.jpg",
    "title": "Eliminadores Primaris",
    "description": "Los Eliminadores Primaris son especialistas en francotiradores de élite, entrenados para eliminar objetivos de alto valor con mortal precisión. Armados con avanzadas armas de largo alcance, son los maestros del sigilo y la precisión letal."
  }
]


function renderProductos() {
  const grid_body = document.querySelector(".grid-body");
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('item-grid-body')
    const image = document.createElement('img');
    image.classList.add('grid-image');
    const title = document.createElement('h3');
    title.classList.add('grid-title');
    const button = document.createElement('button');
    button.textContent = "Mas información";

    const description = document.createElement('p');
    description.classList.add('grid-description');
    description.textContent = producto.description;

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
      modal.style.display = 'none'; // Hide modal on close
    });

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(closeModalBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal)

    button.addEventListener('click', () => {
      modal.style.display = 'flex'; // Show modal when button is clicked
    });

    image.src = producto.image;
    title.innerText = producto.title;
    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(button);
    div.appendChild(description);
    grid_body.appendChild(div)
  })
}


renderProductos();
