var scout_prototype = require('./scout_prototype');

// cloning the starter instance
var alex = scout_prototype.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slingshot');

// cloning the starter instance
var eve = scout_prototype.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
