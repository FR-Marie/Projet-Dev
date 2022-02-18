//Je définis mes produits dans un tableau
let produits = [
    {
        id: 1,
        nomProduit: "l'Assassin Royal",
        auteurProduit: "Robin HOBB",
        image: "https://www.babelio.com/couv/CVT_LAssassin-royal-Tome-1--Lapprenti-assassin_4514.jpeg",
        prixHT: 6.50,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 2,
        nomProduit: "La Belgariade",
        auteurProduit: "Dabid EDDINGS",
        image: "https://images-na.ssl-images-amazon.com/images/I/71-+3tNP7VL.jpg",
        prixHT: 8.50,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 3,
        nomProduit: "Pug l'Apprentit",
        auteurProduit: "Raymond FEIST",
        image: "https://images-na.ssl-images-amazon.com/images/I/51RVAE9GK3L.jpg",
        prixHT: 10.90,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 4,
        nomProduit: "Les Salauds Gentilshommes",
        auteurProduit: "Scott LYNCH",
        image: "https://images2.medimops.eu/product/730152/M0229006792X-large.jpg",
        prixHT: 7.99,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 5,
        nomProduit: "Catherine",
        auteurProduit: "Juliette BENZONI",
        image: "https://products-images.di-static.com/image/juliette-benzoni-catherine-tome-1-il-suffit-d-amour/9782266257923-475x500-1.jpg",
        prixHT: 17,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 6,
        nomProduit: "Tatiana",
        auteurProduit: "Paulina SIMONS",
        image: "https://cdn.shopify.com/s/files/1/0517/5915/3314/products/0352134_4b8a5ab9-37f8-4347-879f-ee4c318bad08.jpg?v=1641866851",
        prixHT: 19.99,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 7,
        nomProduit: "Le Royaume des 7 couronnes",
        auteurProduit: "David B. COE",
        image: "https://images-na.ssl-images-amazon.com/images/I/61+xd5yYE+L.jpg",
        prixHT: 7.50,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 8,
        nomProduit: "La Roue du Temps",
        auteurProduit: "Robert JORDAN",
        image: "https://images-na.ssl-images-amazon.com/images/I/81EOryxeB4L.jpg",
        prixHT: 8.90,
        tva: 0.2,
        prixTTC: 0
    },
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
       <input class="p-panierInput" type = "number" placeholder = "Quantité" min ="0" max ="10" id = "quantiteProduit-${produitPanier.id}">
        </input>
        <p id = "prix-HT" class="p-panier">Prix HT: ${produitPanier.prixHT} € </p>
        <p id = "tva-dynamique" class="p-panier"> T.V.A: ${produitPanier.tva} </p>
        <p id = "prixBorder-${produitPanier.id}" class="p-panier">Prix TTC:  € </p>
        <p id="alert-quantite-${produitPanier.id}" class="alert-quantiteClass" > </p>

       </li>
        `
    });

    //Je récup ma liste produits du panier pour que ça s'affiche (A POSER ICI (après la fonction), PAS AILLEURS!!)
    document.getElementById("liste-du-panier").innerHTML = produitsPanier;

    panier.forEach(function(prixSelonQuantite){

        //Je définis la variable pour la quantité délectionnée dans l'input
        let valeurInputQuantite = document.getElementById(`quantiteProduit-${prixSelonQuantite.id}`);
        //alert(valeurInputQuantite);


        //Evennement: mon prix sera modifié à chaque changement de quantité
        valeurInputQuantite.addEventListener("change", function(){
        //console.log(valeurInputQuantite.value);


        //affichage de la quantité
        let valeurInput = valeurInputQuantite.value;
        //console.log(valeurInput)

        prixHT = valeurInput * `${prixSelonQuantite.prixHT}`;
        //console.log(prixHT);

        let tva = 1.2;
        let prixTTC = document.getElementById (`prixBorder-${prixSelonQuantite.id}`);
        prixTTC.innerHTML = ("Prix TTC " + ((prixHT * tva).toFixed(2)) + " €");


        if(valeurInputQuantite.value >= 10){
            let divAlertListePanier = document.getElementById(`alert-quantite-${prixSelonQuantite.id}`);
            //alert("erreur max 10 articles");
            
            divAlertListePanier.innerHTML = "Maximum 10 articles";
        }


        //Supprimer un ou plusieurs produit(s) du panier (tableau 2) et les remettre dans le tableau 1
        produitsPanier.addEventListener("click", function(){
        panier.splice(`${produitPanier.id}`);
        produitsItems.style.display = "block";
        })

    })
    
})
    
}

afficherPanier();

//Mon bouton "Valider vos achats renvoi sur une page de paiement"
function redirectionPaiementLivres(){
    window.location = "PaiementLivres.html";
}
setTimeout (redirection, 1000);

