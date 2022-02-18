//constantes mail & password
const email = "marie@gmail.com";
const password = "mdp";


//Mon nombre aléatoire
let randomNumber = Math.round(Math.random() * 1000);
console.log(randomNumber);

//Mon nombre aléatoire s'affiche dans mon label
let copyNumber = document.getElementById("copyNumber");
copyNumber.innerHTML = "Copy  " + randomNumber + "  under";


function connexion(){
    //Je déclare mail et password
    let emailUser = document.getElementById("email").value;
    let passwordUser = document.getElementById("password").value;

    //Mon input <#EnteredNumber> = variable ValidNumber
    let validNumber = document.getElementById("enteredNumber").value;


    //Si les 3 champs sont ok => connexion => loader, 3s => accueil
    if(emailUser === email && passwordUser === password && validNumber == randomNumber){

        //FAIRE DISPARAITRE globalLogin
        document.getElementById("globalLogin").style.display = "none";
        
        //FAIRE APPARAITRE loader
        document.getElementById("loader").classList.add("loader");
        
        //Puis redirection sur accueil
        function redirection (){
            window.location = "Accueil.html";
        }
        setTimeout (redirection, 2000);
    }else{
        if(emailUser === "" || passwordUser === "" || validNumber == ""){
            let errorLogin = document.getElementById("error");
            errorLogin.innerHTML = "!! Error(s), please complete all fields";
            console.log(errorLogin);

//Si erreur(s) dans un ou plusieurs champ(s)
        }else{
            let errorLogin = document.getElementById("error");
        errorLogin.innerHTML = "!! Error(s), please verify entry(ies)";
        console.log(errorLogin);
        }
    }
}

