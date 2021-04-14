document.oncontextmenu = new Function("return false");//bloquer clic-droit
//compteur du nombre de tirage
var i=0;

//déclaration d'un canvas
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

// Crée un nouvel élément image
var image = new Image();  

// fonction pour mélanger une liste
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

//variable de stockage des tirages effectués
verification=" ";

// fonction pour permettre de stocker les tirages déjà effectués dans verification
function verification_tirages(l){
	verification = l+" - "+verification;
	return verification;
};

// definition de la liste des lettres
let letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// appel de la fonction shuffle pour mélanger les lettres
shuffle(letters);

//action sur le bouton tirage
$('.tirage').on( 'click', function () {   
    // tant que le nombre de tirage est inférieur au nombre total de lettres
    if (i<letters.length){
        image.src=`../img/${letters[i]}.gif`;   // declare l'image selon le tirage de lettre    
        context.drawImage(image,20,20,275,375); // affiche l'image
        verification_tirages(letters[i]); //permet de stocker le tirage
        i=i+1;
        
    }else{
        $('.tirage').remove();  //retire le bouton tirage
        $('.resultat').text(`Tirages effectués : ${verification}`);
        $('.resultat').show(); // affiche tous les tirages
    }
      
});

//action sur le bouton verification
 $('.verification').on( 'click', function () {   
    $('.resultat').text(`Tirages effectués : ${verification}`);
    $('.resultat').show();
    });