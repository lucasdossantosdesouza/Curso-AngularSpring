export interface DaoInterfaceG<T>{

    tabelaName: string;

    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): boolean;
    find(id: number): T;
    findall(): Array<T>;   

}