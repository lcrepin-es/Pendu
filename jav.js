//fetch pour recuperer la liste de nom
fetch('./prenoms-light.json')
    .then(response => response.json())
    .then(function (response) {
        console.log(response)
        var alea = Math.round(Math.random() * 2400)
        var nomalea = response[alea].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        //tableau contenant le nom choisie de maniére aleatoire 
        var X = [];
        X = nomalea;
        console.log(X);
        var nombre = X.length;
        /*fonction pour ajouter un carré blanc vide en fonction du nombre de lettre dans le mot */
        function ajouterCarre(nb) {
            var mot = document.getElementById("mot");
            console.log(nb);
            console.log(mot);
            for (var j = 0; j < nb; j++) {
                console.log("yo");
                var lettre = document.createElement("p");
                lettre.innerHTML = "_";//+ X[j];
                var carre = document.createElement("div");
                carre.classList.add("square");
                carre.appendChild(lettre);
                mot.appendChild(carre);

            }
        }
        var lettreS = document.getElementById("Saisie");
        for (var h = 0 ;h<nombre;h++)
            if(lettreS == X[h]){
               lettre.innerHTML = X[h]; 
            }
        ajouterCarre(nombre);
    });






