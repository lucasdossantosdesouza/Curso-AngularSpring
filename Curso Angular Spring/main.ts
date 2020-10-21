import { DaoInterfaceG } from './Aula 4 - Generics/dao.interface';
import { PersonDao } from './Aula 3 - Interface/person-dao';
import { DaoInterface } from './Aula 3 - Interface/dao.interface';
import { Person } from './Aula 2 - classes/person';
import { Studente } from './Aula 2 - classes/student';
import { Dao } from './Aula 4 - Generics/dao';

//herança
let p = new Person('Lucas dos Santos de Souza');

p.showIdade(30);

let s = new Studente('Tiago Cardoso dos Santos');
s.showIdade(3);

///interface

let personDao: DaoInterface = new PersonDao();
personDao.insert(p);

//generics
let dao: DaoInterfaceG<Person> = new Dao<Person>();

dao.insert(p);