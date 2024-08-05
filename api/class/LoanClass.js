//solicitar
//pagar
//mostrar prestamo
//mostrar prestamos
//validar usuario
import LoanModel from "../models/LoanModel.js";
import PaymentModel from "../models/PaymentModel.js";

class LoanManager{
    constructor(userId,
        loanType,
        amount,
        interestRate,
        numberPayments,
        startDate,
        endDate,
        status
    ){
        this.userId = userId
        this.loanType = loanType
        this.amount = amount
        this.interestRate = interestRate
        this.numberPayments = numberPayments
        this.startDate = startDate
        this.endDate = endDate
        this.status = status
    }

    async createLoan(){
        try {
            const loan = await LoanModel.create({
                userId: this.userId,
                loanType: this.loanType,
                amount: this.amount,
                interestRate: this.interestRate,
                numberPayments: this.numberPayments,
                startDate: this.startDate,
                endDate: this.endDate,
                status:this.status,
            });
            return loan;
        } catch (error) {
            throw new Error("No jalo mien, chales")
        }
    }

    async payLoan(userId,
        loanId,
        amount,
        numberPayment){
            try {
                const payment = await PaymentModel.create({
                    userId,
                    loanId,
                    amount,
                    numberPayment
                });
                return payment;
            } catch (error) {
                throw new Error("Se chingo, no se pago wey")
            } 
        }
        async getLoan(id){
            try {
                const loan = await  LoanModel.findById(id);
                return loan;
            } catch (error) {
                throw new Error("Valio changos wey")
            }
        }
        async getLoans(){
            try {
                const loans = await  LoanModel.find();
                return loans;
            } catch (error) {
                throw new Error("No vas a ver ni mangos")
            }
        }
        async validateUser(){
            try {
                //El usuario debe tener al menos 
                //3 días en la plataforma
                //Haber hecho 2 transacciones
                //Y mantener un saldo superior a 5000
            } catch (error) {
                throw new Error("c petateo el programa")
            }
        }
}

export default LoanManager;