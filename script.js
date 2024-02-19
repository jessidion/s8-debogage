function Jeu(maxEssais) {
    this.nombre = Math.ceil(Math.random()*100);
    this.nbEssais = 0;
    this.maxEssais = 0;
}

let jeu = new Jeu(10);

function essai() {
    const essai = parseInt($('#essai').val());
    $('#essais p').text(essai);
    jeu.nbEssais++;

    if(essai === jeu.nombre) {
        $('#message').text("Bravo !").addClass('succes');
        fin();
    }
    else {
        const message = essai < jeu.nombre ? "Trop haut": "Trop bas;";
        if(jeu.nbEssais > jeu.maxEssais) {
            fin();
        }
        else if(essai < jeu.nombre){
            $('.nombre').filter((index, element)=>parseInt(element.id,10) < jeu.nombre).addClass('cache');
        }
        else {
            $('.nombre').filter((element)=>parseInt($(element).attr('id'),10) > jeu.nombre).addClass('cache');
        }
        $('#message').text(`Ah non :(  ${message}`).addClass('erreur');
    }
}

function fin(){
    $('#essais div').addClass('cache');
    $('#essais').text('<button onclick="nouveauJeu()">Jouer une nouvelle partie</button>');
}

function nouveauJeu() {
    jeu = new Jeu();
    $('#essais button').last().remove();
    $('#essai').val(0);
    $('#essais p').first().text('');
    $('#message').text().removeClass('succes');
}
