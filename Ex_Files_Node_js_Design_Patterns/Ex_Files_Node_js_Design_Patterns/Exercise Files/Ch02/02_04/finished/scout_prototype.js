var Shopper = require('./Shopper');

var scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

// a basic started instance so then common info does not have to be repeated
module.exports = scout;
