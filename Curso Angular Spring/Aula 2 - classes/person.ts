export class Person {

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    public showIdade(idade: number): void{
        console.log(`${this.name} tem ${idade} anos de idade`);
    }

    public toString(): string{
        return `classe person nome ${this.name}`;
    }

}