export class Usuario {
    public id: string;       
    public  email:string;     
    public password:string;    
    public profile:string;
    
    constructor(id: string,       
        email:string,     
        password:string,   
        profile:string){
        this.id = id
        this.email= email;
        this.password = password;
        this.profile = profile;
    }

}
