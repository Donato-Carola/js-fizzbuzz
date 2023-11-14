//!Consegna:
/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
  per i multipli di 3 stampi “Fizz” al posto del numero
  per i multipli di 5 stampi “Buzz” al posto del numero
  per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione appendChild()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.*/


//** inizio */



//? creare il for per stampare i numeri da 1 a 100
for(i=1; i<=100; i++){
    //? creare un IF 
    //? calcolare i multipli di 3
    if (i % 3 == 0){
        
         console.log(`Multi di 3: ${i} Fizz`);
       // console.log('Fizz');
        
        //? calcolare i multipli di 5
    }else if(i % 5 == 0){

        console.log(`Multi di 5: ${i}  Buzz` );
        // console.log(' Buzz');
         
         //? calcolare i multipli di 3 e 5
    }
    
   if (i % 3 == 0 || i % 5 == 0) {

    console.log(`Multi di 3 e 5: ${i} FizzBuzz`);
      //console.log('FizzBuzz');
    }
}









