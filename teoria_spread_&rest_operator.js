// Immaginiamo che tu stia preparando una festa e hai due scatole, una con regali (array) e un'altra con confetti (array).


// 1. Spread Operator (...):

//  È come prendere tutti i regali da una scatola e spargerli su un tavolo per mostrarli a tutti.
 
//  In JavaScript, lo spread operator viene utilizzato per "spargere" gli elementi di un array o oggetto in un altro array o oggetto.

 const scatolaRegali = ['pupazzo', 'libro', 'giocattolo'];
const tavoloFesta = [...scatolaRegali, 'musica', 'ballons'];

console.log(tavoloFesta);
// Output: ['pupazzo', 'libro', 'giocattolo', 'musica', 'ballons']


// 2. Rest Operator (...): 
// È come mettere tutti i confetti rimasti nella scatola. 

// In JavaScript, il rest operator viene utilizzato per raccogliere gli elementi rimanenti e metterli in un array.

const [primoConfetto, ...altriConfetti] = ['rosso', 'verde', 'blu'];

console.log(altriConfetti);
// Output: ['verde', 'blu']
