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
];

let productList = document.getElementById("productsList");
productList.innerHTML = "";

for (let product of productData) {
  productList.innerHTML += `<div><img src='${product.image}' alt='${product.alt}' /><h2>${product.titre}</h2><div>`;
}
