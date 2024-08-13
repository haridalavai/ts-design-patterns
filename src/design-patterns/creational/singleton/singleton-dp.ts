class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = new Logger();
    return Logger.instance;
  }

  public log(message: string) {
    console.log(message);
  }
}

let logger1 = Logger.getInstance();
logger1.log("message1");

let logger2 = Logger.getInstance();
logger2.log("message2");

console.log(logger1 === logger2);
