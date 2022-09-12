class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

// export an instance instead to the class, 
// so the instance will be stored in the cache and everyone will get the same instance
module.exports = new Logger();
