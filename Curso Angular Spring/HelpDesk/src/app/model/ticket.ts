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

    constructor(id: string,
        number: number,
        titulo: string,
        status: string,
        priority: string,
        image: string,
        usuario: Usuario,
        assigneredUser:Usuario,
        data: string,
        description: string,
        changeStatus: Array<string>
    ){
        this.id = id;
        this.number = number;
        this.titulo = titulo;
        this.status = status;
        this.priority = priority;
        this.image = image;
        this.usuario = usuario;
        this.assigneredUser = assigneredUser;
        this.data = data;
        this.description = description;
        this.changeStatus = changeStatus;
    }
}
