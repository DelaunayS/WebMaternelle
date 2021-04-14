document.oncontextmenu = new Function("return false");//bloquer clic-droit
var bonRésultat //stocke la réponse attendue
var compteur = 0 //compte le nombre de tour
var compteurBonneReponse = 0; //compte le nombre de bonnes réponses

/*tire au sort un nombre*/
var valeurCarte = function(number) {
    return (5 + Math.round(Math.random() * number))
}

// transforme le nombre dans la police pictchouregular
function nombreEnSymboleDoigt(choix) {
    switch (choix) {
        case 1:
            return choix_reel = 'K';
        case 2:
            return choix_reel = 'L';
        case 3:
            return choix_reel = 'M';
        case 4:
            return choix_reel = 'N';
        case 5:
            return choix_reel = 'O';
        case 6:
            return choix_reel = 'Q';
        case 7:
            return choix_reel = 'R';
        case 8:
            return choix_reel = 'S';
        case 9:
            return choix_reel = 'T';
        case 10:
            return choix_reel = 'U';
        case 11:
            return choix_reel = 'UK';
        case 12:
            return choix_reel = 'UL';
        case 13:
            return choix_reel = 'UM';
        case 14:
            return choix_reel = 'UN';
        case 15:
            return choix_reel = 'UO';
    }
};

/* gère un tour de jeu*/
var tourDeJeu = function() {
    /*vide la case réponse*/
    $('#reponse').val('')
        /*place le focus sur la case de réponse*/
    $("#reponse").focus()
        /*on tire les nombres au hasard*/
    var temporaireCarte1 = valeurCarte(10)
        /*charge les cartes*/
    $('#carte1').text(nombreEnSymboleDoigt(temporaireCarte1))

    return bonRésultat = temporaireCarte1
}

//événement sur le bouton point interrogation
$('#interrogation').on('click', function() {
    $('.container3').show()
    $("#reponse").focus()
});

//événement sur le bouton point interrogation
$('.fermer_aide').on('click', function() {
    $('.container3').hide()
    $("#reponse").focus()
});

// événement sur le bouton recommencer
$('.flecheRecommencer').on('click', function() {
    location.reload();
});

//vérification de la réponde du joueur
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

//Cache l'élément
var cacheElement = function() {
    $("#carte1").css('background-color', 'black')
}

//Affiche l'élément
var montreElement = function() {
    $("#carte1").css('background-color', 'white')
}

//Initialise le jeu
$('.container3').hide()
tourDeJeu()

//événement sur la flèche qui valide la réponse
$('#validerLaReponse').on('click', function() {
    compteur++
    var reponse = $('#reponse').val()
    verification(reponse)

    if (compteur === 10) { //stoppe le jeu au bout de 10 réponses
        $('#reponse').css('font-family', 'sans-serif');
        $('#img_validerLaReponse').css('width', '50%');
        $('#reponse').css('font-size', '4.5vw');
        $('#validerLaReponse').unbind('click')

        if (compteurBonneReponse > 7) {
            $('#reponse').val('BRAVO');
            $('#reponse').css('color', 'green');
            $('#img_validerLaReponse').attr('src', '../img/smile_content.jpg');

        } else {
            $('#reponse').val('PERDU');
            $('#reponse').css('color', 'orange');
            $('#img_validerLaReponse').attr('src', '../img/smile_triste.jpg');

        }
    } else {
        tourDeJeu()
        cacheElement()
        setTimeout(montreElement, 500)
    }
});