//trae cositas de otro lado con sus especificaciones
import AccountModel from "../models/AccountModel.js";

//crea y asigna cosas que van a llevar un valor mas adelante.
class ManagerAccount{
    const(userID, accountNumber, accountType, balance){
        this.userId = userId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
    } 


//ATRAE TODAS LAS CUENTAS
    //creamos una accion
    async getAccounts(){
        try{
     //Nota: asincrono, osea, tiene que esperar a que llegue toda la info.
            const accounts = await AccountModel.find();
            return accounts;
        }catch (error){
    //tira un error
            throw new Error(`Ya valio mijo ${error}`);
        }
    }


//ATRAE UNA SOLA CUENTA
    //creamos otra accion
    async getAccount(id){
        try {
    //Busca atravez del ID
            const account = await AccountModel.findById(id);
            return account;
        } catch (error) {
    //Nota: El error no detecta vacios
            throw new Error(`Chiiin, te hackearon mien ${error}`);
        }
    }


//SUMA UN VALOR AL BALANCE (DINERO)
    async addBalance(id, amount){
         try {
        //sumale un valor a algo ya establecido
            this.balance += amount;
        //Busca atravez del ID y actualiza lo que hay dentro del balance
            await AccountModel.findByIdAndUpdate(id,{
        //
                $set:{
                    balance:this.balanca
                }
            });
            return "Vientos!";
        } catch (error) {
            throw new Error(`Tssss te vaciaron tu cuenta mijo tssss ${error}`);
         }
     }


//RESTA UN VALOR AL BALANCE (DINERO)
    async restBalance(id, amount){
        try {
       //resta un valor a algo ya establecido
           this.balance -= amount;
       //Busca atravez del ID y actualiza lo que hay dentro del balance
           await AccountModel.findByIdAndUpdate(id,{
               $set:{
                   balance:this.balanca
               }
        });
        return "Awebo!";
       } catch (error) {
           throw new Error(`Tssss te vaciaron tu cuenta mijo tssss ${error}`);
        }
    }


//CREA UNA CUENTA
    async createAccount(){
        try {
            const account = await AccountModel.create({
        //asigna los valores a las propiedades
                userId:this.userId,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance,
            });
            return account;
        } catch (error) {
            throw new Error(`Le caiste mal al programa, ushcale! ${error}`);
        }
    }
}

export default ManagerAccount;