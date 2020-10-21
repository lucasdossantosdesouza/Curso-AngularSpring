"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_dao_1 = require("./Aula 3 - Interface/person-dao");
var person_1 = require("./Aula 2 - classes/person");
var student_1 = require("./Aula 2 - classes/student");
var dao_1 = require("./Aula 4 - Generics/dao");
//herança
var p = new person_1.Person('Lucas dos Santos de Souza');
p.showIdade(30);
var s = new student_1.Studente('Tiago Cardoso dos Santos');
s.showIdade(3);
///interface
var personDao = new person_dao_1.PersonDao();
personDao.insert(p);
//generics
var dao = new dao_1.Dao();
dao.insert(p);
//# sourceMappingURL=main.js.map