import api from './api';

const btnNewDeck      = document.getElementById('newDeck');
const btnShuffleCards = document.getElementById('shuffleCards');
const btnBuyCards     = document.getElementById('buyCards');

const infoDeck  = JSON.parse(localStorage.getItem('list-deck')) || [];
const listCards = JSON.parse(localStorage.getItem('list-cards')) || [];

async function newDeck(){
    localStorage.removeItem('list-deck');
    localStorage.removeItem('list-cards');
    saveDeckToStorage( (await api.get(`new/shuffle/?deck_count=1`)).data );
    document.location.reload(true);    
}

async function shuffleDeck(){    
    const resShuffle = await api.get(`${infoDeck.deck_id}/shuffle/`)
                                .then()
                                .catch(err => alert('Erro no Embaralhamento'));
    infoDeck.remaining = resShuffle.data.remaining;    
    saveDeckToStorage(infoDeck);
}

async function buyCards(){    
    if (infoDeck.remaining <= 10 ){
        localStorage.removeItem('list-cards');
        shuffleDeck();
    }
    /*
    if (listCards.length == 0){
        alert('Não há cartas para jogar. Embaralhe as cartas para comprar novamente.'); 
        return;
    }*/
    const resCards = await api.get(`${infoDeck.deck_id}/draw/?count=21`)
                           .then()
                           .catch(err => alert('Erro ao Comprar as Cartas.'))   
    const listcards = [];
    resCards.data.cards.map( ({code, image, value, suit}) => (listcards.push({code, image, value, suit})) );    
    infoDeck.remaining = resCards.data.remaining;
    saveDeckToStorage(infoDeck);
    saveCardsToStorage(listcards);
}

function saveDeckToStorage(infoDeck){    
    localStorage.setItem('list-deck', JSON.stringify(infoDeck));
}

function saveCardsToStorage(listCards){
    localStorage.setItem('list-cards', JSON.stringify(listCards));
}

//console.log(infoDeck.deck_id);
btnNewDeck.onclick      = newDeck;
btnShuffleCards.onclick = shuffleDeck;
btnBuyCards.onclick     = buyCards;

const divPai   = document.getElementById('pai');
const divFila1 = document.createElement('div');
const divFila2 = document.createElement('div');
const divFila3 = document.createElement('div');

//divPai.appendChild(  );

for (let index = 0; index < listCards.length; index++) {       
    if (index === 7) {
        break;
    }
    const textName = document.createElement('text');
    const img      = document.createElement('img');
    textName.textContent = listCards[index].value;
    img.src = listCards[index].image;    
    divFila1.appendChild(img);
    divFila1.setAttribute('id','divfila1');
    divPai.appendChild(divFila1);
    
}
/*
for (let index = 7; index < listCards.length; index++) {       
    if (index === 14) {
        break;
    }
    const textName = document.createElement('text');
    const img      = document.createElement('img');
    textName.textContent = listCards[index].value;
    img.src = listCards[index].image;    
    divFila2.setAttribute('id','divfila2');
    divFila2.appendChild(img);
    divPai.appendChild(divFila2);
    
}
for (let index = 14; index < listCards.length; index++) {       
    if (index === 21) {
        break;
    }
    const textName = document.createElement('text');
    const img      = document.createElement('img');
    textName.textContent = listCards[index].value;
    img.src = listCards[index].image;    
    divFila3.setAttribute('id','divfila3');
    divFila3.appendChild(img);
    divPai.appendChild(divFila3);
    
}
*/



/*
listCards.forEach( function(element, index){
    const textName = document.createElement('text');
    const img      = document.createElement('img');

    textName.textContent = element.value;
    img.src = element.image;
    //divFila1.appendChild(textName);
    divFila1.appendChild(img);

    divPai.appendChild(divFila1);
    
    //console.log(element.value + '  ' + element.image + ' Posicao: ' + index);
    
 });*/
