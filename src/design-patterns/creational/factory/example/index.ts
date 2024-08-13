import { PaymentFactory } from "./PaymentProcessorFactory";

const upiProcessor = PaymentFactory.createPaymentProcessor("UPI");
upiProcessor?.processPayment(123);

const cardProcessor = PaymentFactory.createPaymentProcessor("card");
upiProcessor?.processPayment(234);
