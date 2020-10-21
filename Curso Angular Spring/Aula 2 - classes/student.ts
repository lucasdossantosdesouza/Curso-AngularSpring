import { Person } from './person';

// herança
export class Studente extends Person{

    constructor(name: string){
        super(name);
    }

    //sobrescrita de método
    public showIdade(idade: number): void{
        console.log('Estudando');
        super.showIdade(25);
    }
}