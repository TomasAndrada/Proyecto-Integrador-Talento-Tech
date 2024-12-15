productos = [
  {
    "id": 1,
    "image": "img/99120101243_MarneusCalgar01.jpg",
    "title": "Marneus Calgar",
    "description": "The indomitable Chapter Master of the Ultramarines, Marneus Calgar is a legendary warrior and tactician. Clad in the mighty Mark X Gravis Armor, he leads his forces with unmatched strategic brilliance and crushing power."
  },
  {
    "id": 2,
    "image": "img/60010199067_WH40kUltimateStarterSet2.jpg",
    "title": "Combat Patrol - Space Marines",
    "description": "A perfect starting point for any Space Marine collection, this Combat Patrol set includes a variety of units to create a well-rounded and potent force, ideal for both beginner and veteran players."
  },
  {
    "id": 3,
    "image": "img/99120101177_TriumvirateofthePrimarch02.jpg",
    "title": "Roboute Guilliman",
    "description": "The Primarch of the Ultramarines, Roboute Guilliman is a strategic genius and unparalleled leader. As the Lord Commander of the Imperium, he stands as one of the greatest champions of humanity."
  },
  {
    "id": 4,
    "image": "img/60010199057_LeviathanEXTRA3.jpg",
    "title": "Librarian in Gravis Armor",
    "description": "This powerful psyker in Gravis Armor combines the strength of the Space Marines with the mystic powers of the Warp. The Librarian’s psychic abilities can devastate enemies and protect the forces of the Imperium."
  },
  {
    "id": 5,
    "image": "img/99120101190_PrimarisIntercessors01.jpg",
    "title": "Primaris Intercessors",
    "description": "Primaris Intercessors are the backbone of the Space Marine Chapters, equipped with bolt rifles and advanced armor. They are versatile, steadfast warriors capable of holding the line or striking decisively."
  },
  {
    "id": 6,
    "image": "img/99070101048_SMCaptainMasterCraftedBoltRifleLead.jpg",
    "title": "Space Marine Captain",
    "description": "A Space Marine Captain is a seasoned leader, known for their mastery of combat and tactics. Armed with a master-crafted bolt rifle and capable of inspiring their squad to greatness, they are a fearsome presence on the battlefield."
  },
  {
    "id": 7,
    "image": "img/99120101254_UMChiefLibrarian01.jpg",
    "title": "Librarian",
    "description": "Librarians are psykers of the Adeptus Astartes, wielding potent powers to defend the Imperium from both physical and psychic threats. This powerful figure uses their psychic might to turn the tide of battle."
  },
  {
    "id": 8,
    "image": "img/99120101289_UMCptVentrisLead.jpg",
    "title": "Uriel Ventris",
    "description": "Captain Uriel Ventris of the Ultramarines is a hero of the Imperium, known for his unwavering loyalty and tactical acumen. His leadership has seen him face down some of the greatest threats to humanity."
  },
  {
    "id": 9,
    "image": "img/99120101260_SMPrimarisEliminators01.jpg",
    "title": "Primaris Eliminators",
    "description": "Primaris Eliminators are elite sniper specialists, trained to take out high-priority targets with deadly precision. Armed with advanced long-range weaponry, they are the masters of stealth and lethal accuracy."
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
    button.textContent = "Mostrar Descripcion";

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
