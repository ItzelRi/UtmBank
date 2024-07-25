import CardModel from "../models/CardModel.js"

class ManagerCard{
    constructor(userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        status) {
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;
        }

        async createCard(){
           try {
            await CardModel.create({
                userId: this.userId,
                accountId: this.accountId,
                cardNumber: this.cardNumber,
                cardType: this.cardType,
                expirationDate: this.expirationDate,
                securityCode: this.securityCode,
                status: this.status
            });
            return "Ahora nos debes 100000 :D";
           } catch (error) {
            throw new Error(`Se me hace que eres pobre, no te acepto ${error}`);
           }
        }
   

    async getCards(){
        try{
            const cards = await CardModel.find();
            return cards;
        }catch (error){
            throw new Error(`No hay ninguna tarjeta, eres esquizo ;.; ${error}`);
        }
    }


    async getCard(id){
        try {
            const card = await CardModel.findById(id);
            return Card;
        } catch (error) {
            throw new Error(`Los narcos secuestraron tu tarjeta wey :O ${error}`);
        }
    }
}
 export default ManagerCard;
