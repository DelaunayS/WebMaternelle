document.oncontextmenu = new Function("return false");//bloquer clic-droit
var bonRésultat //stocke la réponse attendue
var compteur = 0 //compte le nombre de tour
var compteurBonneReponse = 0; //compte le nombre de bonnes réponses

/*tire au sort un nombre*/
var valeurCarte = function(number) {
        return (10 + Math.round(Math.random() * number))
    }
    // transforme la police avec les points en nombre
function pointEnNombre(choix) {
    switch (choix) {
        case 0:
            return ''
        case 1:
            return 'A'
        case 2:
            return 'B'
        case 3:
            return 'C'
        case 4:
            return 'D'
        case 5:
            return 'E'
        case 6:
            return 'F'
        case 7:
            return 'G'
        case 8:
            return 'H'
        case 9:
            return 'I'
        case 10:
            return 'J'
        case 11:
            return 'JA'
        case 12:
            return 'JB'
        case 13:
            return 'JC'
        case 14:
            return 'JD'
        case 15:
            return 'JE'
        case 16:
            return 'JF'
        case 17:
            return 'JG'
        case 18:
            return 'JH'
        case 19:
            return 'JI'
        case 20:
            return 'JJ'
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
    $('#carte1').text(pointEnNombre(temporaireCarte1))

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