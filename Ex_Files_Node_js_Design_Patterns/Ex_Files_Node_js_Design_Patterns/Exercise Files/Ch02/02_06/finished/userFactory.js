var Employee = require('./Employee');
var Shopper = require('./Shopper');

// conditionally create different type of instance as needed
var userFactory = (name, money=0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;
