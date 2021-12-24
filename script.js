var alreadyDone = false;

function TransitBuro() {
  var Value = document.getElementById("Area-Bureau").value;

  if(alreadyDone == true && Value == "A") {
    document.getElementById("label-chambre").textContent = "Cherchez dans une chambre sous les coussins ou sous les lits. Quand vous aurez terminé, traduisez le prochain code et insére-le ci-dessous:";
    document.getElementById("Dans la chambre").style.opacity = 1;
    document.getElementById("Area-Chambre").style.opacity = 1;
    document.getElementById("Submit-Chambre").style.opacity = 1;
  }

  if(alreadyDone == false && Value == "A") {
    document.getElementById("label-bureau").textContent = "Cherchez dans le bureau une petite boite marron. Indice: Elle se trouve en hauteur. NE L‘OUVREZ QUE VERS LA FIN. Quand vous aurez terminé, traduisez le prochain code et insére-le ci-dessous:";
    document.getElementById("label-bureau").style.opacity = 1;
    document.getElementById("Dans le bureau").style.opacity = 1;
    alreadyDone = true;
  }
}


function TransitChambre() {
  var Value = document.getElementById("Area-Bureau").value;
  if(Value == "A") {
    document.getElementById("label-grenier").textContent = "Vous-y-êtes presque, d‘abord il faut traduire un dernier code. Celui-ci est le titre même ";
    document.getElementById("Area-Grenier").style.opacity = 1;
    document.getElementById("Submit-Grenier").style.opacity = 1;
  }
}

function TransitGrenier() {
  var Value = document.getElementById("Area-Bureau").value;
  if(Value == "A") {
    document.getElementById("Dans le grenier").style.opacity = 1;
    document.getElementById("label-grenier").textContent = "Le cadeau se trouve dans le grenier. Une fois trouvé, commencez par ouvrir la boîte marron, puis le cadeau dans le grenier. Bon noël!";
    document.getElementById("Dans le grenier").style.opacity = 1;
    document.getElementById("Area-Grenier").style.opacity = 0;
    document.getElementById("Submit-Grenier").style.opacity = 0;
  }
}

