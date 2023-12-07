// Traccia dell'esercizio: Calcolatrice con Operazioni Diverse

// Hai il compito di implementare una semplice calcolatrice che può eseguire operazioni di addizione, sottrazione, moltiplicazione e divisione su un insieme di numeri dati.

// Funzione Principale:

// Implementa una funzione chiamata calcola che accetta almeno due argomenti: un operatore e un elenco di numeri (utilizza lo rest operator).
// L'operatore può essere + per l'addizione, - per la sottrazione, * per la moltiplicazione e / per la divisione.
// Operazioni Matematiche:

// All'interno della funzione calcola, crea una funzione ausiliaria chiamata eseguiOperazione.
// Utilizza condizioni if-else per gestire i diversi operatori e calcolare il risultato appropriato.
// Per l'addizione, utilizza il metodo reduce con l'operazione di somma (+).
// Per la sottrazione, utilizza il metodo reduce con l'operazione di sottrazione (-).
// Per la moltiplicazione, utilizza il metodo reduce con l'operazione di moltiplicazione (*).
// Per la divisione, verifica se ci sono zeri nei numeri e gestisci l'eccezione della divisione per zero.
// Risultato e Messaggi:

// Stampa il risultato delle operazioni o messaggi appropriati a seconda del caso.
// Se l'operatore non è valido, stampa un messaggio che indica che l'operatore non è supportato.
// Timeout:

// Aggiungi un ritardo di 2 secondi (utilizzando setTimeout) prima di eseguire effettivamente l'operazione.
// Durante questo periodo di attesa, stampa un messaggio che indica che il calcolo è in corso.




function calcola(operatore, ...numeri) {
    function eseguiOperazione() {
        let risultato;

        if (operatore === '+') {
            risultato = numeri.reduce((acc, curr) => acc + curr, 0);
        } else if (operatore === '-') {
            risultato = numeri.reduce((acc, curr) => acc - curr);
        } else if (operatore === '*') {
            risultato = numeri.reduce((acc, curr) => acc * curr, 1);
        } else if (operatore === '/') {
            if (numeri.some(num => num === 0)) {
                risultato = 'Impossibile dividere per zero';
            } else {
                risultato = numeri.reduce((acc, curr) => acc / curr);
            }
        } else {
            risultato = 'Operatore non valido';
        }

        console.log(`Risultato: ${risultato}`);
    }

    setTimeout(eseguiOperazione, 2000);

    console.log('Sto calcolando il risultato');

}

// Esempio di utilizzo
// Output atteso: Risultato: 10 (dopo 2 secondi)
// calcola('+', 2, 3, 5); 
// Output atteso: Risultato: 5 (dopo 2 secondi)
// calcola('-', 10, 3, 2);
// Output atteso: Risultato: 24 (dopo 2 secondi)
// calcola('*', 2, 4, 3); 
// Output atteso: Risultato: 2.5 (dopo 2 secondi)
// calcola('/', 20, 4, 2); 
// Output atteso: Operatore non valido (dopo 2 secondi)
// calcola('&', 5, 8, 2); 
