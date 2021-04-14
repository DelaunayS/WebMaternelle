// transforme la police avec les doigts en nombre
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

// fonction pour mélanger une liste
function shuffle(o) {
	for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};


// definition de la liste de nombres
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// appel de la fonction shuffle
shuffle(numbers);
//permet de tirer au sort le nombre_cible et le nombre de depart
function hasard(max){
    return Math.floor(Math.random()*Math.floor(max))
}

var k=1
for (let i=1; i<9;i++){
    shuffle(numbers)   
    for(let j=0; j<3;j++){
        let elt=document.getElementById(`nombre${k}`)               
        elt.innerHTML=(pointEnNombre(numbers[j]))     
        k++          
    }
}