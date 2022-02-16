//Je définis mes produits dans un tableau
let produits = [
    {
        id: 1,
        nomProduit: "l'Assassin Royal",
        auteurProduit: "Robin HOBB",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 1.png",
        prixHT: 6.50,
        tva: 5,
        prixTTC: 0,
    },
    {
        id: 2,
        nomProduit: "La Belgariade",
        auteurProduit: "Dabid EDDINGS",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 2.png",
        prixHT: 8.50,
        tva: 5,
        prixTTC: 0
    },
    {
        id: 3,
        nomProduit: "Pug l'apprentit",
        auteurProduit: "Raymond FEIST",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 3.png",
        prixHT: 10.90,
        tva: 5,
        prixTTC: 0
    },
    {
        id: 4,
        nomProduit: "Les Salauds <br> Gentilshommes",
        auteurProduit: "Scott LYNCH",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 4.png",
        prixHT: 7.99,
        tva: 5,
        prixTTC: 0
    },
    {
        id: 5,
        nomProduit: "Catherine",
        auteurProduit: "Juliette BENZONI",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 5.png",
        prixHT: 17,
        tva: 5,
        prixTTC: 0
    },
    {
        id: 6,
        nomProduit: "Tatiana",
        auteurProduit: "Paulina SIMONS",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 6.png",
        prixHT: 19.99,
        tva: 5,
        prixTTC: 0
    }
];


//Je récupère dans html: l'id du tableau 1 de la liste des produits qui s'affichera
let listeProduits = document.getElementById("liste-des-Produits");

//Je crée ma fonction pour afficher mes produits dans mon tableau 1
function afficherProduits(){
    //La boucle forEach va récupérer chaque produit de la liste des produits
   produits.forEach(function(donnees){
       //console.log(donnees)

       //Chaque produit est un <li> dans le <ul>
       let produitsItems = document.createElement("li");

       //Je définis un ID dynamique pour chacun de mes produits
       produitsItems.id = `produit-${donnees.id}`;

       //J'injecte dans mon HTML chacun des produits
       produitsItems.innerHTML = 
       `
       <h4>${donnees.nomProduit}</h4>
       <p>${donnees.auteurProduit}</p>
       <img src="${donnees.image}" title="${donnees.nomProduit}" alt="${donnees.nomProduit}"/>
       <p>Prix: ${donnees.prixHT} €</p>
       
       `

       listeProduits.appendChild(produitsItems);

       produitsItems.addEventListener("click", function(){
           //alert(`produit-${donnees.id}`)
           //panier.push(donnees)
           //console.log(panier)
       })
   })
}

afficherProduits();


//Je crée mon tableau vide pour le panier
let panier = [];
console.log(panier)


// LES PRODUITS S'AFFICHENT DANS LE PANIER
function afficherPanier(){
    let produitsPanier = "";

    panier.forEach(function(produitPanier){
        produitsPanier +=
        `
        
        `
    });
}