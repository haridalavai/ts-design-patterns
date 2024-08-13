import {
  CardPaymentProcessor,
  PaypalPaymentProcessor,
  UPIPaymentProcessor,
} from "./PaymentProcessor";

export class PaymentFactory {
  static createPaymentProcessor(type: "paypal" | "card" | "UPI") {
    switch (type) {
      case "paypal":
        return new PaypalPaymentProcessor();
        break;
      case "UPI":
        return new UPIPaymentProcessor();
        break;
      case "card":
        return new CardPaymentProcessor();
        break;
      default:
        console.log("invalid processor type");
    }
  }
}
