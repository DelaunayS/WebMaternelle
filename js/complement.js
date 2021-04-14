document.oncontextmenu = new Function("return false");//bloquer clic-droit
var compteur=1; //compte le nombre
var choix="";   // détermine le choix du joueur
var nombre_cible=""; //le nombre qu'il faut atteindre
var nombre_depart="";// le nombre à partir duquel on compte
var choix_final="";// additionne nombre_cible avec nombre_depart
var compteurBonneReponse=0;//compte le nombre de bonnes réponses

//déclaration d'un canvas
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

// Crée un nouvel élément image
var image = new Image(); 

//permet de tirer au sort le nombre_cible et le nombre de depart
function hasard(max){
    return Math.floor(Math.random()*Math.floor(max))
}

//Phase de jeu
function joue(){
    $('.nombre'+nombre_depart).css('background','#d3fcc9');
    nombre_cible=hasard(6)+5;
    $('.texte_image').text(nombre_cible);    

    do {
        nombre_depart=hasard(6);
    }while(nombre_depart>nombre_cible);    
   
    $('.nombre'+nombre_depart).css('background','rgb(89, 188, 245)');
}; 

//Verifie la réponse du joueur
function verification(nombre){
    choix_final=(parseFloat(nombre)+parseFloat(nombre_depart));
    if (choix_final===nombre_cible){
        $('.résultat'+compteur).css('background','green');
        $('.résultat'+compteur).show();
        compteurBonneReponse++;

    }else{
        $('.résultat'+compteur).css('background','red');
        $('.résultat'+compteur).show();
    }
}

// événement sur les boutons nombres du haut
$('.bouton').on( 'click', function () {   
    choix=$(this).val();
    verification(choix);
    compteur++;
    joue();
    if (compteur===11){
        $('.bouton').hide();
        if (compteurBonneReponse>7){
            $('.zone1_A').css('color','green');
            $('.zone1_A').text('BRAVO');
            image.src='../img/smile_content.jpg'; // declare l'image selon le tirage de lettre    
            context.drawImage(image,0,0,300,150); // affiche l'image
        }else{
            $('.zone1_A').text('Dommage, recommence');
            image.src='../img/smile_triste.jpg';   // declare l'image selon le tirage de lettre    
            context.drawImage(image,0,0,300,150); // affiche l'image
        }
    } 
});

//Inialise le jeu
    //Cache le tableau des résultats
    for (i=0;i<11;i++){
     $('.résultat'+i).hide();
    }
    
    //1ère série
    joue();


    $('.flecheRecommencer').on( 'click', function () {   
        location.reload();
    }); 