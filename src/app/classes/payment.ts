export class Payment {
    paymentId: number | undefined;
    emailIdOfStudent: string | undefined;
    applicationId: number | undefined;
    paymentAmount: number | undefined;
    paymentDescription: string | undefined;
    paymentDate: Date | undefined;
    paymentStatus: string | undefined;
    constructor(paymentId: number, emailIdOfStudent: string , applicationId: number, paymentAmount: number, 
        paymentDescription: string, paymentDate: Date, paymentStatus: string  ){

    }
}
