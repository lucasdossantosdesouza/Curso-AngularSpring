"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.showIdade = function (idade) {
        console.log(this.name + " tem " + idade + " anos de idade");
    };
    Person.prototype.toString = function () {
        return "classe person nome " + this.name;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map