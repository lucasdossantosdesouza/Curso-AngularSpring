"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDao = void 0;
var person_1 = require("./../Aula 2 - classes/person");
var PersonDao = /** @class */ (function () {
    function PersonDao() {
    }
    PersonDao.prototype.insert = function (person) {
        console.log('inserindo...', person.toString());
        return true;
    };
    PersonDao.prototype.update = function (person) {
        return true;
    };
    PersonDao.prototype.delete = function (id) {
        return true;
    };
    PersonDao.prototype.find = function (id) {
        return null;
    };
    PersonDao.prototype.findall = function () {
        return [new person_1.Person('Lucas'), new person_1.Person('Andreia')];
    };
    return PersonDao;
}());
exports.PersonDao = PersonDao;
//# sourceMappingURL=person-dao.js.map