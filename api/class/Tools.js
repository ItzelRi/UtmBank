class tls{
    static metodo(largo){
        let CLB = "1234567890";
        let result = "";
            for (let i = 0; i <= largo; i++) {
            result += CLB.charAt(Math.floor(Math.random() * CLB.length));
                }
            return result;
        }
    }
    console.log(tls.metodo(15))

 class ran{
    static metodo(largo){
        let dom = "1234567890";
        let result = "";
            for (let i = 0; i <= largo; i++) {
            result += dom.charAt(Math.floor(Math.random() * dom.length));
                }
            return result;
        }
    }
    console.log(ran.metodo(2))

class caducation{
    static deathLine(){
        let date = new Date();
        let dieline = date.getFullYear()+3;
       date.setFullYear(dieline);
        return date;
    }
}