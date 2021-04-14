document.oncontextmenu = new Function("return false");//bloquer clic-droit
var compteur=1; //compte le nombre
var choix="";   // récupère le choix du joueur
var choix_reel=0;// transforme le choix en nombre
var nombre_cible=""; //le nombre qu'il faut atteindre
var compteurBonneReponse=0;//compte le nombre de bonnes réponses

//permet de tirer au sort le nombre_cible et le nombre de depart
function hasard(max){
    return Math.floor(Math.random()*Math.floor(max))
}

//Phase de jeu
function joue(){    
    nombre_cible=hasard(10);
    $('p').text(nombre_cible);    
}; 

//Verifie la réponse du joueur
function verification(nombre){
    
    if (nombre===nombre_cible){
        $('.résultat'+compteur).css('background','green');
        $('.résultat'+compteur).show();
        compteurBonneReponse++;

    }else{
        $('.résultat'+compteur).css('background','red');
        $('.résultat'+compteur).show();
    }
};

// transforme la police avec les doigts en nombre
function doigtEnNombre(choix){
    switch(choix){
        case '   ':
            return choix_reel=0;
        case 'A':
            return choix_reel=1;            
        case 'B':
            return choix_reel=2;
        case 'C':
            return choix_reel=3;
        case 'D':
            return choix_reel=4;
        case 'E':
            return choix_reel=5;
        case 'F':
            return choix_reel=6;
        case 'G':
            return choix_reel=7;
        case 'H':
            return choix_reel=8;
        case 'I':
            return choix_reel=9;
        case 'J':
            return choix_reel=10;
    }
};

//événement sur le bouton point interrogation
$('#interrogation').on('click',function(){
    $('.container3').show()
});

//événement sur le bouton point interrogation
$('.fermer_aide').on('click',function(){
    $('.container3').hide()
});

// événement sur les boutons nombres en vert
$('.bouton').on( 'click', function () {   
    choix=$(this).val();
    doigtEnNombre(choix);
    verification(choix_reel);
    compteur++;
    joue();
    if (compteur===11){ //stoppe le jeu au bout de 10 réponses
        $('.bouton').hide(); 
        $('p').hide();  

        if (compteurBonneReponse>7){           
            $('.action').text('BRAVO');
            $('.action').css('color','green');
            $('.action').css('font-size','15vw');
            $('.action').show();
            $('.cible_img').attr('src','../img/smile_content.jpg');
                   
           
        }else{
            $('.action').text('Dommage, recommence');
            $('.action').css('color','orange');
            $('.action').css('font-size','10vw');
            $('.action').show();
            $('.cible_img').attr('src','../img/smile_triste.jpg');
           
        }
    } 
});

//Initialise le jeu
    $('.container3').hide()     
    joue();

 // bouton recommencer
$('.flecheRecommencer').on( 'click', function () {   
    location.reload();
});