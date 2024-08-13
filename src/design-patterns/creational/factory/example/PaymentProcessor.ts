export abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

export class PaypalPaymentProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of ${amount}`);
  }
}
export class CardPaymentProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of ${amount}`);
  }
}
export class UPIPaymentProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of ${amount}`);
  }
}
