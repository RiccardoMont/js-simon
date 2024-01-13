
/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

/*Dichiarazione variabili globali*/
const div = document.querySelector('div');
const h3 = document.querySelector('h3');
const startingNumbers = [];
const guessedNumbers = [];
const wrongNumbers = [];


/*Ciclo per richiamare più volte la funzione creatrice del numero random*/
while(startingNumbers.length < 5){

    const randomNumber = numberRandomizer();
    
    if (!(startingNumbers.includes(randomNumber))) {
        startingNumbers.push(randomNumber);
    } 

    writeStartingNumbers();

}


/*Funzione che scrive gli iniziali numeri in pagina*/
function writeStartingNumbers() {

    h3.innerHTML = startingNumbers.join(' ')

}


/*Funzione per creare un numero random (da 0 a 10)*/
function numberRandomizer() {

    return Math.floor(Math.random() * 11);

}

/*MarkUp della risposta finale*/
function risposta() {

    const answersMarkUp = `
    <h3>I tuoi numeri:</h3> 
    <br>
    <h4>Corretti: <span style="color:green">${guessedNumbers.join(' ')}</span>  Errati:<span style="color:red">${wrongNumbers.join(' ')}</span></h4>
    `


    div.insertAdjacentHTML('beforeend', answersMarkUp);
}

/*Applicato ritardo sulla funzione guessIt*/
setTimeout(guessIt, 2000);


/*Funzione che chiede all'utente di inserire i numeri per poi smistarli nei vari array di supporto*/
function guessIt() {

    h3.style.display = 'none';

    for (let i = 0; i < 5; i++) {

        const answer = prompt(`Inserisci uno dei cinque numeri visualizzati prima. Se te li ricordi (${i + 1}°)`);


        if (startingNumbers.includes(Number(answer))) {


            guessedNumbers.push(Number(answer));

        } else {

            wrongNumbers.push(Number(answer));

        }

    }

    risposta()

}

