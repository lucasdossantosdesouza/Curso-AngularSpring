export interface DaoInterface{

    tabelaName: string;

    insert(object: any): boolean;
    update(object: any): boolean;
    delete(id: number): boolean;
    find(id: number): any;
    findall(): Array<any>;   

}