import { DaoInterfaceG } from './dao.interface';
export class Dao<T> implements DaoInterfaceG<T>{

    tabelaName: string;

    insert(object: T): boolean{
        console.log('inserindo...', object);     
        return true;
    }
    update(object: T): boolean{
        return true;
    }
    delete(id: number): boolean{
        return true;
    }
    find(id: number): T{
        return null;
    }
    findall(): Array<T>{
        return [null];
    }
   
}