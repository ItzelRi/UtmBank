import TransactionModel from "../models/TransactionModel.js";

class ManagerTransaction{
    constructor(accountFromId, accountToId, type, amount, description){
        this.accountFromId = accountFromId; 
        this.accountToId = accountToId;
        this.type = type; 
        this.amount = amount; 
        this.description = description;
    }

    async createTransaction(){
        try {
            const transaction = await TransactionModel.create({
                accountFromId: this.accountFromId,
                accountToId: this.accountToId,
                type: this.type,
                amount: this.amount,
                description: this.description
            });
            return transaction;
        } catch (error) {
            throw new Error(`Matenme, el programa esta sufriendo ${error}`); 
        }
    }

    async getTransaction(id){
        try {
            const transaction = await TransactionModel.findById(id);
            return transaction;
        } catch (error) {
            throw new Error(`ya no awanto, ya no awanto ${error}`);  
        }
    }

    async getTransactions(){
        try {
            const transactions = await TransactionModel.find();
            return transactions;
        } catch (error) {
            throw new Error(`-c tira del segundo piso- ${error}`);  
        }
    }

    async getAccountTransactions(accountFromId){
        try {
            const transactions = await TransactionModel.find({accountFromId:id});
            return transactions;
        } catch (error) {
            throw new Error(`No'o mi nieta ${error}`);  
        }
    }
}

export default ManagerTransaction;