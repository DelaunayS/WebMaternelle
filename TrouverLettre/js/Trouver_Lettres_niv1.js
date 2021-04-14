document.oncontextmenu = new Function("return false");//bloquer clic-droit
var bonRésultat //stocke la réponse attendue
var compteur = 0 //compte le nombre de tour
var compteurBonneReponse = 0; //compte le nombre de bonnes réponses
var reponseJoueur = [] // les réponses du joueur

/*tire au sort un nombre*/
var valeurLettreCherchée = function(number) {
    return (Math.round(Math.random() * number))
}

// fonction pour mélanger une liste
function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// definition de la liste des lettres
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/*on tire et on affiche la lettre à trouver*/
var lettreATrouver = function() {
    bonRésultat = letters[valeurLettreCherchée(25)]
    $('#quelleLettre').text(bonRésultat)
    return bonRésultat
}

// liste des lettres du plateau de jeu
var plateauLettres = []

// pour remplir la liste des lettres du plateau de jeu
var remplirPlateauLettres = function() {
    for (i = 0; i < 3; i++) {
        plateauLettres[i] = bonRésultat
    }
    for (i = 3; i < 20; i++) {
        plateauLettres[i] = letters[valeurLettreCherchée(25)]
    }
}

/*on charge toutes les lettres du plateau de jeu*/
var plateauDeJeu = function() {
    remplirPlateauLettres()
        // appel de la fonction shuffle pour mélanger les lettres
    shuffle(plateauLettres);

    //on associe la lettre à la carte
    for (i = 0; i < 20; i++) {
        ($(`#carte${i}`).text(plateauLettres[i]))
    }
}

/* gère un tour de jeu*/
var tourDeJeu = function() {
    activerLaFleche
    lettreATrouver()
    plateauDeJeu()
}

//événement quand on clique sur une lettre du plateau de jeu
$('.carte').on('click', function() {
    ($(`#${this.id}`)).toggleClass("highlight")
})

//événement sur le bouton point interrogation
$('#interrogation').on('click', function() {
    $('#quelleLettre').text(bonRésultat)
});


// événement sur le bouton recommencer
$('.flecheRecommencer').on('click', function() {
    location.reload();
});

//vérification de la réponse du joueur
var verification = function(reponse) {
    if (reponse == bonRésultat) {
        $('.résultat' + compteur).css('background', 'green');
        $('.résultat' + compteur).show();
        compteurBonneReponse++;
    } else {
        $('.résultat' + compteur).css('background', 'red');
        $('.résultat' + compteur).show();
    }
}

//Initialise le jeu
$('.container3').hide()
tourDeJeu()

//vérifie les réponses du joueur
var verifieReponseJoueur = function() {
    var validiteDesReponses = true
    var compteurReponse = 0
    for (i = 0; i < 20; i++) {
        //récupère la couleur de la carte
        var couleurCarte = (($(`#carte${i}`)).css('background-color'))
            //vérifie si la carte est bonne
        if (bonRésultat == ($(`#carte${i}`)).text()) {
            if (couleurCarte == ('rgb(0, 255, 255)')) {
                ($(`#carte${i}`)).css('background-color', 'green')
            } else {
                ($(`#carte${i}`)).css('background-color', 'red')
                validiteDesReponses = false
            }
        } else {
            if (couleurCarte == ('rgb(0, 255, 255)')) {
                ($(`#carte${i}`)).css('background-color', 'red')
                validiteDesReponses = false
            }
        }
    }
    if (validiteDesReponses) {
        $('.résultat' + compteur).css('background', 'green');
        $('.résultat' + compteur).show();
        compteurBonneReponse++;
    } else {
        $('.résultat' + compteur).css('background', 'red');
        $('.résultat' + compteur).show();
    }
}

// initialise les couleurs des cartes
var initialiseCouleursCartes = function() {
    for (i = 0; i < 20; i++) {
        var couleurCarte = (($(`#carte${i}`)).css('background-color'))
        if (couleurCarte != ('rgb(255, 255, 255)')) {
            ($(`#carte${i}`)).css('background-color', '')
        }
    }
    for (i = 0; i < 20; i++) {
        ($(`#carte${i}`)).removeClass("highlight")
    }
}

//affichage à la fin du jeu
var affiche = function() {
    $('#img_validerLaReponse').css('width', '7vw');
    $('#quelleLettre').css('font-size', '2vw');
    $('#quelleLettre').css('background-color', 'white')
    $('#quelleLettre').css('margin-left', '10vw')
    $('#quelleLettre').css('margin-right', '10vw')
    $('#quelleLettre').css('font-size', '7vw')
    $('#toutes_zones').hide(200)

    if (compteurBonneReponse > 7) {
        $('#quelleLettre').text('BRAVO');
        $('#quelleLettre').css('color', 'green');
        $('#img_validerLaReponse').attr('src', '../img/smile_content.jpg');

    } else {
        $('#quelleLettre').text('PERDU');
        $('#quelleLettre').css('color', 'orange');
        $('#img_validerLaReponse').attr('src', '../img/smile_triste.jpg');
    }
}

//événement sur la flèche qui valide la réponse
var activerLaFleche = $('#validerLaReponse').on('click', function() {
    compteur++
    verifieReponseJoueur()
    if (compteur === 10) { //stoppe le jeu au bout de 10 réponses
        $('#validerLaReponse').off('click')
        $('.carte').off('click')
        setTimeout(affiche, 2000)
    } else {
        setTimeout(initialiseCouleursCartes, 2000)
        setTimeout(tourDeJeu, 2000)
    }
})