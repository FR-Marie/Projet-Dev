//Je définis mes produits dans un tableau
let produits = [
    {
        id: 1,
        nomProduit: "l'Assassin Royal",
        auteurProduit: "Robin HOBB",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 1.png",
        prixHT: 6.50,
        tva: 1.5,
        prixTTC: 0
    },
    {
        id: 2,
        nomProduit: "La Belgariade",
        auteurProduit: "Dabid EDDINGS",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 2.png",
        prixHT: 8.50,
        tva: 1.5,
        prixTTC: 0
    },
    {
        id: 3,
        nomProduit: "Pug l'Apprentit",
        auteurProduit: "Raymond FEIST",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 3.png",
        prixHT: 10.90,
        tva: 1.5,
        prixTTC: 0
    },
    {
        id: 4,
        nomProduit: "Les Salauds <br> Gentilshommes",
        auteurProduit: "Scott LYNCH",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 4.png",
        prixHT: 7.99,
        tva: 1.5,
        prixTTC: 0
    },
    {
        id: 5,
        nomProduit: "Catherine",
        auteurProduit: "Juliette BENZONI",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 5.png",
        prixHT: 17,
        tva: 1.5,
        prixTTC: 0
    },
    {
        id: 6,
        nomProduit: "Tatiana",
        auteurProduit: "Paulina SIMONS",
        image: "/img/PORTFOLIO - TABLEAUX VENTES/Livre 6.png",
        prixHT: 19.99,
        tva: 1.5,
        prixTTC: 0
    }
];

// CREATION DU PANIER
let panier = [];
console.log(panier);

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
       <p>Prix HT: ${donnees.prixHT} €</p>
       
       `

       listeProduits.appendChild(produitsItems);

       // ACTION QUAND ON CLIC SUR UN (ou plusieurs) PRODUITS =>
       produitsItems.addEventListener("click", function(){
           //alert(`produit-${donnees.id}`)
           panier.push(donnees);
           //console.log(panier)

           //Lorsque que l'on clic dessus, le produit est caché grâce au CSS dans le tableau 1
           produitsItems.style.display = "none";

           afficherPanier();
       })
   })
}

//la fonction 
afficherProduits();


// LES PRODUITS S'AFFICHENT DANS LE PANIER
function afficherPanier(){
    let produitsPanier = "";

    //La boucle forEach qui va ajouter le produit du tableau 1 au tableau 2
    panier.forEach(function(produitPanier){

        produitsPanier +=
        `
        <li class="li-panier-class" id="liste-panier-produit-${produitPanier.id}"
        
        <h4 class="h4-panier">${produitPanier.nomProduit}</h4>
       <p class="p-panier"> ${produitPanier.auteurProduit}</p>
       <img class="img-panier" src="${produitPanier.image}" title="${produitPanier.nomProduit}" alt="${produitPanier.nomProduit}"/>
       <input class="p-panier" type = "number" placeholder = "Sélectionnez la quantité" min ="0" id = "quantiteProduit-${produitPanier.id}">
        </input>
       <p id = "prix-border" class="p-panier">Prix TTC:  €

       </li>
        `
    });


    //Je récup ma liste produits du panier pour que ça s'affiche (A POSER ICI (après la fonction), PAS AILLEURS!!)
    document.getElementById("liste-du-panier").innerHTML = produitsPanier;


    //Je récupère la valeur dynamique de l'input et la multiplie par le prix HT
    panier.forEach(function(inputQuantite){

        let valeurInputQuantite = document.getElementById(`quantiteProduit-${inputQuantite.id}`);
        //alert(valeurInputQuantite);

        valeurInputQuantite.addEventListener("change", function(){
        //console.log(valeurInputQuantite.value);

        let valeurInput = valeurInputQuantite.value;

        let prixHT = valeurInput * `${inputQuantite.prixHT}`;
        console.log(prixHT);

        let tva = 1.2;
        let prixTTC = document.getElementById("prix-border");
        prixTTC.innerHTML = ("Prix TTC " + ((prixHT * tva).toFixed(2)) + " €");
            
         })
    })


    panier.forEach(function(supprimer){

        //Je récup l'id dynamique dans "afficher produit" [note: "produit-" = "monIdUnique" (code michael)]
        let produitTableau1 = document.getElementById(`produit-${supprimer.id}`);

        
        let produitsSupprimes = document.getElementById(`panier-produit-${supprimer.id}`)
    })
}

afficherPanier();