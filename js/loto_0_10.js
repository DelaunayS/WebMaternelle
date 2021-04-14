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
let numbers=[0,1,2,3,4,5,6,7,8,9,10];

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