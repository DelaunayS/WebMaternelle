document.oncontextmenu = new Function("return false");//bloquer clic-droit
var compteur = 0; //compte le nombre de tours
var choix = " "; // récupère le choix du joueur
var mot_cible = ""; //le mot qu'il  faut écrire
var compteurBonneReponse = 0; //compte le nombre de bonnes réponses
var mots = ['ABEILLE', 'BALEINE', 'COCCINELLE', 'DRAGON',
    'ESCARGOT', 'FOURMI', 'GIRAFE', 'HIBOU', 'IGUANE', 'JAGUAR', 'KANGOUROU', 'LIBELLULE', 'MOUTON', 'NUAGE',
    'OISEAU', 'PAPILLON', 'QUILLE', 'REQUIN', 'SINGE', 'TIGRE', 'USINE', 'VACHE', 'WAGON',
    'XYLOPHONE', 'YAOURT', 'ZEBRE'
]; // definition de la liste des mots

//déclaration d'un canvas
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

// Crée un nouvel élément image
var image = new Image();

// fonction pour mélanger une liste
function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// fonction pour gérer les actions communes des boutons 0, 1 et 2
function actionsCommunesButton0Button1Button2(x) {
    switch (x) {
        case 0:
            mot_cible = mot_cible.toUpperCase();
            var T = '5vw';
            var P = 'script_ecole_2regular';
            break;
        case 1:
            mot_cible = mot_cible.toLowerCase();
            var T = '5vwx';
            var P = 'script_ecole_2regular';
            break;
        case 2:
            mot_cible = mot_cible.toLowerCase();
            var T = '6vw';
            var P = 'cursive_standardregular';
            break;
    }

    $('p').css('font-size', T);
    $('p').css('font-family', P);
    $('p').text(mot_cible);
    $('.zoneChoix').focus();
};

// fonction pour gérer les actions communes des boutons 3, 4 et 5
function actionsCommunesButton3Button4Button5(x) {
    choix = $('.zoneChoix').val();

    switch (x) {
        case 3:
            choix = choix.toUpperCase();
            $('.zoneChoix').keyup(function() {
                $(this).val($(this).val().toUpperCase());
            });
            var T = '5vw';
            var P = 'script_ecole_2regular';
            break;

        case 4:
            choix = choix.toLowerCase();
            $('.zoneChoix').keyup(function() {
                $(this).val($(this).val().toLowerCase());
            });
            var T = '5vw';
            var P = 'script_ecole_2regular';
            break;


        case 5:
            choix = choix.toLowerCase();
            $('.zoneChoix').keyup(function() {
                $(this).val($(this).val().toLowerCase());
            });
            var T = '4.3vw';
            var P = 'cursive_standardregular';
            break;
    }

    $('.zoneChoix').css('font-size', T);
    $('.zoneChoix').css('font-family', P);
    $('.zoneChoix').val(choix);
    $('.zoneChoix').focus();

};

// événement sur le bouton 0 
$('.bouton0').on('click', function() {
    actionsCommunesButton0Button1Button2(0)
});

// événement sur le bouton 1
$('.bouton1').on('click', function() {
    actionsCommunesButton0Button1Button2(1)
});

// événement sur le bouton 2 
$('.bouton2').on('click', function() {
    actionsCommunesButton0Button1Button2(2)
});

// événement sur le bouton 3 
$('.bouton3').on('click', function() {
    actionsCommunesButton3Button4Button5(3)
});

// événement sur le bouton 4
$('.bouton4').on('click', function() {
    actionsCommunesButton3Button4Button5(4);
});

// événement sur le bouton 5 
$('.bouton5').on('click', function() {
    actionsCommunesButton3Button4Button5(5);
});

//Phase de jeu
function joue() {
    mot_cible = (mots[compteur]);
    $('.cible').attr('src', `../img2/${mot_cible}.JPG`); //affiche l'image du 1er mot
    $('p').text(mot_cible); // écrit le 1er mot sous l'image

    mot_cible = mot_cible.toUpperCase();
    $('p').css('font-size', '5vw');
    $('p').css('font-family', 'script_ecole_2regular');

    $('.zoneChoix').val('');
    $('.zoneChoix').css('font-family', 'script_ecole_2regular');

    //Met le texte en MAJUSCULE par défaut
    $('.zoneChoix').keyup(function() {
        $(this).val($(this).val().toUpperCase());
    });
    $('.zoneChoix').focus();

};

//Verifie la réponse du joueur
function verification(choix) {

    if (choix === mot_cible) {
        $('.résultat' + compteur).css('background', 'green');
        $('.résultat' + compteur).show();
        compteurBonneReponse++;

    } else {
        $('.résultat' + compteur).css('background', 'red');
        $('.résultat' + compteur).show();
    }
};

//initialisation du jeu
shuffle(mots); //mélange les mots
joue();

//événement sur le bouton Réponse
$('.Resultat').on('click', function() {
    compteur++;
    choix = $('.zoneChoix').val();
    choix = choix.toUpperCase(); //transforme mot pour éviter la casse
    choix = $.trim(choix); //transforme mot pour éviter les espaces
    mot_cible = mot_cible.toUpperCase(); //transforme mot pour éviter la casse
    verification(choix); //verifie l'orthographe du mot
    joue();
    if (compteur === 11) { //stoppe le jeu au bout de 10 réponses
        $('.Resultat').hide();
        $('.bouton0').hide();
        $('.bouton1').hide();
        $('.bouton2').hide();

        if (compteurBonneReponse > 7) {
            $('.zone1_A').css('color', 'green');
            $('.zone1_A').text('BRAVO');
            image.src = '../img/smile_content.jpg'; // declare l'image selon le tirage de lettre    
            context.drawImage(image, 0, 0, 300, 150); // affiche l'image
        } else {
            $('.zone1_A').text('Dommage, recommence');
            image.src = '../img/smile_triste.jpg'; // declare l'image selon le tirage de lettre    
            context.drawImage(image, 0, 0, 300, 150); // affiche l'image
        }
    }
});