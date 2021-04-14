document.oncontextmenu = new Function("return false");//bloquer clic-droit
var bonRésultat //stocke la réponse attendue
var compteur = 0 //compte le nombre de tour
var compteurBonneReponse = 0; //compte le nombre de bonnes réponses

/*tire au sort un nombre*/
var valeurCarte = function(number) {
    return (1 + Math.round(Math.random() * number))
}

/* gère un tour de jeu*/
var tourDeJeu = function() {
    /*vide la case réponse*/
    $('#reponse').val('')
        /*place le focus sur la case de réponse*/
    $("#reponse").focus()
        /*on tire les nombres au hasard*/
    var temporaireCarte1 = valeurCarte(4)
    var temporaireCarte2 = valeurCarte(4)
    var temporaireCarte3 = valeurCarte(4)
        /*charge les cartes*/
    $('#carte1').text(temporaireCarte1)
    $('#carte2').text(temporaireCarte2)
    $('#carte3').text(temporaireCarte3)

    return bonRésultat = (temporaireCarte1 + temporaireCarte2 + temporaireCarte3)
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
    }
});