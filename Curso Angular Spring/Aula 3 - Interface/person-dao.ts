import { Person } from './../Aula 2 - classes/person';
import { DaoInterface } from './dao.interface';
export class PersonDao implements DaoInterface{

    tabelaName: string;

    insert(person: Person): boolean{
        console.log('inserindo...',person.toString());
        return true;
    }
    update(person: Person): boolean{
        return true;
    }
    delete(id: number): boolean{
        return true;
    }
    find(id: number): Person{
        return null;
    }
    findall(): Array<Person>{
        return [new Person('Lucas'),new Person('Andreia')];
    }
   
}