document.oncontextmenu = new Function("return false");//bloquer clic-droit
i=0;

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

// definition de la liste de nombres
let numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

// appel de la fonction shuffle
shuffle(numbers);

$('.tirage').on( 'click', function () {   
    if (i<numbers.length){
        $(zone2).text(numbers[i]);
        verification_tirages(numbers[i]);
        i=i+1;
        
    }else{
        $('.tirage').remove();
        $(resultat).text(`Tirages effectués : ${verification}`);
        $(resultat).show();
    }
      
});

 $('.verification').on( 'click', function () {   
    $(resultat).text(`Tirages effectués : ${verification}`);
    $(resultat).show();
    });