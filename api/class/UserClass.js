import UserModel from "../models/UserModel.js";
import ManagerAccount from "./AccountClass.js";
import ManagerCard from "./CardClass.js";

class ManagerUser{
    constructor(email, 
        phone, 
        name, 
        lastName, 
        isInSession, 
        isAdmin, 
        password
    ) {
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;
    }

    async registrer(){
        try {
            const user = await UserModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password
            });
            const MA = new ManagerAccount(user._id,12345,"Ahorro",10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id, currentAccount._id, "16 digitos al azar", "debito",
                "De la fecha actual sumar 3 años", "Generar codigo de 3 cifras", "active"); 
                await MC.createCard();
                return user;
        } catch (error) {
            throw new Error(`Se me hace que no se va a poder ${error}`);
          
        }
    }

    async Login(email, password){
        try {
            const user = await UserModel.findOne({email: email});
            if(!user){
                throw new Error("No estas en la lista de invitados we")
            }
            if(user.password !== password){
                throw new Error(`Identificate pinshi marciano ${error}`);
            }
            return "Succeded";
        } catch (error) {
            throw new Error(`Hijoles, Te robaron la cuenta mien ${error}`);
         
        }
    }

    async getUserInfo(id){
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            throw new Error(`Hijoles, Te robaron la cuenta mien ${error}`);
        }
    }

    async updateEmail(email){
        try {
            if(!email){
            throw new Error(`No tiene piernas tu correo we ${error}`); 
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{email: email}
            })
            return "aweno"
        } catch (error) {
            throw new Error(`Valio vato ${error}`); 
           
        }
    }

    async updatePhone(id, phone){
        try {
            if(!phone){
            throw new Error(`Pinchi telefono es de la India o que? ${error}`); 
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{phone: phone}
            })
            return "aweno"
        } catch (error) {
            throw new Error(`Valio madres ${error}`); 
           
        }
    }

    async updatePassword(id, password){
        try {
            if(!password){
            throw new Error(`Te sacaste la contraseña del qlo o q? ${error}`); 
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{password: password}
            })
            return "aweno"
        } catch (error) {
            throw new Error(`No finich ${error}`); 
        }
    }

    //eliminar usuario
}

export default ManagerUser;