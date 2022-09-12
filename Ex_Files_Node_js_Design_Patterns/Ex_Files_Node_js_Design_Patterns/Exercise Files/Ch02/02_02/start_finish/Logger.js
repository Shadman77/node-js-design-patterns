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

// Make sure than only one instance of the singleton is created
// that is only one instance of the Logger is created
class Singleton {
  constructor() {
    // check if an instance of the class exists, if not then create an instance = to a new logger object
    if (!Singleton.instance) Singleton.instance = new Logger();
  }

  // return the instance
  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
