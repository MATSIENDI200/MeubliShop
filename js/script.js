const products =  [
    {
        id: 1,
        name: "Produit 1",
        price: 29.99,
        image: "/image/m1.jpg",
        description: "Ceci est une description du Produit 1. Il est de haute qualité et répond à tous vos besoins.",
        details: "Détails: Taille - M, Couleur - Rouge, Matériau - Coton.",
        detailsUrl: "produit.html?id=1"
    },
    {
        id: 2,
        name: "Produit 2",
        price: 39.99,
        image: "/image/m2.jpg",
        description: "Ceci est une description du Produit 2. Un produit exceptionnel pour les amateurs de confort.",
        details: "Détails: Taille - L, Couleur - Bleu, Matériau - Polyester.",
        detailsUrl: "produit.html?id=2"
    },
    {
        id: 3,
        name: "Produit 3",
        price: 49.99,
        image: "/image/m3.jpg",
        description: "Ceci est une description du Produit 3. Parfait pour toutes les occasions.",
        details: "Détails: Taille - S, Couleur - Vert, Matériau - Lin.",
        detailsUrl: "produit.html?id=3"
    },
    {
        id: 4,
        name: "Produit 4",
        price: 59.99,
        image: "/image/m4.jpg",
        description: "Ceci est une description du Produit 4. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=4"
    },
    {
        id: 5,
        name: "Produit 5",
        price: 200.99,
        image: "/image/m5.jpg",
        description: "Ceci est une description du Produit 5. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=5"
    },
    {
        id: 6,
        name: "Produit 6",
        price: 250.99,
        image: "/image/m6.jpg",
        description: "Ceci est une description du Produit 5. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=6"
    },
    {
        id: 7,
        name: "Produit 7",
        price: 175.77,
        image: "/image/m7.jpg",
        description: "Ceci est une description du Produit 5. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=7"
    },
    {
        id: 8,
        name: "Produit 8",
        price: 120.99,
        image: "/image/m8.jpg",
        description: "Ceci est une description du Produit 5. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=8"
    },
    {
        id: 9,
        name: "Produit 9",
        price: 300.000,
        image: "/image/m9.jpg",
        description: "Ceci est une description du Produit 5. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=9"
    },
    {
        id: 10,
        name: "Produit 10",
        price: 200.000,
        image: "/image/m10.jpg",
        description: "Ceci est une description du Produit 5. Idéal pour ceux qui recherchent le meilleur.",
        details: "Détails: Taille - XL, Couleur - Noir, Matériau - Soie.",
        detailsUrl: "produit.html?id=10"
    },
    
];


let cart = JSON.parse(localStorage.getItem("cart")) || []

// fonction pour afficher la liste des produits
function afficherListeProduits() {
    // Récupération de l'élément HTML qui contiendra la liste des produits
    const container = document.getElementById("products-container");

    // Je parcours la liste des produits
    products.forEach((produit) => {
        const existingProduct = cart.find(item => item.id === produit.id)
        // Création d'un élément HTML pour chaque produit
        const card = document.createElement("div");
        card.className = "product-card";

        if(existingProduct){
            card.innerHTML = `
             <img src="./${produit.image}" alt="${produit.name}" class="product-image">
            <div class="product-info">
                <h3>${produit.name}</h3>
                <p>Prix:${produit.price} FCFA</p>
                <a href="./pages/${produit.detailsUrl}" class="view-details"></a>
                <button class="add-to-cart already-in-cart " id="btn-${produit.id}"
                    onclick="window.location='./pages/cart.html'">Déjà au panier</button>
            </div>
        `;
        }else{
            card.innerHTML = `
             <img src="./${produit.image}" alt="${produit.name}" class="product-image">
            <div class="product-info">
                <h3>${produit.name}</h3>
                <p>Prix:${produit.price} FCFA</p>
                <a href="./pages/${produit.detailsUrl}" class="view-details"></i></a>
                <button class="add-to-cart " id="btn-${produit.id}"
                    onclick="ajouterProduitPanier(${produit.id})">Ajouter au panier</button>
            </div>
        `;
        }

        

        container.appendChild(card)
    })
}

afficherListeProduits()

// Fonction pour ajouter un produit dans le panier
function ajouterProduitPanier(productId) {
    const product =  products.find(p => p.id === productId );
    const existingProduct = cart.find(item => item.id === productId)

    if (existingProduct) {
        alert("ce produit est déjà dans votre panier")
    }else{
        cart.push({...product, quantity: 1})
        updateCart();
        alert("produit ajouté au panier avec sucess");
    }
    localStorage.setItem("cart", JSON.stringify(cart))

    // changer le type de bouton
    const addToCartItemBtn = document.getElementById(`btn-${productId}`)
    addToCartItemBtn.classList.add("already-in-cart");
    addToCartItemBtn.innerText = "Déjà au panier";
    addToCartItemBtn.setAttribute("onclick", `window.location='cart.html'`)
}

function updateCart(){
    const cartCount = document.getElementById("cart-count")

    cartCount.textContent =  cart.length
}
updateCart();



document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");
  
    galleryImages.forEach(img => {
      img.addEventListener("click", function () {
        const fullSrc = this.getAttribute("data-full");
        lightboxImg.src = fullSrc;
        lightbox.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Fermer en cliquant en dehors de l'image
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
      }
    });
  });



 
