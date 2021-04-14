document.oncontextmenu = new Function("return false");//bloquer clic-droit
var compteur=1; //compte le nombre
var choix="";   // récupère le choix du joueur
var choix_reel=0;// transforme le choix en nombre
var nombre_cible=""; //le nombre qu'il faut atteindre
var compteurBonneReponse=0;//compte le nombre de bonnes réponses
var numbers=['O','Q','R','S','T','U','UK','UL','UM','UN','UO','UQ','UR','US','UT','UU']; // definition de la liste de nombres pour la valeur des boutons

// fonction pour mélanger une liste
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

//permet de tirer au sort le nombre_cible et le nombre de depart
function hasard(max){
    return Math.floor(Math.random()*Math.floor(max))
}

//Phase de jeu
function joue(){    
    nombre_cible=5+hasard(15);
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
        case 'O':
            return choix_reel=5;
        case 'Q':
            return choix_reel=6;
        case 'R':
            return choix_reel=7;
        case 'S':
            return choix_reel=8;
        case 'T':
            return choix_reel=9;
        case 'U':
            return choix_reel=10;
        case 'UK':
            return choix_reel=11;            
        case 'UL':
            return choix_reel=12;
        case 'UM':
            return choix_reel=13;
        case 'UN':
            return choix_reel=14;
        case 'UO':
            return choix_reel=15;
        case 'UQ':
            return choix_reel=16;
        case 'UR':
            return choix_reel=17;
        case 'US':
            return choix_reel=18;
        case 'UT':
            return choix_reel=19;
        case 'UU':
            return choix_reel=20;
    }
};

//attribution des valeurs aux boutons
function AttributionValeurBoutons(){
    for (i=0;i<16;i++){
       ($('.bouton').eq(i).val(numbers[i]));        
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
    shuffle(numbers);
    AttributionValeurBoutons();
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
    shuffle(numbers);    
    AttributionValeurBoutons();
    joue();

 // bouton recommencer
$('.flecheRecommencer').on( 'click', function () {   
    location.reload();
});