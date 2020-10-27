import { Usuario } from './usuario';

export class Ticket {
    public id: string;
    public number: number;
    public titulo: string;
    public status: string;
    public priority: string;
    public image: string;
    public usuario: Usuario;
    public assigneredUser:Usuario;
    public data: string;
    public description: string;
    public changeStatus: Array<string>;

   constructor(){
       
   }
}
