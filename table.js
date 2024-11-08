// Tableau de données
const productData = [
  {
    titre: "Le livre rouge",
    image: "img/livre1.jpg",
    alt: "Image du livre rouge",
    prix: 9.99,
    categorie: "livre",
    attributs: ["classique", "illustré", "rouge"],
    note: 4.5,
  },
  {
    titre: "Le livre blanc",
    image: "img/livre2.jpg",
    alt: "Image du livre blanc",
    prix: 12.5,
    categorie: "livre",
    attributs: ["dystopie", "politique", "fiction"],
    note: 4.7,
  },
  {
    titre: "Le livre écrit",
    image: "img/livre3.jpg",
    alt: "Image du livre écrit",
    prix: 15.99,
    categorie: "livre",
    attributs: ["fantastique", "jeunesse", "best-seller"],
    note: 4.9,
  },
  {
    titre: "Alpine",
    image: "img/car1.jpg",
    alt: "Image de la voiture Tesla Model S",
    prix: 79999,
    categorie: "voiture",
    attributs: ["électrique", "autonome", "haut de gamme"],
    note: 4.5,
  },
  {
    titre: "Range Rover",
    image: "img/car2.jpg",
    alt: "Image de la voiture Ford Mustang",
    prix: 55999,
    categorie: "voiture",
    attributs: ["muscle car", "essence", "iconique"],
    note: 4.6,
  },
  {
    titre: "BMW",
    image: "img/car3.jpg",
    alt: "Image de la voiture Volkswagen Golf",
    prix: 23999,
    categorie: "voiture",
    attributs: ["compacte", "polyvalente", "berline"],
    note: 4.3,
  },
  {
    titre: "Ours",
    image: "img/peluche1.jpg",
    alt: "Image d'un ours en peluche",
    prix: 29.99,
    categorie: "peluche",
    attributs: ["mignon", "doux", "enfant"],
    note: 4.7,
  },
  {
    titre: "Agneau",
    image: "img/peluche2.jpg",
    alt: "Image d'un agneau en peluche",
    prix: 25.99,
    categorie: "peluche",
    attributs: ["mignon", "doux", "enfant"],
    note: 4.3,
  },
  {
    titre: "Vélo de ville",
    image: "img/velo1.jpg",
    alt: "Image d'un vélo de ville",
    prix: 225.99,
    categorie: "vélo",
    attributs: ["sport", "velo", "ville"],
    note: 4.6,
  },
  {
    titre: "Vélo de marathon",
    image: "img/velo2.jpg",
    alt: "Image d'un vélo de marathon classique",
    prix: 325.99,
    categorie: "vélo",
    attributs: ["sport", "velo", "marathon"],
    note: 4.4,
  },
];

let tableBody = document.querySelector("#productTable tbody");
function tableDisplay(products) {
  tableBody.innerHTML = "";
  products.forEach((product) => {
    let row = document.createElement("tr");
    row.innerHTML += `
    <td>${product.titre}</td>
    <td><img src='${product.image}' alt='${product.alt}' width='100' height='100'/></td>
    <td>${product.prix}€</td>
    <td>${product.categorie}</td>
    <td>${product.attributs.join(", ")}</td>
    <td>${product.note}⭐️</td>
    `;

    tableBody.appendChild(row);
  });
}

tableDisplay(productData);
