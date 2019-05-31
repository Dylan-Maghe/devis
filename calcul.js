let prix = 0;
let Comptabilite = 3;
let Compta_connectee = 1;
let Immobilise = 1;
let Analytique = 1;
let Budgétaire = 1;
let ISOC = 0;
let Facturation_de_base = 35;
let Legislation_lux = 0.5;
let euro = " €";

let test = () => {
    if(clic.checked==true){
        if(clic.value=="Comptabilité"){
         prix += Comptabilite;
        }
        else if(clic.value=="Compta connectée"){
            prix += Compta_connectee;
        }
        else if(clic.value=="Immobilisé"){
            prix += Immobilise;
        }
        else if(clic.value=="Analytique"){
            prix += Analytique;
        }
    }
    else if (clic.checked==false){
        if(clic.value=="Comptabilité"){
            prix -= Comptabilite;
        }
        else if(clic.value=="Compta connectée"){
            prix -= Compta_connectee;
        }
        else if(clic.value=="Immobilisé"){
            prix -= Immobilise;
        }
        else if(clic.value=="Analytique"){
            prix -= Analytique;
        }
    }

    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}
