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
];

// Fonction pour afficher les produits
function productDisplay(products) {
  // Récupération de l'élément HTML où l'on va afficher les produits
  let productList = document.getElementById("productsList");
  productList.innerHTML = "";
  // Boucle pour afficher chaque produit
  for (let product of products) {
    productList.innerHTML += `<div class='product'>
    <img src='${product.image}' alt='${product.alt}' />
    <h2>${product.titre}</h2>
    <div class='product-info'>
      <p>${product.prix}€</p>
      <p>${product.note}⭐️</p>
    </div>
    <div class='product-cat'>
      <p>Catégorie: </p>
      <a href='#'>${product.categorie}</a>
    </div>
    <div class='product-att'> 
      ${product.attributs.map((attr) => `<a href="#">${attr}</a>`).join(", ")}
    </div>
  </div>`;
  }
}

// Fonction pour afficher les catégories
function categoryDisplay(products) {
  // Récupération de l'élément HTML où l'on va afficher les catégories
  let categoriesList = document.getElementById("categories");
  // Création d'une liste de catégorie à partir du tableau de donnée
  let categories = [...new Set(products.map((product) => product.categorie))];
  categoriesList.innerHTML = "";
  // Ajout de l'élément pour afficher toutes les catégories
  categoriesList.innerHTML += `<li class='category-link category-link-main active' onClick="clearFilter()">Tout afficher</li>`;
  // Boucle pour afficher toutes les catégories
  for (let category of categories) {
    categoriesList.innerHTML += `<li class='category-link' onClick="categoryFilter('${category}')">${category}</li>`;
  }
}

// Fonction pour appliquer le filtre des catégories
function categoryFilter(category) {
  // Filtrer les produits par rapport à la catégorie
  let productFilter = productData.filter(
    (product) => product.categorie === category
  );
  // Supprime la class .active de tous les liens catégorie
  document.querySelectorAll(".category-link").forEach((link) => {
    link.classList.remove("active");
  });
  // Ajoute la class .active à la catégorie sélectionnée
  event.target.classList.add("active");
  // Affiche les produits de la catégorie
  productDisplay(productFilter);
}

// Fonctions pour remettre à zéro le filtre des catégories
function clearFilter() {
  // Supprime la class .active de tous les liens catégorie
  document.querySelectorAll(".category-link").forEach((link) => {
    link.classList.remove("active");
  });
  // Ajoute la class .active au lien catégorie qui affiche tous les produits
  document.querySelector(".category-link-main").classList.add("active");
  // Affiche tous les produits
  productDisplay(productData);
}

// Appel des fonctions
productDisplay(productData);
categoryDisplay(productData);
