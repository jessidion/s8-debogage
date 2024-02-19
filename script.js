function Jeu(maxEssais) {
    this.nombre = Math.ceil(Math.random()*100);
    this.nbEssais = 0;
    this.maxEssais = maxEssais;
}

let jeu = new Jeu(10);
console.log(jeu.nombre)
function essaie() {
    const essai = parseInt($('#essai').val());
    $('#essais p').append(essai + " ");
    jeu.nbEssais++;

    if(essai === jeu.nombre) {
        $('#message').text("Bravo !").addClass('succes');
        fin();
    }
    else {
        const message = essai > jeu.nombre ? "Trop haut": "Trop bas;";
        if(jeu.nbEssais >= jeu.maxEssais) {
            fin();
        }
        else if(essai < jeu.nombre){
            $('.nombre').filter((index, element)=> parseInt(element.id,10) <= essai).addClass('cache');
        }
        else {
            $('.nombre').filter((index, element)=> parseInt(element.id,10) >= essai).addClass('cache');
        }
        $('#message').text(`Ah non :(  ${message}`).addClass('erreur');
    }
}

function fin(){
    $('#essais div').addClass('cache');
    $('#essais').append('<button onclick="nouveauJeu()">Jouer une nouvelle partie</button>');
}

function nouveauJeu() {
    jeu = new Jeu(10);
}
